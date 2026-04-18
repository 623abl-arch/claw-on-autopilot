import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";
import { Button } from "@/components/ui/button";
import { Package, MessageSquare, Users, FileText, Phone, Camera, BarChart3, Shield, CheckCircle2 } from "lucide-react";

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
            What is MEP Claw?
          </h1>
          <p className="text-xl text-foreground leading-relaxed mb-6">
            The one-box system that replaces expensive monthly apps like Jobber and ServiceTitan — so you keep more of your money and get your evenings back.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            MEP Claw is a complete operations system for trades businesses — plumbing, HVAC, electrical, general contracting, handyman work, or any field service that sends techs to job sites.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            You get one quiet Mini PC shipped straight to your door, pre-loaded with everything you need. Plug it in, connect to your Wi-Fi, and it runs on hardware you own outright — one-time purchase. No monthly SaaS subscriptions to big companies.
          </p>
          <p className="text-lg text-foreground leading-relaxed font-medium">
            Most contractors who switch save <span className="text-primary font-bold">thousands of dollars a year</span> on app fees and get <span className="text-primary font-bold">10–20 hours back every week</span> because quoting, invoicing, photo organization, and follow-ups happen much faster and more automatically.
          </p>
        </div>
      </section>

      {/* A Normal Day */}
      <section className="py-20 md:py-24 bg-surface">
        <div className="container max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">A Normal Day with MEP Claw</h2>
          <p className="text-muted-foreground text-lg mb-12">Here's what running your business actually feels like:</p>

          <div className="space-y-6">
            {[
              { time: "Morning", body: "Open Discord on your phone. The #daily-summary channel gives you a quick recap of yesterday's payments, open quotes, and new leads — all in one place." },
              { time: "Phone calls", body: "Your regular line rings. You or your team answers when you can. If no one is available — especially after hours or while on a job — Retell AI politely picks up, gathers the customer's info, creates the job, and posts a short summary in Discord." },
              { time: "On the job site", body: "Techs snap photos and upload them once. The photos automatically sort and store themselves by address and date." },
              { time: "Creating quotes", body: "Instead of logging into Jobber and clicking through menus, simply type in Discord: \"new quote for John Smith – water heater replacement at 412 Oak Ridge Drive\". The Discord bot instantly pulls prices from your pricebook, attaches photos, builds a clean quote, and sends it to the customer. What used to take 10–15 minutes now takes under 30 seconds." },
              { time: "Quote approved", body: "The customer clicks \"Approve\". Invoice Ninja automatically creates the invoice, sends the payment link, and you get a notification in the #money channel." },
              { time: "End of day", body: "Glance at Discord — you see new payments, approved quotes, call summaries, and what's next. Everything stays organized without chasing between apps." },
            ].map((s) => (
              <div key={s.time} className="rounded-xl border border-border bg-card p-6">
                <div className="text-sm font-bold text-primary uppercase tracking-widest mb-2">{s.time}</div>
                <p className="text-foreground leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>

          <p className="text-lg text-foreground font-medium mt-10 text-center italic">
            Less admin at night, fewer mistakes, more time on jobs or with family.
          </p>
        </div>
      </section>

      {/* The Full Stack */}
      <section className="py-20 md:py-24">
        <div className="container max-w-5xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">What You Actually Get — The Full Stack</h2>
          <p className="text-muted-foreground text-lg mb-12">Every piece of your operation, on one box you own.</p>

          <div className="grid md:grid-cols-2 gap-5">
            {[
              { icon: Package, title: "📦 One Box You Own", body: "A compact, quiet Mini PC that ships pre-configured for your trade. You own the hardware and all the software forever. No monthly rent, no vendor lock-in." },
              { icon: MessageSquare, title: "💬 Discord — Your Main Command Center", body: "The main place your team runs the business. Channels like #money, #leads, #call-summaries, and #openclaw-commands. The AI bot lets you create jobs, quotes, and clients with natural text commands. Real-time notifications for everything." },
              { icon: Users, title: "📋 Twenty CRM — Customer & Job Records", body: "Stores all client details, job history, addresses, notes, and automatically logs calls, texts, quotes, and payments so nothing falls through the cracks." },
              { icon: FileText, title: "🧾 Invoice Ninja — Quotes, Invoices & Payments", body: "Professional quotes and invoices with your branding. Customers view, approve, and pay easily (card, Apple Pay, or bank transfer). Approved quotes turn into invoices automatically with reminders for overdue payments." },
              { icon: Phone, title: "📱 Phone & Text Support", body: "Retell AI answers only when no one else can (especially after hours). Twilio handles text messages to your business number. All calls and texts log automatically into your system." },
              { icon: Camera, title: "📸 Photos & Files", body: "Immich automatically organizes job site photos by address and date. Nextcloud gives you secure private storage for contracts, permits, and documents." },
              { icon: BarChart3, title: "📊 Dashboard & Pricebook", body: "A clean dashboard shows today's jobs, open quotes, revenue, and system health. Your custom pricebook lives in the system so the Discord bot can pull accurate pricing instantly." },
              { icon: Shield, title: "🔒 Secure & Connected", body: "Everything runs safely on your Mini PC with Cloudflare protection. A small helper VPS handles notifications, but the main system stays under your control." },
            ].map((c) => (
              <div key={c.title} className="rounded-xl border border-border bg-card p-6 hover:border-primary/40 transition-colors">
                <h3 className="font-semibold text-foreground text-lg mb-3">{c.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why MEP Claw Beats the Old Way */}
      <section className="py-20 md:py-24 bg-surface">
        <div className="container max-w-5xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">Why MEP Claw Beats the Old Way</h2>

          <div className="rounded-xl border border-border bg-card overflow-hidden">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-border bg-background">
                  <th className="py-5 px-6 text-muted-foreground font-medium">Current Setup (Jobber, ServiceTitan, etc.)</th>
                  <th className="py-5 px-6 text-primary font-medium">MEP Claw</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Hundreds of dollars every month in subscriptions", "One-time purchase for the box + very low ongoing costs"],
                  ["Data stored on someone else's servers", "All your data lives on hardware you physically own"],
                  ["Clicking through multiple apps and menus", "Simple messages in Discord to create quotes and jobs"],
                  ["Admin work piles up at night", "Faster workflows and automation free up your time"],
                  ["Risk of price hikes or lockouts", "You control everything — no surprises"],
                ].map(([a, b]) => (
                  <tr key={a} className="border-b border-border last:border-b-0">
                    <td className="py-5 px-6 text-muted-foreground line-through decoration-muted-foreground/40">{a}</td>
                    <td className="py-5 px-6 text-foreground font-medium flex gap-2"><CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />{b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-lg text-foreground font-semibold mt-8 text-center">
            You stop renting tools and start owning your entire operations stack.
          </p>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-20 md:py-24">
        <div className="container max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">Who It's For</h2>
          <ul className="space-y-4 text-lg">
            {[
              "Solo operators tired of admin after hours",
              "Small crews who want to grow without adding office staff",
              "Any trade looking for simpler, faster workflows and lower costs",
            ].map((i) => (
              <li key={i} className="flex gap-3 text-foreground">
                <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />{i}
              </li>
            ))}
          </ul>
          <p className="text-muted-foreground mt-8 leading-relaxed">
            We customize the pricebook and setup to match how you actually run your business.
          </p>
          <p className="text-foreground font-semibold mt-4">
            Built for contractors, by a contractor in Clearwater, FL.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-border bg-surface">
        <div className="container max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to Take Back Your Time and Money?
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Book a short discovery call. We'll talk about your trade, team size, and biggest pain points, then show you how MEP Claw would fit your operation.
          </p>
          <Button variant="cta" size="lg" asChild>
            <a href="/#book">Book a Discovery Call →</a>
          </Button>
        </div>
      </section>
    </main>
    <SiteFooter />
  </>
);

export default AboutMepClaw;
