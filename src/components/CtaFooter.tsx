import { Button } from "@/components/ui/button";

const CtaFooter = () => (
  <section id="book" className="py-20 md:py-28 bg-surface">
    <div className="container max-w-3xl mx-auto px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Ready to own your operation?</h2>
      <p className="text-muted-foreground text-base mb-8">
        One discovery call. We learn your trade, team size, and current tools. If MEP Claw is a fit, your box ships in 2 weeks — pre-configured, plug and play.
      </p>
      <Button variant="cta" size="lg" asChild>
        <a href="#book" className="text-base px-8 py-3">Book a Discovery Call →</a>
      </Button>
      <p className="text-xs text-muted-foreground mt-6">
        No monthly SaaS. No per-seat fees. No vendor can shut you off.
      </p>
    </div>
  </section>
);

export default CtaFooter;
