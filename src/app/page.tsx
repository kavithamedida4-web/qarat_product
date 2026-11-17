"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BrandPartners from "@/components/BrandPartners";
import ProductsSection from "@/components/ProductsSection";
import AboutUs from "@/components/AboutUs";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import Faqs from "@/components/Faqs";
import ContactMap from "@/components/ContactMap";
import Footer from "@/components/Footer";
import QuoteModal from "@/components/QuoteModal";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<string>("gypsum");
  const [quoteModalOpen, setQuoteModalOpen] = useState<boolean>(false);
  const [selectedProductForQuote, setSelectedProductForQuote] = useState<string>("");

  const handleOpenQuote = (productName?: string) => {
    setSelectedProductForQuote(productName || "General Material Estimate");
    setQuoteModalOpen(true);
  };

  const handleSelectCategory = (categoryId: string) => {
    setActiveCategory(categoryId);
  };

  return (
    <main className="min-h-screen bg-cream-100 flex flex-col selection:bg-amber-100 selection:text-neutral-900">
      {/* 0. Header & Navigation */}
      <Navbar
        onOpenQuote={handleOpenQuote}
        onSelectCategory={handleSelectCategory}
      />

      {/* 1. Hero Section */}
      <Hero onOpenQuote={() => handleOpenQuote("Wholesale BOQ Inquiry")} />

      {/* 1.5. Brand Partners Section */}
      <BrandPartners />

      {/* 2. Product Section (Main Products & Sub Products) */}
      <ProductsSection
        activeCategory={activeCategory}
        onSelectCategory={handleSelectCategory}
        onOpenQuote={handleOpenQuote}
      />

      {/* 3. About Us */}
      <AboutUs onOpenQuote={() => handleOpenQuote("About Section Inquiry")} />

      {/* 4. How It Works */}
      <HowItWorks onOpenQuote={() => handleOpenQuote("Project BOQ Inquiry")} />

      {/* 5. Testimonial */}
      <Testimonials />

      {/* 6. Gallery */}
      <Gallery />

      {/* 7. FAQs */}
      <Faqs />

      {/* 8. Contact and Map */}
      <ContactMap />

      {/* Footer */}
      <Footer
        onSelectCategory={handleSelectCategory}
        onOpenQuote={() => handleOpenQuote("Website Footer Inquiry")}
      />

      {/* Interactive Quote Modal */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        initialProduct={selectedProductForQuote}
      />

      {/* Floating Indian WhatsApp Direct Support */}
      <WhatsAppButton />
    </main>
  );
}

