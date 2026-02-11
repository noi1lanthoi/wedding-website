"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Palette, Check } from "lucide-react";
import { useTheme } from "next-themes";

// Định nghĩa các Theme tương ứng với Dress Code
const themesData = [
  {
    id: "original",
    name: "Gold Luxury",
    color: "#C9A962", // Màu hiển thị trên nút (Gold)
  },
  {
    id: "romantic",
    name: "Romantic Pink",
    color: "#E68A8A", // Màu hiển thị trên nút (Pink)
  },
  {
    id: "classic",
    name: "Classic Blue",
    color: "#4A90E2", // Màu hiển thị trên nút (Blue)
  },
  {
    id: "nature",
    name: "Sage Green",
    color: "#7DA37D", // Màu hiển thị trên nút (Green)
  },
];

export default function DressCodeSection() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Chỉ render UI sau khi mount để tránh hydration mismatch
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Hoặc render skeleton
  }

  return (
    <section className="py-16 bg-white/50 backdrop-blur-sm relative border-y border-gold/10">
      <div className="section-container text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <span className="text-gold text-sm tracking-[3px] uppercase block mb-3">
            Trải nghiệm
          </span>
          <h2 className="text-3xl md:text-4xl font-display text-dark mb-4 flex items-center justify-center gap-3">
            <Palette className="w-8 h-8 text-gold" />
            Chọn Theme Yêu Thích
          </h2>
          <p className="text-muted max-w-lg mx-auto">
            Hãy thử chọn màu sắc trang phục bạn yêu thích bên dưới để thay đổi
            phong cách của website nhé!
          </p>
        </motion.div>

        {/* Theme Selectors */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-10">
          {themesData.map((t, index) => (
            <motion.button
              key={t.id}
              onClick={() => setTheme(t.id)}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="group flex flex-col items-center gap-3 cursor-pointer bg-transparent border-none"
            >
              {/* Color Circle */}
              <div
                className={`w-16 h-16 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 relative ${
                  theme === t.id
                    ? "ring-4 ring-offset-4 ring-gold/50 scale-110"
                    : "hover:shadow-xl"
                }`}
                style={{ backgroundColor: t.color }}
              >
                {theme === t.id && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="bg-white/20 p-2 rounded-full backdrop-blur-sm"
                  >
                    <Check className="w-6 h-6 text-white" strokeWidth={3} />
                  </motion.div>
                )}

                {/* Ripple Effect Ring (Decorative) */}
                <div className="absolute inset-0 rounded-full border border-white/30 scale-90 group-hover:scale-100 transition-transform" />
              </div>

              {/* Theme Name */}
              <span
                className={`text-sm font-medium transition-colors ${
                  theme === t.id ? "text-gold font-bold" : "text-gray-500"
                }`}
              >
                {t.name}
              </span>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
