"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Clock,
  Calendar as CalendarIcon,
  Navigation,
  Heart,
  Flower2,
} from "lucide-react";
import { events, dressCode } from "@/data/weddingData";

export default function EventsSection() {
  // April 2025 calendar calculation
  // April 1, 2025 is a Tuesday (index 2 for Mon-Sun week, or index 2 for Sun-Sat week? Sun=0, Mon=1, Tue=2)
  const daysInApril = 30;
  const startDay = 2; // Tuesday
  const blanks = Array(startDay).fill(null);
  const days = Array.from({ length: daysInApril }, (_, i) => i + 1);

  return (
    <section id="events" className="py-20 md:py-28 bg-white relative">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-rose text-sm tracking-[3px] uppercase block mb-4">
            Sự kiện
          </span>
          <h2 className="text-4xl md:text-5xl font-display text-dark mb-4">
            Ngày Trọng Đại
          </h2>
          <div className="w-16 h-px bg-gold/50 mx-auto" />
        </motion.div>

        {/* Custom Calendar Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-md mx-auto bg-rose rounded-2xl p-6 md:p-8 shadow-xl border border-gold/30 mb-16 relative overflow-hidden"
        >
          {/* Corner Floral Decor */}
          <div className="absolute inset-0 z-0 pointer-events-none rounded-2xl">
            {/* Top Left Cluster */}
            <Flower2 className="w-32 h-32 text-gold/15 absolute -top-10 -left-10 -rotate-12" strokeWidth={1} />
            <Flower2 className="w-16 h-16 text-white/10 absolute top-12 -left-6 rotate-45" strokeWidth={1} />
            
            {/* Bottom Right Cluster */}
            <Flower2 className="w-28 h-28 text-gold/15 absolute -bottom-8 -right-8 rotate-45" strokeWidth={1} />
            <Flower2 className="w-20 h-20 text-white/10 absolute bottom-14 -right-10 -rotate-12" strokeWidth={1} />
          </div>

          {/* Calendar Header */}
          <div className="text-center mb-6 relative z-10 flex flex-col items-center">
            <h3 className="font-display text-4xl text-white mb-1 drop-shadow-sm">Tháng 4</h3>
            <p className="text-gold-light tracking-widest text-sm font-medium uppercase">Năm 2025</p>
          </div>

          {/* Days of Week */}
          <div className="grid grid-cols-7 text-center mb-4 border-b border-white/20 pb-2 relative z-10">
            {["CN", "T2", "T3", "T4", "T5", "T6", "T7"].map((day, idx) => (
              <div
                key={idx}
                className={`text-xs font-medium ${idx === 0 || idx === 6 ? "text-gold-light" : "text-white/80"}`}
              >
                {day}
              </div>
            ))}
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-y-4 text-center text-sm font-body relative z-10">
            {blanks.map((_, idx) => (
              <div key={`blank-${idx}`} />
            ))}
            {days.map((day) => {
              const isWeddingDay = day === 5;
              return (
                <div
                  key={day}
                  className="relative flex items-center justify-center"
                >
                  {isWeddingDay ? (
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                      className="w-8 h-8 md:w-10 md:h-10 bg-white text-rose rounded-full flex items-center justify-center shadow-lg relative z-10 font-bold"
                    >
                      {day}
                      <Heart className="absolute -bottom-2 -right-2 w-5 h-5 text-gold fill-current drop-shadow-sm" />
                    </motion.div>
                  ) : (
                    <span className="text-white/90">{day}</span>
                  )}
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Events Grid */}
        <div className="flex flex-col items-center max-w-xl mx-auto mb-16 px-4 w-full">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              id={`event-${event.id}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white rounded-md w-full p-8 sm:p-10 shadow-sm border border-black/5 text-center flex flex-col items-center"
            >
              <h3 className="text-2xl font-display text-rose mb-2">
                {event.name}
              </h3>
              <p className="text-muted text-sm mb-6 pb-6 border-b border-black/5 w-full">
                {event.description}
              </p>

              <div className="space-y-4 w-full flex flex-col items-center mb-8">
                <div className="flex flex-col items-center gap-1">
                  <CalendarIcon className="w-5 h-5 text-gold/80 mb-1" />
                  <p className="text-dark font-medium">{event.date}</p>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <Clock className="w-5 h-5 text-gold/80 mb-1" />
                  <p className="text-dark font-medium">{event.time}</p>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <MapPin className="w-5 h-5 text-gold/80 mb-1" />
                  <p className="text-dark font-medium leading-relaxed">
                    {event.venue}
                  </p>
                  <p className="text-sm text-muted">{event.address}</p>
                </div>
              </div>

              <motion.a
                href={event.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-auto flex items-center justify-center gap-2 px-8 py-3 bg-cream hover:bg-blush text-rose border border-rose/20 rounded-full font-medium transition-colors text-sm w-full text-decoration-none"
              >
                <Navigation className="w-4 h-4" />
                Chỉ Đường
              </motion.a>
            </motion.div>
          ))}
        </div>

        {/* Dress Code Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto text-center mt-20"
        >
          <h4 className="text-xl font-display text-rose mb-4 uppercase tracking-widest">
            Dress Code
          </h4>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            {dressCode.colors.map((color) => (
              <div key={color} className="flex flex-col items-center gap-2">
                <div
                  className="w-10 h-10 rounded-full border border-black/10 shadow-sm"
                  style={{
                    background:
                      color === "Emerald Green"
                        ? "#4D5E4D"
                        : color === "Mint"
                          ? "#8A9A8A"
                          : color === "Cream"
                            ? "#F1EFE7"
                            : "#FFFFFF",
                  }}
                />
                <span className="text-xs text-muted font-light tracking-wide">
                  {color}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
