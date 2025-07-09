/**
 * Rooms Section Component for HostelLandingTemplateV1
 * Displays all room types with descriptions and booking CTAs
 * All content is loaded from rooms.json
 */

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Users, Bed, Shield, ExternalLink } from "lucide-react";
import roomsData from "@/data/rooms.json";

// Import room images
import roomDorm6 from "@/assets/room-dorm-6.jpg";
import roomDorm4 from "@/assets/room-dorm-4.jpg";
import roomFemale from "@/assets/room-female.jpg";
import roomPrivate from "@/assets/room-private.jpg";

const imageMap = {
  "/src/assets/room-dorm-6.jpg": roomDorm6,
  "/src/assets/room-dorm-4.jpg": roomDorm4,
  "/src/assets/room-female.jpg": roomFemale,
  "/src/assets/room-private.jpg": roomPrivate,
};

// Icon mapping for room features
const featureIconMap = {
  "Shared bathroom": Bed,
  "Ensuite bathroom": Bed,
  "Air conditioning": Users,
  "Privacy curtains": Shield,
  "Personal locker": Shield,
  "Women-only space": Shield,
  "Hair dryer included": Users,
  "Extra security": Shield,
  "Private bathroom": Bed,
  "Double bed": Bed,
  "Mini fridge": Users,
  "Larger personal space": Users,
};

export const RoomsSection = () => {
  const { title, description, from_text, rooms, booking_note } = roomsData;

  const handleBookingClick = (link: string) => {
    window.open(link, '_blank');
  };

  return (
    <section className="py-20 bg-muted/30" id="rooms">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="heading-section text-foreground mb-4">
            {title}
          </h2>
          <p className="text-body text-muted-foreground max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {rooms.map((room, index) => {
            const imageSrc = imageMap[room.image as keyof typeof imageMap];
            
            return (
              <Card 
                key={room.id} 
                className="overflow-hidden hover-lift group border-0 shadow-lg hover:shadow-2xl bg-card animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative">
                  <img
                    src={imageSrc}
                    alt={room.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-white/90 text-primary font-semibold">
                      {from_text} {room.price_from}/night
                    </Badge>
                  </div>
                </div>

                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start">
                    <h3 className="text-2xl font-bold text-card-foreground">
                      {room.name}
                    </h3>
                  </div>
                  <p className="text-muted-foreground">
                    {room.description}
                  </p>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Features */}
                  <div className="grid grid-cols-2 gap-2">
                    {room.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Buttons */}
                  <div className="space-y-3">
                    <Button 
                      variant="cta" 
                      size="lg"
                      onClick={() => handleBookingClick(room.cta.link)}
                      className="w-full group"
                    >
                      <MessageCircle className="mr-2 h-4 w-4" />
                      {room.cta.text}
                    </Button>
                    
                    {room.booking_button?.enabled && (
                      <Button 
                        variant="outline" 
                        size="lg"
                        onClick={() => handleBookingClick(room.booking_button.url)}
                        className="w-full group"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        {room.booking_button.text}
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Booking Note */}
        <div className="text-center">
          <p className="text-sm text-muted-foreground bg-card p-4 rounded-lg border">
            {booking_note}
          </p>
        </div>
      </div>
    </section>
  );
};