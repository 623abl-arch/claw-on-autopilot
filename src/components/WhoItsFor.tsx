import mepLogo from "@/assets/mep-whosfor-logo.png";
import gcLogo from "@/assets/gc-claw-logo.png";
import handymanLogo from "@/assets/handyman-claw-logo.png";

const segments = [
  { name: "MEP Claw", desc: "Plumbers, electricians, HVAC techs. The system was built and is live on a real plumbing business.", logo: mepLogo },
  { name: "GC Claw", desc: "General contractors managing crews, subs, and draw schedules. Running live on a real GC operation.", logo: gcLogo },
  { name: "Handyman Claw", desc: "Solo operators. Managed SaaS option — no hardware required.", logo: handymanLogo },
];

const WhoItsFor = () => (
  <section className="py-20 md:py-28 bg-background">
    <div className="container max-w-6xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Who It's For</h2>
      <p className="text-muted-foreground text-base mb-12">Tailored for every type of trades business.</p>

      <div className="grid md:grid-cols-3 gap-5">
        {segments.map((s) => (
          <div key={s.name} className="rounded-xl border border-border bg-card p-6 hover:border-primary/40 transition-colors text-center">
            <img src={s.logo} alt={`${s.name} logo`} className="w-32 h-32 mx-auto mb-5" loading="lazy" width={512} height={512} />
            <h3 className="font-bold text-foreground text-lg mb-2">{s.name}</h3>
            <p className="text-muted-foreground text-base">{s.desc}</p>
          </div>
        ))}
      </div>

      <p className="text-base text-foreground font-medium mt-8 text-center">
        ⭐ Bilingual agent — English + Spanish
      </p>
    </div>
  </section>
);

export default WhoItsFor;
