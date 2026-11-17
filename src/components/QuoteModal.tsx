"use client";

import React, { useState, useEffect } from "react";
import { X, Send, CheckCircle, MessageSquare, ShieldCheck } from "lucide-react";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProduct?: string;
}

export default function QuoteModal({
  isOpen,
  onClose,
  initialProduct = "",
}: QuoteModalProps) {
  const [productName, setProductName] = useState(initialProduct);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("Lucknow");
  const [quantity, setQuantity] = useState("");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialProduct) {
      setProductName(initialProduct);
    }
  }, [initialProduct]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hello Qarat, I would like to request a wholesale quote for: ${productName || "General Material Inquiry"}. Name: ${name || "Customer"}, City: ${city}, Quantity/BOQ: ${quantity || "Not specified"}. ${notes ? "Notes: " + notes : ""}`
    );
    window.open(`https://wa.me/919336411421?text=${text}`, "_blank");
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl border border-cream-300 transform transition-all animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#1C2024] text-white px-6 py-4 flex items-center justify-between">
          <div>
            <span className="text-[10px] uppercase tracking-wider text-amber-400 font-semibold block">
              Wholesale Price Quote
            </span>
            <h3 className="text-base font-semibold text-white">
              Get Material Price
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-neutral-400 hover:text-white transition-colors p-1 rounded-md"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-6 space-y-3">
              <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle className="w-6 h-6" />
              </div>
              <h4 className="text-base font-semibold text-neutral-900">
                Estimate Request Sent!
              </h4>
              <p className="text-xs text-neutral-600 max-w-sm mx-auto leading-relaxed">
                Thank you, <strong>{name}</strong>. Our material specialist will review your request for <strong>{productName}</strong> and send the itemized BOQ to <strong>{phone}</strong> via WhatsApp / SMS shortly.
              </p>
              <div className="pt-4 flex justify-center space-x-3">
                <button
                  onClick={handleWhatsAppDirect}
                  className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-semibold flex items-center space-x-1.5"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send on WhatsApp Now</span>
                </button>
                <button
                  onClick={onClose}
                  className="px-4 py-2 bg-neutral-200 text-neutral-800 rounded-lg text-xs font-semibold hover:bg-neutral-300"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-neutral-700 mb-1">
                  Selected Material *
                </label>
                <input
                  type="text"
                  required
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                  placeholder="e.g. Saint-Gobain Gyproc 12.5mm Boards"
                  className="w-full px-3 py-2 text-xs sm:text-sm bg-cream-50 border border-cream-300 rounded-lg font-medium text-neutral-900 focus:outline-none focus:border-qarat-gold"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-neutral-700 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Rajesh Kumar"
                    className="w-full px-3 py-2 text-xs sm:text-sm bg-white border border-cream-300 rounded-lg focus:outline-none focus:border-qarat-gold"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-neutral-700 mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. 93364 11421"
                    className="w-full px-3 py-2 text-xs sm:text-sm bg-white border border-cream-300 rounded-lg focus:outline-none focus:border-qarat-gold"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-neutral-700 mb-1">
                    Quantity or Room Size
                  </label>
                  <input
                    type="text"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    placeholder="e.g. 50 boards or 1 room"
                    className="w-full px-3 py-2 text-xs sm:text-sm bg-white border border-cream-300 rounded-lg focus:outline-none focus:border-qarat-gold"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-neutral-700 mb-1">
                    Your City / Area
                  </label>
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="e.g. Gomti Nagar, Lucknow"
                    className="w-full px-3 py-2 text-xs sm:text-sm bg-white border border-cream-300 rounded-lg focus:outline-none focus:border-qarat-gold"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-700 mb-1">
                  Extra Items Needed (Channels, Screws, Delivery Date)
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Include accessories needed (GI channels, POP powder, etc.)..."
                  className="w-full px-3 py-2 text-xs sm:text-sm bg-white border border-cream-300 rounded-lg focus:outline-none focus:border-qarat-gold"
                ></textarea>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-2">
                <button
                  type="submit"
                  className="w-full sm:flex-1 py-2.5 bg-[#1C2024] hover:bg-black text-white text-xs font-semibold rounded-lg transition-colors flex items-center justify-center space-x-1.5"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Submit Estimate Request</span>
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  className="w-full sm:w-auto px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-lg transition-colors flex items-center justify-center space-x-1.5"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </button>
              </div>

              <div className="flex items-center justify-center space-x-2 text-[10px] text-neutral-500 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Authorized Wholesale Dealer • Direct Lucknow Depot Dispatch</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

