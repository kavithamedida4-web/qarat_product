"use client";

import React from "react";
import Image from "next/image";
import { Check, Award } from "lucide-react";

interface AboutUsProps {
  onOpenQuote?: (productName?: string) => void;
}

export default function AboutUs({ onOpenQuote }: AboutUsProps) {
  const servicePointsCol1 = [
    "100% Genuine Saint-Gobain Gyproc & Ramco Hilux Boards",
    "Heavy 0.50mm Galvanized GI Channels",
    "Direct Factory-Sealed & Verified Material Stock"
  ];

  const servicePointsCol2 = [
    "Direct Factory Wholesale Rates (with GST Bill)",
    "Ready Bulk Stock in Lucknow Warehouse",
    "Same-Day Tempo & Site Delivery"
  ];

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-24 bg-[#FAF8F5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-14 xl:gap-16 items-center">

          {/* LEFT COLUMN: 2-Column Bento Image & Experience Grid with Real Materials */}
          <div className="lg:col-span-6 w-full flex justify-center">
            <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-5 w-full max-w-[480px]">

              {/* Column 1 (Left): Tall Portrait Photo + Dark Experience Card */}
              <div className="flex flex-col gap-3 sm:gap-4 lg:gap-5">
                {/* 1. Tall Portrait Photo - Real Warehouse Stock */}
                <div className="relative aspect-[3/3.8] rounded-2xl sm:rounded-3xl overflow-hidden shadow-md bg-neutral-100 border border-cream-200">
                  <Image
                    src="/images/qarat/materials/qarat-india-gypsum-board-stock-02.webp"
                    alt="Plasterboard and false ceiling warehouse inventory at Qarat Lucknow depot"
                    fill
                    sizes="(max-width: 640px) 45vw, 25vw"
                    className="object-cover"
                  />
                </div>

                {/* 2. Dark Rounded Experience Banner Card */}
                <div className="p-4 sm:p-5 lg:p-6 rounded-2xl sm:rounded-3xl bg-[#181B20] text-white flex flex-col justify-center shadow-md border border-[#E8A578]/25">
                  <div className="flex items-center space-x-2 text-[#E8A578] mb-1">
                    <Award className="w-5 h-5 flex-shrink-0" />
                    <span className="text-sm sm:text-base font-bold tracking-tight">20+ Years Legacy</span>
                  </div>
                  <p className="text-[11px] sm:text-xs text-neutral-300 leading-relaxed font-normal">
                    Est. 2005 at Ali Nawab Market, Dubagga, Lucknow.
                  </p>
                </div>
              </div>

              {/* Column 2 (Right): Heavy GI Channels + Saint-Gobain Stock */}
              <div className="flex flex-col gap-3 sm:gap-4 lg:gap-5">
                {/* 3. Tall Portrait Heavy GI Channels Photo */}
                <div className="relative aspect-[3/3.8] rounded-2xl sm:rounded-3xl overflow-hidden shadow-md bg-neutral-100 border border-cream-200">
                  <Image
                    src="/images/qarat/materials/qarat-gyproc-saint-gobain-material-01.webp"
                    alt="Heavy gauge galvanized GI ceiling framing channels warehouse profiles"
                    fill
                    sizes="(max-width: 640px) 45vw, 25vw"
                    className="object-cover"
                  />
                </div>

                {/* 4. Saint-Gobain Gyproc / Material Depot Photo */}
                <div className="relative aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden shadow-md bg-neutral-100 border border-cream-200">
                  <Image
                    src="/images/qarat/materials/qarat-gyproc-saint-gobain-material-02.webp"
                    alt="Genuine Saint-Gobain Gyproc boards wholesale stock"
                    fill
                    sizes="(max-width: 640px) 45vw, 25vw"
                    className="object-cover"
                  />
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT COLUMN: Content in Simple English Related to Material Supply */}
          <div className="lg:col-span-6 space-y-5 sm:space-y-6">

            {/* 1. Subtitle & Heading */}
            <div>
              <span className="text-[11px] sm:text-xs font-semibold tracking-widest text-[#C86D3B] uppercase block mb-1.5 sm:mb-2">
                Established 2005 • Dubagga, Lucknow
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-semibold font-[600] text-neutral-900 tracking-tight leading-[1.15] max-w-[600px]">
                Lucknow&apos;s Trusted <span className="text-[#C86D3B]">Wholesale Material Depot</span>
              </h2>
            </div>

            {/* 2. Narrative Description focused 100% on Material Sales */}
            <p className="text-xs sm:text-sm lg:text-[15px] text-neutral-600 leading-relaxed font-normal">
              Founded in 2005 in Dubagga, Lucknow, <strong className="text-neutral-900 font-semibold">QARAT</strong> is Lucknow&apos;s premier wholesale depot and authorized stockist for false ceiling, drywall framing, and modern interior decorative materials.
            </p>
            <p className="text-xs sm:text-sm lg:text-[15px] text-neutral-600 leading-relaxed font-normal">
              We supply contractors, builders, interior designers, and commercial buyers directly with genuine certified brands (<strong className="text-neutral-900 font-semibold">Saint-Gobain Gyproc, Ramco Hilux, Sakarni, USG Knauf</strong>) at transparent factory wholesale rates. With massive ready inventory in our Dubagga depot, we guarantee consistent stock and prompt vehicle dispatch across Lucknow.
            </p>

            {/* 3. 2-Column Service Points with Website Primary Accent Color (#E8A578) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-x-6 sm:gap-y-3.5 pt-1">
              {/* Column 1 */}
              <div className="space-y-2 sm:space-y-3">
                {servicePointsCol1.map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-2.5 sm:space-x-3">
                    <div className="w-5 h-5 rounded-full bg-[#E8A578] text-[#181B20] flex items-center justify-center flex-shrink-0 shadow-sm">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-neutral-800">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* Column 2 */}
              <div className="space-y-2 sm:space-y-3">
                {servicePointsCol2.map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-2.5 sm:space-x-3">
                    <div className="w-5 h-5 rounded-full bg-[#E8A578] text-[#181B20] flex items-center justify-center flex-shrink-0 shadow-sm">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-neutral-800">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
