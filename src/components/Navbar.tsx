"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Heart } from "lucide-react";
import { coupleData } from "@/data/weddingData";

const navItems = [
  { name: "Trang chủ", href: "#home" },
  { name: "Chỉ đường tới nhà hàng", href: "#event-2" },
  { name: "Đăng ký xe đưa đón khách tại Đà Nẵng", href: "#transportation" },
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
          ? "bg-white/95 backdrop-blur-md shadow-lg pb-3"
          : "bg-transparent pb-5"
      }`}
      style={{
        paddingTop: isScrolled
          ? "calc(max(env(safe-area-inset-top, 0px), 12px))"
          : "calc(max(env(safe-area-inset-top, 0px), 20px))",
      }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between w-full">
          {/* Mobile Layout: Spacer, Center Logo, Right Hamburger */}
          <div className="flex-1 md:hidden" />
          
          <div className="flex-shrink-0 flex justify-center z-10 md:justify-start md:mr-8">
            <motion.a
              href="#home"
              className="flex items-center gap-2 text-2xl font-script no-underline whitespace-nowrap pt-3 pb-1"
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
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-1 items-center justify-end gap-8">
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

          {/* Mobile Menu Button Tracker */}
          <div className="flex-1 md:hidden flex justify-end">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg bg-transparent border-none cursor-pointer"
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
