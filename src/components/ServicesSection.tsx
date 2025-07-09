/**
 * Services Section Component for HostelLandingTemplateV1
 * Displays featured services from home.json
 */

import { Card, CardContent } from "@/components/ui/card";
import { Bed, Car, Coffee, Luggage } from "lucide-react";
import homeData from "@/data/home.json";

// Icon mapping for dynamic icon rendering
const iconMap = {
  Bed,
  Car,
  Coffee,
  Luggage,
};

export const ServicesSection = () => {
  const { featured_services, featured_services_section } = homeData;

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="heading-section text-foreground mb-4">
            {featured_services_section.title}
          </h2>
          <p className="text-body text-muted-foreground max-w-2xl mx-auto">
            {featured_services_section.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featured_services.map((service, index) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap] || Bed;
            
            return (
              <Card 
                key={index} 
                className="hover-lift group border-0 shadow-md hover:shadow-xl bg-card animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 mx-auto mb-4 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-7 w-7 text-white" />
                  </div>
                  
                  <h3 className="text-lg font-semibold mb-2 text-card-foreground">
                    {service.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground">
                    {service.description}
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