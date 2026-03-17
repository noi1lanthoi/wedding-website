"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Wish {
  id: number;
  name: string;
  message: string;
  uniqueId?: number;
}

const mockWishes: Wish[] = [
  { id: 1, name: "Linh", message: "✨ Đồng tâm đồng lòng, xây đắp tổ ấm!" },
  { id: 2, name: "Hà", message: "Chúc mừng hạnh phúc!" },
  { id: 3, name: "Huy", message: "Chúc hai bạn trăm năm hạnh phúc!" },
  { id: 4, name: "Chanh", message: "Chúc mừng hạnh phúc trăm năm nha!" },
  { id: 5, name: "Chinh", message: "Chúc hai bạn trăm năm hạnh phúc!" },
];

export default function FloatingWishes() {
  const [activeWishes, setActiveWishes] = useState<Wish[]>([]);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      // Add a new wish to the list
      const newWish = { ...mockWishes[index], uniqueId: Date.now() };

      setActiveWishes((prev) => {
        const next = [...prev, newWish];
        // Keep only the last 2 wishes to avoid clutter
        if (next.length > 2) {
          next.shift();
        }
        return next;
      });

      index = (index + 1) % mockWishes.length;
    }, 4500); // Popup every 4.5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-24 left-4 z-40 pointer-events-none flex flex-col-reverse gap-4 items-start">
      <AnimatePresence mode="popLayout">
        {activeWishes.map((wish) => (
          <motion.div
            key={wish.uniqueId}
            layout
            initial={{ opacity: 0, x: -20, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-rose/80 backdrop-blur-sm text-white px-4 py-2 rounded-full text-xs font-body shadow-lg max-w-[250px] truncate"
            style={{ backgroundColor: "rgba(182, 133, 133, 0.85)" }} // Specific dusky pink from Zenlove
          >
            <span className="font-bold mr-1">{wish.name}:</span>
            {wish.message}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
