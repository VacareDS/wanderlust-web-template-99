/**
 * Final CTA Section Component for HostelLandingTemplateV1
 * Displays the final call-to-action to encourage bookings
 * All content is loaded from home.json
 */

import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";
import homeData from "@/data/home.json";

export const FinalCTASection = () => {
  const { final_cta } = homeData;

  const handleBookingClick = () => {
    window.open(final_cta.button.link, '_blank');
  };

  return (
    <section className="py-20 bg-gradient-to-r from-primary via-primary-glow to-accent text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='10' cy='10' r='2'/%3E%3Ccircle cx='50' cy='50' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-shadow font-display">
            {final_cta.title}
          </h2>
          
          <p className="text-xl md:text-2xl mb-12 opacity-95 text-shadow leading-relaxed">
            {final_cta.description}
          </p>

          {/* Dual CTA buttons with better spacing */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <Button 
              variant="outline" 
              size="lg"
              onClick={handleBookingClick}
              className="group px-10 py-5 text-lg font-semibold bg-white text-primary hover:bg-white/90 border-0 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-display min-w-[200px]"
            >
              <MessageCircle className="mr-3 h-5 w-5" />
              {final_cta.button.text}
              <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="boho" 
              size="lg"
              className="px-10 py-5 text-lg font-display bg-boho-cream/90 text-boho-earth border-2 border-white/40 hover:bg-white/20 hover:border-white/60 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 min-w-[200px]"
            >
              Check Availability
            </Button>
          </div>

          {/* Decorative elements */}
          <div className="flex justify-center items-center gap-8 mt-16 opacity-60">
            <div className="w-12 h-px bg-white"></div>
            <div className="w-3 h-3 bg-white rounded-full"></div>
            <div className="w-12 h-px bg-white"></div>
          </div>
        </div>
      </div>
    </section>
  );
};