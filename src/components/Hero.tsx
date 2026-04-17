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
          <span className="inline-block text-xs font-semibold px-3 py-1.5 rounded-full bg-primary/15 text-primary border border-primary/25 mb-6">
            AI-powered automation for trades
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight mb-5">
            MEP Claw, the autopilot for your trades&nbsp;business.
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4 max-w-lg">
            A pre-configured AI agent on hardware you own. No cloud subscriptions. No complicated setup. Just plug it in and let it work.
          </p>
          <p className="text-sm text-muted-foreground mb-8">
            No cloud. No subscriptions. Your hardware, your data.
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
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10">
          {/* Jobber Side */}
          <div className="flex items-center gap-4">
            <span className="text-3xl font-bold text-jobber">Jobber</span>
            <span className="text-3xl font-bold text-muted-foreground line-through decoration-red-500/60 decoration-2">
              $349/mo
            </span>
          </div>

          {/* Arrow / Slash */}
          <div className="flex items-center text-primary">
            <span className="text-4xl font-light">/</span>
            <ArrowRight className="w-8 h-8 mx-3" />
            <span className="text-4xl font-light">/</span>
          </div>

          {/* MEP Claw Side */}
          <div className="flex items-center gap-4">
            <img
              src={logo}
              alt="MEP Claw"
              className="h-12 w-auto"
              width={180}
              height={48}
              loading="lazy"
            />
            <span className="text-3xl font-bold text-primary">
              $130<span className="text-lg text-muted-foreground font-normal">/mo</span>
            </span>
          </div>
        </div>

        {/* Keep the difference */}
        <p className="text-center mt-6 text-xl font-semibold text-foreground">
          Apps are <span className="text-destructive font-bold">dead</span>. Own your stack.
        </p>
        <p className="text-center mt-3 text-sm text-muted-foreground max-w-2xl mx-auto">
          Every tool on this list runs on hardware you own. No subscriptions, no price hikes, no one pulling the plug on your business.
        </p>
      </div>
    </div>
  </section>
);

export default Hero;
