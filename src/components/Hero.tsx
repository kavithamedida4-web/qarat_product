"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface HeroProps {
  onOpenQuote: () => void;
}

export default function Hero({ onOpenQuote }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-[#181B20] text-white min-h-[calc(100svh-56px)] sm:min-h-[calc(100vh-64px)] flex flex-col justify-center">
      {/* Subtle background ambient line elements */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-[#E8A578]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-5 pb-10 sm:py-12 lg:py-16 relative w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-8 items-center">
          
          {/* Left Column: Typography & Layout */}
          <div className="lg:col-span-6 space-y-3 sm:space-y-5 lg:space-y-6 z-10">
            
            {/* Top Eyebrow */}
            <div className="inline-flex items-center space-x-2 text-[11px] sm:text-xs tracking-wider uppercase text-[#E8A578] font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E8A578]"></span>
              <span className="sm:hidden">Wholesale Material Depot • Lucknow</span>
              <span className="hidden sm:inline">Wholesale Interior Materials &amp; Decorative Surfaces • Lucknow</span>
            </div>

            {/* Main Headline with generous line-height and relaxed letter-spacing */}
            <h1 className="text-2xl sm:text-4xl lg:text-[42px] font-semibold font-[600] tracking-normal text-white leading-tight sm:leading-[1.3] lg:leading-[1.35] max-w-[620px]">
              Wholesale Interior &amp; <span className="text-[#E8A578]">Decorative Materials</span> in Lucknow
            </h1>

            {/* Description - Highlighted Brands (Concise on mobile, expanded on desktop) */}
            <p className="text-xs sm:text-sm lg:text-[15px] text-neutral-300/90 leading-relaxed sm:leading-[1.75] max-w-xl font-normal">
              Direct factory wholesale supply of <strong className="text-white font-semibold">Saint-Gobain Gyproc, Ramco Hilux, Sakarni</strong>, and <strong className="text-white font-semibold">USG Knauf</strong><span className="hidden sm:inline">, alongside heavy 0.50mm GI framing channels, WPC louvers, and 8x4 UV marble sheets</span> in Lucknow.
            </p>

            {/* Action Buttons with comfortable clearance */}
            <div className="pt-1 sm:pt-4 flex flex-wrap items-center gap-3 sm:gap-5">
              <a
                href="#contact"
                className="bg-[#E8A578] hover:bg-[#d8976b] text-[#181B20] text-xs sm:text-sm font-semibold px-6 sm:px-8 py-2.5 sm:py-3.5 transition-colors uppercase tracking-wider shadow-md inline-flex items-center justify-center"
              >
                Get Price
              </a>

              <a
                href="#products"
                className="inline-flex items-center space-x-1.5 text-xs sm:text-sm font-medium text-neutral-300 hover:text-[#E8A578] transition-colors py-1.5 border-b border-transparent hover:border-[#E8A578]"
              >
                <span>See All Products</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

          {/* Right Column: Architectural Collage with Balanced Dimensions */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[340px] sm:max-w-[440px] lg:max-w-[540px] h-[290px] sm:h-[370px] md:h-[430px] lg:h-[480px]">
              
              {/* 1. Peach Solid Backdrop Block (top-right, behind main image) */}
              <div className="absolute top-0 right-0 w-[62%] h-[35%] bg-[#F2C9AA] z-0"></div>

              {/* 2. Thin Wireframe Outline Rectangles */}
              <div className="absolute -top-3.5 right-6 sm:right-8 w-[71%] h-[81%] border border-[#E8A578]/40 pointer-events-none z-0"></div>
              <div className="absolute top-8 sm:top-11 left-0 w-[86%] h-[76%] border border-[#E8A578]/25 pointer-events-none z-0"></div>

              {/* 3. Main Image: Real Wholesale Warehouse Stock of Gypsum Plasterboards */}
              <div className="absolute top-3 sm:top-4 right-2 sm:right-4 w-[85%] h-[81%] z-10 shadow-xl overflow-hidden bg-neutral-900 border border-neutral-700/60">
                <Image
                  src="/images/qarat/materials/qarat-india-gypsum-board-stock-01.webp"
                  alt="Real warehouse inventory of Gyproc and false ceiling plasterboards at Qarat Lucknow wholesale depot"
                  fill
                  priority
                  className="object-cover"
                />
              </div>

              {/* 5. Overlapping Secondary Floating Card: Real Heavy Galvanized GI Channels */}
              <div className="absolute bottom-1 left-1 sm:left-3 w-[47%] h-[56%] z-30 shadow-2xl overflow-hidden bg-neutral-900 border-2 border-[#181B20]">
                <Image
                  src="/images/qarat/materials/qarat-gi-channel-ceiling-framing-04.webp"
                  alt="Real heavy 0.50mm galvanized GI ceiling framing channels warehouse stock"
                  fill
                  priority
                  className="object-cover"
                />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
