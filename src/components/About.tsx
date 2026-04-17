import { Wrench, Code2, HardHat } from "lucide-react";

const About = () => (
  <section className="py-20 md:py-28 bg-background">
    <div className="container max-w-4xl mx-auto px-4">
      <div className="rounded-2xl border border-border bg-card p-8 md:p-12">
        <div className="flex items-center gap-2 text-xs font-semibold text-primary uppercase tracking-widest mb-4">
          <span className="w-8 h-px bg-primary" /> Built by a contractor, for contractors
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
          This isn't Silicon Valley guessing what trades need.
        </h2>
        <p className="text-muted-foreground text-base leading-relaxed mb-4">
          MEP Claw was built by a licensed plumber and software developer who runs his own crew at Signature Construction Group in Clearwater, FL. Every workflow — the voice agent, the Discord bot, the AI quote engine — was written because we needed it ourselves.
        </p>
        <p className="text-muted-foreground text-base leading-relaxed mb-8">
          The system is live, every day, on a real plumbing business. You're not buying a beta. You're buying the tool the founder uses to run his own jobs.
        </p>
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { icon: Wrench, label: "Licensed plumber" },
            { icon: HardHat, label: "GC running real crews" },
            { icon: Code2, label: "Wrote every line of code" },
          ].map((b) => (
            <div key={b.label} className="flex items-center gap-3 rounded-lg border border-border bg-background p-3">
              <span className="w-9 h-9 rounded-md bg-primary/15 text-primary flex items-center justify-center">
                <b.icon className="w-4 h-4" strokeWidth={1.75} />
              </span>
              <span className="text-sm font-medium text-foreground">{b.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default About;
