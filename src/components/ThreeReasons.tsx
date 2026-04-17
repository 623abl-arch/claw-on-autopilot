import { useEffect, useState, useRef } from "react";

/* ─── Card 1: Terminal ─── */
const terminalLines = [
  "$ cloudflared tunnel --config mepclaw.yml",
  "INFO  Starting tunnel...",
  "INFO  Route dns mepclaw.com → 192.168.1.50",
  "✓ Tunnel established.",
  "",
  "$ docker compose up -d",
  "  ✓ twenty-crm        ... running",
  "  ✓ invoice-ninja      ... running",
  "  ✓ nextcloud          ... running",
  "  ✓ immich-photos      ... running",
  "",
  "ALL SYSTEMS LOCAL. ZERO CLOUD DEPENDENCIES.",
];

function TerminalAnimation() {
  const [visibleLines, setVisibleLines] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let i = 0;
          const interval = setInterval(() => {
            i++;
            setVisibleLines(i);
            if (i >= terminalLines.length) clearInterval(interval);
          }, 220);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="bg-background/80 rounded-lg p-4 font-mono text-xs leading-relaxed h-64 overflow-hidden">
      {terminalLines.slice(0, visibleLines).map((line, i) => (
        <div
          key={i}
          className={`${
            line.startsWith("$") ? "text-primary" :
            line.startsWith("✓") || line.includes("... running") ? "text-green-400" :
            line === "ALL SYSTEMS LOCAL. ZERO CLOUD DEPENDENCIES." ? "text-primary font-bold" :
            "text-muted-foreground"
          }`}
        >
          {line || "\u00A0"}
        </div>
      ))}
      {visibleLines < terminalLines.length && visibleLines > 0 && (
        <span className="inline-block w-2 h-4 bg-primary animate-pulse" />
      )}
    </div>
  );
}

/* ─── Card 2: Connection Feed ─── */
const connectionLines = [
  { service: "TWENTY CRM", status: "CONNECTED", ok: true },
  { service: "INVOICE NINJA", status: "CONNECTED", ok: true },
  { service: "RETELL AI VOICE", status: "CONNECTED", ok: true },
  { service: "NEXTCLOUD FILES", status: "CONNECTED", ok: true },
  { service: "DISCORD BOT", status: "LIVE", ok: true },
  { service: "YOUR AGENT IS READY.", status: "", ok: true, final: true },
];

function ConnectionFeed() {
  const [visibleLines, setVisibleLines] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let i = 0;
          const interval = setInterval(() => {
            i++;
            setVisibleLines(i);
            if (i >= connectionLines.length) clearInterval(interval);
          }, 350);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="bg-background/80 rounded-lg p-4 font-mono text-xs leading-relaxed h-64 overflow-hidden">
      <div className="flex items-center gap-2 mb-3">
        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
        <span className="text-green-400 text-[10px] uppercase tracking-widest">Live Connection Feed</span>
      </div>
      {connectionLines.slice(0, visibleLines).map((line, i) => (
        <div key={i} className={`mb-1 ${line.final ? "text-primary font-bold mt-3" : "text-muted-foreground"}`}>
          {line.final ? (
            `[SYS] ${line.service}`
          ) : (
            <>
              <span className="text-muted-foreground">[SYS] </span>
              <span className="text-foreground">{line.service}</span>
              <span className="text-muted-foreground"> → </span>
              <span className="text-green-400">{line.status}</span>
              {line.ok && !line.final && <span className="text-green-400"> [OK]</span>}
            </>
          )}
        </div>
      ))}
    </div>
  );
}

/* ─── Card 3: Timeline ─── */
const timelineEvents = [
  { time: "6:00 AM", event: "Morning briefing sent via Telegram" },
  { time: "9:15 AM", event: "Inbound call answered by AI" },
  { time: "10:30 AM", event: "Quote sent automatically" },
  { time: "1:00 PM", event: "Jobsite photos geotagged & filed" },
  { time: "2:00 PM", event: "Review request texted to customer" },
  { time: "6:30 PM", event: "Social media post published" },
  { time: "11:45 PM", event: "Lead captured from Google Maps" },
];

function TimelineFeed() {
  const [visibleLines, setVisibleLines] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let i = 0;
          const interval = setInterval(() => {
            i++;
            setVisibleLines(i);
            if (i >= timelineEvents.length) clearInterval(interval);
          }, 400);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="bg-background/80 rounded-lg p-4 text-xs h-64 overflow-hidden">
      <div className="flex items-center gap-2 mb-3">
        <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
        <span className="text-primary text-[10px] uppercase tracking-widest">24/7 Agent Activity</span>
      </div>
      {timelineEvents.slice(0, visibleLines).map((ev, i) => (
        <div key={i} className="flex gap-3 mb-2 items-start">
          <div className="flex flex-col items-center">
            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
            {i < visibleLines - 1 && <span className="w-px h-4 bg-border" />}
          </div>
          <div>
            <span className="text-muted-foreground font-mono">{ev.time}</span>
            <span className="text-muted-foreground mx-1">—</span>
            <span className="text-foreground">{ev.event}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ─── Section ─── */
const cards = [
  {
    title: "Your Data. Your Desk.",
    desc: "Everything runs on your hardware. CRM, invoicing, files, photos — hosted locally, tunneled securely. No landlord.",
    animation: <TerminalAnimation />,
  },
  {
    title: "Full Stack. One Box.",
    desc: "CRM, invoicing, AI voice, file storage, and your dispatch bot — all wired together on a single Mini PC.",
    animation: <ConnectionFeed />,
  },
  {
    title: "Always On. Never Clocks Out.",
    desc: "Your AI agent works around the clock — answering calls, sending quotes, capturing leads, and following up. Even at midnight.",
    animation: <TimelineFeed />,
  },
];

const ThreeReasons = () => (
  <section className="py-20 md:py-28 bg-background">
    <div className="container max-w-6xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
        Three reasons your competitors should be worried.
      </h2>
      <p className="text-muted-foreground text-base mb-12 max-w-xl">
        This isn't a SaaS dashboard. It's infrastructure that runs while you sleep.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        {cards.map((card) => (
          <div
            key={card.title}
            className="rounded-xl border border-border bg-card p-6 flex flex-col gap-4 hover:border-primary/40 transition-colors"
          >
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-1">{card.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{card.desc}</p>
            </div>
            {card.animation}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ThreeReasons;
