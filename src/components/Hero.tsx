import jensenImage from "@/assets/jensen-quote.png";
import logo from "@/assets/mep-claw-logo.png";
import { Button } from "@/components/ui/button";
import { ArrowRight, Quote } from "lucide-react";

const Hero = () => (
  <section className="bg-background pt-20 pb-24 md:pt-28 md:pb-32">
    <div className="container max-w-6xl mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left — text */}
        <div>
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <span className="inline-block text-xs font-semibold px-3 py-1.5 rounded-full bg-primary/15 text-primary border border-primary/25">
              AI-powered automation for trades
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-card text-foreground border border-border">
              🔧 Built by a licensed plumber in Clearwater, FL
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight mb-5">
            MEP Claw, the autopilot for your trades&nbsp;business.
          </h1>
          <p className="text-2xl md:text-3xl text-foreground leading-snug mb-8 max-w-xl font-medium">
            Why keep paying hundreds every month for tools you don't even own? Save <strong className="font-extrabold text-primary">thousands</strong> a year and get <strong className="font-extrabold text-primary">hours</strong> back every week.
          </p>
          <div className="flex items-center gap-4 mb-8">
            <Button variant="cta" size="lg" asChild>
              <a href="#book" className="text-base px-7 py-3">Book a Discovery Call →</a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#features" className="text-base px-7 py-3">See Features</a>
            </Button>
          </div>

          {/* Quote Section */}
          <div className="flex items-start gap-5 bg-gradient-to-br from-card/80 to-card/40 rounded-2xl p-6 border border-primary/20 max-w-xl shadow-lg shadow-primary/5">
            <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0 border-3 border-primary/40 ring-2 ring-primary/10 ring-offset-2 ring-offset-background">
              <img
                src={jensenImage}
                alt="Jensen Huang with Claw"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 pt-1">
              <div className="flex gap-2 mb-2">
                <Quote className="w-6 h-6 text-primary fill-primary/20" />
              </div>
              <p className="text-xl md:text-2xl text-foreground font-semibold italic leading-snug mb-3">
                "Every company in the world needs an OpenClaw strategy"
              </p>
              <p className="text-sm md:text-base text-primary font-medium">
                — Jensen Huang <span className="text-muted-foreground">(NVIDIA CEO)</span>
              </p>
            </div>
          </div>
        </div>

        {/* Right — feature highlights */}
        <div className="rounded-xl border border-border bg-card p-6 space-y-6">
          <div className="space-y-5">
            {[
              {
                icon: "⚡",
                title: "Quote in under 10 seconds",
                desc: "Request to inbox, fully automated. No estimator, no callback, no delay.",
              },
              {
                icon: "📍",
                title: "Photos pinned to the jobsite",
                desc: "Field photos geotagged and filed by address automatically. No manual sorting. Ever.",
              },
              {
                icon: "📋",
                title: "Your pricebook in the agent's brain",
                desc: "Every rate, every service code, loaded in. The agent quotes your real numbers, not a ballpark.",
              },
            ].map((item) => (
              <div key={item.title} className="flex gap-3">
                <span className="text-xl flex-shrink-0">{item.icon}</span>
                <div>
                  <h3 className="font-semibold text-foreground text-sm mb-1">{item.title}</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="pt-4 border-t border-border">
            <p className="text-xs text-muted-foreground font-mono">
              Ships pre-configured → plug in → you're live
            </p>
          </div>
        </div>
      </div>

      {/* Switcher Bar */}
      <div className="mt-16 pt-8 border-t border-border">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-10">
          {/* Competitors crossed out */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
            {[
              { name: "Jobber", color: "text-green-500" },
              { name: "ServiceTitan", color: "text-blue-500" },
              { name: "FieldEdge", color: "text-purple-500" },
            ].map(({ name, color }) => (
              <span
                key={name}
                className={`relative text-3xl md:text-4xl font-bold ${color}`}
              >
                <span>{name}</span>
                <span className="absolute inset-0 flex items-center justify-center text-destructive text-5xl md:text-6xl font-black pointer-events-none" aria-hidden="true">
                  ✕
                </span>
              </span>
            ))}
          </div>

          {/* Arrow */}
          <ArrowRight className="w-10 h-10 text-primary flex-shrink-0" />

          {/* MEP Claw */}
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="MEP Claw"
              className="h-12 w-auto"
              width={180}
              height={48}
              loading="lazy"
            />
            <span className="text-3xl md:text-4xl font-bold text-primary">MEP Claw</span>
          </div>
        </div>

        {/* Keep the difference */}
        <p className="text-center mt-6 text-xl md:text-2xl font-semibold text-foreground">
          Apps are <span className="text-destructive font-bold">dead</span>. Own your stack — and finally save serious <span className="text-primary font-bold">time</span> and <span className="text-primary font-bold">money</span>.
        </p>
        <p className="text-center mt-3 text-base text-muted-foreground max-w-2xl mx-auto">
          Stop wasting hundreds every month on tools you don't own. MEP Claw replaces Jobber, ServiceTitan, CompanyCam, and the rest with one computer you actually own.
        </p>
      </div>
    </div>
  </section>
);

export default Hero;
