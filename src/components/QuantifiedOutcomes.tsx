import { Zap, PhoneCall, Clock, DollarSign } from "lucide-react";

const outcomes = [
  {
    icon: Zap,
    metric: "5x",
    label: "Faster quotes",
    detail: "25 min → 30 sec. Type one line in Discord, PDF lands in the client's inbox.",
  },
  {
    icon: PhoneCall,
    metric: "24/7",
    label: "Phone answered",
    detail: "Voice AI books jobs at 8 PM, 2 AM, Sundays. Zero missed calls. Zero voicemail.",
  },
  {
    icon: Clock,
    metric: "60–80%",
    label: "Less admin time",
    detail: "10–20 hours back per month. No more nights and weekends sorting photos and chasing invoices.",
  },
  {
    icon: DollarSign,
    metric: "$6k–$20k+",
    label: "Saved year one",
    detail: "Stack cost drops from $300–800/mo to ~$20/mo. Hardware pays itself off in under 6 months.",
  },
];

const QuantifiedOutcomes = () => (
  <section className="py-20 md:py-28 bg-surface">
    <div className="container max-w-6xl mx-auto px-4">
      <div className="text-xs font-medium uppercase tracking-wider text-primary mb-2">Real results, real trades businesses</div>
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
        What contractors actually get back.
      </h2>
      <p className="text-muted-foreground text-base mb-12 max-w-2xl">
        Hours reclaimed. Calls captured. Cash kept. These aren't projections — they're what happens after one quarter on MEP Claw.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {outcomes.map((o) => (
          <div key={o.label} className="rounded-xl border border-border bg-card p-6 hover:border-primary/40 transition-colors">
            <div className="w-11 h-11 rounded-lg bg-primary/15 flex items-center justify-center mb-4">
              <o.icon className="w-5 h-5 text-primary" strokeWidth={1.75} />
            </div>
            <div className="text-3xl md:text-4xl font-extrabold text-primary leading-none mb-2">{o.metric}</div>
            <div className="text-sm font-semibold text-foreground mb-2">{o.label}</div>
            <p className="text-sm text-muted-foreground leading-relaxed">{o.detail}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default QuantifiedOutcomes;
