"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Camera, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

import { gallery } from "@/data/weddingData";

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedImage(index);
  const closeLightbox = () => setSelectedImage(null);

  const goToPrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(
        selectedImage === 0 ? gallery.length - 1 : selectedImage - 1,
      );
    }
  };

  const goToNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(
        selectedImage === gallery.length - 1 ? 0 : selectedImage + 1,
      );
    }
  };

  return (
    <section id="gallery" className="py-10 md:py-10 bg-transparent relative">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "0px 0px -15% 0px" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-center mb-8 flex flex-col items-center justify-center gap-4"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display text-dark tracking-wider sm:tracking-widest uppercase flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-center px-2">
            Album
            <span className="font-script text-rose lowercase mt-2 sm:mt-4 italic">
              of
            </span>
            Love
          </h2>
        </motion.div>

        {/* Masonry Layout using CSS Columns */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6 px-4 md:px-0">
          {gallery.map((image, index) => {
            // Predictable pseudo-random rotation based on index
            const rotations = [
              "-rotate-2",
              "rotate-1",
              "-rotate-1",
              "rotate-2",
              "rotate-0",
              "-rotate-3",
            ];
            const rotationClass = rotations[index % rotations.length];

            return (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "0px 0px -15% 0px" }}
                transition={{ duration: 1.2, ease: "easeOut", delay: (index % 3) * 0.1 }}
                className="break-inside-avoid mb-8"
              >
                <motion.div
                  whileHover={{ y: -5, cursor: "pointer", scale: 1.02 }}
                  onClick={() => openLightbox(index)}
                  className={`relative p-3 bg-white shadow-sm border border-black/5 hover:shadow-xl transition-all duration-300 group ${rotationClass}`}
                >
                  {/* Tiny piece of tape */}
                  {index % 3 === 0 && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-5 bg-white/40 border border-black/5 rotate-2 shadow-xs backdrop-blur-sm z-10" />
                  )}
                  {index % 4 === 1 && (
                    <div className="absolute -top-3 right-6 w-12 h-5 bg-white/40 border border-black/5 -rotate-3 shadow-xs backdrop-blur-sm z-10" />
                  )}

                  <div className="relative overflow-hidden aspect-3/4">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Elegant Hover Overlay */}
                    <div className="absolute inset-0 bg-dark/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg transform scale-0 group-hover:scale-100 transition-transform duration-300 delay-75">
                        <Camera className="w-5 h-5 text-dark/70" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors z-10 bg-transparent border-none cursor-pointer"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-colors p-2 bg-black/30 rounded-full border-none cursor-pointer z-50"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-colors p-2 bg-black/30 rounded-full border-none cursor-pointer z-50"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            {/* Image */}
            <div className="relative w-full h-[85vh]">
              <Image
                src={gallery[selectedImage].src}
                alt={gallery[selectedImage].alt}
                fill
                className="object-contain rounded-lg shadow-2xl"
                sizes="100vw"
                onClick={(e) => e.stopPropagation()}
              />
            </div>

            {/* Image Counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-sm">
              {selectedImage + 1} / {gallery.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
