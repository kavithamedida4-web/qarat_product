"use client";

import React from "react";

interface FooterProps {
  onSelectCategory?: (catId: string) => void;
  onOpenQuote?: () => void;
}

export default function Footer({ onSelectCategory, onOpenQuote }: FooterProps) {
  const scrollToCategory = (catId: string) => {
    if (onSelectCategory) {
      onSelectCategory(catId);
    }
    const elem = document.getElementById("products");
    if (elem) elem.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#141618] text-neutral-400 border-t border-neutral-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        
        {/* 4-Column Grid perfectly balanced and relevant to the website */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">

          {/* Column 1: Brand Info & Accurate Wholesale Depot Description */}
          <div className="space-y-4">
            <a href="#" className="inline-flex items-center space-x-3 group">
              <div className="w-9 h-9 rounded-full border border-[#E8A578] flex items-center justify-center text-[#E8A578] group-hover:bg-[#E8A578] group-hover:text-[#181B20] transition-colors">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                  <polyline points="2 17 12 22 22 17"></polyline>
                  <polyline points="2 12 12 17 22 12"></polyline>
                </svg>
              </div>
              <div>
                <div className="font-serif tracking-widest text-lg font-bold text-white leading-none">
                  QARAT
                </div>
                <div className="text-[8.5px] tracking-[0.25em] text-[#E8A578] uppercase font-semibold mt-1">
                  INTERIOR DECORATOR
                </div>
              </div>
            </a>

            <p className="text-xs text-neutral-400 leading-relaxed pr-2">
              Direct factory wholesale depot for certified gypsum plasterboards, calcium silicate boards, heavy GI framing channels, and drywall accessories in Lucknow.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm sm:text-base font-bold text-white tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-400">
              <li>
                <a href="#" className="hover:text-[#E8A578] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-[#E8A578] transition-colors">
                  Products
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#E8A578] transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#E8A578] transition-colors">
                  Gallery
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Authorized Brands */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm sm:text-base font-bold text-white tracking-wide">
              Authorized Brands
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-400">
              <li>
                <a href="#products" className="hover:text-[#E8A578] transition-colors">
                  Saint-Gobain Gyproc
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-[#E8A578] transition-colors">
                  Ramco Hilux
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-[#E8A578] transition-colors">
                  Sakarni POP Plaster
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-[#E8A578] transition-colors">
                  USG Knauf Systems
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm sm:text-base font-bold text-white tracking-wide">
              Contact Us
            </h4>
            <div className="space-y-2 text-xs text-neutral-400 leading-relaxed">
              <p>
                Ali Nawab Market, Hardoi Road, Dubagga,<br />
                Lucknow – 226003
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright on Left Corner, Designed & Developed on Right Corner */}
        <div className="border-t border-neutral-800/80 mt-12 sm:mt-16 pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] sm:text-xs text-neutral-400 gap-3">
          <div>
            &copy; 2026 Qarat Interior Decorator. All rights reserved.
          </div>
          <div>
            Designed &amp; Developed by{" "}
            <a
              href="https://edonesolution.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#E8A578] font-medium hover:underline transition-colors"
            >
              Edone Solutions
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}

