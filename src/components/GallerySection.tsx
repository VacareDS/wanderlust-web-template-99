/**
 * Gallery Section Component for HostelLandingTemplateV1
 * Displays a grid of hostel images
 * All content is loaded from home.json
 */

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { X } from "lucide-react";
import homeData from "@/data/home.json";

// Import all gallery images
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const imageMap = {
  "/src/assets/gallery-1.jpg": gallery1,
  "/src/assets/gallery-2.jpg": gallery2,
  "/src/assets/gallery-3.jpg": gallery3,
  "/src/assets/gallery-4.jpg": gallery4,
  "/src/assets/gallery-5.jpg": gallery5,
  "/src/assets/gallery-6.jpg": gallery6,
};

export const GallerySection = () => {
  const { gallery } = homeData;
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openLightbox = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="heading-section text-foreground mb-4">
            {gallery.title}
          </h2>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {gallery.images.map((image, index) => {
            const imageSrc = imageMap[image.src as keyof typeof imageMap];
            
            return (
              <Card 
                key={index}
                className="overflow-hidden cursor-pointer hover-lift group border-0 shadow-md hover:shadow-xl animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => openLightbox(imageSrc)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={imageSrc}
                    alt={image.alt}
                    className="w-full h-48 md:h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-white text-sm font-medium bg-black/50 px-3 py-1 rounded">
                     {gallery.view_image_button}
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <div className="relative max-w-4xl max-h-[90vh]">
              <button
                onClick={closeLightbox}
                className="absolute -top-10 right-0 text-white hover:text-primary transition-colors"
              >
                <X className="h-8 w-8" />
              </button>
              <img
                src={selectedImage}
                alt="Gallery image"
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};