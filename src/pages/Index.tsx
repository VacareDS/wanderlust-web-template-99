/**
 * HostelLandingTemplateV2 - Rustic Boho Chic Main Index Page
 * 
 * A completely reimagined hostel landing page with:
 * - Rustic boho chic design with warm earthy tones
 * - Side navigation instead of top nav
 * - Split-screen hero with overlapping gallery slider
 * - Polaroid-style gallery and asymmetrical room cards
 * - Vintage aesthetic with handcrafted details
 * - Fully JSON-driven content (easy to update without touching code)
 * - Responsive, mobile-first design with organic animations
 * 
 * All content comes from JSON files in src/data/
 * All colors and styles defined in boho design system (index.css & tailwind.config.ts)
 */

import { SideNavigation } from "@/components/SideNavigation";
import { BohoHeroSection } from "@/components/BohoHeroSection";
import { PresentationSection } from "@/components/PresentationSection";
import { BohoGallerySection } from "@/components/BohoGallerySection";
import { ServicesSection } from "@/components/ServicesSection";
import { BohoRoomsSection } from "@/components/BohoRoomsSection";
import { DetailedServicesSection } from "@/components/DetailedServicesSection";
import { LocationSection } from "@/components/LocationSection";
import { ContactSection } from "@/components/ContactSection";
import { AdditionalSectionsGrid } from "@/components/AdditionalSectionsGrid";
import { FinalCTASection } from "@/components/FinalCTASection";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Side Navigation */}
      <SideNavigation />
      
      {/* Main content with left margin for side nav */}
      <main className="md:ml-80 transition-all duration-500">
        {/* Hero Section with split-screen design */}
        <div id="home">
          <BohoHeroSection />
        </div>

        {/* Why choose us - key highlights */}
        <PresentationSection />

        {/* Polaroid-style photo gallery */}
        <BohoGallerySection />

        {/* Featured services overview */}
        <ServicesSection />

        {/* Asymmetrical room cards */}
        <BohoRoomsSection />

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

      <div className="md:ml-80">
        <Footer />
      </div>
      
      {/* Floating WhatsApp Button */}
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
