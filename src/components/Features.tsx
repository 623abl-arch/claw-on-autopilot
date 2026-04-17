import {
  PhoneCall, MessageSquare, FileText, Users, Calendar, Receipt,
  BookOpen, Send, FolderLock, LayoutDashboard,
} from "lucide-react";

const features = [
  { label: "Voice AI Receptionist", desc: "Retell-powered. Answers calls 24/7, qualifies leads, books visits, creates CRM records automatically.", icon: PhoneCall },
  { label: "Discord Command Center", desc: "Your team runs the business from Discord — jobs, quotes, clients, visits — all conversational, all logged.", icon: MessageSquare },
  { label: "AI Quote Engine — 4 modes", desc: "AI Quick, Repair/Replace/Upgrade, Pricebook, and Manual. Quotes built in 30 seconds, sent as PDF.", icon: FileText },
  { label: "Twenty CRM", desc: "890+ clients on day one. Locations, jobs, visits, communications — all yours, all on your hardware.", icon: Users },
  { label: "Job & Visit Management", desc: "Schedule visits from Discord or voice. Calendar sync. Tech-side updates flow back into the CRM automatically.", icon: Calendar },
  { label: "Invoicing & Payments", desc: "Invoice Ninja. Quotes turn into invoices, invoices into payments. Client portal + branded PDF templates.", icon: Receipt },
  { label: "Pricebook Integration", desc: "Import your full pricebook once. AI searches it when building quotes so margins stay consistent.", icon: BookOpen },
  { label: "SMS Communications", desc: "Twilio inbound + outbound SMS. Auto-logged to the client record. A2P 10DLC compliant.", icon: Send },
  { label: "File Storage", desc: "Nextcloud. Property docs, contracts, permits, jobsite photos — your own private cloud, no per-GB fees.", icon: FolderLock },
  { label: "Dashboard & Mobile (coming)", desc: "Real-time KPIs, live job map, system health, voice Jarvis. Installable PWA on every phone in your crew.", icon: LayoutDashboard },
];

const Features = () => (
  <section id="features" className="py-20 md:py-28 bg-background">
    <div className="container max-w-6xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">The Full Stack — What's Actually Running</h2>
      <p className="text-muted-foreground text-base mb-12 max-w-xl">Not "an AI agent." A complete field-service operating system, pre-wired and yours.</p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {features.map((f) => (
          <div
            key={f.label}
            className="rounded-xl border border-border bg-card p-6 hover:border-primary/40 transition-colors group"
          >
            <div className="w-11 h-11 rounded-lg bg-primary/15 flex items-center justify-center mb-4 group-hover:bg-primary/25 transition-colors">
              <f.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
            </div>
            <h3 className="font-semibold text-foreground text-base mb-2">{f.label}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Features;
