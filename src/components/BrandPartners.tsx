"use client";

import React from "react";

// 1. Saint-Gobain Gyproc Vector SVG Logo
function GyprocVectorLogo({ className = "h-12 sm:h-14 md:h-16 lg:h-18 xl:h-20" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 190 52"
      className={`${className} w-auto`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Grey Back Parallelogram */}
      <polygon points="15,14 33,14 22,48 4,48" fill="#888E95" />
      {/* Blue Front Parallelogram */}
      <polygon points="26,3 44,3 33,37 15,37" fill="#0066B3" />
      {/* 'gyproc' Bold Text */}
      <text
        x="48"
        y="34"
        fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
        fontWeight="900"
        fontSize="34"
        fill="#0066B3"
        letterSpacing="-0.5"
      >
        gyproc
      </text>
      {/* 'SAINT-GOBAIN' Subtext */}
      <text
        x="86"
        y="49"
        fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
        fontWeight="800"
        fontSize="11"
        fill="#181B20"
        letterSpacing="1.2"
      >
        SAINT-GOBAIN
      </text>
    </svg>
  );
}

// 2. Ramco Hilux Vector SVG Logo
function RamcoHiluxVectorLogo({ className = "h-12 sm:h-14 md:h-16 lg:h-18 xl:h-20" }: { className?: string }) {
  return (
    <svg
      viewBox="0 2 156 50"
      className={`${className} w-auto`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* RAMCO Text */}
      <text
        x="2"
        y="13"
        fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
        fontWeight="900"
        fontSize="11"
        fill="#004B87"
        letterSpacing="0.8"
      >
        RAMCO
      </text>
      {/* 4x3 Dot Matrix Grid */}
      <g fill="#004B87">
        <rect x="2" y="18" width="3.4" height="3.4" rx="0.4" />
        <rect x="8.8" y="18" width="3.4" height="3.4" rx="0.4" />
        <rect x="15.6" y="18" width="3.4" height="3.4" rx="0.4" />
        <rect x="22.4" y="18" width="3.4" height="3.4" rx="0.4" />

        <rect x="2" y="24.4" width="3.4" height="3.4" rx="0.4" />
        <rect x="8.8" y="24.4" width="3.4" height="3.4" rx="0.4" />
        <rect x="15.6" y="24.4" width="3.4" height="3.4" rx="0.4" />
        <rect x="22.4" y="24.4" width="3.4" height="3.4" rx="0.4" />

        <rect x="2" y="30.8" width="3.4" height="3.4" rx="0.4" />
        <rect x="8.8" y="30.8" width="3.4" height="3.4" rx="0.4" />
        <rect x="15.6" y="30.8" width="3.4" height="3.4" rx="0.4" />
        <rect x="22.4" y="30.8" width="3.4" height="3.4" rx="0.4" />
      </g>
      {/* HILUX Bold Text */}
      <text
        x="32"
        y="35"
        fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
        fontWeight="900"
        fontSize="34"
        fill="#F15A24"
        letterSpacing="0.2"
      >
        HILUX
      </text>
      {/* CALCIUM SILICATE BOARD Subtext */}
      <text
        x="2"
        y="49"
        fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
        fontWeight="900"
        fontSize="9.5"
        fill="#004B87"
        letterSpacing="0.9"
      >
        CALCIUM SILICATE BOARD
      </text>
    </svg>
  );
}

// 3. Sakarni Vector SVG Logo
function SakarniVectorLogo({ className = "h-14 sm:h-16 md:h-20 lg:h-24 xl:h-26" }: { className?: string }) {
  return (
    <svg
      viewBox="10 4 156 58"
      className={`${className} w-auto`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Orange Sun Disc */}
      <circle cx="88" cy="14" r="8" fill="#F15A24" />
      {/* Flying Blue Eagle Crest */}
      <path
        d="M88 7 C80 7 67 11 56 16 C65 17 76 16 81 20 C78 22 76 24 78 27 C81 24 86 23 88 26 C90 23 95 24 98 27 C100 24 98 22 95 20 C100 16 111 17 120 16 C109 11 96 7 88 7 Z"
        fill="#005B9E"
      />
      <circle cx="88" cy="17" r="2.8" fill="#005B9E" />

      {/* Styled Devanagari Text 'सकरनी' in Official Brand Script */}
      <text
        x="88"
        y="58"
        textAnchor="middle"
        fontFamily="'Mukta', 'Noto Sans Devanagari', 'Poppins', sans-serif"
        fontWeight="900"
        fontSize="44"
        fill="#F15A24"
        letterSpacing="1"
      >
        सकरनी
      </text>
      {/* Registered Symbol */}
      <circle cx="152" cy="35" r="4.2" stroke="#F15A24" strokeWidth="1" fill="none" />
      <text x="152" y="38" textAnchor="middle" fontSize="6" fill="#F15A24" fontWeight="bold">R</text>
    </svg>
  );
}

// 4. USG Knauf Vector SVG Logo
function USGKnaufVectorLogo({ className = "h-12 sm:h-14 md:h-16 lg:h-18 xl:h-20" }: { className?: string }) {
  return (
    <svg
      viewBox="0 4 238 38"
      className={`${className} w-auto`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* 'USG' Bold Text */}
      <text
        x="2"
        y="37"
        fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
        fontWeight="900"
        fontSize="37"
        fill="#333F48"
        letterSpacing="-0.5"
      >
        USG
      </text>
      {/* 'KNAUF' Italic Bold Text */}
      <text
        x="96"
        y="37"
        fontStyle="italic"
        fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
        fontWeight="900"
        fontSize="38"
        fill="#009EE0"
        letterSpacing="-0.5"
      >
        KNAUF
      </text>
    </svg>
  );
}

export default function BrandPartners() {
  return (
    <section className="py-10 sm:py-14 lg:py-20 bg-[#FAF8F5] border-b border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-[680px] mx-auto mb-8 sm:mb-12">
          <span className="text-[11px] sm:text-xs font-bold tracking-widest text-[#C86D3B] uppercase block mb-1.5">
            AUTHORIZED DISTRIBUTOR
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-semibold font-[600] text-[#181B20] tracking-tight leading-[1.15]">
            Our Trusted Brand Partners
          </h2>
        </div>

        {/* Brand Logos Rounded White Card - Expanded Large Premium Card */}
        <div className="bg-white rounded-3xl sm:rounded-[36px] border border-neutral-200/90 shadow-md px-6 py-10 sm:px-10 sm:py-14 md:py-16 lg:px-14 lg:py-20 min-h-[190px] sm:min-h-[240px] lg:min-h-[270px] flex items-center">
          <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 lg:gap-14 xl:gap-16 items-center justify-items-center">
            <div className="w-full flex items-center justify-center p-3 group hover:scale-105 transition-transform duration-200">
              <GyprocVectorLogo className="h-11 sm:h-13 md:h-15 lg:h-18 xl:h-20 w-auto max-w-[190px] sm:max-w-[220px] lg:max-w-[250px]" />
            </div>

            <div className="w-full flex items-center justify-center p-3 group hover:scale-105 transition-transform duration-200">
              <RamcoHiluxVectorLogo className="h-11 sm:h-13 md:h-15 lg:h-18 xl:h-20 w-auto max-w-[190px] sm:max-w-[220px] lg:max-w-[250px]" />
            </div>

            <div className="w-full flex items-center justify-center p-3 group hover:scale-105 transition-transform duration-200">
              <SakarniVectorLogo className="h-14 sm:h-16 md:h-20 lg:h-24 xl:h-26 w-auto max-w-[140px] sm:max-w-[170px] lg:max-w-[190px]" />
            </div>

            <div className="w-full flex items-center justify-center p-3 group hover:scale-105 transition-transform duration-200">
              <USGKnaufVectorLogo className="h-11 sm:h-13 md:h-15 lg:h-18 xl:h-20 w-auto max-w-[190px] sm:max-w-[230px] lg:max-w-[260px]" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
