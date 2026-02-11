"use client";

import { motion } from "framer-motion";
import { Heart, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-gradient-to-b from-dark to-[#1a1a1a] text-white py-16 md:py-20 overflow-hidden">
      {/* Top Gradient Line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold via-dusty-rose to-gold" />

      {/* Background Decorations */}
      <div className="absolute top-0 left-1/4 w-80 h-80 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-dusty-rose/5 rounded-full blur-3xl" />

      <div className="section-container relative z-10">
        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Couple Names */}
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-script mb-4 flex items-center justify-center flex-wrap gap-2">
            <span className="text-gold">Nam</span>
            <Heart className="w-8 h-8 md:w-10 md:h-10 text-dusty-rose fill-current mx-4" />
            <span className="text-dusty-rose">Nữ</span>
          </h2>

          {/* Wedding Date */}
          <p className="text-white/60 text-lg mb-8 tracking-wide">
            14.02.2025
          </p>

          {/* Thank You Message */}
          <div className="max-w-xl mx-auto mb-10">
            <p className="text-white/80 leading-relaxed">
              Cảm ơn bạn đã dành thời gian ghé thăm trang web của chúng tôi.
              <br />
              Chúng tôi rất mong được đón tiếp bạn trong ngày trọng đại!
            </p>
          </div>

          {/* Divider */}
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-8" />

          {/* Copyright */}
          <p className="text-white/40 text-sm">
            Made with{" "}
            <Heart className="inline w-4 h-4 text-dusty-rose fill-current align-middle" />{" "}
            for our special day
          </p>
          <p className="text-white/30 text-xs mt-2">
            © 2024 Wedding Invitation. All rights reserved.
          </p>
        </motion.div>

        {/* Scroll to Top Button */}
        <motion.button
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="absolute bottom-8 right-8 w-12 h-12 bg-gradient-to-br from-gold to-dusty-rose rounded-full flex items-center justify-center border-none cursor-pointer shadow-xl"
        >
          <ArrowUp className="w-5 h-5 text-white" />
        </motion.button>
      </div>

      {/* Floating Hearts */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute pointer-events-none"
          style={{ left: `${15 + i * 14}%`, bottom: "-20px", color: 'rgba(212, 165, 165, 0.1)' }}
          animate={{
            y: [0, -300],
            opacity: [0, 0.3, 0],
          }}
          transition={{
            duration: 8 + i,
            delay: i * 1.5,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <Heart size={18 + i * 2} fill="currentColor" />
        </motion.div>
      ))}
    </footer>
  );
}
