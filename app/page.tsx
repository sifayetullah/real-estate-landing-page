import { AgentCard } from "@/components/AgentCard";
import { FloatingWhatsApp } from "@/components/FloatingWhatsapp";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Hero } from "@/components/Hero";
import { LeadForm } from "@/components/LeadForm";
import { MapSection } from "@/components/MapSection";
import { PricingCards } from "@/components/PricingCards";
import { PropertyHighlights } from "@/components/PropertyHighlights";
import { Testimonials } from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <PropertyHighlights />
      <Gallery />
      <PricingCards />
      <MapSection />
      <Testimonials />
      <LeadForm />
      <AgentCard />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
