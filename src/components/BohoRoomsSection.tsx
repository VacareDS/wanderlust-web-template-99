/**
 * Boho Rooms Section Component for HostelLandingTemplateV2
 * Features asymmetrical layouts and soft-edged cards
 */

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, ExternalLink, Bed, Users, Sparkles } from "lucide-react";
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

export const BohoRoomsSection = () => {
  const { title, description, from_text, rooms, booking_note } = roomsData;

  const handleBookingClick = (link: string) => {
    window.open(link, '_blank');
  };

  return (
    <section className="py-20 bg-card relative overflow-hidden" id="rooms">
      {/* Decorative background */}
      <div className="absolute inset-0">
        <div className="absolute top-40 right-10 w-56 h-56 border-2 border-dashed border-accent/20 rounded-full animate-float opacity-40"></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-gradient-to-br from-boho-sage/20 to-primary/20 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-boho-cream/60 rounded-full border-2 border-dashed border-boho-rust/40 mb-6">
            <Bed className="h-4 w-4 text-primary" />
            <span className="text-sm font-display font-medium text-boho-earth">Accommodations</span>
          </div>
          
          <h2 className="heading-section text-foreground brush-stroke mb-4">
            {title}
          </h2>
          <p className="text-body text-muted-foreground max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        {/* Asymmetrical room cards grid */}
        <div className="space-y-12">
          {rooms.map((room, index) => {
            const imageSrc = imageMap[room.image as keyof typeof imageMap];
            const isEven = index % 2 === 0;
            
            return (
              <div 
                key={room.id} 
                className={`grid lg:grid-cols-2 gap-8 items-center animate-slide-up ${
                  isEven ? '' : 'lg:grid-flow-col-dense'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Image side */}
                <div className={`relative ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="relative overflow-hidden rounded-3xl shadow-vintage hover-lift-gentle">
                    <img
                      src={imageSrc}
                      alt={room.name}
                      className="w-full h-80 md:h-96 object-cover transition-transform duration-700 hover:scale-105"
                    />
                    
                    {/* Vintage photo overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-boho-rust/15 via-transparent to-accent/15 mix-blend-overlay"></div>
                    
                    {/* Price badge */}
                    <div className="absolute top-6 right-6">
                      <div className="polaroid-frame rotate-3 bg-white p-2 pb-3 scale-75">
                        <div className="text-center">
                          <p className="text-xs font-display text-boho-earth">{from_text}</p>
                          <p className="text-lg font-display font-bold text-primary">{room.price_from}</p>
                          <p className="text-xs font-display text-muted-foreground">/night</p>
                        </div>
                      </div>
                    </div>

                    {/* Decorative corner elements */}
                    <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-accent/80 rounded-full shadow-soft"></div>
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-primary/60 rounded-full shadow-soft"></div>
                  </div>
                </div>

                {/* Content side */}
                <div className={`space-y-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <Card className="border-0 shadow-vintage bg-gradient-to-br from-boho-cream/50 to-card rounded-3xl p-8 hover-lift-gentle">
                    <CardHeader className="p-0 mb-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="space-y-2">
                          <h3 className="heading-card text-foreground brush-stroke">
                            {room.name}
                          </h3>
                          <div className="flex items-center gap-2">
                            <Users className="h-4 w-4 text-primary" />
                            <span className="text-sm font-display text-muted-foreground">Perfect for travelers</span>
                          </div>
                        </div>
                        <Sparkles className="h-6 w-6 text-accent animate-pulse" />
                      </div>
                      
                      <p className="text-body text-muted-foreground leading-relaxed">
                        {room.description}
                      </p>
                    </CardHeader>

                    <CardContent className="p-0 space-y-6">
                      {/* Features in vintage style */}
                      <div className="space-y-3">
                        <h4 className="font-display font-semibold text-foreground">What's included:</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {room.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center gap-3 p-2 rounded-xl bg-boho-cream/50 border border-boho-rust/20">
                              <div className="w-2 h-2 bg-gradient-to-r from-primary to-accent rounded-full"></div>
                              <span className="text-sm font-body text-muted-foreground">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* CTA Buttons */}
                      <div className="space-y-3">
                        <Button 
                          variant="cta" 
                          size="lg"
                          onClick={() => handleBookingClick(room.cta.link)}
                          className="w-full group shadow-vintage"
                        >
                          <MessageCircle className="mr-2 h-4 w-4" />
                          <span className="font-display">{room.cta.text}</span>
                        </Button>
                        
                        {room.booking_button?.enabled && (
                          <Button 
                            variant="boho" 
                            size="lg"
                            onClick={() => handleBookingClick(room.booking_button.url)}
                            className="w-full group"
                          >
                            <ExternalLink className="mr-2 h-4 w-4" />
                            <span className="font-display">{room.booking_button.text}</span>
                          </Button>
                        )}
                      </div>

                      {/* Handwritten note style */}
                      <div className="vintage-border p-4 bg-boho-cream/30 rounded-2xl transform -rotate-1">
                        <p className="text-sm font-display text-boho-earth italic text-center">
                          "Your comfort is our priority ✨"
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            );
          })}
        </div>

        {/* Booking note in scrapbook style */}
        <div className="mt-16 text-center">
          <div className="inline-block max-w-md mx-auto">
            <div className="polaroid-frame bg-white p-6 pb-8 rotate-1">
              <p className="text-sm font-body text-muted-foreground text-center leading-relaxed">
                {booking_note}
              </p>
              <div className="mt-3 flex justify-center">
                <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};