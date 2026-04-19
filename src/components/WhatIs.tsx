const WhatIs = () => (
  <section id="what-is" className="py-20 md:py-28 bg-background">
    <div className="container max-w-6xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">What is MEP Claw?</h2>
      <p className="text-muted-foreground text-lg mb-6 max-w-3xl">
        The one-box system that replaces Jobber, ServiceTitan, and all those monthly apps — so you save thousands a year and get your evenings back.
      </p>
      <p className="text-muted-foreground text-base mb-8 max-w-3xl leading-relaxed">
        One quiet Mini PC ships to your door pre-loaded for your trade (plumbing, HVAC, electrical, GC, or handyman). Plug it in, connect to Wi-Fi, and you own the entire system outright. <strong className="text-foreground">No subscriptions. No price hikes. No lock-in.</strong>
      </p>

      <div className="rounded-xl border border-border bg-card p-6 md:p-8 mb-12 max-w-3xl">
        <h3 className="text-foreground font-semibold text-lg mb-4">How it helps you:</h3>
        <ul className="space-y-3 text-muted-foreground text-base leading-relaxed">
          <li className="flex gap-3">
            <span className="text-primary mt-1">•</span>
            <span>Create quotes in under 30 seconds by typing simple messages in Discord (e.g. <em>"new quote for John Smith — water heater at 412 Oak Ridge"</em>) — the bot pulls your pricebook, attaches photos, and sends a professional quote instantly</span>
          </li>
          <li className="flex gap-3">
            <span className="text-primary mt-1">•</span>
            <span>Search and view all your job photos directly on a map — every photo is automatically tagged by address and location so you can zoom in on any property and see the full history</span>
          </li>
          <li className="flex gap-3">
            <span className="text-primary mt-1">•</span>
            <span>Quotes turn into invoices automatically with payment links; calls, texts, and approvals log themselves with real-time notifications in Discord channels (#money, #leads, #call-summaries)</span>
          </li>
          <li className="flex gap-3">
            <span className="text-primary mt-1">•</span>
            <span>AI phone backup only answers when no one can pick up — especially after hours</span>
          </li>
        </ul>
      </div>

      <div className="grid md:grid-cols-3 gap-5">
        <div className="rounded-xl border border-border bg-card p-6 hover:border-primary/40 transition-colors">
          <div className="w-12 h-12 rounded-lg bg-primary/15 flex items-center justify-center text-primary text-xl mb-4">📦</div>
          <h3 className="font-semibold text-foreground text-lg mb-3">One Box You Own</h3>
          <p className="text-muted-foreground text-base leading-relaxed">
            Compact Mini PC. You own the hardware + full stack (Twenty CRM, Invoice Ninja, Immich photo map, Nextcloud, custom pricebook, dashboard) forever. No monthly rent.
          </p>
        </div>
        <div className="rounded-xl border border-border bg-card p-6 hover:border-primary/40 transition-colors">
          <div className="w-12 h-12 rounded-lg bg-primary/15 flex items-center justify-center text-primary text-xl mb-4">💬</div>
          <h3 className="font-semibold text-foreground text-lg mb-3">Discord Command Center</h3>
          <p className="text-muted-foreground text-base leading-relaxed">
            Your team's daily hub. Skip clicking through menus — just type natural commands and the bot handles jobs, quotes, clients, and updates instantly.
          </p>
        </div>
        <div className="rounded-xl border border-border bg-card p-6 hover:border-primary/40 transition-colors">
          <div className="w-12 h-12 rounded-lg bg-primary/15 flex items-center justify-center text-primary text-xl mb-4">🔒</div>
          <h3 className="font-semibold text-foreground text-lg mb-3">Your Data, Your Control</h3>
          <p className="text-muted-foreground text-base leading-relaxed">
            All your client records, quotes, invoices, pricebook, and job photos live on hardware you physically own. No one else can touch your data or raise your costs.
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
