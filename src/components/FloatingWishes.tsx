"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Wish {
  id: number;
  name: string;
  message: string;
  uniqueId?: number;
  time?: string;
}

const mockWishes: Wish[] = [
  { id: 1, name: "Linh", message: "✨ Đồng tâm đồng lòng, xây đắp tổ ấm!" },
  { id: 2, name: "Hà", message: "Chúc mừng hạnh phúc!" },
  { id: 3, name: "Huy", message: "Chúc hai bạn trăm năm hạnh phúc!" },
  { id: 4, name: "Chanh", message: "Chúc mừng hạnh phúc trăm năm nha!" },
  { id: 5, name: "Chinh", message: "Chúc hai bạn trăm năm hạnh phúc!" },
];

export default function FloatingWishes() {
  const [allWishes, setAllWishes] = useState<Wish[]>(mockWishes);
  const [activeWishes, setActiveWishes] = useState<Wish[]>([]);

  // Fetch initial wishes from API, if any
  useEffect(() => {
    import("@/data/weddingData")
      .then(({ apiConfig }) => {
        if (apiConfig.rsvpApiUrl) {
          fetch(apiConfig.rsvpApiUrl)
            .then((res) => res.json())
            .then((data) => {
              if (data && Array.isArray(data) && data.length > 0) {
                setAllWishes(data);
              }
            })
            .catch((err) =>
              console.error("Error fetching wishes for floating:", err)
            );
        }
      })
      .catch((err) => console.error("Error loading apiConfig", err));
  }, []);

  // Listen to custom event when a user submits a new wish
  useEffect(() => {
    const handleNewWish = (event: CustomEvent<Wish>) => {
      setAllWishes((prev) => [event.detail, ...prev]);
    };
    
    // Type casting because standard EventListener doesn't know about CustomEvent details
    window.addEventListener("newWish", handleNewWish as EventListener);
    
    return () => {
      window.removeEventListener("newWish", handleNewWish as EventListener);
    };
  }, []);

  useEffect(() => {
    let index = 0;
    
    // Don't setup interval if there are no wishes (though we have mockWishes fallback)
    if (allWishes.length === 0) return;

    const interval = setInterval(() => {
      // Create a unique copy of the wish to render it freshly
      const newWish = { ...allWishes[index], uniqueId: Date.now() };

      setActiveWishes((prev) => {
        const next = [...prev, newWish];
        // Keep only the last 2 wishes to avoid clutter
        if (next.length > 2) {
          next.shift();
        }
        return next;
      });

      // Loop back to the beginning when we hit the end
      index = (index + 1) % allWishes.length;
    }, 4500); // Popup every 4.5 seconds

    return () => clearInterval(interval);
  }, [allWishes]); // Rethink the interval when `allWishes` updates

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
