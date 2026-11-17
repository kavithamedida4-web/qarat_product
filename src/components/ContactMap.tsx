"use client";

import React, { useState } from "react";
import { Send, CheckCircle, Phone, MapPin, Clock, ShieldCheck, MessageCircle } from "lucide-react";

export default function ContactMap() {
  const [submitted, setSubmitted] = useState(false);
  const [lastWhatsAppUrl, setLastWhatsAppUrl] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    material: "Saint-Gobain Gyproc Plasterboards",
    city: "Lucknow",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const lines = [
      "Hello Qarat, I would like to request a wholesale price quote:",
      `*Name:* ${formData.name}`,
      `*Phone:* ${formData.phone}`,
      `*Material:* ${formData.material}`,
      `*City/Area:* ${formData.city || "Lucknow"}`,
      formData.message ? `*Requirement/Quantity:* ${formData.message}` : ""
    ].filter(Boolean).join("\n");

    const whatsappUrl = `https://wa.me/919336411421?text=${encodeURIComponent(lines)}`;
    setLastWhatsAppUrl(whatsappUrl);
    setSubmitted(true);

    if (typeof window !== "undefined") {
      window.open(whatsappUrl, "_blank");
    }
  };

  return (
    <section id="contact" className="relative py-16 lg:py-24 bg-[#FAF8F5] border-t border-neutral-200/80 overflow-hidden">
      {/* Warm Ambient Background Glows */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-[#E8A578]/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 -right-20 w-80 h-80 bg-[#E8A578]/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-[650px] mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#FAF1E8] border border-[#C86D3B]/40 text-xs font-semibold tracking-wider uppercase text-[#C86D3B] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C86D3B]"></span>
            <span>Dubagga Depot Wholesale Desk</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-semibold font-[600] text-neutral-900 tracking-tight leading-[1.15] max-w-[600px] mx-auto">
            Get a Quick <span className="text-[#C86D3B]">Price Quote</span>
          </h2>
        </div>

        {/* Centered Contact Form Card */}
        <div className="max-w-2xl mx-auto bg-white p-6 sm:p-10 rounded-3xl border border-neutral-200/80 shadow-lg relative overflow-hidden">

          {submitted ? (
            <div className="p-8 bg-[#FAF8F5] rounded-2xl border border-emerald-300 text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle className="w-7 h-7" />
              </div>
              <h4 className="text-base font-bold text-neutral-900">
                Opening WhatsApp with Your Details!
              </h4>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed max-w-md mx-auto">
                Thank you, <strong>{formData.name || "Customer"}</strong>. Your price inquiry for <strong>{formData.material}</strong> has been prepared for WhatsApp chat (+91 93364 11421).
              </p>
              {lastWhatsAppUrl && (
                <div className="pt-2">
                  <a
                    href={lastWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 px-6 py-3 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-xs sm:text-sm rounded-xl shadow-md transition-all active:scale-[0.98]"
                  >
                    <span>Click Here to Chat on WhatsApp</span>
                    <span>&rarr;</span>
                  </a>
                </div>
              )}
              <div>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: "", phone: "", material: "Saint-Gobain Gyproc Plasterboards", city: "Lucknow", message: "" });
                  }}
                  className="text-xs font-bold text-[#E8A578] hover:underline pt-2 inline-block"
                >
                  Send another request &rarr;
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-800 mb-1.5">
                    Your Name <span className="text-[#E8A578] font-bold">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rajesh Kumar"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-[#FAF8F5] border border-neutral-300 rounded-xl focus:bg-white focus:outline-none focus:border-[#E8A578] focus:ring-2 focus:ring-[#E8A578]/20 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-800 mb-1.5">
                    Phone Number (WhatsApp) <span className="text-[#E8A578] font-bold">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 93364 11421"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-[#FAF8F5] border border-neutral-300 rounded-xl focus:bg-white focus:outline-none focus:border-[#E8A578] focus:ring-2 focus:ring-[#E8A578]/20 transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-800 mb-1.5">
                    Select Material / Brand <span className="text-[#E8A578] font-bold">*</span>
                  </label>
                  <select
                    value={formData.material}
                    onChange={(e) => setFormData({ ...formData, material: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-[#FAF8F5] border border-neutral-300 rounded-xl focus:bg-white focus:outline-none focus:border-[#E8A578] focus:ring-2 focus:ring-[#E8A578]/20 transition-all"
                  >
                    <option>Saint-Gobain Gyproc Plasterboards</option>
                    <option>Ramco Hilux Calcium Silicate Boards</option>
                    <option>Sakarni POP Plaster &amp; Compounds</option>
                    <option>USG Knauf Drywall Systems</option>
                    <option>Heavy 0.50mm GI Ceiling Channels</option>
                    <option>WPC Fluted Louvers &amp; UV Marble Sheets</option>
                    <option>Full Project Material Package (Bulk Order)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-800 mb-1.5">
                    City / Area in Lucknow
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Gomti Nagar, Dubagga"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-[#FAF8F5] border border-neutral-300 rounded-xl focus:bg-white focus:outline-none focus:border-[#E8A578] focus:ring-2 focus:ring-[#E8A578]/20 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-800 mb-1.5">
                  How much quantity or room size do you need?
                </label>
                <textarea
                  rows={3}
                  placeholder="e.g. 50 Gyproc boards, 40 perimeter channels, or 1 living hall ceiling area..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-[#FAF8F5] border border-neutral-300 rounded-xl focus:bg-white focus:outline-none focus:border-[#E8A578] focus:ring-2 focus:ring-[#E8A578]/20 transition-all"
                ></textarea>
              </div>

              {/* Colorful Warm Action Button */}
              <button
                type="submit"
                className="w-full py-3.5 bg-[#E8A578] hover:bg-[#d99566] text-[#181B20] text-xs sm:text-sm font-bold rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center space-x-2 active:scale-[0.99] cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-[#181B20]" />
                <span>Send Price Request via WhatsApp</span>
              </button>

              {/* Trust Badges Strip */}
              <div className="pt-2 flex flex-wrap items-center justify-center gap-4 text-[11px] text-neutral-500 text-center">
                <span className="flex items-center space-x-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#E8A578]" />
                  <span>100% Genuine Certified Brands</span>
                </span>
                <span>&bull;</span>
                <span>Official GST Billing</span>
                <span>&bull;</span>
                <span>Same-Day Depot Dispatch</span>
              </div>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}
