import { useState } from "react";
import { Phone, MessageSquare, FileText, LayoutGrid, Settings, Box, PhoneCall } from "lucide-react";

const steps = [
  {
    num: 1,
    title: "Pick your vertical",
    desc: "MEP, GC, or Handyman — we match the agent to your trade.",
    icon: Settings,
  },
  {
    num: 2,
    title: "Choose your hardware tier",
    desc: "From solo operator to 30+ tech fleets, there's a box for you.",
    icon: Box,
  },
  {
    num: 3,
    title: "We configure, ship, and onboard",
    desc: "Plug it in, connect to your network, and you're live.",
    icon: PhoneCall,
  },
];

type Tab = "voice" | "discord" | "quote" | "crm";

const tabs: { id: Tab; label: string; icon: typeof Phone }[] = [
  { id: "voice", label: "Phone → Job created", icon: Phone },
  { id: "discord", label: "Discord → Quote sent", icon: MessageSquare },
  { id: "quote", label: "Approval → Job synced", icon: FileText },
  { id: "crm", label: "Field tech → Visit booked", icon: LayoutGrid },
];

const VoicePanel = () => (
  <div key="voice" className="animate-fade-in space-y-3">
    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
      <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
      Retell · inbound call · 00:42
    </div>
    {[
      { who: "Caller", text: "Hi, my water heater is leaking everywhere." },
      { who: "Jarvis (AI)", text: "Sorry to hear that. Can I get your address so I can dispatch a tech?" },
      { who: "Caller", text: "412 Oak Ridge Drive, Clearwater." },
      { who: "Jarvis (AI)", text: "Got it. I have a tech tomorrow at 9 AM. Booking now." },
      { who: "System", text: "✓ Client created in Twenty CRM · Job #2241 opened · Discord notified" },
      { who: "Jarvis (AI)", text: "You're booked. Confirmation just texted to your phone." },
    ].map((m, i) => (
      <div
        key={i}
        className="opacity-0 animate-fade-in"
        style={{ animationDelay: `${i * 250}ms`, animationFillMode: "forwards" }}
      >
        <div className="text-xs text-muted-foreground mb-1">{m.who}</div>
        <div
          className={`rounded-lg px-3 py-2 text-sm max-w-[85%] ${
            m.who === "Jarvis (AI)"
              ? "bg-primary/10 text-foreground border border-primary/30"
              : m.who === "System"
              ? "bg-emerald-500/10 text-foreground border border-emerald-500/30 font-mono text-xs"
              : "bg-muted text-foreground"
          }`}
        >
          {m.text}
        </div>
      </div>
    ))}
  </div>
);

const DiscordPanel = () => (
  <div key="discord" className="animate-fade-in space-y-4">
    <div className="text-xs text-muted-foreground mb-2"># quotes</div>
    {[
      { who: "Ryan (Owner)", color: "bg-blue-500", text: "new quote for John Smith, water heater 50gal replace" },
      { who: "Jarvis (AI)", color: "bg-primary", text: "Pulling pricebook... Materials $612, labor 4hrs $480. Total $1,092.40" },
      { who: "Jarvis (AI)", color: "bg-primary", text: "📄 Quote_Smith.pdf generated in Invoice Ninja · emailed to john@smith.com" },
    ].map((m, i) => (
      <div
        key={i}
        className="flex gap-3 opacity-0 animate-fade-in"
        style={{ animationDelay: `${i * 400}ms`, animationFillMode: "forwards" }}
      >
        <div className={`h-8 w-8 rounded-full ${m.color} shrink-0`} />
        <div>
          <div className="text-sm font-semibold text-foreground">{m.who}</div>
          <div className="text-sm text-muted-foreground">{m.text}</div>
        </div>
      </div>
    ))}
    <div className="flex gap-3 items-center pt-2">
      <div className="h-8 w-8 rounded-full bg-amber-500 shrink-0" />
      <div className="flex gap-1">
        <span className="h-2 w-2 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: "0ms" }} />
        <span className="h-2 w-2 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: "150ms" }} />
        <span className="h-2 w-2 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: "300ms" }} />
      </div>
    </div>
  </div>
);

const QuotePanel = () => (
  <div key="quote" className="animate-fade-in space-y-3">
    <div className="text-xs text-muted-foreground mb-2">Invoice Ninja webhook received · client approved Quote_Smith.pdf</div>
    {[
      { label: "Quote status", value: "✓ Approved" },
      { label: "Twenty CRM", value: "Job #2241 → Scheduled" },
      { label: "Discord", value: "#field-ops notified" },
      { label: "Calendar", value: "Visit booked Tue 9 AM" },
      { label: "Invoice", value: "Auto-generated on completion" },
    ].map((f, i) => (
      <div
        key={i}
        className="flex justify-between items-center border-b border-border pb-2 opacity-0 animate-fade-in"
        style={{ animationDelay: `${i * 300}ms`, animationFillMode: "forwards" }}
      >
        <span className="text-sm text-muted-foreground">{f.label}</span>
        <span className="text-sm font-semibold text-foreground">{f.value}</span>
      </div>
    ))}
    <div
      className="mt-4 rounded-lg border border-primary/40 bg-primary/10 p-3 text-sm text-foreground opacity-0 animate-fade-in"
      style={{ animationDelay: "1500ms", animationFillMode: "forwards" }}
    >
      ⚡ End-to-end in under 4 seconds. Zero manual data entry.
    </div>
  </div>
);

const CrmPanel = () => {
  const cols = [
    { name: "Field Tech in Discord", color: "bg-muted", cards: ["\"new job for Mark — water heater 412 Oak Ridge\""] },
    { name: "Twenty CRM", color: "bg-blue-500/20", cards: ["Client: Mark T.", "Job #2242 created", "Visit assigned: Mark"] },
    { name: "Calendar", color: "bg-emerald-500/20", cards: ["Tue 9 AM — Mark @ Oak Ridge", "SMS confirmation sent"] },
  ];
  return (
    <div key="crm" className="animate-fade-in grid grid-cols-3 gap-3">
      {cols.map((c, ci) => (
        <div key={c.name} className="space-y-2">
          <div className={`text-xs font-semibold text-foreground rounded px-2 py-1 ${c.color}`}>{c.name}</div>
          {c.cards.map((card, i) => (
            <div
              key={card}
              className="rounded-md border border-border bg-card p-2 text-xs text-foreground opacity-0 animate-fade-in"
              style={{ animationDelay: `${(ci * 200) + (i * 250)}ms`, animationFillMode: "forwards" }}
            >
              {card}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

const InteractiveDemo = () => {
  const [tab, setTab] = useState<Tab>("voice");
  return (
    <section className="py-20 md:py-28 bg-surface">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">How It Actually Works</h2>
          <p className="text-muted-foreground">Four real workflows running on the system, every day. Click through.</p>
        </div>

        <div className="flex gap-2 overflow-x-auto pb-2 mb-6 justify-center">
          {tabs.map((t) => {
            const Icon = t.icon;
            const active = tab === t.id;
            return (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className={`shrink-0 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium border transition-all ${
                  active
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-card text-foreground border-border hover:border-primary/50"
                }`}
              >
                <Icon className="h-4 w-4" />
                {t.label}
              </button>
            );
          })}
        </div>

        <div className="rounded-2xl border border-border bg-card p-6 md:p-8 min-h-[420px]">
          {tab === "voice" && <VoicePanel />}
          {tab === "discord" && <DiscordPanel />}
          {tab === "quote" && <QuotePanel />}
          {tab === "crm" && <CrmPanel />}
        </div>

        <div id="how-it-works" className="mt-20 pt-16 border-t border-border">
          <div className="text-center mb-10">
            <p className="text-muted-foreground text-base">Three steps to autopilot.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {steps.map((s) => (
              <div
                key={s.num}
                className="rounded-xl border border-border bg-card p-6 hover:border-primary/40 transition-colors group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-10 h-10 rounded-lg bg-primary/15 text-primary flex items-center justify-center text-base font-bold group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    {s.num}
                  </span>
                  <s.icon className="w-6 h-6 text-muted-foreground" strokeWidth={1.5} />
                </div>
                <h3 className="font-semibold text-foreground text-lg mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-base leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveDemo;
