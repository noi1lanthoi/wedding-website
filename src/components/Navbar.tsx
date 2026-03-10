"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Heart } from "lucide-react";
import { coupleData } from "@/data/weddingData";

const navItems = [
  { name: "Trang chủ", href: "#home" },
  { name: "Cặp đôi", href: "#couple" },
  { name: "Câu chuyện", href: "#story" },
  { name: "Sự kiện", href: "#events" },
  { name: "Album", href: "#gallery" },
  { name: "RSVP", href: "#rsvp" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#home"
            className="flex items-center gap-2 text-2xl font-script no-underline"
            whileHover={{ scale: 1.05 }}
          >
            <span className={isScrolled ? "text-gold" : "text-white"}>
              {coupleData.groom.name}
            </span>
            <Heart
              className="w-5 h-5 fill-current"
              style={{ color: "#D4A5A5" }}
            />
            <span className={isScrolled ? "text-gold" : "text-white"}>
              {coupleData.bride.name}
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`text-sm font-medium no-underline transition-colors duration-300 hover:text-gold ${
                  isScrolled ? "text-dark" : "text-white/90"
                }`}
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-transparent border-none cursor-pointer"
          >
            {isMobileMenuOpen ? (
              <X
                className={`w-6 h-6 ${isScrolled ? "text-dark" : "text-white"}`}
              />
            ) : (
              <Menu
                className={`w-6 h-6 ${isScrolled ? "text-dark" : "text-white"}`}
              />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 bg-white/98 backdrop-blur-xl rounded-2xl shadow-xl p-4"
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-3 px-4 text-dark no-underline hover:text-gold hover:bg-cream rounded-lg transition-colors"
              >
                {item.name}
              </a>
            ))}
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
}
