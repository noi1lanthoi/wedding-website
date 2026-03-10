"use client";

import { motion } from "framer-motion";
import { Send, Gift, MailOpen, ThumbsUp } from "lucide-react";

export default function StickyBottomBar() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed bottom-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-md border-t border-white/10 px-4 py-3 flex items-center justify-between gap-3 text-white"
    >
      {/* RSVP Envelope Icon */}
      <button
        onClick={() => scrollToSection("rsvp")}
        className="relative w-10 h-10 rounded-full bg-cover bg-center flex items-center justify-center shrink-0 overflow-hidden group hover:scale-105 transition-transform"
      >
        <div className="absolute inset-0 bg-gold/90 flex items-center justify-center">
          <MailOpen className="w-5 h-5 text-white" />
        </div>
      </button>

      {/* Gift Icon */}
      <button
        onClick={() => scrollToSection("gift")}
        className="w-10 h-10 rounded-full bg-rose flex items-center justify-center shrink-0 hover:scale-105 transition-transform shadow-lg"
      >
        <Gift className="w-5 h-5 text-white" />
      </button>

      {/* Input Fake Box */}
      <button
        onClick={() => scrollToSection("rsvp")}
        className="flex-1 bg-white/20 hover:bg-white/30 transition-colors rounded-full px-4 py-2 flex items-center justify-between"
      >
        <span className="text-sm italic font-light opacity-80">
          Để lại lời chúc...
        </span>
        <Send className="w-4 h-4 opacity-80" />
      </button>

      {/* Like Button */}
      <button className="relative w-10 h-10 rounded-full flex items-center justify-center shrink-0 hover:scale-105 transition-transform group">
        <div className="absolute inset-0 bg-pink-500/80 rounded-full"></div>
        <ThumbsUp className="w-5 h-5 text-white relative z-10" />
        <span className="absolute -top-1 -right-1 bg-white text-pink-500 text-[10px] font-bold px-1.5 py-0.5 rounded-full border border-pink-200">
          0
        </span>
      </button>
    </motion.div>
  );
}
