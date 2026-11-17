"use client";

import React, { useState } from "react";
import Image from "next/image";
import { PRODUCTS_LIST, FILTER_PILLS, ProductCardItem } from "@/data/products";

interface ProductsSectionProps {
  onOpenQuote: (productName?: string) => void;
  activeCategory?: string;
  onSelectCategory?: (id: string) => void;
}

export default function ProductsSection({
  onOpenQuote,
}: ProductsSectionProps) {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filteredProducts =
    activeFilter === "all"
      ? PRODUCTS_LIST
      : PRODUCTS_LIST.filter((p) => p.category === activeFilter);

  return (
    <section id="products" className="py-14 lg:py-20 bg-[#FAF8F5] border-t border-cream-300/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header - Matching reference design layout */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 gap-2 border-b border-neutral-200/80">
          <div className="flex items-center">
            {/* Website Brand Accent Bar */}
            <span className="w-1.5 h-8 bg-[#C86D3B] rounded-full inline-block mr-3 flex-shrink-0"></span>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-semibold font-[600] text-neutral-900 tracking-tight leading-[1.15] max-w-[600px]">
              Our <span className="text-[#C86D3B]">Products</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-neutral-500 font-normal">
            Premium quality ceiling &amp; construction materials
          </p>
        </div>

        {/* Filter Pills matching reference */}
        <div className="pt-6 pb-6">
          <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
            {FILTER_PILLS.map((pill) => {
              const isActive = activeFilter === pill.id;
              return (
                <button
                  key={pill.id}
                  onClick={() => setActiveFilter(pill.id)}
                  className={`px-3.5 sm:px-5 py-2 rounded-full text-xs transition-all whitespace-nowrap ${isActive
                    ? "bg-[#1C2024] text-white border border-[#1C2024] shadow-sm font-semibold"
                    : "bg-white text-neutral-700 border border-neutral-200/90 hover:border-neutral-400 hover:text-black font-medium shadow-xs"
                    }`}
                >
                  <span className="sm:hidden">{pill.shortLabel || pill.label}</span>
                  <span className="hidden sm:inline">{pill.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Product Cards Grid - User's 8 products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl border border-neutral-200/90 p-4 sm:p-5 flex flex-col justify-between hover:shadow-lg transition-all duration-200 group"
            >
              <div>
                {/* Product Image Area - Square & Not Rounded */}
                <div className="aspect-square w-full relative mb-4 bg-neutral-100 overflow-hidden border border-neutral-200/80 rounded-none">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Product Title */}
                <h3 className="text-sm sm:text-base font-bold text-neutral-900 mb-1 leading-snug group-hover:text-[#B68D40] transition-colors line-clamp-2 min-h-[44px]">
                  {product.name} {product.subtitle && <span className="text-xs text-neutral-500 font-normal block">{product.subtitle}</span>}
                </h3>

                {/* Product Description - Simple, Plain English */}
                <p className="text-xs text-neutral-500 leading-relaxed mb-4 line-clamp-2 min-h-[32px]">
                  {product.description}
                </p>
              </div>

              {/* Action Button: On-brand charcoal with gold currency mark */}
              <div className="pt-2">
                <button
                  onClick={() => onOpenQuote(product.name)}
                  className="w-full py-2.5 bg-[#1C2024] hover:bg-black text-white font-semibold text-xs sm:text-sm rounded-lg transition-colors flex items-center justify-center space-x-1.5 shadow-sm active:scale-[0.98] border border-neutral-800"
                >
                  <span className="text-amber-400 font-bold text-sm">₹</span>
                  <span>Get Best Price</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
