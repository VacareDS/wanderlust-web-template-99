/**
 * Floating WhatsApp Button Component
 * Fixed positioning WhatsApp button for easy contact
 * Configuration loaded from app-config.json
 */

import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import appConfig from "@/data/app-config.json";

export const FloatingWhatsApp = () => {
  const { floating_whatsapp } = appConfig;

  if (!floating_whatsapp.enabled) {
    return null;
  }

  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/${floating_whatsapp.phone_number}?text=${encodeURIComponent(floating_whatsapp.message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-lg hover:shadow-xl bg-green-500 hover:bg-green-600 text-white border-0 group animate-bounce hover:animate-none transition-all duration-300"
      size="lg"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="h-6 w-6 group-hover:scale-110 transition-transform" />
    </Button>
  );
};