/**
 * Side Navigation Component for HostelLandingTemplateV2 - Rustic Boho Chic
 * Features vertical sidebar navigation with organic styling
 */

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Leaf, MessageCircle, Home, Camera, Users, Bed, MapPin, Phone, Heart } from "lucide-react";
import navData from "@/data/navigation.json";

export const SideNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsOpen(false);
  };

  const handleWhatsAppClick = () => {
    window.open(navData.cta_button.link, '_blank');
  };

  // Icon mapping for navigation items
  const iconMap = {
    home: Home,
    gallery: Camera,
    services: Users,
    rooms: Bed,
    location: MapPin,
    contact: Phone,
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <div className="fixed top-6 left-6 z-50 md:hidden">
        <Button
          variant="boho"
          size="icon"
          onClick={() => setIsOpen(!isOpen)}
          className="shadow-vintage"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Side Navigation */}
      <nav className={`fixed left-0 top-0 h-full z-40 transition-all duration-500 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } md:translate-x-0 w-64 bg-gradient-earth shadow-vintage`}>
        
        {/* Background decorative pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border-2 border-dashed border-boho-rust rounded-full animate-float"></div>
          <div className="absolute bottom-20 right-10 w-20 h-20 border border-accent rounded-lg rotate-12 animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-primary/30 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="relative h-full flex flex-col p-6">
          {/* Logo */}
          <div className="flex items-center gap-2 mb-8">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-boho-rust rounded-lg flex items-center justify-center shadow-vintage">
              <Leaf className="h-5 w-5 text-primary-foreground" />
            </div>
            <div>
              <span className="text-lg font-display font-bold text-foreground">
                {navData.brand.name}
              </span>
              <div className="w-full h-0.5 bg-gradient-to-r from-primary to-transparent mt-1"></div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex-1 space-y-2">
            {navData.nav_items.map((item, index) => {
              const IconComponent = iconMap[item.id as keyof typeof iconMap] || Heart;
              
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="w-full text-left p-3 rounded-lg transition-all duration-400 hover:bg-card/50 hover:shadow-soft group animate-fade-in border-2 border-transparent hover:border-boho-rust/30"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-accent/20 to-primary/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <span className="text-sm font-display font-medium text-foreground group-hover:text-primary transition-colors">
                        {item.label}
                      </span>
                      <div className="w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-500 mt-1"></div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="mt-6">
            <Button 
              variant="cta" 
              size="default"
              onClick={handleWhatsAppClick}
              className="w-full shadow-vintage group text-sm"
            >
              <MessageCircle className="mr-2 h-4 w-4 group-hover:animate-bounce" />
              <span className="font-display">{navData.cta_button.text}</span>
            </Button>
            
            {/* Decorative element */}
            <div className="mt-3 text-center">
              <div className="inline-block px-3 py-1 bg-boho-cream/50 rounded-full border border-boho-rust/30">
                <span className="text-xs font-body text-muted-foreground font-medium">Authentic · Cozy</span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 md:hidden transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};