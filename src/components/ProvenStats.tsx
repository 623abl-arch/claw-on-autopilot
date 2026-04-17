const stats = [
  { value: "890", label: "Clients managed" },
  { value: "2,347", label: "Pricebook line items" },
  { value: "$20/mo", label: "Total stack cost" },
  { value: "100%", label: "Data on your hardware" },
];

const ProvenStats = () => (
  <section className="bg-background py-10 md:py-14">
    <div className="container max-w-6xl mx-auto px-4">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
        Proven in the field
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((s) => (
          <div
            key={s.label}
            className="rounded-xl border border-border bg-card p-6 text-center"
          >
            <p className="text-3xl md:text-4xl font-extrabold text-primary mb-2">
              {s.value}
            </p>
            <p className="text-sm text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProvenStats;
