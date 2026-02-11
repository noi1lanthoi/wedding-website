"use client";

import { motion } from "framer-motion";
import { Heart, Users } from "lucide-react";
import { coupleData } from "@/data/weddingData";

export default function CoupleSection() {
  return (
    <section
      id="couple"
      className="py-20 md:py-28 bg-gradient-to-b from-cream to-blush"
    >
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
            Giới thiệu
          </span>
          <h2 className="text-4xl md:text-5xl font-display text-dark mb-4">
            Cô Dâu & Chú Rể
          </h2>
          <div className="divider">
            <Heart className="w-6 h-6 text-dusty-rose fill-current" />
          </div>
          <p className="text-muted max-w-2xl mx-auto mt-4 leading-relaxed">
            Hai tâm hồn đồng điệu, hai trái tim cùng nhịp đập. Chúng tôi tìm
            thấy nhau giữa muôn vàn người.
          </p>
        </motion.div>

        {/* Couple Cards */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 max-w-4xl mx-auto">
          {/* Groom Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="relative mb-8">
              {/* Image Container */}
              <div className="relative w-56 h-56 md:w-64 md:h-64 mx-auto">
                {/* Decorative Ring */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-gold/30"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                {/* Image */}
                <div className="absolute inset-3 rounded-full overflow-hidden shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                    alt={coupleData.groom.fullName}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Floating Heart */}
                <motion.div
                  className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-white rounded-full p-3 shadow-lg"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Heart className="w-5 h-5 text-gold fill-current" />
                </motion.div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <p className="text-gold text-xs tracking-[3px] uppercase mb-2">
                Chú Rể
              </p>
              <h3 className="text-3xl font-script text-dark mb-3">
                {coupleData.groom.fullName}
              </h3>
              <p className="text-muted text-sm mb-4 px-4 leading-relaxed">
                {coupleData.groom.description}
              </p>
              <div className="flex items-center justify-center gap-2 text-dark text-sm">
                <Users className="w-4 h-4 text-dusty-rose" />
                <span>{coupleData.groom.parents}</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Bride Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="relative mb-8">
              {/* Image Container */}
              <div className="relative w-56 h-56 md:w-64 md:h-64 mx-auto">
                {/* Decorative Ring */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-dusty-rose/30"
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                {/* Image */}
                <div className="absolute inset-3 rounded-full overflow-hidden shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                    alt={coupleData.bride.fullName}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Floating Heart */}
                <motion.div
                  className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-white rounded-full p-3 shadow-lg"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                >
                  <Heart className="w-5 h-5 text-dusty-rose fill-current" />
                </motion.div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <p className="text-dusty-rose text-xs tracking-[3px] uppercase mb-2">
                Cô Dâu
              </p>
              <h3 className="text-3xl font-script text-dark mb-3">
                {coupleData.bride.fullName}
              </h3>
              <p className="text-muted text-sm mb-4 px-4 leading-relaxed">
                {coupleData.bride.description}
              </p>
              <div className="flex items-center justify-center gap-2 text-dark text-sm">
                <Users className="w-4 h-4 text-dusty-rose" />
                <span>{coupleData.bride.parents}</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16 max-w-3xl mx-auto"
        >
          <div className="relative py-8 px-6">
            <span className="absolute top-0 left-1/2 -translate-x-1/2 text-8xl text-rose/30 font-display">
              &ldquo;
            </span>
            <p className="text-xl md:text-2xl font-body text-dark italic leading-relaxed pt-8">
              Trong hàng triệu người, vào ngàn khoảnh khắc, chúng tôi tìm thấy
              nhau và biết rằng đó chính là định mệnh.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
