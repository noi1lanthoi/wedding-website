"use client";

import { motion } from "framer-motion";
import { CarFront, Gift } from "lucide-react";

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
      className="fixed bottom-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-md border-t border-white/10 px-2 sm:px-4 pt-3 pb-[calc(env(safe-area-inset-bottom,0px)+12px)] flex items-center justify-center gap-2 text-white"
    >
      <button
        onClick={() => scrollToSection("gift")}
        className="flex-1 max-w-[50%] bg-gold/90 hover:bg-gold transition-colors rounded-xl px-2 py-2 flex items-center justify-center gap-1 sm:gap-2 shadow-lg"
      >
        <Gift className="w-4 h-4 shrink-0 text-white" />
        <span className="text-[10px] sm:text-xs font-medium text-center leading-tight">Gửi lời chúc đến dâu rể</span>
      </button>

      <button
        onClick={() => scrollToSection("transportation")}
        className="flex-1 max-w-[50%] bg-rose hover:bg-rose/90 transition-colors rounded-xl px-2 py-2 flex items-center justify-center gap-1 sm:gap-2 shadow-lg"
      >
        <CarFront className="w-4 h-4 shrink-0 text-white" />
        <span className="text-[10px] sm:text-xs font-medium text-center leading-tight">Đăng ký xe đưa đón khách tại Đà Nẵng</span>
      </button>
    </motion.div>
  );
}
