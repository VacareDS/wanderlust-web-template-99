/**
 * Detailed Services Section Component for HostelLandingTemplateV1
 * Displays comprehensive list of all services
 * All content is loaded from services.json
 */

import { Card, CardContent } from "@/components/ui/card";
import { 
  Wifi, ChefHat, Shirt, Luggage, Car, Coffee, Shield, MapPin, 
  Users, Gamepad2, Bike, Phone 
} from "lucide-react";
import servicesData from "@/data/services.json";

// Icon mapping for dynamic icon rendering
const iconMap = {
  Wifi,
  ChefHat,
  Shirt,
  Luggage,
  Car,
  Coffee,
  Shield,
  MapPin,
  Users,
  Gamepad2,
  Bike,
  Phone,
};

export const DetailedServicesSection = () => {
  const { title, description, services } = servicesData;

  return (
    <section className="py-20 bg-background" id="services">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="heading-section text-foreground mb-4">
            {title}
          </h2>
          <p className="text-body text-muted-foreground max-w-3xl mx-auto">
            {description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap] || Wifi;
            
            return (
              <Card 
                key={index} 
                className="hover-lift group border-0 shadow-md hover:shadow-lg bg-card animate-slide-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-2 text-card-foreground">
                        {service.name}
                      </h3>
                      
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};