const WhatIs = () => (
  <section id="what-is" className="py-20 md:py-28 bg-background">
    <div className="container max-w-6xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">What is MEP Claw?</h2>
      <p className="text-muted-foreground text-lg mb-6 max-w-3xl">
        The one-box system that replaces Jobber, ServiceTitan and all those monthly apps — so you save thousands a year and get your evenings back.
      </p>
      <p className="text-muted-foreground text-base mb-8 max-w-3xl leading-relaxed">
        One quiet Mini PC ships to your door pre-loaded for your trade. Plug it in, connect to Wi-Fi, and you own everything outright. <strong className="text-foreground">No subscriptions. No price hikes. No lock-in.</strong>
      </p>

      <div className="rounded-xl border border-border bg-card p-6 md:p-8 mb-12 max-w-3xl">
        <h3 className="text-foreground font-semibold text-lg mb-4">How it helps you:</h3>
        <ul className="space-y-3 text-muted-foreground text-base leading-relaxed">
          <li className="flex gap-3">
            <span className="text-primary mt-1">•</span>
            <span>Type simple messages in Discord to create quotes in under 30 seconds (pulls your pricebook + photos automatically)</span>
          </li>
          <li className="flex gap-3">
            <span className="text-primary mt-1">•</span>
            <span>View all your job photos on a map — just zoom to any address to see the full history</span>
          </li>
          <li className="flex gap-3">
            <span className="text-primary mt-1">•</span>
            <span>Quotes turn into invoices automatically with easy payment links</span>
          </li>
          <li className="flex gap-3">
            <span className="text-primary mt-1">•</span>
            <span>Everything stays organized with real-time notifications in Discord</span>
          </li>
        </ul>
      </div>

      <div className="grid md:grid-cols-3 gap-5">
        <div className="rounded-xl border border-border bg-card p-6 hover:border-primary/40 transition-colors">
          <div className="w-12 h-12 rounded-lg bg-primary/15 flex items-center justify-center text-primary text-xl mb-4">📦</div>
          <h3 className="font-semibold text-foreground text-lg mb-3">One Box You Own</h3>
          <p className="text-muted-foreground text-base leading-relaxed">
            You own the hardware and all your data forever. No monthly rent.
          </p>
        </div>
        <div className="rounded-xl border border-border bg-card p-6 hover:border-primary/40 transition-colors">
          <div className="w-12 h-12 rounded-lg bg-primary/15 flex items-center justify-center text-primary text-xl mb-4">💬</div>
          <h3 className="font-semibold text-foreground text-lg mb-3">Discord Command Center</h3>
          <p className="text-muted-foreground text-base leading-relaxed">
            Skip the menus and buttons — just type and the bot does the rest.
          </p>
        </div>
        <div className="rounded-xl border border-border bg-card p-6 hover:border-primary/40 transition-colors">
          <div className="w-12 h-12 rounded-lg bg-primary/15 flex items-center justify-center text-primary text-xl mb-4">🔒</div>
          <h3 className="font-semibold text-foreground text-lg mb-3">Your Data, Your Control</h3>
          <p className="text-muted-foreground text-base leading-relaxed">
            All your clients, quotes, invoices, and photos live on hardware you own. No one else can touch your data or raise your costs.
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
