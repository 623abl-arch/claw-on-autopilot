import { useState } from "react";

const oldDay = [
  { time: "7:30 AM", task: "Log into Jobber, ServiceTitan, CompanyCam, Gmail, QuickBooks. 5 tabs. 5 passwords." },
  { time: "9:15 AM", task: "Miss a call on the roof. Voicemail. Lead goes to the next guy." },
  { time: "11:00 AM", task: "Take 12 jobsite photos. Upload manually. Drag into folders by address. ~20 min." },
  { time: "1:30 PM", task: "Customer wants a quote. Drive back to the office to build it in Jobber. ~25 min." },
  { time: "5:00 PM", task: "Sit at desk. Type up invoices. Chase last week's payments by phone. ~90 min." },
  { time: "9:00 PM", task: "Still working. Family already ate. Tomorrow's schedule still not sent." },
];

const newDay = [
  { time: "7:30 AM", task: "Phone buzzes. Telegram brief: 4 jobs, 2 leads overnight, $4,200 booked. Done in 30 sec." },
  { time: "9:15 AM", task: "Call comes in. Voice AI books it. Job created in CRM. Confirmation texted. You stay on the roof." },
  { time: "11:00 AM", task: "Snap 12 photos. Auto-geotagged to the jobsite. Filed by address in Immich. 0 min." },
  { time: "1:30 PM", task: "Type \"quote for water heater 50gal at 412 Oak Ridge\" in Discord. PDF emailed in 30 sec." },
  { time: "5:00 PM", task: "Truck door closes. Invoices auto-generated on completion. Payment links already sent." },
  { time: "6:00 PM", task: "Home for dinner. Agent works the late calls so you don't have to." },
];

const DayInTheLife = () => {
  const [view, setView] = useState<"old" | "new">("new");
  const days = view === "old" ? oldDay : newDay;
  const isOld = view === "old";

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-xs font-medium uppercase tracking-wider text-primary mb-2">A day in your life</div>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
          Same Tuesday. Two completely different days.
        </h2>
        <p className="text-muted-foreground text-base mb-10 max-w-2xl">
          One ends at 9 PM with paperwork. The other ends at 6 PM with dinner. Toggle to compare.
        </p>

        <div className="inline-flex rounded-lg border border-border bg-card p-1 mb-8">
          <button
            onClick={() => setView("old")}
            className={`px-5 py-2 text-sm font-medium rounded-md transition-all ${
              isOld ? "bg-destructive/15 text-destructive" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            With your current SaaS stack
          </button>
          <button
            onClick={() => setView("new")}
            className={`px-5 py-2 text-sm font-medium rounded-md transition-all ${
              !isOld ? "bg-primary/15 text-primary" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            With MEP Claw
          </button>
        </div>

        <div className={`rounded-2xl border-2 p-6 md:p-8 transition-colors ${
          isOld ? "border-destructive/40 bg-destructive/5" : "border-primary/40 bg-primary/5"
        }`}>
          <div className="space-y-1">
            {days.map((d, i) => (
              <div
                key={`${view}-${i}`}
                className="flex gap-4 md:gap-6 py-3 border-b border-border last:border-b-0 opacity-0 animate-fade-in"
                style={{ animationDelay: `${i * 80}ms`, animationFillMode: "forwards" }}
              >
                <div className={`font-mono text-sm font-semibold w-20 shrink-0 ${isOld ? "text-destructive" : "text-primary"}`}>
                  {d.time}
                </div>
                <div className="text-sm md:text-base text-foreground leading-relaxed">{d.task}</div>
              </div>
            ))}
          </div>
          <div className={`mt-6 pt-6 border-t border-border text-sm font-semibold ${isOld ? "text-destructive" : "text-primary"}`}>
            {isOld
              ? "Total admin: ~3 hours. Missed calls: 2. Quotes sent: 1. Family time: lost."
              : "Total admin: ~12 minutes. Missed calls: 0. Quotes sent: 4. Family time: yours."}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DayInTheLife;
