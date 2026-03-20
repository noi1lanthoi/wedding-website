"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import Image from "next/image";
import { loveStory } from "@/data/weddingData";

export default function StorySection() {
  return (
    <section
      id="story"
      className="py-10 md:py-10 bg-transparent relative overflow-hidden"
    >
      <div className="section-container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "0px 0px -15% 0px" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-center mb-8 md:mb-12"
        >
          <span className="text-gold text-sm tracking-[3px] uppercase block mb-4">
            Hành trình yêu thương
          </span>
          <h2 className="text-4xl md:text-5xl font-display text-dark mb-4 drop-shadow-sm">
            Câu Chuyện Tình Yêu
          </h2>
          <div className="flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-gold/70" />
            <div className="w-16 h-px bg-gold/30 mx-3" />
            <Sparkles className="w-5 h-5 text-gold/70" />
          </div>
        </motion.div>

        {/* Polaroid Story Grid */}
        <div className="max-w-5xl mx-auto flex flex-col items-center gap-8 md:gap-12 px-4">
          {loveStory.map((story, index) => {
            // Alternate rotations for a messy scrapbook feel
            const rotations = [
              "-rotate-3",
              "rotate-2",
              "-rotate-1",
              "rotate-3",
            ];
            const rotationClass = rotations[index % rotations.length];
            const alignLeft = index % 2 === 0;

            return (
              <motion.div
                key={story.id}
                initial={{ opacity: 0, x: alignLeft ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "0px 0px -15% 0px" }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className={`w-full flex flex-col ${alignLeft ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-8 md:gap-8`}
              >
                {/* Polaroid Image */}
                <div
                  className={`w-full max-w-sm ${rotationClass} hover:rotate-0 transition-transform duration-500`}
                >
                  <div className="bg-white p-3 sm:p-4 pb-12 sm:pb-16 shadow-xl rounded-sm border border-black/5 relative">
                    {/* Tape decoration */}
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-8 bg-white/40 border border-black/5 -rotate-2 shadow-sm backdrop-blur-sm z-20 mix-blend-multiply" />

                    <div className="relative aspect-4/3 w-full overflow-hidden rounded-sm border border-black/5">
                      <Image
                        src={story.image}
                        alt={story.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                      />
                    </div>
                    {/* Date on Polaroid */}
                    <div className="absolute bottom-3 sm:bottom-4 left-0 right-0 text-center">
                      <span className="font-script text-xl sm:text-2xl text-dark opacity-80">
                        {story.date}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`flex-1 text-center ${alignLeft ? "md:text-left" : "md:text-right"}`}
                >
                  <h3 className="text-3xl font-display text-rose mb-4 drop-shadow-sm">
                    {story.title}
                  </h3>
                  <p className="text-muted leading-relaxed max-w-md mx-auto md:mx-0">
                    {story.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
