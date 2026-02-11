"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart } from "lucide-react";
import { coupleData, weddingDate } from "@/data/weddingData";

export default function WelcomeEnvelope() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Check session storage to see if user has already opened the envelope
    const hasOpened = sessionStorage.getItem("envelopeOpened");
    if (hasOpened) {
      setIsVisible(false);
    } else {
        // Disable scroll when envelope is visible
        document.body.style.overflow = 'hidden';
    }
  }, []);

  const handleOpen = () => {
    setIsOpen(true);
    // Enable scroll after animation starts
    setTimeout(() => {
        document.body.style.overflow = 'unset';
    }, 1000); // 1s wait for open animation
    
    // Save state
    sessionStorage.setItem("envelopeOpened", "true");

    // Remove component from DOM after animation completes
    setTimeout(() => {
        setIsVisible(false);
    }, 2500); // 2.5s total duration
  };

  if (!isVisible) return null;

  return (
    <motion.div 
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm"
      initial={{ opacity: 1 }}
      animate={{ opacity: isOpen ? 0 : 1 }}
      transition={{ delay: 1.5, duration: 1 }}
    >
      <div className="relative w-full max-w-lg px-4 perspective-1000">
         {/* Envelope Container */}
         <motion.div 
            className="relative w-full aspect-[4/3] bg-[#FDFBF7] shadow-2xl rounded-lg overflow-hidden flex flex-col items-center justify-center cursor-pointer group"
            onClick={!isOpen ? handleOpen : undefined}
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ 
                scale: isOpen ? 1.5 : 1, 
                opacity: isOpen ? 0 : 1,
                y: isOpen ? 100 : 0
            }}
            transition={{ duration: 0.8 }}
         >
             {/* Envelope Flap (Top triangle) */}
             <motion.div 
                className="absolute top-0 left-0 w-full h-1/2 bg-[#f0ebe0] origin-top z-20 shadow-md"
                style={{ clipPath: 'polygon(0 0, 100% 0, 50% 100%)' }}
                animate={{ rotateX: isOpen ? 180 : 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
             />

             {/* Envelope Body (Bottom) */}
             <div className="absolute bottom-0 left-0 w-full h-full bg-[#FAFAFA] z-10 pointer-events-none" 
                  style={{ clipPath: 'polygon(0 0, 50% 50%, 100% 0, 100% 100%, 0 100%)', background: 'linear-gradient(to bottom, #f7f3e8, #FDFBF7)' }} 
             />

             {/* Wax Seal */}
             <motion.div 
                className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 flex flex-col items-center justify-center"
                animate={{ 
                    opacity: isOpen ? 0 : 1,
                    scale: isOpen ? 1.5 : 1
                }}
                transition={{ duration: 0.3 }}
             >
                 <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#C83E3E] shadow-lg flex items-center justify-center border-4 border-[#A03030] relative group-hover:scale-105 transition-transform duration-300">
                    <div className="absolute inset-0 rounded-full border border-white/20" />
                    <span className="font-script text-white text-2xl font-bold">N&N</span>
                 </div>
                 <motion.p 
                    className="text-dark/60 text-sm mt-4 font-body tracking-wider uppercase font-medium bg-white/80 px-4 py-1 rounded-full backdrop-blur-sm"
                    animate={{ y: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                 >
                    Cham để mở
                 </motion.p>
             </motion.div>

             {/* Invitation Card (Inside) */}
             <motion.div
                className="absolute inset-x-8 top-12 bottom-4 bg-[#fff] shadow-inner p-6 flex flex-col items-center justify-center text-center border border-gold/20"
                initial={{ y: 0 }}
                animate={{ y: isOpen ? -150 : 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
             >
                 <p className="text-gold uppercase tracking-widest text-xs mb-2">Trân trọng kính mời</p>
                 <h2 className="font-script text-3xl text-dark mb-1">{coupleData.groom.name}</h2>
                 <span className="text-gold text-lg">&</span>
                 <h2 className="font-script text-3xl text-dark mb-4">{coupleData.bride.name}</h2>
                 <div className="w-12 h-px bg-gold/50 my-2" />
                 <p className="font-body text-sm text-gray-500 mt-2">{weddingDate.displayDate}</p>
             </motion.div>

         </motion.div>
      </div>
    </motion.div>
  );
}
