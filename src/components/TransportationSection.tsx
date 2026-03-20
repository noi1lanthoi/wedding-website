"use client";

import { motion } from "framer-motion";
import { CarFront, Heart } from "lucide-react";
import Link from "next/link";

export default function TransportationSection() {
  return (
    <section id="transportation" className="py-10 md:py-10 bg-cream/30 relative">
      <div className="container mx-auto px-4 section-container">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "0px 0px -15% 0px" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="text-rose text-sm tracking-[3px] uppercase block mb-4">
            Di Chuyển
          </span>
          <h2 className="text-4xl md:text-5xl font-display text-dark mb-4 drop-shadow-sm flex items-center justify-center gap-3">
            Đi cùng tụi mình nhé! <CarFront className="text-rose w-8 h-8 md:w-10 md:h-10" />
          </h2>
          <div className="w-16 h-px bg-gold/50 mx-auto mb-6" />

          <p className="font-script text-[1.4rem] md:text-3xl text-dark mb-8 leading-relaxed">
            Chúng tôi có bố trí xe đưa đón dành cho khách mời từ Đà Nẵng.<br/>
            Quý khách vui lòng đăng ký theo link dưới đây để chúng tôi sắp xếp chu đáo hơn. <Heart className="inline text-rose w-4 h-4 ml-1" />
          </p>

          <Link
            href="https://docs.google.com/spreadsheets/d/18PydCvZSC9593BE3wGh3R0abiaxUSY77f0zZQW7mSl8/edit?gid=0#gid=0"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-rose text-white font-medium tracking-wide uppercase text-sm hover:bg-dark hover:text-white transition-all duration-300"
          >
            Đăng Ký Đi Xe
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
