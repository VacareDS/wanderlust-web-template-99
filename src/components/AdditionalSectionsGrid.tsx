/**
 * Additional Sections Grid Component
 * Displays extra information cards to fill layout space
 * All content is loaded from app-config.json
 */

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  ShieldCheck, HelpCircle, Users, Heart, 
  ExternalLink, Instagram, Facebook 
} from "lucide-react";
import { TikTokIcon } from "@/components/icons/TikTokIcon";
import appConfig from "@/data/app-config.json";
import contactData from "@/data/contact.json";

// Icon mapping for dynamic icon rendering
const iconMap = {
  ShieldCheck,
  HelpCircle,
  Users,
  Heart,
  ExternalLink,
  Instagram,
  Facebook,
  TikTok: TikTokIcon,
};

export const AdditionalSectionsGrid = () => {
  const { additional_sections, ui_labels } = appConfig;
  const { social_media, booking_platforms } = contactData;

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
          {/* Dynamic Additional Sections */}
          {additional_sections.map((section, index) => {
            const IconComponent = iconMap[section.icon as keyof typeof iconMap] || ShieldCheck;
            
            return (
              <Card 
                key={section.id} 
                className="hover-lift group border-0 shadow-md hover:shadow-lg bg-card animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center pb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">{section.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">{section.description}</p>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-2">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}

          {/* Follow Us Card */}
          <Card className="hover-lift group border-0 shadow-md hover:shadow-lg bg-card animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <CardHeader className="text-center pb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                <Instagram className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-lg">{ui_labels.follow_us_title}</CardTitle>
              <p className="text-sm text-muted-foreground">{ui_labels.follow_us_description}</p>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="space-y-3">
                {social_media.map((social, index) => {
                  const IconComponent = iconMap[social.icon as keyof typeof iconMap] || Instagram;
                  
                  return (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-sm hover:text-primary transition-colors group/social"
                    >
                      <IconComponent className="h-4 w-4 text-primary" />
                      <span className="text-muted-foreground group-hover/social:text-primary transition-colors">
                        {social.handle}
                      </span>
                    </a>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Book Online Card */}
          <Card className="hover-lift group border-0 shadow-md hover:shadow-lg bg-card animate-slide-up" style={{ animationDelay: '0.5s' }}>
            <CardHeader className="text-center pb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                <ExternalLink className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-lg">{ui_labels.book_online_title}</CardTitle>
              <p className="text-sm text-muted-foreground">{ui_labels.book_online_description}</p>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="space-y-3">
                {booking_platforms.map((platform, index) => (
                  <a
                    key={index}
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm hover:text-primary transition-colors group/platform"
                  >
                    <ExternalLink className="h-4 w-4 text-primary" />
                    <span className="text-muted-foreground group-hover/platform:text-primary transition-colors">
                      {platform.name}
                    </span>
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};