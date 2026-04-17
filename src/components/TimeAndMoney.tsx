import { useState, useMemo } from "react";

const workflows = [
  {
    trigger: "Phone rings at 8pm",
    title: "AI answers. Job created.",
    desc: "Voice agent qualifies the lead, books the visit, and drops a CRM record — while you're eating dinner.",
    time: "Time saved: 15 min per call",
  },
  {
    trigger: '"New quote for Mike, water heater"',
    title: "Quote built. PDF sent.",
    desc: "Type one line in Discord. AI pulls your pricebook, builds the quote, sends the PDF to the client in 30 seconds.",
    time: "Time saved: 25 min per quote",
  },
  {
    trigger: "Client approves quote",
    title: "Invoice auto-generated.",
    desc: "Webhook fires. Job status updates. Team notified in Discord. Invoice drafted. Zero manual data entry.",
    time: "Time saved: 10 min per job",
  },
  {
    trigger: "Tech finishes the job",
    title: "Photos filed. Review requested.",
    desc: "Field photos geotagged to the jobsite automatically. Review text sent to client. All logged to the record.",
    time: "Time saved: 20 min per job",
  },
];

const fmt = (n: number) => "$" + Math.round(n).toLocaleString();

const TimeAndMoney = () => {
  const [saas, setSaas] = useState(562);
  const [hrs, setHrs] = useState(10);
  const [rate, setRate] = useState(120);

  const { moSave, moTime, total } = useMemo(() => {
    const moSave = saas - 20;
    const moTime = hrs * 4;
    const total = moSave + moTime * rate;
    return { moSave, moTime, total };
  }, [saas, hrs, rate]);

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-xs font-medium uppercase tracking-wider text-primary mb-2">
          Stop paying rent on your own business
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
          You're losing $300–800 every month.
          <br />
          For what?
        </h2>
        <p className="text-muted-foreground text-base mb-10 max-w-2xl">
          SaaS tools charge you forever, own your data, and still can't answer your phone. MEP Claw does more — for $20/month flat.
        </p>

        {/* VS Grid */}
        <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] gap-4 md:gap-6 items-start mb-8">
          <div>
            <div className="text-center text-sm text-muted-foreground pb-2 font-medium">What you pay now</div>
            <div className="rounded-xl border-2 border-destructive/40 bg-card p-5">
              <div className="text-sm font-medium text-destructive mb-3 pb-2.5 border-b border-border">
                Typical SaaS stack
              </div>
              {[
                ["Jobber (5 users)", "$349/mo"],
                ["CompanyCam", "$59/mo"],
                ["ServiceTitan add-ons", "$99/mo"],
                ["Twilio SMS", "$30/mo"],
                ["Cloud storage", "$25/mo"],
              ].map(([name, price]) => (
                <div key={name} className="flex justify-between items-baseline py-1.5 border-b border-border last:border-b-0">
                  <span className="text-sm text-muted-foreground">{name}</span>
                  <span className="text-sm font-medium text-destructive">{price}</span>
                </div>
              ))}
              <div className="flex justify-between items-baseline mt-3 pt-3 border-t border-border">
                <span className="text-sm font-medium text-foreground">Monthly burn</span>
                <span className="text-2xl font-semibold text-destructive">$562/mo</span>
              </div>
              <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                <span>Data: on their servers</span>
                <span>Never yours</span>
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center justify-center pt-12">
            <div className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center text-xs font-semibold text-muted-foreground">
              vs
            </div>
          </div>

          <div>
            <div className="text-center text-sm text-muted-foreground pb-2 font-medium">MEP Claw</div>
            <div className="rounded-xl border-2 border-primary bg-card p-5">
              <div className="text-sm font-medium text-primary mb-3 pb-2.5 border-b border-border">
                Full stack on your hardware
              </div>
              {[
                ["Twenty CRM", "$0/mo"],
                ["Immich photos", "$0/mo"],
                ["Twilio SMS", "~$10/mo"],
                ["Retell voice AI", "included"],
                ["Nextcloud storage", "$0/mo"],
              ].map(([name, price]) => (
                <div key={name} className="flex justify-between items-baseline py-1.5 border-b border-border last:border-b-0">
                  <span className="text-sm text-muted-foreground">{name}</span>
                  <span className="text-sm font-medium text-primary">{price}</span>
                </div>
              ))}
              <div className="flex justify-between items-baseline mt-3 pt-3 border-t border-border">
                <span className="text-sm font-medium text-foreground">Monthly burn</span>
                <span className="text-2xl font-semibold text-primary">~$20/mo</span>
              </div>
              <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                <span>Data: on your desk</span>
                <span>Forever</span>
              </div>
            </div>
          </div>
        </div>

        {/* Savings Banner */}
        <div className="rounded-xl border-2 border-primary/40 bg-primary/5 p-5 flex flex-wrap justify-around items-center gap-4 mb-10">
          {[
            [fmt(moSave), "saved per month"],
            [fmt(moSave * 12), "saved per year"],
            [fmt(moSave * 36), "saved over 3 years"],
            ["1 box", "on your desk. that's it."],
          ].map(([num, lbl], i) => (
            <div key={i} className="text-center">
              <div className="text-2xl md:text-3xl font-semibold text-primary leading-none">{num}</div>
              <div className="text-xs text-primary/80 mt-1.5">{lbl}</div>
            </div>
          ))}
        </div>

        {/* Calculator */}
        <div className="rounded-xl bg-surface border border-border p-6 mb-10">
          <div className="text-sm font-semibold text-foreground mb-4">See your actual numbers</div>
          {[
            { label: "Current SaaS spend/mo", value: saas, set: setSaas, min: 100, max: 1500, step: 50, display: fmt(saas) },
            { label: "Admin hours lost/week", value: hrs, set: setHrs, min: 2, max: 30, step: 1, display: `${hrs} hrs` },
            { label: "Your hourly rate", value: rate, set: setRate, min: 50, max: 300, step: 10, display: `${fmt(rate)}/hr` },
          ].map((s) => (
            <div key={s.label} className="flex items-center gap-3 mb-3">
              <label className="text-sm text-muted-foreground w-44 flex-shrink-0">{s.label}</label>
              <input
                type="range"
                min={s.min}
                max={s.max}
                step={s.step}
                value={s.value}
                onChange={(e) => s.set(parseInt(e.target.value))}
                className="flex-1 accent-primary"
              />
              <span className="text-sm font-medium text-foreground min-w-[64px] text-right">{s.display}</span>
            </div>
          ))}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-5">
            <div className="rounded-lg border border-border bg-card p-4">
              <div className="text-xl font-semibold text-foreground">{fmt(moSave)}</div>
              <div className="text-xs text-muted-foreground mt-1">cash back per month</div>
            </div>
            <div className="rounded-lg border border-border bg-card p-4">
              <div className="text-xl font-semibold text-foreground">{moTime} hrs</div>
              <div className="text-xs text-muted-foreground mt-1">time back per month</div>
            </div>
            <div className="rounded-lg border-2 border-primary bg-primary/10 p-4">
              <div className="text-xl font-semibold text-primary">{fmt(total)}/mo</div>
              <div className="text-xs text-primary/80 mt-1">total value recovered</div>
            </div>
          </div>
        </div>

        {/* Workflows */}
        <div className="text-xs font-medium uppercase tracking-wider text-primary mb-2">Time you get back</div>
        <h3 className="text-xl font-semibold text-foreground mb-5">
          Four things MEP Claw handles so you don't have to
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {workflows.map((w) => (
            <div key={w.title} className="rounded-xl border border-border bg-card p-5">
              <div className="text-xs font-medium text-destructive mb-1.5">{w.trigger}</div>
              <div className="text-sm font-semibold text-foreground mb-1">{w.title}</div>
              <div className="text-sm text-muted-foreground leading-relaxed">{w.desc}</div>
              <div className="text-xs font-medium text-primary mt-2">{w.time}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimeAndMoney;
