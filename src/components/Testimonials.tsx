"use client";

import React, { useRef } from "react";
import { Star, Check, ChevronLeft, ChevronRight } from "lucide-react";

interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  rating: number;
  content: string;
  verified: boolean;
}

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Authentic Reviews from https://github.com/Al-tamash/qarat-interior-decorator.git
  const testimonialsList: TestimonialItem[] = [
    {
      id: "1",
      name: "Rahul Verma",
      role: "Commercial Client • Vibhuti Khand, Gomti Nagar",
      rating: 5,
      content:
        "The interior execution was flawless. The design team listened to all our requirements and delivered a spectacular commercial office setup on Vibhuti Khand.",
      verified: true
    },
    {
      id: "2",
      name: "Sneha Gupta",
      role: "Homeowner • Indira Nagar, Lucknow",
      rating: 5,
      content:
        "Amazing gypsum ceiling work. The team was highly professional, respected our space, and finished our living room stepped cove ceiling on the promised timeline.",
      verified: true
    },
    {
      id: "3",
      name: "Amit Singh",
      role: "Villa Owner • Aliganj, Lucknow",
      rating: 5,
      content:
        "Top quality modular kitchen! The Marine ply cabinetry and soft-close hardware are truly durable and the acrylic finishing is top notch. Very satisfied.",
      verified: true
    },
    {
      id: "4",
      name: "Priya Sharma",
      role: "Drawing Room Interior • Hazratganj, Lucknow",
      rating: 5,
      content:
        "Beautiful WPC louvers and UV marble sheet TV unit installation. Completely transformed our drawing room. It looks luxurious and very neat.",
      verified: true
    },
    {
      id: "5",
      name: "Mohd. Rizwan",
      role: "Contractor Partner • Dubagga, Lucknow",
      rating: 5,
      content:
        "Great wholesale pricing for genuine Gyproc boards and GI ceiling channels. Fast delivery to our site in Dubagga with zero damages. Honest suppliers.",
      verified: true
    },
    {
      id: "6",
      name: "Neha Patel",
      role: "Commercial Buyer • Kanpur Road, Lucknow",
      rating: 5,
      content:
        "We purchased the entire false ceiling material set and WPC louvers for our showroom on Kanpur Road. Transparent GST billing, genuine Gyproc boards, and prompt depot delivery.",
      verified: true
    }
  ];

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 390;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="testimonials" className="py-16 sm:py-20 lg:py-24 bg-[#FAF8F5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-[600px] mx-auto mb-12 sm:mb-16">

          {/* Badge Pill in Charcoal & Gold */}
          <div className="inline-block mb-3 sm:mb-4">
            <span className="px-4 py-1.5 rounded-full bg-[#181B20] text-[#E8A578] border border-[#E8A578]/40 text-xs font-semibold tracking-widest uppercase shadow-sm">
              Client Feedback
            </span>
          </div>

          {/* Heading with Rich Terracotta Highlight (#C86D3B) - 600px max width */}
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-semibold font-[600] text-neutral-900 tracking-tight leading-[1.15] max-w-[600px] mx-auto mb-3 sm:mb-4">
            What Our Clients <span className="text-[#C86D3B]">Say</span>
          </h2>

          {/* Subtitle from repo */}
          <p className="text-xs sm:text-sm lg:text-base text-neutral-600 leading-relaxed font-normal max-w-xl mx-auto">
            Real experiences from contractors, builders, and clients across Lucknow.
          </p>
        </div>

        {/* Carousel Container with Charcoal & Gold Side Navigation Arrows */}
        <div className="relative">

          {/* Left Arrow Button */}
          <button
            onClick={() => scroll("left")}
            aria-label="Previous testimonials"
            className="hidden sm:flex absolute -left-4 lg:-left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 lg:w-12 lg:h-12 rounded-full bg-[#181B20] text-[#E8A578] hover:bg-[#E8A578] hover:text-[#181B20] shadow-xl border border-[#E8A578]/30 items-center justify-center transition-all duration-300 hover:scale-105 focus:outline-none"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={() => scroll("right")}
            aria-label="Next testimonials"
            className="hidden sm:flex absolute -right-4 lg:-right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 lg:w-12 lg:h-12 rounded-full bg-[#181B20] text-[#E8A578] hover:bg-[#E8A578] hover:text-[#181B20] shadow-xl border border-[#E8A578]/30 items-center justify-center transition-all duration-300 hover:scale-105 focus:outline-none"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Cards Carousel Track */}
          <div
            ref={scrollRef}
            className="flex items-stretch gap-5 sm:gap-6 overflow-x-auto scrollbar-none snap-x snap-mandatory py-4 px-1"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {testimonialsList.map((item) => (
              <div
                key={item.id}
                className="flex-shrink-0 w-[300px] sm:w-[360px] lg:w-[380px] bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-7 border border-cream-300 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between snap-start group"
              >
                <div>
                  {/* Rating Stars & Verified Pill */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-1">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-[#E8A578] text-[#E8A578]"
                        />
                      ))}
                    </div>
                    {item.verified && (
                      <span className="inline-flex items-center space-x-1 text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                        <Check className="w-3 h-3 text-emerald-600 stroke-[3]" />
                        <span>Verified Project</span>
                      </span>
                    )}
                  </div>

                  {/* Review Text */}
                  <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed font-normal">
                    &ldquo;{item.content}&rdquo;
                  </p>
                </div>

                {/* Client Profile Footer */}
                <div className="pt-5 mt-5 border-t border-cream-200 flex items-center space-x-3.5">
                  <div className="w-10 h-10 rounded-full bg-[#181B20] text-[#E8A578] font-bold text-xs flex items-center justify-center flex-shrink-0 shadow-sm border border-[#E8A578]/30">
                    {item.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-neutral-900 leading-tight">
                      {item.name}
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Bottom Navigation Controls */}
          <div className="flex sm:hidden items-center justify-center space-x-3 pt-6">
            <button
              onClick={() => scroll("left")}
              aria-label="Previous review"
              className="w-10 h-10 rounded-full bg-[#181B20] text-[#E8A578] shadow-md border border-[#E8A578]/30 flex items-center justify-center"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              aria-label="Next review"
              className="w-10 h-10 rounded-full bg-[#181B20] text-[#E8A578] shadow-md border border-[#E8A578]/30 flex items-center justify-center"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
