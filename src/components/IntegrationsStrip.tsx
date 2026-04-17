import {
  Database,
  FileText,
  Cloud,
  Image,
  MessageSquare,
  Workflow,
  Brain,
  Mic,
  Volume2,
  Send,
} from "lucide-react";

const tools = [
  { name: "Twenty CRM", icon: Database },
  { name: "Invoice Ninja", icon: FileText },
  { name: "Nextcloud", icon: Cloud },
  { name: "Immich", icon: Image },
  { name: "Discord", icon: MessageSquare },
  { name: "n8n", icon: Workflow },
  { name: "Ollama", icon: Brain },
  { name: "Whisper", icon: Mic },
  { name: "ElevenLabs", icon: Volume2 },
  { name: "Telegram", icon: Send },
];

const Pill = ({ tool }: { tool: (typeof tools)[number] }) => {
  const Icon = tool.icon;
  return (
    <div className="shrink-0 mx-3 inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-foreground hover:border-primary hover:shadow-[0_0_20px_-5px_hsl(var(--primary))] transition-all">
      <Icon className="h-4 w-4 text-primary" />
      <span className="font-medium text-sm">{tool.name}</span>
    </div>
  );
};

const IntegrationsStrip = () => {
  const loop = [...tools, ...tools];
  return (
    <section className="py-20 md:py-24 bg-background overflow-hidden">
      <div className="container max-w-6xl mx-auto px-4 text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
          Built on open source you can trust
        </h2>
        <p className="text-muted-foreground">
          Every tool is self-hosted, auditable, and yours forever.
        </p>
      </div>

      <div className="group relative">
        <div className="flex animate-marquee-slow group-hover:[animation-play-state:paused]">
          {loop.map((t, i) => (
            <Pill key={i} tool={t} />
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent" />
      </div>
    </section>
  );
};

export default IntegrationsStrip;
