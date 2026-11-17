"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

// Authentic Material Wholesale FAQs for QARAT
export const AUTHENTIC_FAQS: FaqItem[] = [
  {
    id: "faq-1",
    question: "Do you supply materials directly to contractors, builders, and homeowners?",
    answer: "Yes! QARAT is an authorized wholesale distributor and material depot. Whether you are an interior contractor ordering bulk supplies for commercial sites or a homeowner sourcing materials directly, you receive wholesale factory pricing."
  },
  {
    id: "faq-2",
    question: "Are your ceiling boards and GI channels 100% authentic and certified?",
    answer: "Yes, 100% authentic and factory sealed. We are authorized stockists for Saint-Gobain Gyproc, Ramco Hilux, Sakarni, and USG Knauf, with heavy 0.50mm galvanized framing channels that never rust or sag."
  },
  {
    id: "faq-3",
    question: "Which areas in Lucknow do you deliver materials to?",
    answer: "Our central warehouse depot is located at Ali Nawab Market, Hardoi Road, Dubagga, Lucknow. We dispatch materials daily via tempo and trucks across all Lucknow localities including Gomti Nagar, Hazratganj, Indira Nagar, Aliganj, Sushant Golf City, and Kanpur Road."
  },
  {
    id: "faq-4",
    question: "How fast can I get materials dispatched from your Lucknow depot?",
    answer: "Standard in-stock materials (Gypsum plasterboards, GI ceiling channels, POP bags, WPC louvers, and UV marble sheets) are dispatched same-day or within 24 hours of order confirmation directly from our Dubagga depot."
  },
  {
    id: "faq-5",
    question: "Do you provide official GST invoices with wholesale rates?",
    answer: "Yes, all material orders are billed with official GST invoices at genuine wholesale rates, making it simple for contractors, firms, and builders to claim input tax credit."
  },
  {
    id: "faq-6",
    question: "Can I order small quantities or do you only sell in bulk?",
    answer: "We accommodate both large bulk truckloads and smaller room-level requirements. You can arrange depot pickup or have required bundles delivered to your site."
  },
  {
    id: "faq-7",
    question: "What modern decorative wall materials do you keep in ready stock?",
    answer: "In addition to false ceiling systems, our warehouse maintains ready stock of fluted WPC louvers, exterior cladding louvers, 8x4 ft UV marble sheets, PVC wall panels, and designer wallpaper rolls."
  },
  {
    id: "faq-8",
    question: "Can you help calculate the exact material quantity needed for my room?",
    answer: "Yes! Simply share your room dimensions or material list via WhatsApp (+91 93364 11421), and our team will provide a free itemized quantity estimate and best wholesale price quotation."
  }
];

export default function Faqs() {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faqs" className="py-16 lg:py-24 bg-[#FAF8F5] border-t border-cream-300/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">

        {/* Section Header */}
        <div className="text-center max-w-[600px] mx-auto mb-12">
          <div className="text-xs font-semibold tracking-wider uppercase text-[#C86D3B] mb-2">
            FAQ &bull; Wholesale Material Depot
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-semibold font-[600] text-neutral-900 tracking-tight leading-[1.15] max-w-[600px] mx-auto">
            Frequently Asked <span className="text-[#C86D3B]">Questions</span>
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 mt-2">
            Clear answers about warehouse stock, wholesale rates, brand certification, and vehicle delivery.
          </p>
        </div>

        {/* FAQs Accordion List */}
        <div className="space-y-3">
          {AUTHENTIC_FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-xl bg-white border border-cream-300 overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full px-5 py-4 text-left flex items-center justify-between space-x-4 focus:outline-none hover:bg-cream-50 transition-colors"
                >
                  <span className="text-xs sm:text-sm font-semibold text-neutral-900">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-neutral-500 transition-transform duration-200 flex-shrink-0 ${isOpen ? "rotate-180 text-[#E8A578]" : ""
                      }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-neutral-600 leading-relaxed border-t border-cream-200/60 bg-cream-50/50">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
