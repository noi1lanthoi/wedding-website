"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Calendar, Navigation, Home, PartyPopper } from "lucide-react";
import { events, dressCode } from "@/data/weddingData";

const iconMap: { [key: string]: React.ElementType } = {
  home: Home,
  party: PartyPopper,
};

export default function EventsSection() {
  return (
    <section id="events" className="py-20 md:py-28 bg-gradient-to-b from-blush to-cream">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm tracking-[3px] uppercase block mb-4">
            Thông tin sự kiện
          </span>
          <h2 className="text-4xl md:text-5xl font-display text-dark mb-4">
            Ngày Trọng Đại
          </h2>
          <div className="divider">
            <Calendar className="w-6 h-6 text-dusty-rose" />
          </div>
          <p className="text-muted max-w-2xl mx-auto mt-4 leading-relaxed">
            Kính mời quý khách đến tham dự và chung vui cùng gia đình chúng tôi
          </p>
        </motion.div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {events.map((event, index) => {
            const IconComponent = iconMap[event.icon] || PartyPopper;
            
            return (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden h-full">
                  {/* Background Decoration */}
                  <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-gold-light/20 to-transparent rounded-full -translate-y-1/2 translate-x-1/2" />
                  
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 15, scale: 1.1 }}
                    className="relative inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-gold to-dusty-rose rounded-2xl shadow-lg mb-6"
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Event Name */}
                  <h3 className="text-2xl md:text-3xl font-display text-dark mb-2">
                    {event.name}
                  </h3>
                  <p className="text-dusty-rose text-sm mb-6">
                    {event.description}
                  </p>

                  {/* Event Details */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center justify-center w-10 h-10 bg-cream rounded-xl shrink-0">
                        <Calendar className="w-5 h-5 text-gold" />
                      </div>
                      <div>
                        <p className="text-sm text-muted">Ngày</p>
                        <p className="text-dark font-medium">{event.date}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="flex items-center justify-center w-10 h-10 bg-cream rounded-xl shrink-0">
                        <Clock className="w-5 h-5 text-gold" />
                      </div>
                      <div>
                        <p className="text-sm text-muted">Thời gian</p>
                        <p className="text-dark font-medium">{event.time}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex items-center justify-center w-10 h-10 bg-cream rounded-xl shrink-0">
                        <MapPin className="w-5 h-5 text-gold" />
                      </div>
                      <div>
                        <p className="text-sm text-muted">Địa điểm</p>
                        <p className="text-dark font-medium">{event.venue}</p>
                        <p className="text-sm text-muted mt-1">{event.address}</p>
                      </div>
                    </div>
                  </div>

                  {/* Map Button */}
                  <motion.a
                    href={event.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="mt-6 w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-cream hover:bg-gold text-gold hover:text-white rounded-xl font-medium transition-colors duration-300 no-underline"
                  >
                    <Navigation className="w-4 h-4" />
                    Xem bản đồ
                  </motion.a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Dress Code */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-xl mx-auto text-center mb-8"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-rose/30">
            <h4 className="text-xl font-display text-dark mb-4">
              💫 Dress Code
            </h4>
            <p className="text-muted mb-6 leading-relaxed">{dressCode.suggestion}</p>
            <div className="flex items-center justify-center gap-6">
              {dressCode.colors.map((color, index) => (
                <motion.div
                  key={color}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col items-center gap-2"
                >
                  <div
                    className="w-12 h-12 rounded-full shadow-md border-2 border-white"
                    style={{
                      background:
                        color === "Pastel Pink"
                          ? "#F8E8E0"
                          : color === "Cream"
                          ? "#FFF8F0"
                          : "#C9A962",
                    }}
                  />
                  <span className="text-xs text-muted">{color}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
