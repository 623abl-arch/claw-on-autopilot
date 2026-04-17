const stackRows = [
  { layer: "CRM + Field Ops", tool: "Twenty CRM" },
  { layer: "Invoicing + Quotes", tool: "Invoice Ninja" },
  { layer: "File Storage", tool: "Nextcloud" },
  { layer: "Photo Management", tool: "Immich" },
  { layer: "Voice AI", tool: "Retell AI" },
  { layer: "AI Agent Brain", tool: "NemoClaw + Nemotron" },
  { layer: "SMS", tool: "Twilio" },
  { layer: "Field Communication", tool: "Discord + Telegram" },
];

const FullStack = () => (
  <section className="py-20 md:py-28 bg-surface">
    <div className="container max-w-6xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
        The full stack. Nothing hidden.
      </h2>
      <p className="text-muted-foreground text-base mb-12 max-w-2xl">
        Every tool MEP Claw runs is open source or self-hosted. Here's exactly what's on your box.
      </p>

      <div className="rounded-xl border border-border bg-card overflow-hidden">
        <table className="w-full text-left text-base">
          <thead>
            <tr className="border-b border-border">
              <th className="py-5 px-6 text-muted-foreground font-medium">Layer</th>
              <th className="py-5 px-6 text-muted-foreground font-medium">Tool</th>
            </tr>
          </thead>
          <tbody>
            {stackRows.map((r) => (
              <tr key={r.layer} className="border-b border-border last:border-b-0">
                <td className="py-5 px-6 font-medium text-foreground">{r.layer}</td>
                <td className="py-5 px-6 text-primary font-medium">{r.tool}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-sm text-muted-foreground mt-6">
        Accessible from anywhere via Tailscale. Secured with Cloudflare Tunnel. Runs on a Mini PC that sits on your desk.
      </p>

      <div className="mt-8">
        <a
          href="/stack"
          className="inline-flex items-center gap-2 text-base font-semibold text-primary hover:text-primary-foreground border-2 border-primary hover:bg-primary rounded-lg px-6 py-3 transition-all"
        >
          Why we chose each tool →
        </a>
      </div>
    </div>
  </section>
);

export default FullStack;
