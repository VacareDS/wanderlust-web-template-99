/**
 * Location Section Component for HostelLandingTemplateV1
 * Displays location info, map, and nearby attractions
 * All content is loaded from location.json
 */

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Building, Train, ShoppingBag, Castle, Music, Trees,
  Plane, Bus, MapPin 
} from "lucide-react";
import locationData from "@/data/location.json";

// Icon mapping for dynamic icon rendering
const iconMap = {
  Building,
  Train,
  ShoppingBag,
  Castle,
  Music,
  Trees,
  Plane,
  Bus,
  MapPin,
};

export const LocationSection = () => {
  const { title, description, address, nearby_attractions, transportation, directions, google_maps, ui_labels } = locationData;

  return (
    <section className="py-20 bg-muted/30" id="location">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="heading-section text-foreground mb-4">
            {title}
          </h2>
          <p className="text-body text-muted-foreground max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Map - Takes up 2 columns on large screens */}
          <div className="lg:col-span-2 animate-slide-up">
            <Card className="overflow-hidden border-0 shadow-lg h-full">
              {google_maps?.enabled ? (
                <iframe
                  src={google_maps.embed_url}
                  className="w-full h-80 lg:h-96"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={ui_labels.interactive_map_title}
                ></iframe>
              ) : (
                <div className="h-80 lg:h-96 bg-muted flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                     <h3 className="text-xl font-semibold mb-2">{ui_labels.interactive_map_title}</h3>
                     <p className="text-muted-foreground">
                       {address.street}, {address.city}
                     </p>
                     <p className="text-sm text-muted-foreground mt-2">
                       {ui_labels.map_coming_soon}
                    </p>
                  </div>
                </div>
              )}
            </Card>
          </div>

          {/* Location Info - Takes up 1 column */}
          <div className="space-y-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            {/* Address */}
            <Card className="border-0 shadow-md">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <MapPin className="h-5 w-5 text-primary" />
                  {ui_labels.our_address_title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {address.street}<br />
                  {address.city}, {address.postal_code}<br />
                  {address.country}
                </p>
              </CardContent>
            </Card>

            {/* Nearby Attractions - Compact */}
            <Card className="border-0 shadow-md">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">{ui_labels.whats_nearby_title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-2">
                  {nearby_attractions.slice(0, 4).map((attraction, index) => {
                    const IconComponent = iconMap[attraction.icon as keyof typeof iconMap];
                    
                    return (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <IconComponent className="h-3 w-3 text-primary" />
                          <span className="text-xs font-medium">{attraction.name}</span>
                        </div>
                        <Badge variant="outline" className="text-xs py-0 px-2">
                          {attraction.distance}
                        </Badge>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Additional Info Grid */}
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {/* Nearby Attractions - Full List */}
          <Card className="border-0 shadow-md animate-fade-in">
            <CardHeader>
              <CardTitle>{ui_labels.all_attractions_title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-3">
                {nearby_attractions.map((attraction, index) => {
                  const IconComponent = iconMap[attraction.icon as keyof typeof iconMap];
                  
                  return (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <IconComponent className="h-4 w-4 text-primary" />
                        <span className="text-sm font-medium">{attraction.name}</span>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {attraction.distance}
                      </Badge>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Transportation */}
          <Card className="border-0 shadow-md animate-fade-in">
            <CardHeader>
              <CardTitle>{ui_labels.transportation_title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {transportation.map((transport, index) => {
                  const IconComponent = iconMap[transport.icon as keyof typeof iconMap];
                  
                  return (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <IconComponent className="h-4 w-4 text-primary" />
                        <div>
                          <span className="text-sm font-medium block">{transport.name}</span>
                          <span className="text-xs text-muted-foreground">{transport.type}</span>
                        </div>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {transport.time}
                      </Badge>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Directions */}
        <div className="mt-12 animate-fade-in">
          <Card className="border-0 shadow-md">
            <CardHeader>
              <CardTitle>{ui_labels.directions_title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                  <Plane className="h-4 w-4 text-primary" />
                  {ui_labels.direction_headers.from_airport}
                </h4>
                <p className="text-sm text-muted-foreground">{directions.from_airport}</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                  <Train className="h-4 w-4 text-primary" />
                  {ui_labels.direction_headers.from_train_station}
                </h4>
                <p className="text-sm text-muted-foreground">{directions.from_train_station}</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                  <Bus className="h-4 w-4 text-primary" />
                  {ui_labels.direction_headers.from_bus_terminal}
                </h4>
                <p className="text-sm text-muted-foreground">{directions.from_bus_terminal}</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};