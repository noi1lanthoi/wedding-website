"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { weddingDate, coupleData } from "@/data/weddingData";

export default function HeroSection() {
  const [timeLeft, setTimeLeft] = useState({
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
    <section id="home" className="relative flex flex-col items-center justify-start w-full">
      {/* 1. Hero Block (Full Screen Image) */}
      <div className="relative w-full h-[100dvh] flex flex-col justify-end items-center px-4 pb-12 overflow-hidden">
        {/* Background Image & Overlays */}
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="Couple Background"
            fill
            className="object-cover"
            priority
          />
          {/* Gradient at the bottom to make the names pop even more */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        </div>

        {/* Main Big Names (Bottom of the image) */}
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
           className="text-center w-full relative z-10 pb-8"
        >
          <span className="font-script text-4xl sm:text-5xl text-gold block mb-4 drop-shadow-md">
            Save the Date
          </span>
          <h1 className="font-display text-5xl sm:text-7xl md:text-8xl text-white tracking-wide relative flex flex-col items-center justify-center gap-4 drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
            <span className="block">{coupleData.groom.name}</span>
            <span className="font-script text-4xl sm:text-6xl text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 drop-shadow-lg">
              &
            </span>
            <span className="block">{coupleData.bride.name}</span>
          </h1>
        </motion.div>
      </div>

      {/* 2. Content Below Fold */}
      <div className="w-full bg-cream py-16 px-4 flex flex-col items-center relative z-20">
        
        {/* Romantic Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -15% 0px" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-center mb-12 px-4 flex flex-col items-center"
        >
          <div className="inline-block text-left">
            <p className="font-script text-[22px] md:text-3xl text-rose/90 mb-2 italic pl-4">
              &quot;Hôn nhân là chuyện cả đời,
            </p>
            <p className="font-script text-[22px] md:text-3xl text-rose/90 italic">
              Yêu người vừa ý, cưới người mình thương...&quot;
            </p>
          </div>
        </motion.div>

        {/* Zigzag Layout for Families & Couple */}
        <div className="w-full max-w-5xl mx-auto flex flex-col gap-12 md:gap-20 mb-20 px-4">
          
          {/* Groom Block */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -10% 0px" }}
            transition={{ duration: 1 }}
            className="flex flex-col md:flex-row items-stretch bg-white rounded-xl shadow-sm border border-black/5 overflow-hidden"
          >
            {/* Groom Image (Left) */}
            <div className="w-full md:w-1/2 aspect-3/4 md:aspect-4/5 relative">
              <Image 
                src="/images/groom-portrait.jpg" 
                alt={coupleData.groom.name} 
                fill 
                className="object-cover"
              />
            </div>
            {/* Groom Info (Right) */}
            <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col items-center justify-center text-center bg-[#fdfbf7]">
              <h3 className="font-display text-xs md:text-sm tracking-[0.3em] font-bold text-dark uppercase mb-4">Nhà Trai</h3>
              <div className="font-display text-lg md:text-xl text-dark uppercase font-semibold leading-[1.8] mb-8">
                {coupleData.groom.parents.split('&').map((line, i) => (
                  <span key={i} className="block">{line.trim()}</span>
                ))}
              </div>
              
              <div className="w-12 h-px bg-gold/40 mb-8" />
              
              <h4 className="font-display text-xs text-dark/50 uppercase tracking-[0.2em] mb-4">Chú Rể</h4>
              <p className="font-script text-5xl md:text-6xl text-dark">
                {coupleData.groom.name}
              </p>
            </div>
          </motion.div>

          {/* Bride Block */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -10% 0px" }}
            transition={{ duration: 1 }}
            className="flex flex-col md:flex-row-reverse items-stretch bg-white rounded-xl shadow-sm border border-black/5 overflow-hidden"
          >
            {/* Bride Image (Right) */}
            <div className="w-full md:w-1/2 aspect-3/4 md:aspect-4/5 relative">
              <Image 
                src="/images/111A6301.jpg" 
                alt={coupleData.bride.name} 
                fill 
                className="object-cover"
              />
            </div>
            {/* Bride Info (Left) */}
            <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col items-center justify-center text-center bg-[#fdfbf7]">
              <h3 className="font-display text-xs md:text-sm tracking-[0.3em] font-bold text-dark uppercase mb-4">Nhà Gái</h3>
              <div className="font-display text-lg md:text-xl text-dark uppercase font-semibold leading-[1.8] mb-8">
                {coupleData.bride.parents.split('&').map((line, i) => (
                  <span key={i} className="block">{line.trim()}</span>
                ))}
              </div>
              
              <div className="w-12 h-px bg-gold/40 mb-8" />
              
              <h4 className="font-display text-xs text-dark/50 uppercase tracking-[0.2em] mb-4">Cô Dâu</h4>
              <p className="font-script text-5xl md:text-6xl text-dark">
                {coupleData.bride.name}
              </p>
            </div>
          </motion.div>
          
        </div>

        {/* Invitation Text */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "0px 0px -15% 0px" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <p className="text-muted tracking-[3px] uppercase text-sm mb-4">
            Trân trọng kính mời
          </p>
          <h2 className="font-script text-4xl text-rose mb-2">
            Bạn và Người thương
          </h2>
          <p className="text-muted text-sm max-w-sm mx-auto leading-relaxed mt-4">
            Tới tham dự bữa tiệc chung vui cùng gia đình chúng tôi
          </p>
        </motion.div>

        {/* Highlight Image Grid */}
        <div className="w-full max-w-4xl mx-auto px-4 mb-20 sm:mb-28">
          <div className="flex items-start justify-center gap-3 sm:gap-6">
            {/* Left Image */}
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
               className="w-1/3 aspect-[3/4] relative rounded-xl overflow-hidden shadow-sm border-[4px] border-white/50"
            >
              <Image src="/images/111A6623.jpg" alt="Gallery Left" fill className="object-cover" />
            </motion.div>
            
            {/* Center Image (Taller & offset down) */}
            <motion.div
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8, delay: 0.2 }}
               className="w-1/3 aspect-[2/3] relative rounded-xl overflow-hidden shadow-md z-10 mt-8 sm:mt-12 border-[4px] border-white/50"
            >
              <Image src="/images/111A6671-copy.jpg" alt="Gallery Center" fill className="object-cover" />
            </motion.div>

            {/* Right Image */}
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8, delay: 0.4 }}
               className="w-1/3 aspect-[3/4] relative rounded-xl overflow-hidden shadow-sm border-[4px] border-white/50"
            >
              <Image src="/images/111A6653.jpg" alt="Gallery Right" fill className="object-cover" />
            </motion.div>
          </div>
        </div>

        {/* Countdown Squares */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "0px 0px -15% 0px" }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          className="w-full max-w-md mx-auto"
        >
          <h3 className="font-script text-4xl text-rose text-center mb-6">
            Countdown
          </h3>
          <div className="grid grid-cols-4 gap-3">
            {[
              { value: timeLeft.days, label: "Ngày" },
              { value: timeLeft.hours, label: "Giờ" },
              { value: timeLeft.minutes, label: "Phút" },
              { value: timeLeft.seconds, label: "Giây" },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-rose text-white flex flex-col items-center justify-center p-3 rounded-md shadow-md"
              >
                <span className="font-display text-3xl mb-1">
                  {String(item.value).padStart(2, "0")}
                </span>
                <span className="text-[10px] uppercase tracking-wider opacity-80">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
