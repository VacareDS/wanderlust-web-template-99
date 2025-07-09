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
      } md:translate-x-0 w-80 bg-gradient-earth shadow-vintage`}>
        
        {/* Background decorative pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border-2 border-dashed border-boho-rust rounded-full animate-float"></div>
          <div className="absolute bottom-20 right-10 w-20 h-20 border border-accent rounded-lg rotate-12 animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-primary/30 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="relative h-full flex flex-col p-8">
          {/* Logo */}
          <div className="flex items-center gap-3 mb-12">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-boho-rust rounded-xl flex items-center justify-center shadow-vintage">
              <Leaf className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <span className="text-2xl font-display font-bold text-foreground">
                {navData.brand.name}
              </span>
              <div className="w-full h-0.5 bg-gradient-to-r from-primary to-transparent mt-1"></div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex-1 space-y-3">
            {navData.nav_items.map((item, index) => {
              const IconComponent = iconMap[item.id as keyof typeof iconMap] || Heart;
              
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="w-full text-left p-4 rounded-xl transition-all duration-400 hover:bg-card/50 hover:shadow-soft group animate-fade-in border-2 border-transparent hover:border-boho-rust/30"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-accent/20 to-primary/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <span className="text-lg font-display font-medium text-foreground group-hover:text-primary transition-colors">
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
          <div className="mt-8">
            <Button 
              variant="cta" 
              size="lg"
              onClick={handleWhatsAppClick}
              className="w-full shadow-vintage group"
            >
              <MessageCircle className="mr-2 h-5 w-5 group-hover:animate-bounce" />
              <span className="font-display">{navData.cta_button.text}</span>
            </Button>
            
            {/* Decorative element */}
            <div className="mt-4 text-center">
              <div className="inline-block px-4 py-2 bg-boho-cream/50 rounded-full border border-boho-rust/30">
                <span className="text-sm font-body text-muted-foreground font-medium">Authentic · Cozy · Artistic</span>
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