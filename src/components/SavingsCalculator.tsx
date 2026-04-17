import { useState } from "react";
import { Slider } from "@/components/ui/slider";

const SavingsCalculator = () => {
  const [jobsPerWeek, setJobsPerWeek] = useState(15);
  const [avgJobValue, setAvgJobValue] = useState(800);

  const adminMinsPerJob = 45;
  const timeLostHours = Math.round((jobsPerWeek * 4 * adminMinsPerJob) / 60);
  const revenueAtRisk = Math.round(jobsPerWeek * 4 * avgJobValue * 0.15);
  const monthlySavings = timeLostHours * 65 + revenueAtRisk;
  const paybackMonths = monthlySavings > 0 ? Math.max(1, Math.ceil(3800 / monthlySavings)) : 0;

  return (
    <section id="savings" className="py-20 md:py-28 bg-surface">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
          How much is your time costing you?
        </h2>
        <p className="text-muted-foreground text-base mb-12">
          Drag the sliders to match your business. See what MEP Claw gives back.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Sliders */}
          <div className="rounded-xl border border-border bg-card p-8 space-y-10">
            <div>
              <div className="flex items-center justify-between mb-4">
                <label className="text-foreground font-medium text-base">Jobs per week</label>
                <span className="text-primary font-bold text-xl tabular-nums">{jobsPerWeek}</span>
              </div>
              <Slider
                value={[jobsPerWeek]}
                onValueChange={(v) => setJobsPerWeek(v[0])}
                min={1}
                max={50}
                step={1}
              />
              <div className="flex justify-between text-sm text-muted-foreground mt-2">
                <span>1</span>
                <span>50</span>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-4">
                <label className="text-foreground font-medium text-base">Average job value</label>
                <span className="text-primary font-bold text-xl tabular-nums">
                  ${avgJobValue.toLocaleString()}
                </span>
              </div>
              <Slider
                value={[avgJobValue]}
                onValueChange={(v) => setAvgJobValue(v[0])}
                min={200}
                max={5000}
                step={50}
              />
              <div className="flex justify-between text-sm text-muted-foreground mt-2">
                <span>$200</span>
                <span>$5,000</span>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="rounded-xl border border-border bg-card p-8 space-y-6">
            <div>
              <p className="text-muted-foreground text-sm mb-2">Time lost to admin per month</p>
              <p className="text-foreground font-bold text-3xl">{timeLostHours} hrs</p>
            </div>
            <div className="h-px bg-border" />
            <div>
              <p className="text-muted-foreground text-sm mb-2">Revenue at risk from slow follow-up</p>
              <p className="text-foreground font-bold text-3xl">${revenueAtRisk.toLocaleString()}</p>
            </div>
            <div className="h-px bg-border" />
            <div>
              <p className="text-muted-foreground text-sm mb-2">MEP Claw payback period</p>
              <p className="text-primary font-bold text-3xl">
                {paybackMonths} month{paybackMonths !== 1 ? "s" : ""}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SavingsCalculator;
