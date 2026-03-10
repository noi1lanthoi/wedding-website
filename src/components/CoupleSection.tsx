"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import Image from "next/image";
import { coupleData } from "@/data/weddingData";

export default function CoupleSection() {
  return (
    <section id="couple" className="py-20 md:py-28 bg-cream">
      <div className="section-container relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-rose text-sm tracking-[3px] uppercase block mb-4">
            Giới thiệu
          </span>
          <h2 className="text-4xl md:text-5xl font-display text-dark mb-4">
            Cô Dâu & Chú Rể
          </h2>
        </motion.div>

        {/* Couple Cards - Stack on mobile, side-by-side on desktop */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 max-w-5xl mx-auto relative px-4">
          {/* Groom Card */}
          <motion.div
            initial={{ opacity: 0, y: 30, rotate: -5 }}
            whileInView={{ opacity: 1, y: 0, rotate: -2 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center w-full max-w-sm"
          >
            {/* Polaroid Frame */}
            <div className="bg-white p-3 sm:p-4 pb-16 sm:pb-20 shadow-xl w-64 sm:w-80 -rotate-2 hover:rotate-0 transition-transform duration-500 rounded-sm border border-black/5 relative">
              <div className="relative aspect-3/4 w-full overflow-hidden mb-4 rounded-sm border border-black/5">
                <Image
                  src={coupleData.groom.image}
                  alt={coupleData.groom.fullName}
                  fill
                  sizes="(max-width: 768px) 300px, 400px"
                  className="object-cover"
                />
              </div>
              {/* Name on Polaroid */}
              <div className="absolute bottom-4 left-0 right-0 text-center">
                <h3 className="text-3xl font-script text-dark">
                  {coupleData.groom.name}
                </h3>
                <p className="text-muted text-[10px] sm:text-xs uppercase tracking-widest mt-1">
                  Trưởng nam
                </p>
              </div>
            </div>

            <div className="mt-8 text-center px-4">
              <h4 className="text-xl font-display text-rose mb-2">
                {coupleData.groom.fullName}
              </h4>
              <p className="text-muted text-sm leading-relaxed">
                {coupleData.groom.description}
              </p>
            </div>
          </motion.div>

          {/* Center "&" for Desktop, hidden on small mobile, changed to a separator */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center justify-center -my-4 md:my-0 z-10"
          >
            <div className="bg-cream p-4 rounded-full border border-gold/20 shadow-sm md:border-none md:shadow-none md:bg-transparent">
              <span className="font-script text-6xl text-gold hidden md:block">
                &
              </span>
              <Heart className="w-8 h-8 text-rose md:hidden" />
            </div>
          </motion.div>

          {/* Bride Card */}
          <motion.div
            initial={{ opacity: 0, y: 30, rotate: 5 }}
            whileInView={{ opacity: 1, y: 0, rotate: 2 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center w-full max-w-sm"
          >
            {/* Polaroid Frame */}
            <div className="bg-white p-3 sm:p-4 pb-16 sm:pb-20 shadow-xl w-64 sm:w-80 rotate-2 hover:rotate-0 transition-transform duration-500 rounded-sm border border-black/5 relative">
              <div className="relative aspect-3/4 w-full overflow-hidden mb-4 rounded-sm border border-black/5">
                <Image
                  src={coupleData.bride.image}
                  alt={coupleData.bride.fullName}
                  fill
                  sizes="(max-width: 768px) 300px, 400px"
                  className="object-cover"
                />
              </div>
              {/* Name on Polaroid */}
              <div className="absolute bottom-4 left-0 right-0 text-center">
                <h3 className="text-3xl font-script text-dark">
                  {coupleData.bride.name}
                </h3>
                <p className="text-muted text-[10px] sm:text-xs uppercase tracking-widest mt-1">
                  Trưởng nữ
                </p>
              </div>
            </div>

            <div className="mt-8 text-center px-4">
              <h4 className="text-xl font-display text-rose mb-2">
                {coupleData.bride.fullName}
              </h4>
              <p className="text-muted text-sm leading-relaxed">
                {coupleData.bride.description}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
