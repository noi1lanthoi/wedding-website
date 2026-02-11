"use client";

import { motion } from "framer-motion";
import { Heart, Calendar, Sparkles } from "lucide-react";
import { loveStory } from "@/data/weddingData";

const storyImages = [
  "https://images.unsplash.com/photo-1529634597503-139d3726fed5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
];

export default function StorySection() {
  return (
    <section id="story" className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blush rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl opacity-50" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-light/20 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl" />

      <div className="section-container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm tracking-[3px] uppercase block mb-4">
            Hành trình yêu thương
          </span>
          <h2 className="text-4xl md:text-5xl font-display text-dark mb-4">
            Câu Chuyện Tình Yêu
          </h2>
          <div className="divider">
            <Sparkles className="w-6 h-6 text-gold" />
          </div>
          <p className="text-muted max-w-2xl mx-auto mt-4 leading-relaxed">
            Mỗi khoảnh khắc bên nhau đều là một dấu mốc đáng nhớ 
            trong hành trình tìm thấy tình yêu đích thực.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-20 w-0.5 bg-gradient-to-b from-gold via-dusty-rose to-rose hidden md:block" />

          {loveStory.map((story, index) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`relative mb-12 md:mb-16 md:flex ${
                index % 2 === 0 ? "md:justify-start" : "md:justify-end"
              }`}
            >
              {/* Timeline Dot */}
              <motion.div
                className="absolute left-1/2 top-8 -translate-x-1/2 hidden md:flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg border-2 border-gold z-10"
                whileHover={{ scale: 1.2 }}
              >
                <Heart className="w-5 h-5 text-dusty-rose fill-current" />
              </motion.div>

              {/* Content Card */}
              <motion.div
                className={`w-full md:w-[calc(50%-2rem)] bg-gradient-to-br from-white to-cream rounded-3xl p-6 md:p-8 shadow-lg ${
                  index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                }`}
                whileHover={{ y: -5 }}
              >
                {/* Date Badge */}
                <div className={`flex mb-4 ${index % 2 === 0 ? "md:justify-start" : "md:justify-start"}`}>
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 rounded-full text-gold text-sm font-medium">
                    <Calendar className="w-4 h-4" />
                    {story.date}
                  </span>
                </div>

                {/* Image */}
                <div className="relative mb-6 rounded-2xl overflow-hidden aspect-video">
                  <img
                    src={storyImages[index] || storyImages[0]}
                    alt={story.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-display text-dark mb-3">
                  {story.title}
                </h3>
                <p className="text-muted leading-relaxed">
                  {story.description}
                </p>
              </motion.div>
            </motion.div>
          ))}

          {/* Final Heart */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-20 h-20 bg-gradient-to-br from-gold to-dusty-rose rounded-full flex items-center justify-center shadow-xl"
              >
                <Heart className="w-10 h-10 text-white fill-current" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
