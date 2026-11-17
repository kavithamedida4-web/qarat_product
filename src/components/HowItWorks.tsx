"use client";

import React from "react";
import { Ruler, Truck, Hammer } from "lucide-react";

interface HowItWorksProps {
  onOpenQuote?: () => void;
}

export default function HowItWorks({ onOpenQuote }: HowItWorksProps) {
  const processSteps = [
    {
      step: "01",
      icon: Ruler,
      title: "Share Material List / Requirements",
      description:
        "Send your required material list or room dimensions via WhatsApp or phone call for an instant wholesale rate calculation."
    },
    {
      step: "02",
      icon: Hammer,
      title: "Get Factory Rates & GST Billing",
      description:
        "Receive direct wholesale pricing on genuine Gyproc, Ramco Hilux, Sakarni, USG Knauf, heavy GI channels, WPC louvers, and UV marble with official GST billing."
    },
    {
      step: "03",
      icon: Truck,
      title: "Depot Dispatch & Site Delivery",
      description:
        "Fast loading directly from our Dubagga, Lucknow depot with same-day tempo or truck dispatch straight to your project site."
    }
  ];

  return (
    <section id="how-it-works" className="py-16 sm:py-20 lg:py-24 bg-[#FAF8F5] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header Section */}
        <div className="text-center max-w-[600px] mx-auto mb-12 sm:mb-16">
          <span className="text-[11px] sm:text-xs font-semibold tracking-widest text-[#C86D3B] uppercase block mb-2">
            Work Process
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-semibold font-[600] text-neutral-900 tracking-tight leading-[1.15] max-w-[600px] mx-auto mb-3">
            Our <span className="text-[#C86D3B]">Process</span>
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal max-w-xl mx-auto">
            Simple 3-step process to get genuine interior and ceiling materials delivered directly from our Lucknow warehouse.
          </p>
        </div>

        {/* 3 Process Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {processSteps.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={idx}
                className="p-8 sm:p-9 rounded-2xl sm:rounded-3xl bg-[#FAF1E8] border border-[#E8A578]/35 shadow-sm flex flex-col items-center text-center relative overflow-hidden"
              >
                {/* Step Number Pill in Top Corner */}
                <div className="absolute top-5 right-5 text-xs font-bold text-[#E8A578] bg-white/80 px-2.5 py-1 rounded-full border border-[#E8A578]/30">
                  Step {item.step}
                </div>

                {/* Brand Terracotta Icon Box (#E8A578) with Charcoal Icon */}
                <div className="w-16 h-16 rounded-2xl bg-[#E8A578] text-[#181B20] flex items-center justify-center mb-6 shadow-md">
                  <IconComponent className="w-7 h-7 stroke-[2]" />
                </div>

                {/* Step Title */}
                <h3 className="text-lg sm:text-xl font-bold text-neutral-900 mb-3 leading-snug">
                  {item.title}
                </h3>

                {/* Step Description */}
                <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
