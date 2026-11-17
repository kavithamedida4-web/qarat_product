"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

interface GalleryPhoto {
  id: string;
  image: string;
  alt: string;
  title: string;
}

export default function Gallery() {
  const [activePhoto, setActivePhoto] = useState<GalleryPhoto | null>(null);

  // 7 Real Material Stock Photos matching the 7-frame diagram in user request
  const galleryPhotos: GalleryPhoto[] = [
    // Frame 1: Top Left (Small Landscape)
    {
      id: "frame-1",
      image: "/images/qarat/materials/qarat-gi-channel-ceiling-framing-03.webp",
      title: "Galvanized GI Ceiling Channels & Sections",
      alt: "Heavy 0.50mm galvanized iron ceiling framing sections in warehouse"
    },
    // Frame 2: Mid Left (Tall Portrait)
    {
      id: "frame-2",
      image: "/images/qarat/materials/qarat-india-gypsum-board-stock-02.webp",
      title: "Ramco Hilux & Gyproc Warehouse Pallet Stack",
      alt: "Ceiling and wall boards stacked on wooden pallets in Lucknow depot"
    },
    // Frame 3: Bottom Left (Small Landscape)
    {
      id: "frame-3",
      image: "/images/qarat/materials/qarat-gi-channel-ceiling-framing-01.webp",
      title: "Drywall Partition Studs & Tracks",
      alt: "Galvanized C-studs and floor tracks for drywall partition walls"
    },
    // Frame 4: Top Right (Large Wide Landscape)
    {
      id: "frame-4",
      image: "/images/qarat/materials/qarat-india-gypsum-board-stock-01.webp",
      title: "Gyproc & Ramco Hilux Boards Stock",
      alt: "Wholesale inventory of certified plasterboards and calcium silicate boards at Qarat depot"
    },
    // Frame 5: Center-Right (Tall Portrait)
    {
      id: "frame-5",
      image: "/images/qarat/materials/qarat-gyproc-saint-gobain-material-02.webp",
      title: "Saint-Gobain Gyproc Plasterboards",
      alt: "Saint-Gobain Gyproc 12.5mm plasterboard pallet stock"
    },
    // Frame 6: Far-Right Top (Small Landscape)
    {
      id: "frame-6",
      image: "/images/qarat/materials/qarat-sakarni-pop-gypsum-plaster-01.webp",
      title: "Sakarni POP Plaster & Jointing Compounds",
      alt: "Sakarni POP gypsum plaster bags and jointing compounds in warehouse"
    },
    // Frame 7: Far-Right Bottom (Small Square/Landscape)
    {
      id: "frame-7",
      image: "/images/qarat/materials/drywall-screws-fasteners-murga-jali-v2.jpg",
      title: "Drywall Screws, Fasteners & Murga Jali",
      alt: "Black bugle drywall screws, expansion fasteners, and Murga Jali wire mesh"
    }
  ];

  return (
    <section id="gallery" className="py-14 sm:py-18 lg:py-24 bg-[#FAF7F2] overflow-hidden">
      <div className="max-w-4xl lg:max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Clean Header */}
        <div className="text-center max-w-[600px] mx-auto mb-10 sm:mb-14">
          <span className="text-[11px] sm:text-xs font-semibold tracking-widest text-[#C86D3B] uppercase block mb-2">
            Material Showcase
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-semibold font-[600] text-neutral-900 tracking-tight leading-[1.15] max-w-[600px] mx-auto">
            Our <span className="text-[#C86D3B]">Materials</span>
          </h2>
        </div>

        {/* Exact 7-Frame Wall Gallery Composition matching user's reference diagram (85:71 aspect ratio) */}
        <div className="relative w-full aspect-[85/74] sm:aspect-[85/71] max-w-[850px] mx-auto">

          {/* 1. FRAME 1: Top Left - Small Landscape Frame */}
          <div
            onClick={() => setActivePhoto(galleryPhotos[0])}
            style={{ left: "0%", top: "0%", width: "33.5%", height: "21.5%" }}
            className="absolute bg-white p-1.5 sm:p-2.5 md:p-3 border-2 sm:border-[3px] border-neutral-900 shadow-[2px_4px_12px_rgba(0,0,0,0.18)] hover:shadow-2xl hover:scale-[1.01] transition-all duration-300 cursor-pointer group"
          >
            <div className="relative w-full h-full overflow-hidden bg-neutral-100">
              <Image
                src={galleryPhotos[0].image}
                alt={galleryPhotos[0].alt}
                fill
                sizes="(max-width: 768px) 35vw, 30vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* 2. FRAME 2: Mid Left - Tall Portrait Frame */}
          <div
            onClick={() => setActivePhoto(galleryPhotos[1])}
            style={{ left: "0%", top: "26.5%", width: "33.5%", height: "47%" }}
            className="absolute bg-white p-1.5 sm:p-2.5 md:p-3.5 border-2 sm:border-[3px] border-neutral-900 shadow-[2px_4px_12px_rgba(0,0,0,0.18)] hover:shadow-2xl hover:scale-[1.01] transition-all duration-300 cursor-pointer group"
          >
            <div className="relative w-full h-full overflow-hidden bg-neutral-100">
              <Image
                src={galleryPhotos[1].image}
                alt={galleryPhotos[1].alt}
                fill
                sizes="(max-width: 768px) 35vw, 30vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* 3. FRAME 3: Bottom Left - Small Landscape Frame */}
          <div
            onClick={() => setActivePhoto(galleryPhotos[2])}
            style={{ left: "0%", top: "78.5%", width: "33.5%", height: "21.5%" }}
            className="absolute bg-white p-1.5 sm:p-2.5 md:p-3 border-2 sm:border-[3px] border-neutral-900 shadow-[2px_4px_12px_rgba(0,0,0,0.18)] hover:shadow-2xl hover:scale-[1.01] transition-all duration-300 cursor-pointer group"
          >
            <div className="relative w-full h-full overflow-hidden bg-neutral-100">
              <Image
                src={galleryPhotos[2].image}
                alt={galleryPhotos[2].alt}
                fill
                sizes="(max-width: 768px) 35vw, 30vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* 4. FRAME 4: Top Right - Large Wide Landscape Frame */}
          <div
            onClick={() => setActivePhoto(galleryPhotos[3])}
            style={{ left: "38%", top: "0%", width: "62%", height: "42%" }}
            className="absolute bg-white p-2 sm:p-3 md:p-4 border-2 sm:border-[3px] border-neutral-900 shadow-[3px_6px_16px_rgba(0,0,0,0.2)] hover:shadow-2xl hover:scale-[1.01] transition-all duration-300 cursor-pointer group"
          >
            <div className="relative w-full h-full overflow-hidden bg-neutral-100">
              <Image
                src={galleryPhotos[3].image}
                alt={galleryPhotos[3].alt}
                fill
                sizes="(max-width: 768px) 65vw, 55vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* 5. FRAME 5: Center-Right - Tall Portrait Frame */}
          <div
            onClick={() => setActivePhoto(galleryPhotos[4])}
            style={{ left: "38%", top: "47%", width: "34%", height: "53%" }}
            className="absolute bg-white p-1.5 sm:p-2.5 md:p-3.5 border-2 sm:border-[3px] border-neutral-900 shadow-[2px_4px_12px_rgba(0,0,0,0.18)] hover:shadow-2xl hover:scale-[1.01] transition-all duration-300 cursor-pointer group"
          >
            <div className="relative w-full h-full overflow-hidden bg-neutral-100">
              <Image
                src={galleryPhotos[4].image}
                alt={galleryPhotos[4].alt}
                fill
                sizes="(max-width: 768px) 35vw, 30vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* 6. FRAME 6: Far-Right Top - Small Landscape Frame */}
          <div
            onClick={() => setActivePhoto(galleryPhotos[5])}
            style={{ left: "76.5%", top: "47%", width: "23.5%", height: "24%" }}
            className="absolute bg-white p-1 sm:p-2 md:p-2.5 border-2 sm:border-[3px] border-neutral-900 shadow-[2px_4px_12px_rgba(0,0,0,0.18)] hover:shadow-2xl hover:scale-[1.01] transition-all duration-300 cursor-pointer group"
          >
            <div className="relative w-full h-full overflow-hidden bg-neutral-100">
              <Image
                src={galleryPhotos[5].image}
                alt={galleryPhotos[5].alt}
                fill
                sizes="(max-width: 768px) 25vw, 20vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* 7. FRAME 7: Far-Right Bottom - Small Square/Landscape Frame */}
          <div
            onClick={() => setActivePhoto(galleryPhotos[6])}
            style={{ left: "76.5%", top: "76%", width: "23.5%", height: "24%" }}
            className="absolute bg-white p-1 sm:p-2 md:p-2.5 border-2 sm:border-[3px] border-neutral-900 shadow-[2px_4px_12px_rgba(0,0,0,0.18)] hover:shadow-2xl hover:scale-[1.01] transition-all duration-300 cursor-pointer group"
          >
            <div className="relative w-full h-full overflow-hidden bg-neutral-100">
              <Image
                src={galleryPhotos[6].image}
                alt={galleryPhotos[6].alt}
                fill
                sizes="(max-width: 768px) 25vw, 20vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

        </div>

      </div>

      {/* Lightbox Modal (Click to View Full Photo) */}
      {activePhoto && (
        <div
          onClick={() => setActivePhoto(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
        >
          <button
            onClick={() => setActivePhoto(null)}
            className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/20 text-white flex items-center justify-center hover:bg-white/40 transition-colors z-50"
          >
            <X className="w-5 h-5" />
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl aspect-[16/10] sm:aspect-[16/9] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl bg-neutral-900 p-2 sm:p-4 border border-neutral-700"
          >
            <Image
              src={activePhoto.image}
              alt={activePhoto.alt}
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}

    </section>
  );
}
