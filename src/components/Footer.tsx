"use client";

import { motion } from "framer-motion";
import { Heart, ArrowUp } from "lucide-react";
import Image from "next/image";
import { coupleData, weddingDate } from "@/data/weddingData";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative text-dark py-10 md:py-12 overflow-hidden border-t border-black/5">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <Image 
          src="/images/footer-bg.jpg" 
          alt="Footer Background" 
          fill 
          className="object-cover"
          quality={90}
        />
        {/* White Semi-transparent Overlay to make text readable */}
        <div className="absolute inset-0 bg-white/40" />
      </div>

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -15% 0px" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-center flex flex-col items-center justify-center max-w-2xl mx-auto"
        >
          {/* Couple Names */}
          <h2 className="text-5xl md:text-7xl font-script text-rose mb-4 flex items-center justify-center gap-3 drop-shadow-sm">
            <span>{coupleData.groom.name}</span>
            <span className="text-3xl font-display text-gold/80 drop-shadow-sm">&</span>
            <span>{coupleData.bride.name}</span>
          </h2>

          {/* Wedding Date */}
          <p className="font-display tracking-[0.3em] text-sm md:text-base font-bold uppercase text-dark mb-8 drop-shadow-sm">
            {weddingDate.displayDate}
          </p>

          <div className="w-12 h-[2px] bg-gold/70 mb-6 drop-shadow-sm" />

          {/* Thank You Message */}
          <div className="text-center drop-shadow-sm bg-white/40 backdrop-blur-md px-8 py-6 rounded-2xl border border-white/50 shadow-sm mt-4 mb-12">
            <p className="font-script text-[1.4rem] md:text-3xl text-dark leading-relaxed">
              Cảm ơn bạn đã ghé thăm trang web của chúng tôi.
              <br className="hidden md:block" />
              Sự hiện diện của bạn trong ngày trọng đại là món quà vô giá.
            </p>
          </div>

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
          viewport={{ once: true, margin: "0px 0px -15% 0px" }}
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
