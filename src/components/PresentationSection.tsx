/**
 * Presentation Section Component for HostelLandingTemplateV1
 * Displays why choose our hostel with key highlights
 * All content is loaded from home.json
 */

import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Users, Shield, Wifi } from "lucide-react";
import homeData from "@/data/home.json";

// Icon mapping for dynamic icon rendering
const iconMap = {
  MapPin,
  Users,
  Shield,
  Wifi,
};

export const PresentationSection = () => {
  const { presentation } = homeData;

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="heading-section text-foreground mb-4">
            {presentation.title}
          </h2>
          <p className="text-body text-muted-foreground max-w-3xl mx-auto">
            {presentation.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {presentation.highlights.map((highlight, index) => {
            const IconComponent = iconMap[highlight.icon as keyof typeof iconMap] || MapPin;
            
            return (
              <Card 
                key={index} 
                className="hover-lift group border-0 shadow-md hover:shadow-xl bg-card animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-primary to-primary-glow rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-8 w-8 text-primary-foreground" />
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 text-card-foreground">
                    {highlight.title}
                  </h3>
                  
                  <p className="text-muted-foreground">
                    {highlight.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};