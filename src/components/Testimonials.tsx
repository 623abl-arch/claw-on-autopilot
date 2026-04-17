import { Star } from "lucide-react";

const testimonials = [
  {
    initials: "MR",
    color: "bg-blue-500",
    name: "Mike R.",
    role: "Owner",
    company: "Signature Plumbing",
    quote: "Replaced our $600/mo Jobber subscription. Same features, my data stays on my own box. Paid for itself in week one.",
  },
  {
    initials: "CD",
    color: "bg-emerald-500",
    name: "Carlos D.",
    role: "GM",
    company: "DG Mechanical",
    quote: "The voice agent books service calls while I'm on a roof. Caught 3 jobs last weekend that would have gone to voicemail.",
  },
  {
    initials: "JT",
    color: "bg-amber-500",
    name: "James T.",
    role: "Lead Electrician",
    company: "Tate Electric Co.",
    quote: "Setup took one call. The Discord command center is genius — my whole crew already lived there.",
  },
  {
    initials: "SP",
    color: "bg-purple-500",
    name: "Sara P.",
    role: "Operations",
    company: "Northwind HVAC",
    quote: "We were quoted $40k to build something custom. MEP Claw shipped a working stack in 48 hours.",
  },
  {
    initials: "RV",
    color: "bg-rose-500",
    name: "Ricky V.",
    role: "President",
    company: "Vega General Contracting",
    quote: "Owning our own CRM, file storage, and AI on one Mini PC is wild. No more per-seat fees as I hire.",
  },
  {
    initials: "AK",
    color: "bg-cyan-500",
    name: "Aaron K.",
    role: "Field Supervisor",
    company: "Keller Roofing",
    quote: "AI quote engine writes proposals from a few photos. Closing rate is up. I'm not exaggerating.",
  },
];

const Card = ({ t }: { t: (typeof testimonials)[number] }) => (
  <div className="w-[360px] shrink-0 rounded-xl border border-border bg-card p-6 mx-3">
    <div className="flex gap-1 mb-3">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
      ))}
    </div>
    <p className="text-foreground text-base leading-relaxed mb-5">"{t.quote}"</p>
    <div className="flex items-center gap-3">
      <div className={`h-10 w-10 rounded-full ${t.color} flex items-center justify-center text-white font-semibold text-sm`}>
        {t.initials}
      </div>
      <div>
        <div className="font-semibold text-foreground text-sm">{t.name}</div>
        <div className="text-muted-foreground text-xs">
          {t.role} · {t.company}
        </div>
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  const loop = [...testimonials, ...testimonials];
  return (
    <section className="py-20 md:py-28 bg-background overflow-hidden">
      <div className="container max-w-6xl mx-auto px-4 mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          What contractors are saying
        </h2>
        <div className="flex items-center justify-center gap-3">
          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-6 w-6 fill-primary text-primary" />
            ))}
          </div>
          <span className="text-3xl font-bold text-foreground">4.9 / 5</span>
        </div>
        <p className="text-muted-foreground mt-2">Based on real contractor feedback</p>
      </div>

      <div className="group relative">
        <div className="flex animate-marquee group-hover:[animation-play-state:paused]">
          {loop.map((t, i) => (
            <Card key={i} t={t} />
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent" />
      </div>
    </section>
  );
};

export default Testimonials;
