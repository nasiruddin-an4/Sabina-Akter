"use client";
import React, { useState } from "react";
import Image from "next/image";
import { X, ZoomIn } from "lucide-react";
import { useInView } from "react-intersection-observer";

// Photo data with placeholder images - replace with actual photos
const photos = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=988&auto=format&fit=crop",
    alt: "Professional Portrait",
    category: "Portrait",
    span: "row-span-2", // Tall image
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=987&auto=format&fit=crop",
    alt: "Corporate Meeting",
    category: "Corporate",
    span: "", // Normal
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=987&auto=format&fit=crop",
    alt: "Business Professional",
    category: "Portrait",
    span: "", // Normal
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=987&auto=format&fit=crop",
    alt: "Office Portrait",
    category: "Corporate",
    span: "", // Normal
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1061&auto=format&fit=crop",
    alt: "Leadership Portrait",
    category: "Portrait",
    span: "row-span-2", // Tall image
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1573497019636-c3f9cea37c09?q=80&w=987&auto=format&fit=crop",
    alt: "Conference Speaking",
    category: "Events",
    span: "row-span-2", // Tall image
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?q=80&w=987&auto=format&fit=crop",
    alt: "Executive Portrait",
    category: "Portrait",
    span: "", // Normal
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1573496546735-c2873d10be1f?q=80&w=1035&auto=format&fit=crop",
    alt: "Creative Session",
    category: "Corporate",
    span: "", // Normal
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1573497019418-b400bb3ab074?q=80&w=987&auto=format&fit=crop",
    alt: "Team Collaboration",
    category: "Events",
    span: "row-span-2", // Tall image
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1573167243872-43c6433b9d40?q=80&w=1035&auto=format&fit=crop",
    alt: "Award Ceremony",
    category: "Events",
    span: "", // Normal
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?q=80&w=987&auto=format&fit=crop",
    alt: "Keynote Speech",
    category: "Events",
    span: "", // Normal
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1573496528816-0fb6c6396f7e?q=80&w=987&auto=format&fit=crop",
    alt: "Business Discussion",
    category: "Corporate",
    span: "", // Normal
  },
];

export default function GalleryClient() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true });

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative pt-40 pb-20 lg:pt-56 lg:pb-32 bg-white overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-full h-full pointer-events-none overflow-hidden">
          <div className="absolute -top-[10%] -right-[5%] w-[600px] h-[600px] bg-amber-50 rounded-full blur-[100px] opacity-60 mix-blend-multiply"></div>
          <div className="absolute top-[30%] -left-[10%] w-[500px] h-[500px] bg-blue-50 rounded-full blur-[80px] opacity-60 mix-blend-multiply"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div
            className={`transition-all duration-1000 text-center ${
              heroInView
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            }`}
          >
            <div className="inline-flex items-center gap-4 mb-8">
              <span className="h-px w-12 bg-amber-500"></span>
              <span className="text-amber-600 text-xs font-bold tracking-[0.5em] uppercase">
                Photo Gallery
              </span>
              <span className="h-px w-12 bg-amber-500"></span>
            </div>

            <h1 className="text-6xl lg:text-8xl font-bold text-slate-900 mb-8 leading-[0.9] tracking-tight">
              Moments of <br />
              <span className="text-transparent font-black bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">
                Leadership.
              </span>
            </h1>

            <p className="text-xl text-slate-500 leading-relaxed max-w-3xl mx-auto">
              A curated collection of professional moments capturing the journey
              of vision, leadership, and impact.
            </p>
          </div>
        </div>
      </section>

      {/* Masonry Grid */}
      <section className="py-16 lg:py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
            {photos.map((photo, index) => (
              <PhotoCard
                key={photo.id}
                photo={photo}
                index={index}
                onClick={() => setSelectedPhoto(photo)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setSelectedPhoto(null)}
        >
          <button
            className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
            onClick={() => setSelectedPhoto(null)}
          >
            <X size={24} />
          </button>

          <div
            className="relative max-w-5xl max-h-[85vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedPhoto.src}
              alt={selectedPhoto.alt}
              width={1200}
              height={800}
              className="object-contain w-full h-full rounded-2xl"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent rounded-b-2xl">
              <p className="text-white font-bold text-lg">
                {selectedPhoto.alt}
              </p>
              <p className="text-white/60 text-sm">{selectedPhoto.category}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function PhotoCard({ photo, index, onClick }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div
      ref={ref}
      onClick={onClick}
      className={`group relative overflow-hidden rounded-2xl cursor-pointer break-inside-avoid mb-6 transition-all duration-700 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 50}ms` }}
    >
      <div className="relative">
        <Image
          src={photo.src}
          alt={photo.alt}
          width={500}
          height={photo.span ? 700 : 400}
          className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <p className="text-white font-bold text-lg">{photo.alt}</p>
            <p className="text-white/70 text-sm">{photo.category}</p>
          </div>
        </div>

        {/* Zoom Icon */}
        <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110">
          <ZoomIn size={18} />
        </div>
      </div>
    </div>
  );
}
