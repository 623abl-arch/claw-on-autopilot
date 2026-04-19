const beforeItems = [
  "Phone rings at 11pm. Goes to voicemail. Customer calls a competitor.",
  "Monday morning: 6 missed calls to return before the crew is even on-site.",
  "Building a quote by hand takes 45 minutes. Customer waits. Customer gets impatient.",
  "Jobber at $249/mo. ServiceTitan at $480. QuickBooks at $65. CompanyCam at $59. Just SaaS rent — nothing to show for it.",
  "You cancel Jobber. Five years of client data is gone.",
];

const afterItems = [
  "Phone rings at 11pm. AI answers in 2 rings, qualifies the lead, logs it to the CRM, pings you in Discord.",
  "Monday morning: open Discord, see a clean summary of every call and lead from the weekend.",
  'Type "new quote, water heater replacement." Quote built, priced, and sent in 30 seconds.',
  "Monthly software cost: ~$20. Hardware paid off in 8 months. Everything after that is pure savings.",
  "You own every byte. Client data lives on your hardware. Cancel nothing — there's nothing to cancel.",
];

const DayInTheLife = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-xs font-medium uppercase tracking-wider text-primary mb-2">A day in your life</div>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
          Real Workflows
        </h2>
        <p className="text-muted-foreground text-base mb-12 max-w-2xl">
          One ends at 11pm chasing voicemails and SaaS bills. The other ends with the AI handling it for you.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {/* BEFORE */}
          <div className="rounded-2xl border border-destructive/30 bg-gradient-to-br from-destructive/10 to-destructive/[0.03] p-7 md:p-8">
            <div className="text-xs font-bold uppercase tracking-widest text-destructive mb-6">
              Before MEP Claw
            </div>
            <ul className="space-y-5">
              {beforeItems.map((t, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="shrink-0 w-6 h-6 rounded-full bg-destructive/20 text-destructive flex items-center justify-center text-sm font-bold mt-0.5">
                    ✕
                  </span>
                  <span className="text-sm md:text-base text-foreground/90 leading-relaxed">{t}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* AFTER */}
          <div className="rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 to-primary/[0.03] p-7 md:p-8">
            <div className="text-xs font-bold uppercase tracking-widest text-primary mb-6">
              With MEP Claw
            </div>
            <ul className="space-y-5">
              {afterItems.map((t, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm font-bold mt-0.5">
                    ✓
                  </span>
                  <span className="text-sm md:text-base text-foreground/90 leading-relaxed">{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DayInTheLife;
