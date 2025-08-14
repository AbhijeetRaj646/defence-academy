import React from 'react';
import { MessageCircle } from 'lucide-react';

const FloatingWhatsApp = () => {
  return (
    <a
      href="https://wa.me/919876543210?text=Hello! I'm interested in defence coaching at Patriot's Path Academy."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 w-14 h-14 bg-india-green rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 z-50 animate-pulse"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-white" />
    </a>
  );
};

export default FloatingWhatsApp;