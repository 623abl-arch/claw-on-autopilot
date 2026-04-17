import hwStarter from "@/assets/hw-starter.png";
import hwCore from "@/assets/hw-core.png";
import hwCommand from "@/assets/hw-command.png";
import hwFleet from "@/assets/hw-fleet.png";

const tiers = [
  { name: "Starter Node", hw: "Mini PC", techs: "1–5 techs", price: "$2,500", recommended: false, img: hwStarter },
  { name: "Core Node", hw: "Mac Mini M4", techs: "Up to 10 techs", price: "$3,800", recommended: true, img: hwCore },
  { name: "Command Node", hw: "Mac Studio M4", techs: "10–30 techs", price: "$5,800", recommended: false, img: hwCommand },
  { name: "Fleet Node", hw: "Large Desktop", techs: "30+ techs", price: "$7,500+", recommended: false, img: hwFleet },
];

const Pricing = () => (
  <section id="pricing" className="py-20 md:py-28 bg-background">
    <div className="container max-w-6xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Hardware + Pricing</h2>
      <p className="text-muted-foreground text-base mb-12">One-time purchase. No subscriptions.</p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {tiers.map((t) => (
          <div
            key={t.name}
            className={`rounded-xl border bg-card p-6 hover:border-primary/40 transition-colors relative group ${
              t.recommended ? "border-primary" : "border-border"
            }`}
          >
            {t.recommended && (
              <span className="absolute -top-3 left-4 bg-primary text-primary-foreground text-sm font-semibold px-3 py-1 rounded-full">
                ★ Recommended
              </span>
            )}
            <div className="w-full h-32 flex items-center justify-center mb-5 rounded-lg bg-secondary/50">
              <img
                src={t.img}
                alt={t.hw}
                className="max-h-[100px] w-auto object-contain"
                loading="lazy"
                width={512}
                height={512}
              />
            </div>
            <h3 className="font-bold text-foreground text-lg mb-1">{t.name}</h3>
            <p className="text-muted-foreground text-sm mb-1">{t.hw}</p>
            <p className="text-muted-foreground text-sm mb-4">{t.techs}</p>
            <p className="text-3xl font-bold text-foreground">{t.price}</p>
          </div>
        ))}
      </div>
      <p className="text-muted-foreground text-sm mt-8 text-center">
        Add a NAS backup server for +$600. Managed SaaS option available from $199/mo for solo operators.
      </p>
    </div>
  </section>
);

export default Pricing;
