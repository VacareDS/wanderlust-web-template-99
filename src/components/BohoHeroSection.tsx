/**
 * Boho Hero Section Component for HostelLandingTemplateV2
 * Features split-screen layout with overlapping slider gallery
 */

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import homeData from "@/data/home.json";
import heroImage from "@/assets/hostel-hero.jpg";

// Import gallery images for the overlapping slider
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";

const sliderImages = [heroImage, gallery1, gallery2, gallery3];

export const BohoHeroSection = () => {
  const { hero } = homeData;
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleWhatsAppClick = () => {
    window.open(hero.cta.link, '_blank');
  };

  // Auto-advance slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-earth">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-1/4 w-64 h-64 border-2 border-dashed border-accent/20 rounded-full animate-float opacity-30"></div>
        <div className="absolute bottom-20 right-1/3 w-32 h-32 border border-primary/20 rounded-lg rotate-45 animate-float opacity-50" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-gradient-to-br from-boho-rust/10 to-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          
          {/* Left Side - Content */}
          <div className="space-y-8 animate-fade-in">
            {/* Decorative tag */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-boho-cream/80 rounded-full border-2 border-dashed border-boho-rust/40 shadow-soft">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-display font-medium text-boho-earth">Rustic · Authentic · Cozy</span>
            </div>

            {/* Main heading */}
            <div className="space-y-4">
              <h1 className="heading-hero text-foreground text-shadow-vintage leading-none">
                <span className="block brush-stroke">{hero.title}</span>
              </h1>
              
              <p className="text-2xl md:text-3xl font-display text-primary font-medium">
                {hero.subtitle}
              </p>
              
              <p className="text-body text-muted-foreground max-w-lg leading-relaxed">
                {hero.description}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="cta" 
                size="lg"
                onClick={handleWhatsAppClick}
                className="group px-8 py-4 text-lg shadow-vintage"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                <span className="font-display">{hero.cta.text}</span>
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="boho" 
                size="lg"
                className="px-8 py-4 text-lg"
              >
                <span className="font-display">{hero.cta.secondary}</span>
              </Button>
            </div>

            {/* Handwritten-style quote */}
            <div className="relative mt-8">
              <div className="vintage-border p-6 bg-boho-cream/30 rounded-2xl transform -rotate-1">
                <p className="text-lg font-display text-boho-earth italic leading-relaxed">
                  "Where every journey becomes a story worth telling..."
                </p>
                <div className="mt-2 flex justify-end">
                  <div className="w-16 h-0.5 bg-gradient-to-r from-primary to-accent"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Overlapping Gallery Slider */}
          <div className="relative animate-slide-up">
            <div className="relative w-full h-[600px] md:h-[700px]">
              
              {/* Main slider container */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-vintage">
                {sliderImages.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-1000 ${
                      index === currentSlide 
                        ? 'opacity-100 scale-100' 
                        : 'opacity-0 scale-105'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`Hostel view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                    {/* Vintage overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-boho-rust/20 via-transparent to-primary/20 mix-blend-overlay"></div>
                  </div>
                ))}

                {/* Navigation arrows */}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-card/80 rounded-full flex items-center justify-center shadow-soft hover:bg-card hover:scale-110 transition-all duration-300 group"
                >
                  <ChevronLeft className="h-6 w-6 text-foreground group-hover:text-primary" />
                </button>

                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-card/80 rounded-full flex items-center justify-center shadow-soft hover:bg-card hover:scale-110 transition-all duration-300 group"
                >
                  <ChevronRight className="h-6 w-6 text-foreground group-hover:text-primary" />
                </button>

                {/* Slide indicators */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                  {sliderImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentSlide 
                          ? 'bg-primary shadow-glow scale-125' 
                          : 'bg-card/60 hover:bg-card/80'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Overlapping polaroid frames */}
              <div className="absolute -top-6 -right-6 w-32 h-40 polaroid-frame bg-white transform rotate-12 animate-float shadow-vintage">
                <img
                  src={gallery1}
                  alt="Cozy atmosphere"
                  className="w-full h-24 object-cover rounded-sm"
                />
                <p className="text-xs font-display text-center mt-2 text-boho-earth">Cozy vibes ✨</p>
              </div>

              <div className="absolute -bottom-8 -left-8 w-36 h-44 polaroid-frame bg-white transform -rotate-6 animate-float shadow-vintage" style={{ animationDelay: '1s' }}>
                <img
                  src={gallery2}
                  alt="Social spaces"
                  className="w-full h-28 object-cover rounded-sm"
                />
                <p className="text-xs font-display text-center mt-2 text-boho-earth">Meet fellow travelers</p>
              </div>

              {/* Decorative scrapbook elements */}
              <div className="absolute top-12 left-12 scrapbook-element">
                <div className="w-16 h-12 bg-accent/80 rounded-lg transform rotate-12 shadow-soft"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator with boho styling */}
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
        <div className="w-8 h-12 border-2 border-boho-rust/60 rounded-full flex justify-center group-hover:border-primary transition-colors bg-boho-cream/50">
          <div className="w-1.5 h-4 bg-gradient-to-b from-primary to-boho-rust rounded-full mt-2 animate-pulse group-hover:scale-110 transition-transform"></div>
        </div>
        <div className="mt-2 text-center">
          <span className="text-xs font-display text-muted-foreground group-hover:text-primary transition-colors">Scroll</span>
        </div>
      </button>
    </section>
  );
};