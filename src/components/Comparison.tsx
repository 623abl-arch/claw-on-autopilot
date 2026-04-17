const rows = [
  {
    label: "Monthly cost",
    jobber: "$49–$249/mo per user",
    servicetitan: "$400+/mo per tech",
    companycam: "$24–$59/mo per user",
    claw: "~$20/mo flat (QuickBooks + Twilio)",
  },
  {
    label: "Data ownership",
    jobber: "Vendor's cloud",
    servicetitan: "Vendor's cloud",
    companycam: "Vendor's cloud",
    claw: "Your hardware. Always.",
  },
  {
    label: "Voice AI receptionist",
    jobber: "No",
    servicetitan: "Add-on",
    companycam: "No",
    claw: "Built in (Retell)",
  },
  {
    label: "AI quote engine",
    jobber: "No",
    servicetitan: "Limited",
    companycam: "No",
    claw: "4 modes — quotes in 30s",
  },
  {
    label: "Pricebook",
    jobber: "Basic",
    servicetitan: "Yes (premium tier)",
    companycam: "No",
    claw: "Imported & searchable",
  },
  {
    label: "Self-hosted / open source",
    jobber: "No",
    servicetitan: "No",
    companycam: "No",
    claw: "Twenty CRM, Invoice Ninja, Nextcloud",
  },
  {
    label: "Trade flexibility",
    jobber: "Generic",
    servicetitan: "HVAC/plumbing/electrical",
    companycam: "Photo-only",
    claw: "Plumbing, HVAC, electrical, GC, roofing",
  },
  {
    label: "Setup",
    jobber: "Same day",
    servicetitan: "Weeks of onboarding",
    companycam: "Same day",
    claw: "Ships pre-configured + 3-hr onboarding",
  },
];

const Comparison = () => (
  <section className="py-20 md:py-28 bg-surface">
    <div className="container max-w-6xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">You Own Everything. They Rent It Back to You.</h2>
      <p className="text-muted-foreground text-base mb-12">A typical SaaS stack runs $300–800/month and lives on someone else's servers. MEP Claw is a one-time buy on hardware that sits on your desk.</p>

      <div className="rounded-xl border border-border bg-card overflow-x-auto">
        <table className="w-full text-left text-base min-w-[760px]">
          <thead>
            <tr className="border-b border-border">
              <th className="py-5 px-6 text-muted-foreground font-medium" />
              <th className="py-5 px-6 text-muted-foreground font-medium">Jobber</th>
              <th className="py-5 px-6 text-muted-foreground font-medium">ServiceTitan</th>
              <th className="py-5 px-6 text-muted-foreground font-medium">CompanyCam</th>
              <th className="py-5 px-6 font-semibold text-primary">MEP Claw</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.label} className="border-b border-border last:border-b-0">
                <td className="py-5 px-6 font-medium text-foreground">{r.label}</td>
                <td className="py-5 px-6 text-muted-foreground">{r.jobber}</td>
                <td className="py-5 px-6 text-muted-foreground">{r.servicetitan}</td>
                <td className="py-5 px-6 text-muted-foreground">{r.companycam}</td>
                <td className="py-5 px-6 text-foreground font-medium">{r.claw}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </section>
);

export default Comparison;
