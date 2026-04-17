const WhatIs = () => (
  <section id="what-is" className="py-20 md:py-28 bg-background">
    <div className="container max-w-6xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">What is MEP Claw?</h2>
      <p className="text-muted-foreground text-base mb-12 max-w-xl">Everything you need to know about the platform.</p>

      <div className="grid md:grid-cols-3 gap-5">
        <div className="rounded-xl border border-border bg-card p-6 hover:border-primary/40 transition-colors">
          <div className="w-12 h-12 rounded-lg bg-primary/15 flex items-center justify-center text-primary text-xl mb-4">📦</div>
          <h3 className="font-semibold text-foreground text-lg mb-3">Hardware You Own</h3>
          <p className="text-muted-foreground text-base leading-relaxed">
            A pre-configured AI agent on a physical box that ships straight to your door. No cloud subscriptions. No complicated setup.
          </p>
        </div>
        <div className="rounded-xl border border-border bg-card p-6 hover:border-primary/40 transition-colors">
          <div className="w-12 h-12 rounded-lg bg-primary/15 flex items-center justify-center text-primary text-xl mb-4">🤖</div>
          <h3 className="font-semibold text-foreground text-lg mb-3">Full Automation</h3>
          <p className="text-muted-foreground text-base leading-relaxed">
            Lead follow-up, job dispatch, photo documentation, customer reviews, social media posting, and morning briefings — all automatic.
          </p>
        </div>
        <div className="rounded-xl border border-border bg-card p-6 hover:border-primary/40 transition-colors">
          <div className="w-12 h-12 rounded-lg bg-primary/15 flex items-center justify-center text-primary text-xl mb-4">🔒</div>
          <h3 className="font-semibold text-foreground text-lg mb-3">Your Data, Your Control</h3>
          <p className="text-muted-foreground text-base leading-relaxed">
            MEP Claw runs on Twenty CRM, Invoice Ninja, Nextcloud, Immich, Retell AI, and NemoClaw — all self-hosted on your hardware. The entire stack costs $20/month to run. No per-seat fees. No vendor lock-in. No one else's hands on your customer data. Ever.
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
