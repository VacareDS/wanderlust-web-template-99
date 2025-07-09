/**
 * Navigation Component for HostelLandingTemplateV1
 * Responsive navigation with smooth scrolling to sections
 */

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Bed, MessageCircle } from "lucide-react";
import navData from "@/data/navigation.json";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
    setIsMenuOpen(false);
  };

  const handleWhatsAppClick = () => {
    window.open(navData.cta_button.link, '_blank');
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/95 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary-glow rounded-lg flex items-center justify-center">
              <Bed className="h-5 w-5 text-white" />
            </div>
            <span className={`text-xl font-bold transition-colors ${
              isScrolled ? 'text-foreground' : 'text-white'
            }`}>
              {navData.brand.name}
            </span>
          </div>

          {/* Desktop Navigation */}
           <div className="hidden md:flex items-center gap-8">
            {navData.nav_items.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isScrolled 
                    ? 'text-foreground/80 hover:text-primary' 
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
            
            <Button 
              variant="cta" 
              size="sm"
              onClick={handleWhatsAppClick}
              className="ml-4"
            >
              <MessageCircle className="mr-1 h-4 w-4" />
              {navData.cta_button.text}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={isScrolled ? 'text-foreground' : 'text-white'}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border">
            <div className="py-4 space-y-2">
              {navData.nav_items.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-4 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-muted/50 transition-colors"
                >
                  {item.label}
                </button>
              ))}
              
              <div className="px-4 pt-2">
                <Button 
                  variant="cta" 
                  size="sm"
                  onClick={handleWhatsAppClick}
                  className="w-full"
                >
                  <MessageCircle className="mr-1 h-4 w-4" />
                  {navData.cta_button.text}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};