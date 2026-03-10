"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
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
    <section
      id="home"
      className="relative min-h-[90vh] flex flex-col items-center justify-start overflow-hidden pt-20 pb-10 px-4"
    >
      {/* Parents Info (Top) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="w-full max-w-2xl mx-auto flex justify-between items-start text-center mb-16 relative"
      >
        <div className="flex-1">
          <h3 className="font-display text-2xl text-rose mb-2">Nhà Trai</h3>
          <p className="font-body text-sm text-muted whitespace-pre-line leading-relaxed">
            {coupleData.groom.parents.replace(" & ", "\n")}
          </p>
        </div>

        {/* Decorative divider */}
        <div className="w-px h-20 bg-gold/40 mx-4 mt-2" />

        <div className="flex-1">
          <h3 className="font-display text-2xl text-rose mb-2">Nhà Gái</h3>
          <p className="font-body text-sm text-muted whitespace-pre-line leading-relaxed">
            {coupleData.bride.parents.replace(" & ", "\n")}
          </p>
        </div>
      </motion.div>

      {/* Main Big Names */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-center w-full relative z-10 my-4"
      >
        <h1 className="font-display text-5xl sm:text-7xl md:text-8xl text-rose tracking-wide relative">
          <span className="block mb-4">{coupleData.groom.name}</span>
          <span className="font-script text-4xl sm:text-6xl text-gold absolute left-1/2 -translate-x-1/2 -translate-y-8">
            &
          </span>
          <span className="block mt-4">{coupleData.bride.name}</span>
        </h1>
      </motion.div>

      {/* Invitation Text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="text-center mt-16 mb-12"
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

      {/* Countdown Squares */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="w-full max-w-md mx-auto mt-auto"
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
    </section>
  );
}
