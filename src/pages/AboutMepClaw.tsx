import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";
import { Button } from "@/components/ui/button";
import { Package, Bot, Shield, CheckCircle2 } from "lucide-react";

const AboutMepClaw = () => (
  <>
    <Navbar />
    <main className="bg-background">
      {/* Hero */}
      <section className="py-20 md:py-28 border-b border-border">
        <div className="container max-w-4xl mx-auto px-4">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">
            About the platform
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
            Learn more about MEP Claw
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
            MEP Claw is a complete AI-powered operating system for mechanical, electrical, and plumbing
            contractors — delivered on hardware you own, running software you control.
          </p>
        </div>
      </section>

      {/* Three pillars expanded */}
      <section className="py-20 md:py-24">
        <div className="container max-w-5xl mx-auto px-4 space-y-16">
          <div className="grid md:grid-cols-[auto_1fr] gap-6 md:gap-10 items-start">
            <div className="w-16 h-16 rounded-xl bg-primary/15 flex items-center justify-center text-primary shrink-0">
              <Package className="w-7 h-7" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Hardware You Own</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We ship a pre-configured Mini PC straight to your door — fully racked, tuned, and ready
                to plug in. No cloud subscriptions. No "trust us with your data." The box sits on your
                desk or in your closet, draws less power than a lightbulb, and runs your entire back office.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                {["Beelink / Minisforum class hardware", "Pre-installed and tuned by our team", "Tailscale + Cloudflare Tunnel for secure remote access", "Owned outright — no leases, no recurring hardware fees"].map((i) => (
                  <li key={i} className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />{i}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-[auto_1fr] gap-6 md:gap-10 items-start">
            <div className="w-16 h-16 rounded-xl bg-primary/15 flex items-center justify-center text-primary shrink-0">
              <Bot className="w-7 h-7" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Full Automation</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                MEP Claw doesn't just store your data — it acts on it. The agent answers calls, sends quotes,
                follows up with leads, files jobsite photos, requests reviews, posts to social media, and
                drops a morning briefing into your phone before your boots hit the truck.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                {["AI voice agent for inbound + outbound calls", "Automated quote and invoice generation", "Geotagged photo capture and filing", "Daily Telegram briefings and review requests"].map((i) => (
                  <li key={i} className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />{i}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-[auto_1fr] gap-6 md:gap-10 items-start">
            <div className="w-16 h-16 rounded-xl bg-primary/15 flex items-center justify-center text-primary shrink-0">
              <Shield className="w-7 h-7" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Your Data, Your Control</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Every tool in the stack — Twenty CRM, Invoice Ninja, Nextcloud, Immich, Retell AI,
                NemoClaw — is open source and self-hosted on your hardware. No per-seat fees. No vendor
                lock-in. The whole stack costs about $20/month to run, versus $400–$800/month with
                Jobber, ServiceTitan, or CompanyCam.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                {["100% self-hosted — your customer data never leaves your box", "Open source stack, fully auditable", "~$20/mo total operating cost", "Cancel anytime — you keep the hardware and the data"].map((i) => (
                  <li key={i} className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />{i}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-border bg-surface">
        <div className="container max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to see it running?
          </h2>
          <p className="text-muted-foreground mb-8">
            Book a 20-minute call and we'll walk you through the live system.
          </p>
          <Button variant="cta" size="lg" asChild>
            <a href="/#book">Book a Call</a>
          </Button>
        </div>
      </section>
    </main>
    <SiteFooter />
  </>
);

export default AboutMepClaw;
