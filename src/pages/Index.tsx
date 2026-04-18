import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import QuantifiedOutcomes from "@/components/QuantifiedOutcomes";
import ProvenStats from "@/components/ProvenStats";
import DayInTheLife from "@/components/DayInTheLife";
import InteractiveDemo from "@/components/InteractiveDemo";
import WhatIs from "@/components/WhatIs";
import Features from "@/components/Features";
import FullStack from "@/components/FullStack";
import HowItWorks from "@/components/HowItWorks";
import IntegrationsStrip from "@/components/IntegrationsStrip";
import ThreeReasons from "@/components/ThreeReasons";
import Hardware from "@/components/Hardware";
import Pricing from "@/components/Pricing";
import SavingsCalculator from "@/components/SavingsCalculator";
import SavingsStory from "@/components/SavingsStory";
import TimeAndMoney from "@/components/TimeAndMoney";
import Comparison from "@/components/Comparison";
import WhoItsFor from "@/components/WhoItsFor";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import CtaFooter from "@/components/CtaFooter";
import SiteFooter from "@/components/SiteFooter";
import LiveStatusWidget from "@/components/LiveStatusWidget";

const Index = () => (
  <>
    <Navbar />
    <Hero />
    {/* The wow: outcomes & proof */}
    <QuantifiedOutcomes />
    {/* The emotional hook: before/after */}
    <DayInTheLife />
    {/* What is it — moved directly after the Tuesday story */}
    <WhatIs />
    {/* See it in action */}
    <InteractiveDemo />
    {/* What's inside */}
    <Features />
    <FullStack />
    {/* Three steps + See the full process — moved under the full stack */}
    <HowItWorks />
    <IntegrationsStrip />
    <ThreeReasons />
    {/* The box & price */}
    <Hardware />
    <Pricing />
    {/* The math */}
    <SavingsCalculator />
    <SavingsStory />
    <TimeAndMoney />
    <Comparison />
    {/* Who & who built it */}
    <WhoItsFor />
    <About />
    <Testimonials />
    <CtaFooter />
    <SiteFooter />
    <LiveStatusWidget />
  </>
);

export default Index;
