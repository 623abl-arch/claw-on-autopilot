import { IdCard, ConstructionIcon, Wrench } from "lucide-react";

const About = () => (
  <section className="py-20 md:py-28 bg-background">
    <div className="container max-w-7xl mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left: copy */}
        <div>
          <div className="inline-block rounded-md border border-primary/40 bg-primary/10 px-4 py-2 mb-8">
            <span className="text-xs font-bold text-primary uppercase tracking-widest">
              Built by a contractor
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            Built by a contractor, for contractors.
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed mb-5">
            MEP Claw was built by a licensed plumber and GC who got tired of watching money leave his business every month for tools he didn't control. After building and running the system on his own crew, he packaged it for other trades.
          </p>
          <p className="text-muted-foreground text-base leading-relaxed mb-8">
            This isn't a product built by people who've never pulled a permit. The workflows, the pricebook structure, the Discord commands — everything is designed around how a real field service business actually operates at 7am on a Monday.
          </p>

          <div className="space-y-4">
            {[
              { icon: IdCard, label: "Licensed plumber + general contractor" },
              { icon: ConstructionIcon, label: "Runs an active crew in the field" },
              { icon: Wrench, label: "MEP Claw runs his own business first" },
            ].map((b) => (
              <div key={b.label} className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-md bg-primary/15 text-primary flex items-center justify-center shrink-0">
                  <b.icon className="w-4 h-4" strokeWidth={1.75} />
                </span>
                <span className="text-base text-foreground">{b.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Discord-style mockup */}
        <div className="rounded-xl border border-border bg-card shadow-2xl overflow-hidden">
          {/* Title bar */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-muted/30">
            <span className="w-3 h-3 rounded-full bg-red-500" />
            <span className="w-3 h-3 rounded-full bg-yellow-500" />
            <span className="w-3 h-3 rounded-full bg-green-500" />
            <span className="ml-3 text-sm text-muted-foreground font-mono">#openclaw-commands</span>
          </div>

          {/* Messages */}
          <div className="p-5 md:p-6 space-y-5 font-mono text-sm">
            <div>
              <div className="text-primary font-bold mb-1">Ryan</div>
              <div className="text-foreground">new quote AJX Homes, water heater replace, 220 Main St</div>
            </div>

            <div>
              <div className="text-foreground font-bold mb-1">🤖 Claw</div>
              <div className="text-foreground">Found client: AJX Homes. Building quote from pricebook…</div>
            </div>

            <div>
              <div className="text-foreground font-bold mb-1">🤖 Claw</div>
              <div className="text-green-400">✅ Quote #1047 sent — Water Heater Replacement $1,240. PDF emailed to Mike @ AJX.</div>
            </div>

            <div>
              <div className="text-foreground font-bold mb-1">🤖 Claw</div>
              <div className="text-green-400">💰 Quote approved — 4 min later. Job created. Added to schedule.</div>
            </div>

            <div>
              <div className="text-foreground font-bold mb-1">🤖 Claw</div>
              <div className="text-green-400">💰 Payment received — $1,240 via Apple Pay. Invoice closed.</div>
            </div>

            <div className="flex items-center gap-1 pt-1">
              <span className="inline-block w-2 h-4 bg-primary animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
