/**
 * Footer Component for HostelLandingTemplateV1
 * Displays footer information with links and contact details
 */

import { Bed, Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";
import { TikTokIcon } from "@/components/icons/TikTokIcon";
import contactData from "@/data/contact.json";
import footerData from "@/data/footer.json";

export const Footer = () => {
  const { contact_info, social_media } = contactData;

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const iconMap = {
    Instagram,
    Facebook,
    TikTok: TikTokIcon,
  };

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary-glow rounded-lg flex items-center justify-center">
                <Bed className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold">{footerData.brand.name}</span>
            </div>
            <p className="text-sm text-secondary-foreground/80">
              {footerData.brand.description}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">{footerData.quick_links.title}</h3>
            <div className="space-y-2">
              {footerData.quick_links.links.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block text-sm text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">{footerData.contact_section.title}</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <span>{contact_info.phone.display}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <span>{contact_info.email.address}</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary mt-0.5" />
                <span className="text-secondary-foreground/80">
                  {contact_info.address.street}<br />
                  {contact_info.address.city}
                </span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">{footerData.social_section.title}</h3>
            <div className="flex gap-4">
              {social_media.map((social, index) => {
                const IconComponent = iconMap[social.icon as keyof typeof iconMap];
                
                return (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110"
                  >
                    <IconComponent className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
            <p className="text-xs text-secondary-foreground/60">
              {footerData.social_section.hashtag_text}
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-foreground/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-secondary-foreground/60">
            {footerData.bottom_bar.copyright}
          </p>
          <div className="flex gap-6 text-sm">
            {footerData.bottom_bar.links.map((link, index) => (
              <a key={index} href={link.url} className="text-secondary-foreground/60 hover:text-primary transition-colors">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};