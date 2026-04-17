const stats = [
  { before: "$542/mo", after: "~$20/mo", label: "Software cost" },
  { before: "12 hrs/wk", after: "~2 hrs/wk", label: "Admin time" },
  { before: "6 logins", after: "1 box", label: "Tools to manage" },
  { before: "~3 missed calls/wk", after: "0", label: "Voicemail leads lost" },
];

const SavingsStory = () => (
  <section className="py-16 md:py-20 bg-background">
    <div className="container max-w-5xl mx-auto px-4">
      <div className="rounded-2xl border-2 border-primary/30 bg-card p-8 md:p-10">
        <div className="text-xs font-medium uppercase tracking-wider text-primary mb-3">A typical contractor savings story</div>
        <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
          Solo plumber, Clearwater FL. $6,264 back in year one.
        </h3>
        <p className="text-muted-foreground text-base leading-relaxed mb-8">
          Burning $542/month on Jobber + CompanyCam + Twilio + cloud storage. Spending 12 hours a week on admin after the truck pulled in. After switching to MEP Claw: <span className="text-foreground font-semibold">~$20/month total, ~10 hours back per week</span> — time he now spends with his kids or running an extra job.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s) => (
            <div key={s.label} className="rounded-lg border border-border bg-background p-4">
              <div className="text-xs text-muted-foreground uppercase tracking-wider mb-2">{s.label}</div>
              <div className="text-sm text-destructive line-through mb-1">{s.before}</div>
              <div className="text-lg font-bold text-primary">{s.after}</div>
            </div>
          ))}
        </div>

        <p className="text-sm text-muted-foreground mt-6 italic">
          "I get my evenings back. The agent answers everything I would've missed. First month it caught 4 jobs I never would've seen."
        </p>
      </div>
    </div>
  </section>
);

export default SavingsStory;
