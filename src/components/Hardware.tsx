import { Cpu, HardDrive, Zap, Network } from "lucide-react";

const specs = [
  { icon: Cpu, label: "CPU", value: "Modern x86 / Apple Silicon" },
  { icon: HardDrive, label: "Storage", value: "1–4 TB NVMe SSD" },
  { icon: Zap, label: "Power", value: "Sips ~30W idle" },
  { icon: Network, label: "Network", value: "Cloudflare Tunnel + Tailscale" },
];

const Hardware = () => (
  <section className="py-20 md:py-28 bg-surface">
    <div className="container max-w-6xl mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            One Mini PC. Sits on your desk. Runs the whole business.
          </h2>
          <p className="text-muted-foreground text-base mb-6 leading-relaxed">
            Purpose-built hardware — no Apple premium tax. We configure it for your trade, ship it to your door, and you plug it in. A Cloudflare Tunnel auto-connects it so your team and Voice AI can reach it from anywhere, securely, without opening a single port.
          </p>
          <p className="text-muted-foreground text-base mb-8 leading-relaxed">
            CRM, invoicing, voice AI, Discord bot, file storage, photos, AI brain — all on one box that costs less than two months of ServiceTitan.
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            {specs.map((s) => (
              <div key={s.label} className="flex items-center gap-3 rounded-lg border border-border bg-card p-3">
                <span className="w-9 h-9 rounded-md bg-primary/15 text-primary flex items-center justify-center">
                  <s.icon className="w-4 h-4" strokeWidth={1.75} />
                </span>
                <div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">{s.label}</div>
                  <div className="text-sm font-medium text-foreground">{s.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="aspect-square rounded-3xl border border-border bg-card p-8 flex items-center justify-center overflow-hidden">
            <div className="relative">
              {/* Mini PC mock */}
              <div className="w-64 h-64 rounded-2xl bg-gradient-to-br from-secondary to-background border border-border shadow-[0_0_60px_-10px_hsl(var(--primary)/0.4)] relative">
                <div className="absolute top-6 left-6 text-[10px] font-mono text-muted-foreground">MEP CLAW · NODE 01</div>
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[10px] font-mono text-muted-foreground">ONLINE</span>
                  </div>
                  <div className="flex gap-1">
                    <span className="w-1 h-3 bg-primary rounded-sm" />
                    <span className="w-1 h-3 bg-primary/70 rounded-sm" />
                    <span className="w-1 h-3 bg-primary/40 rounded-sm" />
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-xl border-2 border-primary/30 flex items-center justify-center text-primary font-bold text-xs tracking-widest rotate-0">
                    CLAW
                  </div>
                </div>
              </div>
              {/* Floating service pills */}
              <div className="absolute -top-4 -right-6 rounded-full border border-border bg-card px-3 py-1 text-xs text-foreground shadow-lg">
                <span className="text-primary">●</span> Twenty CRM
              </div>
              <div className="absolute -bottom-4 -left-6 rounded-full border border-border bg-card px-3 py-1 text-xs text-foreground shadow-lg">
                <span className="text-primary">●</span> Voice AI live
              </div>
              <div className="absolute top-1/2 -left-12 rounded-full border border-border bg-card px-3 py-1 text-xs text-foreground shadow-lg">
                <span className="text-primary">●</span> Discord
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hardware;
