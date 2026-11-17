"use client";

import React from "react";

export default function WhatsAppButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center">
      {/* WhatsApp Floating Action Button matching screenshots */}
      <a
        href="https://wa.me/919336411421?text=Hello%20Qarat,%20I%20am%20inquiring%20about%20interior%20work%20and%20materials"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact Qarat on WhatsApp"
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none"
      >
        <svg
          className="w-8 h-8 fill-current"
          viewBox="0 0 24 24"
        >
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.7c.974.551 1.879.815 2.791.815 3.18 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.766-5.768-5.766zm9.969 5.766c0 5.514-4.486 10-10 10-1.748 0-3.385-.453-4.819-1.246l-5.181 1.358 1.381-5.048c-.902-1.493-1.381-3.21-1.381-5.064 0-5.514 4.486-10 10-10s10 4.486 10 10z" />
        </svg>
      </a>
    </div>
  );
}

