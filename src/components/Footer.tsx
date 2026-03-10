"use client";

import { motion } from "framer-motion";
import { Heart, ArrowUp } from "lucide-react";
import { coupleData, weddingDate } from "@/data/weddingData";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-cream text-dark py-16 md:py-24 overflow-hidden border-t border-black/5">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-rose/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold/5 rounded-full blur-3xl" />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center flex flex-col items-center justify-center max-w-2xl mx-auto"
        >
          {/* Couple Names */}
          <h2 className="text-5xl md:text-7xl font-script text-rose mb-4 flex items-center justify-center gap-3">
            <span>{coupleData.groom.name}</span>
            <span className="text-3xl font-display text-gold/60">&</span>
            <span>{coupleData.bride.name}</span>
          </h2>

          {/* Wedding Date */}
          <p className="font-display tracking-[0.3em] text-sm uppercase text-muted mb-8">
            {weddingDate.displayDate}
          </p>

          <div className="w-12 h-px bg-gold/50 mb-8" />

          {/* Thank You Message */}
          <p className="font-body text-dark/70 text-sm md:text-base leading-relaxed mb-12">
            Cảm ơn bạn đã ghé thăm trang web của chúng tôi.
            <br className="hidden md:block" />
            Sự hiện diện của bạn trong ngày trọng đại là món quà vô giá.
          </p>

          {/* Copyright */}
          <p className="text-dark/40 font-display text-xs uppercase tracking-widest mt-auto">
            Made with{" "}
            <Heart className="inline w-3 h-3 text-rose/50 fill-current align-middle mx-1" />{" "}
            for our special day
          </p>
        </motion.div>

        {/* Scroll to Top Button */}
        <motion.button
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          whileHover={{ y: -4 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToTop}
          className="absolute bottom-10 right-8 md:right-12 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center shadow-sm border border-black/5 cursor-pointer text-dark/50 hover:text-gold hover:border-gold/30 transition-all font-body"
        >
          <ArrowUp className="w-4 h-4 md:w-5 md:h-5" />
        </motion.button>
      </div>
    </footer>
  );
}
