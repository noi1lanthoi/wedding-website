"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Heart, ChevronDown } from "lucide-react";
import { weddingDate, coupleData } from "@/data/weddingData";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function HeroSection() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = weddingDate.date.getTime() - new Date().getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background with overlay */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
      </div>

      {/* Floating Hearts */}
      {Array.from({ length: 10 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute pointer-events-none"
          style={{ left: `${10 + i * 9}%`, bottom: "-20px", color: 'rgba(232, 196, 196, 0.4)' }}
          animate={{
            y: [0, -600],
            opacity: [0, 0.8, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: 6 + i * 0.5,
            delay: i * 0.8,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <Heart size={15 + i * 2} fill="currentColor" />
        </motion.div>
      ))}

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
        {/* Save the Date Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <span 
            className="inline-flex items-center justify-center px-10 py-3 rounded-full text-gold text-sm tracking-[4px] uppercase border border-gold/30 shadow-lg backdrop-blur-md"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}
          >
            Save the Date
          </span>
        </motion.div>

        {/* Couple Names */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-6"
        >
          <h1 
            className="font-script text-5xl sm:text-7xl md:text-8xl lg:text-9xl flex items-center justify-center flex-wrap gap-2"
            style={{ color: '#FFFFFF', textShadow: '2px 2px 10px rgba(0,0,0,0.6)' }}
          >
            <span>{coupleData.groom.name}</span>
            <Heart className="w-8 h-8 sm:w-12 sm:h-12 md:w-14 md:h-14 mx-2 sm:mx-4 md:mx-6 animate-pulse" style={{ color: '#E8C4C4', fill: '#E8C4C4' }} />
            <span>{coupleData.bride.name}</span>
          </h1>
        </motion.div>

        {/* Wedding Date */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-8"
        >
          <p className="text-lg md:text-xl font-light tracking-wide" style={{ color: '#FFFFFF', textShadow: '1px 1px 5px rgba(0,0,0,0.5)' }}>
            {weddingDate.dayOfWeek} • {weddingDate.displayDate}
          </p>
          <p className="text-sm mt-2 tracking-wider" style={{ color: '#E8D5A3' }}>
            {weddingDate.lunarDate}
          </p>
        </motion.div>

        {/* Countdown Timer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-4 gap-4 md:gap-8 max-w-3xl mx-auto mb-16 mt-12"
        >
          {[
            { value: timeLeft.days, label: "Ngày" },
            { value: timeLeft.hours, label: "Giờ" },
            { value: timeLeft.minutes, label: "Phút" },
            { value: timeLeft.seconds, label: "Giây" },
          ].map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.8 + index * 0.1, type: "spring" }}
              className="group flex flex-col items-center justify-center backdrop-blur-md rounded-2xl p-4 md:p-6 border border-white/10 shadow-2xl hover:-translate-y-1 transition-transform duration-300"
              style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}
            >
              <div 
                className="text-3xl md:text-5xl font-display text-white font-medium mb-1 text-center"
                style={{ textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}
              >
                {String(item.value).padStart(2, "0")}
              </div>
              <div className="text-gold/90 text-[10px] md:text-xs uppercase tracking-[2px] font-medium border-t border-white/10 pt-2 mt-1 w-full text-center">
                {item.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <a href="#rsvp" className="btn-primary text-lg">
            <Heart className="w-5 h-5" />
            Xác Nhận Tham Dự
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center text-white/60"
        >
          <span className="text-xs tracking-[2px] mb-2">CUỘN XUỐNG</span>
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.div>
    </section>
  );
}
