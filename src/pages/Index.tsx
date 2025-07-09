/**
 * HostelLandingTemplateV1 - Main Index Page
 * 
 * A complete hostel landing page template targeting backpackers with:
 * - Clean, friendly design with subtle "wow" effects
 * - Fully JSON-driven content (easy to update without touching code)
 * - Responsive, mobile-first design
 * - Modern animations and smooth transitions
 * - Ready for static export to GitHub
 * 
 * All content comes from JSON files in src/data/
 * All colors and styles defined in design system (index.css & tailwind.config.ts)
 */

import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { PresentationSection } from "@/components/PresentationSection";
import { GallerySection } from "@/components/GallerySection";
import { ServicesSection } from "@/components/ServicesSection";
import { RoomsSection } from "@/components/RoomsSection";
import { DetailedServicesSection } from "@/components/DetailedServicesSection";
import { LocationSection } from "@/components/LocationSection";
import { ContactSection } from "@/components/ContactSection";
import { AdditionalSectionsGrid } from "@/components/AdditionalSectionsGrid";
import { FinalCTASection } from "@/components/FinalCTASection";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main>
        {/* Hero Section with booking CTA */}
        <div id="home">
          <HeroSection />
        </div>

        {/* Why choose us - key highlights */}
        <PresentationSection />

        {/* Photo gallery */}
        <GallerySection />

        {/* Featured services overview */}
        <ServicesSection />

        {/* Room types and pricing */}
        <RoomsSection />

        {/* Complete services list */}
        <DetailedServicesSection />

        {/* Location and directions */}
        <LocationSection />

        {/* Contact form and information */}
        <ContactSection />

        {/* Additional sections grid */}
        <AdditionalSectionsGrid />

        {/* Final booking call-to-action */}
        <FinalCTASection />
      </main>

      <Footer />
      
      {/* Floating WhatsApp Button */}
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
