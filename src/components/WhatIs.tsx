const WhatIs = () => (
  <section id="what-is" className="py-20 md:py-28 bg-background">
    <div className="container max-w-6xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">What is MEP Claw?</h2>
      <p className="text-muted-foreground text-lg mb-4 max-w-3xl">
        The one-box system that replaces expensive monthly apps like Jobber and ServiceTitan — so you keep more of your money and get your evenings back.
      </p>
      <p className="text-muted-foreground text-base mb-12 max-w-3xl leading-relaxed">
        A complete operations system for trades businesses — plumbing, HVAC, electrical, GC, handyman, or any field service. One quiet Mini PC ships pre-loaded. Plug it in, connect to Wi-Fi, and it runs on hardware you own outright. <strong className="text-foreground">Most contractors save thousands a year on app fees and get 10–20 hours back every week.</strong>
      </p>

      <div className="grid md:grid-cols-3 gap-5">
        <div className="rounded-xl border border-border bg-card p-6 hover:border-primary/40 transition-colors">
          <div className="w-12 h-12 rounded-lg bg-primary/15 flex items-center justify-center text-primary text-xl mb-4">📦</div>
          <h3 className="font-semibold text-foreground text-lg mb-3">One Box You Own</h3>
          <p className="text-muted-foreground text-base leading-relaxed">
            A compact, quiet Mini PC ships pre-configured for your trade. You own the hardware and all the software forever. No monthly rent. No vendor lock-in.
          </p>
        </div>
        <div className="rounded-xl border border-border bg-card p-6 hover:border-primary/40 transition-colors">
          <div className="w-12 h-12 rounded-lg bg-primary/15 flex items-center justify-center text-primary text-xl mb-4">💬</div>
          <h3 className="font-semibold text-foreground text-lg mb-3">Discord Command Center</h3>
          <p className="text-muted-foreground text-base leading-relaxed">
            Skip the menus. Type <em>"new quote for John Smith — water heater at 412 Oak Ridge"</em> and the bot pulls your pricebook, attaches photos, and sends the quote in under 30 seconds.
          </p>
        </div>
        <div className="rounded-xl border border-border bg-card p-6 hover:border-primary/40 transition-colors">
          <div className="w-12 h-12 rounded-lg bg-primary/15 flex items-center justify-center text-primary text-xl mb-4">🔒</div>
          <h3 className="font-semibold text-foreground text-lg mb-3">Your Data, Your Control</h3>
          <p className="text-muted-foreground text-base leading-relaxed">
            Twenty CRM, Invoice Ninja, Nextcloud, Immich, Retell AI, and NemoClaw — all self-hosted on your hardware. The whole stack costs ~$20/month to run. No per-seat fees. Ever.
          </p>
        </div>
      </div>

      <div className="mt-10 flex justify-center">
        <a
          href="/about"
          className="inline-flex items-center gap-2 text-base font-semibold text-primary hover:text-primary-foreground border-2 border-primary hover:bg-primary rounded-lg px-6 py-3 transition-all"
        >
          Learn more about MEP Claw →
        </a>
      </div>
    </div>
  </section>
);

export default WhatIs;
