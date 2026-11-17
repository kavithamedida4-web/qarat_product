"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  onOpenQuote: (productName?: string) => void;
  onSelectCategory?: (categoryId: string) => void;
}

export default function Navbar({ onOpenQuote }: NavbarProps) {
  const [activeNav, setActiveNav] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { id: "home", label: "Home", href: "#" },
    { id: "products", label: "Products", href: "#products" },
    { id: "about", label: "About", href: "#about" },
    { id: "gallery", label: "Gallery", href: "#gallery" },
  ];

  const handleNavClick = (id: string, href: string) => {
    setActiveNav(id);
    if (mobileMenuOpen) setMobileMenuOpen(false);
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Scroll spy for active navbar tab
      const scrollPos = window.scrollY + 250;
      const galleryEl = document.getElementById("gallery");
      const aboutEl = document.getElementById("about");
      const productsEl = document.getElementById("products");

      if (galleryEl && scrollPos >= galleryEl.offsetTop) {
        setActiveNav("gallery");
      } else if (aboutEl && scrollPos >= aboutEl.offsetTop) {
        setActiveNav("about");
      } else if (productsEl && scrollPos >= productsEl.offsetTop) {
        setActiveNav("products");
      } else {
        setActiveNav("home");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full bg-[#181B20] text-white transition-all duration-300">
      {/* Main Navbar matching the Minimal reference design */}
      <div className={`transition-all duration-200 border-b border-neutral-800/80 ${scrolled ? "bg-[#181B20]/95 backdrop-blur-md shadow-md py-3" : "bg-[#181B20] py-4"
        }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">

          {/* Brand Logo with geometric box icon matching reference */}
          <a href="#" className="flex items-center space-x-3 group">
            <div className="w-8 h-8 border border-[#E8A578] flex items-center justify-center text-[#E8A578] group-hover:bg-[#E8A578] group-hover:text-[#181B20] transition-colors">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                <polyline points="2 17 12 22 22 17"></polyline>
                <polyline points="2 12 12 17 22 12"></polyline>
              </svg>
            </div>
            <div>
              <div className="font-serif tracking-widest text-lg font-bold text-white leading-none">
                QARAT<span className="text-[#E8A578]">.</span>
              </div>
              <div className="text-[8px] tracking-[0.25em] text-neutral-400 uppercase font-medium mt-0.5">
                INTERIOR DECORATOR
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-8 text-xs tracking-wider uppercase font-medium">
            {navLinks.map((link) => {
              const isActive = activeNav === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => handleNavClick(link.id, link.href)}
                  className={`transition-all pb-0.5 border-b cursor-pointer ${
                    isActive
                      ? "text-[#E8A578] border-[#E8A578] font-semibold"
                      : "text-neutral-300 hover:text-white border-transparent"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Action Button: Boxed / Bordered Contact Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="#contact"
              className="border border-[#E8A578] text-[#E8A578] hover:bg-[#E8A578] hover:text-[#181B20] text-xs font-semibold px-5 py-2.5 rounded-none tracking-widest uppercase transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-2">
            <a
              href="#contact"
              className="border border-[#E8A578] text-[#E8A578] text-[10px] font-semibold px-2.5 py-1.5 uppercase"
            >
              Contact
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-neutral-300 hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#1F242B] border-b border-neutral-700 px-5 pt-4 pb-6 space-y-3">
          <div className="space-y-2">
            {navLinks.map((link) => {
              const isActive = activeNav === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => handleNavClick(link.id, link.href)}
                  className={`block py-2 text-xs uppercase tracking-wider transition-colors ${
                    isActive
                      ? "text-[#E8A578] font-semibold border-l-2 border-[#E8A578] pl-2.5"
                      : "text-neutral-300 hover:text-white"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
