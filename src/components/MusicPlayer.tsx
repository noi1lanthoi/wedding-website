"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Music, Pause, Play, Volume2, VolumeX } from "lucide-react";

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [showControl, setShowControl] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Tự động play khi load trang (nếu trình duyệt cho phép)
    // Đa số trình duyệt chặn autoplay có tiếng, nên ta để muted ban đầu hoặc chờ user click
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0.5;
      // Thử autoplay
      const playPromise = audio.play();
      console.log(playPromise, 'playPromise');
      
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch((error) => {
            console.log("Autoplay prevented:", error);
            setIsPlaying(false);
          });
      }
    }
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="fixed bottom-6 left-6 z-50">
      {/* Hidden Audio Element */}
      <audio
        ref={audioRef}
        src="/music/wedding-song.mp3"
        loop
        preload="auto"
      />

      <div className="relative group">
        {/* Floating Notes Animation when playing */}
        <AnimatePresence>
          {isPlaying && (
            <>
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 0, x: 0, scale: 0.5 }}
                  animate={{
                    opacity: [0, 1, 0],
                    y: -40 - Math.random() * 20,
                    x: (Math.random() - 0.5) * 40,
                    scale: 1,
                    rotate: Math.random() * 360,
                  }}
                  transition={{
                    duration: 2 + Math.random(),
                    repeat: Infinity,
                    delay: i * 0.8,
                    ease: "easeOut",
                  }}
                  className="absolute -top-4 left-1/2 -translate-x-1/2 pointer-events-none text-gold"
                >
                  <Music size={16} />
                </motion.div>
              ))}
            </>
          )}
        </AnimatePresence>

        {/* Main Button */}
        <motion.button
          onClick={togglePlay}
          className="relative w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/90 backdrop-blur-md shadow-lg border border-gold/30 flex items-center justify-center overflow-hidden hover:scale-105 transition-transform duration-300"
          whileTap={{ scale: 0.95 }}
          onMouseEnter={() => setShowControl(true)}
          onMouseLeave={() => setShowControl(false)}
        >
          {/* Rotating Border/Background Effect */}
          <motion.div
            animate={{ rotate: isPlaying ? 360 : 0 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className={`absolute inset-0 rounded-full border-2 ${
              isPlaying ? "border-gold border-dashed" : "border-gray-200"
            }`}
          />
          
          {/* Inner Icon */}
          <div className="relative z-10 text-gold">
            {isPlaying ? (
              <Music className="w-5 h-5 md:w-6 md:h-6" />
            ) : (
              <Play className="w-5 h-5 md:w-6 md:h-6 ml-1" />
            )}
          </div>

          {/* Mini Control Overlay */}
          <AnimatePresence>
            {showControl && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-black/50 flex items-center justify-center rounded-full z-20"
              >
                {isPlaying ? (
                   <Pause className="w-5 h-5 text-white" />
                ) : (
                   <Play className="w-5 h-5 text-white ml-1" />
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
        
        {/* Helper Tooltip */}
        {!isPlaying && (
           <motion.div 
             initial={{ opacity: 0, x: -10 }}
             animate={{ opacity: 1, x: 0 }}
             exit={{ opacity: 0, x: -10 }}
             className="absolute left-full top-1/2 -translate-y-1/2 ml-4 bg-white/90 backdrop-blur px-3 py-1.5 rounded-lg shadow-md text-xs font-medium text-dark whitespace-nowrap pointer-events-none hidden md:block"
           >
             Bật nhạc nền 🎵
             <div className="absolute left-0 top-1/2 -translate-x-1 -translate-y-1/2 w-2 h-2 bg-white/90 rotate-45" />
           </motion.div>
        )}
      </div>
    </div>
  );
}
