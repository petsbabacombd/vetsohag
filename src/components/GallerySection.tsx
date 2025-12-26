import { useState } from "react";
import { X } from "lucide-react";
import { LazyImage } from "./LazyImage";

// Optimized WebP images with responsive sizes
import gallery1 from "@/assets/gallery-1.jpg?w=400&format=webp";
import gallery1Thumb from "@/assets/gallery-1.jpg?w=40&format=webp";
import gallery2 from "@/assets/gallery-2.png?w=400&format=webp";
import gallery2Thumb from "@/assets/gallery-2.png?w=40&format=webp";
import gallery3 from "@/assets/gallery-3.png?w=400&format=webp";
import gallery3Thumb from "@/assets/gallery-3.png?w=40&format=webp";
import gallery4 from "@/assets/gallery-4.jpeg?w=400&format=webp";
import gallery4Thumb from "@/assets/gallery-4.jpeg?w=40&format=webp";
import gallery5 from "@/assets/gallery-5.jpeg?w=400&format=webp";
import gallery5Thumb from "@/assets/gallery-5.jpeg?w=40&format=webp";
import gallery6 from "@/assets/gallery-6.jpeg?w=400&format=webp";
import gallery6Thumb from "@/assets/gallery-6.jpeg?w=40&format=webp";
import gallery7 from "@/assets/gallery-7.jpeg?w=400&format=webp";
import gallery7Thumb from "@/assets/gallery-7.jpeg?w=40&format=webp";
import gallery8 from "@/assets/gallery-8.jpeg?w=400&format=webp";
import gallery8Thumb from "@/assets/gallery-8.jpeg?w=40&format=webp";
import gallery9 from "@/assets/gallery-9.jpeg?w=400&format=webp";
import gallery9Thumb from "@/assets/gallery-9.jpeg?w=40&format=webp";
import gallery10 from "@/assets/gallery-10.jpeg?w=400&format=webp";
import gallery10Thumb from "@/assets/gallery-10.jpeg?w=40&format=webp";
import gallery11 from "@/assets/gallery-11.jpeg?w=400&format=webp";
import gallery11Thumb from "@/assets/gallery-11.jpeg?w=40&format=webp";
import gallery12 from "@/assets/gallery-12.jpeg?w=400&format=webp";
import gallery12Thumb from "@/assets/gallery-12.jpeg?w=40&format=webp";
import gallery13 from "@/assets/gallery-13.jpeg?w=400&format=webp";
import gallery13Thumb from "@/assets/gallery-13.jpeg?w=40&format=webp";
import gallery14 from "@/assets/gallery-14.jpeg?w=400&format=webp";
import gallery14Thumb from "@/assets/gallery-14.jpeg?w=40&format=webp";
import gallery15 from "@/assets/gallery-15.jpeg?w=400&format=webp";
import gallery15Thumb from "@/assets/gallery-15.jpeg?w=40&format=webp";
import gallery16 from "@/assets/gallery-16.jpeg?w=400&format=webp";
import gallery16Thumb from "@/assets/gallery-16.jpeg?w=40&format=webp";
import gallery17 from "@/assets/gallery-17.jpeg?w=400&format=webp";
import gallery17Thumb from "@/assets/gallery-17.jpeg?w=40&format=webp";
import gallery18 from "@/assets/gallery-18.jpeg?w=400&format=webp";
import gallery18Thumb from "@/assets/gallery-18.jpeg?w=40&format=webp";
import gallery19 from "@/assets/gallery-19.jpeg?w=400&format=webp";
import gallery19Thumb from "@/assets/gallery-19.jpeg?w=40&format=webp";
import profileMain from "@/assets/profile-main.jpeg?w=400&format=webp";
import profileMainThumb from "@/assets/profile-main.jpeg?w=40&format=webp";

// Full size images for lightbox
import gallery1Full from "@/assets/gallery-1.jpg?format=webp";
import gallery2Full from "@/assets/gallery-2.png?format=webp";
import gallery3Full from "@/assets/gallery-3.png?format=webp";
import gallery4Full from "@/assets/gallery-4.jpeg?format=webp";
import gallery5Full from "@/assets/gallery-5.jpeg?format=webp";
import gallery6Full from "@/assets/gallery-6.jpeg?format=webp";
import gallery7Full from "@/assets/gallery-7.jpeg?format=webp";
import gallery8Full from "@/assets/gallery-8.jpeg?format=webp";
import gallery9Full from "@/assets/gallery-9.jpeg?format=webp";
import gallery10Full from "@/assets/gallery-10.jpeg?format=webp";
import gallery11Full from "@/assets/gallery-11.jpeg?format=webp";
import gallery12Full from "@/assets/gallery-12.jpeg?format=webp";
import gallery13Full from "@/assets/gallery-13.jpeg?format=webp";
import gallery14Full from "@/assets/gallery-14.jpeg?format=webp";
import gallery15Full from "@/assets/gallery-15.jpeg?format=webp";
import gallery16Full from "@/assets/gallery-16.jpeg?format=webp";
import gallery17Full from "@/assets/gallery-17.jpeg?format=webp";
import gallery18Full from "@/assets/gallery-18.jpeg?format=webp";
import gallery19Full from "@/assets/gallery-19.jpeg?format=webp";
import profileMainFull from "@/assets/profile-main.jpeg?format=webp";

const galleryImages = [
  { src: profileMain, thumb: profileMainThumb, full: profileMainFull, alt: "Dr. Sohag Talukder in surgical scrubs", category: "Clinical" },
  { src: gallery17, thumb: gallery17Thumb, full: gallery17Full, alt: "Dr. Sohag Talukder at histopathology laboratory with microscope", category: "Research" },
  { src: gallery18, thumb: gallery18Thumb, full: gallery18Full, alt: "Dr. Sohag Talukder holding calico cat at clinic", category: "Clinical" },
  { src: gallery19, thumb: gallery19Thumb, full: gallery19Full, alt: "Surgical team performing procedure", category: "Surgery" },
  { src: gallery4, thumb: gallery4Thumb, full: gallery4Full, alt: "Veterinary consultation with cat at Vet Care Center", category: "Clinical" },
  { src: gallery8, thumb: gallery8Thumb, full: gallery8Full, alt: "Caring for rabbit patient", category: "Clinical" },
  { src: gallery9, thumb: gallery9Thumb, full: gallery9Full, alt: "Wildlife consultation with peacock", category: "Wildlife" },
  { src: gallery10, thumb: gallery10Thumb, full: gallery10Full, alt: "With white kitten patients at clinic", category: "Clinical" },
  { src: gallery11, thumb: gallery11Thumb, full: gallery11Full, alt: "With Persian cat patient", category: "Clinical" },
  { src: gallery12, thumb: gallery12Thumb, full: gallery12Full, alt: "Caring for orange cat", category: "Clinical" },
  { src: gallery13, thumb: gallery13Thumb, full: gallery13Full, alt: "With white kittens at clinic", category: "Clinical" },
  { src: gallery14, thumb: gallery14Thumb, full: gallery14Full, alt: "With white Persian cat patient", category: "Clinical" },
  { src: gallery15, thumb: gallery15Thumb, full: gallery15Full, alt: "With German Shepherd dog", category: "Canine" },
  { src: gallery16, thumb: gallery16Thumb, full: gallery16Full, alt: "Surgical procedures portfolio", category: "Surgery" },
  { src: gallery5, thumb: gallery5Thumb, full: gallery5Full, alt: "Caring for kitten patient", category: "Clinical" },
  { src: gallery1, thumb: gallery1Thumb, full: gallery1Full, alt: "Documentation and clinical notes", category: "Clinical" },
  { src: gallery2, thumb: gallery2Thumb, full: gallery2Full, alt: "Examining cat patient with stethoscope", category: "Clinical" },
  { src: gallery3, thumb: gallery3Thumb, full: gallery3Full, alt: "Surgical procedure at Vet Care Center", category: "Clinical" },
  { src: gallery6, thumb: gallery6Thumb, full: gallery6Full, alt: "Working with pheasant bird", category: "Wildlife" },
  { src: gallery7, thumb: gallery7Thumb, full: gallery7Full, alt: "Treating bird patient", category: "Avian" },
];

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="section-padding bg-background">
      <div className="container-narrow mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Visual Journey
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
            Photo Gallery
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Moments from clinical practice, research work, and academic events
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative aspect-square rounded-xl overflow-hidden cursor-pointer group"
              onClick={() => setSelectedImage(image.full)}
            >
              <LazyImage
                src={image.src}
                placeholderSrc={image.thumb}
                alt={image.alt}
                className="w-full h-full transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="inline-block px-2 py-1 bg-background/90 text-foreground text-xs font-medium rounded">
                  {image.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 w-12 h-12 bg-background rounded-full flex items-center justify-center text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={selectedImage}
              alt="Gallery image enlarged"
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
      </div>
    </section>
  );
}
