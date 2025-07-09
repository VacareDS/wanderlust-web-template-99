/**
 * Boho Gallery Section Component for HostelLandingTemplateV2
 * Features polaroid-style framing and scrapbook aesthetic
 */

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { X, Heart, Camera } from "lucide-react";
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

export const BohoGallerySection = () => {
  const { gallery } = homeData;
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openLightbox = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  // Scrapbook style captions
  const scrapbookCaptions = [
    "Our cozy corner 💫",
    "Morning coffee vibes ☕",
    "Where stories begin 📖",
    "Sunset memories 🌅",
    "Friends & laughter 🎭",
    "Home away from home 🏠"
  ];

  return (
    <section className="py-20 bg-gradient-earth relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-40 h-40 border-2 border-dashed border-accent/20 rounded-full animate-float opacity-50"></div>
        <div className="absolute bottom-40 right-20 w-24 h-24 bg-boho-rust/10 rounded-lg rotate-45 animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-boho-cream/60 rounded-full border-2 border-dashed border-primary/40 mb-6">
            <Camera className="h-4 w-4 text-primary" />
            <span className="text-sm font-display font-medium text-boho-earth">Photo Gallery</span>
          </div>
          
          <h2 className="heading-section text-foreground brush-stroke mb-4">
            {gallery.title}
          </h2>
          
          <p className="text-body text-muted-foreground max-w-2xl mx-auto">
            Captured moments from our rustic haven
          </p>
        </div>

        {/* Scrapbook-style Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {gallery.images.map((image, index) => {
            const imageSrc = imageMap[image.src as keyof typeof imageMap];
            const caption = scrapbookCaptions[index] || image.alt;
            
            return (
              <div 
                key={index}
                className={`animate-slide-up ${
                  index % 2 === 0 ? 'mt-8' : 'mb-8'
                } hover-lift-gentle`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Polaroid frame */}
                <div 
                  className={`polaroid-frame cursor-pointer group ${
                    index % 3 === 0 ? 'rotate-2' : index % 3 === 1 ? '-rotate-1' : 'rotate-1'
                  }`}
                  onClick={() => openLightbox(imageSrc)}
                >
                  <div className="relative overflow-hidden rounded-sm">
                    <img
                      src={imageSrc}
                      alt={image.alt}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    
                    {/* Vintage overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-boho-rust/10 via-transparent to-accent/10 mix-blend-overlay"></div>
                    
                    {/* View overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="text-white text-sm font-display bg-black/50 px-3 py-1 rounded-full">
                        {gallery.view_image_button}
                      </div>
                    </div>
                  </div>
                  
                  {/* Handwritten-style caption */}
                  <div className="mt-3 text-center">
                    <p className="text-sm font-display text-boho-earth italic font-medium">
                      {caption}
                    </p>
                    
                    {/* Small decorative heart */}
                    <div className="flex justify-center mt-1">
                      <Heart className="h-3 w-3 text-accent fill-current" />
                    </div>
                  </div>
                </div>

                {/* Scrapbook decorative elements */}
                {index % 4 === 0 && (
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-accent/80 rounded-full shadow-soft"></div>
                )}
                
                {index % 5 === 0 && (
                  <div className="absolute -bottom-3 -left-3 w-4 h-8 bg-primary/60 rounded-sm transform rotate-45 shadow-soft"></div>
                )}
              </div>
            );
          })}
        </div>

        {/* Handwritten note at bottom */}
        <div className="mt-16 text-center">
          <div className="inline-block vintage-border p-6 bg-boho-cream/40 rounded-2xl transform rotate-1 max-w-md mx-auto">
            <p className="text-base font-display text-boho-earth italic leading-relaxed">
              "Every corner tells a story, every moment becomes a memory... 
              This is where your adventure begins."
            </p>
            <div className="mt-3 flex justify-center">
              <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <div className="relative max-w-4xl max-h-[90vh] animate-fade-in">
              <button
                onClick={closeLightbox}
                className="absolute -top-12 right-0 text-white hover:text-accent transition-colors"
              >
                <X className="h-8 w-8" />
              </button>
              
              {/* Image in vintage frame */}
              <div className="polaroid-frame rotate-0 scale-110">
                <img
                  src={selectedImage}
                  alt="Gallery image"
                  className="max-w-full max-h-full object-contain rounded-sm"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};