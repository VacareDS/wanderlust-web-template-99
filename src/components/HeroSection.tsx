/**
 * Hero Section Component for HostelLandingTemplateV1
 * Displays the main hero banner with title, description, and CTA buttons
 * All content is loaded from home.json
 */

import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";
import homeData from "@/data/home.json";
import heroImage from "@/assets/hostel-hero.jpg";

export const HeroSection = () => {
  const { hero } = homeData;

  const handleWhatsAppClick = () => {
    window.open(hero.cta.link, '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Hostel common area" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-accent/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="heading-hero text-shadow mb-6">
            {hero.title}
          </h1>
          
          <p className="text-xl md:text-2xl mb-4 text-shadow opacity-95">
            {hero.subtitle}
          </p>
          
          <p className="text-body mb-8 max-w-2xl mx-auto opacity-90">
            {hero.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="cta" 
              size="lg"
              onClick={handleWhatsAppClick}
              className="group px-8 py-4 text-lg font-semibold"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              {hero.cta.text}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="px-8 py-4 text-lg font-semibold bg-white/10 border-white/30 text-white hover:bg-white/20"
            >
              {hero.cta.secondary}
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button 
        onClick={() => {
          const nextSection = document.querySelector('section:nth-of-type(2)');
          if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' });
          }
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hover:scale-110 transition-transform cursor-pointer group"
        aria-label="Scroll to next section"
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center group-hover:border-white/80 transition-colors">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse group-hover:bg-white/80 transition-colors"></div>
        </div>
      </button>
    </section>
  );
};