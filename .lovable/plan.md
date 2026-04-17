

## Add "Live System Status" Floating Widget

A collapsible glassmorphism widget pinned to the bottom-right of the homepage, showing live-feeling counters and service status dots.

### Behavior
- **Collapsed (default on mobile)**: small pill — `● 9 systems live` — click to expand
- **Expanded**: ~300px card with Activity counters + Services status list
- Dismissible via × (re-collapses, doesn't hide forever)
- Counters tick on intervals to feel live (no real backend)

### Counter logic (all client-side, no backend)
- **Visitors today**: 20–200 range based on hour of day (low overnight, peak midday). Recalculated on mount + ticks +1 every ~15s
- **Live users now**: starts at 400, randomly fluctuates ±2 every 4s
- **Onboarding this week**: static 8, +1 every ~45s
- **Quotes generated (all-time)**: starts 12,481, +1 every ~8s
- **Voice calls today**: starts 342, +1 every ~20s
- **Invoices auto-sent this week**: starts 89, +1 every ~30s

### Status dots
All 9 services listed. 7–8 green, 1 randomly yellow (rotates every 30s) to feel real. Red reserved (none by default). Pulsing dot animation on green.

### Visual
- `bg-card/80 backdrop-blur-md border border-border` — matches ClawHub aesthetic
- Header: pulsing green dot + "Live System Status" + collapse button
- Two sections divided by border: ACTIVITY (counters right-aligned) / SERVICES (dot + name)
- Footer: muted "Updated just now" timestamp

### Files
- **NEW** `src/components/LiveStatusWidget.tsx` — single self-contained component with all state + intervals
- **EDIT** `src/pages/Index.tsx` — mount `<LiveStatusWidget />` once at end of fragment (fixed-position, order-independent)

### Layout
```text
┌──────────────────────────────┐
│ ● Live System Status     [—] │
├──────────────────────────────┤
│ ACTIVITY                     │
│ Visitors today        127    │
│ Live now              402    │
│ Onboarding this wk      8    │
│ Voice calls today     344    │
│ Quotes (all-time)  12,489    │
│ Invoices this wk       91    │
├──────────────────────────────┤
│ SERVICES                     │
│ ● Cloudflare Tunnel          │
│ ● Tailscale VPN              │
│ ● Twenty CRM                 │
│ ● Invoice Ninja              │
│ ● Nextcloud                  │
│ ● Retell Voice AI            │
│ ● Nemotron AI Brain          │
│ ◐ Discord Bot (Jarvis)       │
│ ● Mini PC node               │
├──────────────────────────────┤
│ Updated just now             │
└──────────────────────────────┘
```

