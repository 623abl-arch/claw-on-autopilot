const SiteFooter = () => (
  <footer className="border-t border-border/50 py-6 bg-background">
    <div className="container max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-muted-foreground text-xs">© 2026 MEP Claw. All rights reserved.</p>
      <nav className="flex gap-6 text-xs">
        <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Home</a>
        <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">How It Works</a>
        <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
        <a href="#book" className="text-muted-foreground hover:text-foreground transition-colors">Book a Call</a>
      </nav>
    </div>
  </footer>
);

export default SiteFooter;
