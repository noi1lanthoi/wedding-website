"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Music, Pause, Play } from "lucide-react";

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [showControl, setShowControl] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [musicNotes, setMusicNotes] = useState<
    { y: number; x: number; rotate: number; duration: number }[]
  >([]);

  // Pre-calculate random values for music notes to avoid hydration mistmatches
  useEffect(() => {
    const randomNotes = [...Array(3)].map(() => ({
      y: -40 - Math.random() * 20,
      x: (Math.random() - 0.5) * 40,
      rotate: Math.random() * 360,
      duration: 2 + Math.random(),
    }));
    setTimeout(() => setMusicNotes(randomNotes), 0);
  }, []);

  useEffect(() => {
    // Tự động play khi load trang (nếu trình duyệt cho phép)
    // Đa số trình duyệt chặn autoplay có tiếng, nên ta để muted ban đầu hoặc chờ user click
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0.5;
      
      const playAudio = async () => {
        try {
          await audio.play();
          setIsPlaying(true);
        } catch (error) {
          console.log("Autoplay prevented:", error);
          setIsPlaying(false);
          
          // Thêm listener cho tương tác đầu tiên của user để bật nhạc
          const playOnInteract = async () => {
            try {
              await audio.play();
              setIsPlaying(true);
              // Xóa event listeners sau khi đã play thành công
              ["click", "touchstart", "scroll", "keydown"].forEach(evt => 
                document.removeEventListener(evt, playOnInteract)
              );
            } catch (err) {
              console.log("Still prevented:", err);
            }
          };

          ["click", "touchstart", "scroll", "keydown"].forEach(evt => 
            document.addEventListener(evt, playOnInteract, { once: true })
          );
        }
      };

      playAudio();
    }
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setTimeout(() => setIsPlaying(!isPlaying), 0);
    }
  };

  return (
    <div className="fixed bottom-24 md:bottom-8 right-4 md:right-6 z-60">
      {/* Hidden Audio Element */}
      <audio ref={audioRef} src="/music/wedding-song.mp3" loop preload="auto" />

      <div className="relative group">
        {/* Floating Notes Animation when playing */}
        <AnimatePresence>
          {isPlaying && (
            <>
              {musicNotes.map((note, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 0, x: 0, scale: 0.5 }}
                  animate={{
                    opacity: [0, 1, 0],
                    y: note.y,
                    x: note.x,
                    scale: 1,
                    rotate: note.rotate,
                  }}
                  transition={{
                    duration: note.duration,
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
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            className="absolute right-full top-1/2 -translate-y-1/2 mr-4 bg-white/90 backdrop-blur px-3 py-1.5 rounded-lg shadow-md text-xs font-medium text-dark whitespace-nowrap pointer-events-none hidden md:block"
          >
            Bật nhạc nền 🎵
            <div className="absolute right-0 top-1/2 translate-x-1 -translate-y-1/2 w-2 h-2 bg-white/90 rotate-45" />
          </motion.div>
        )}
      </div>
    </div>
  );
}
