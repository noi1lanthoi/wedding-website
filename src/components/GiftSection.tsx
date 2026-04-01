"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Gift, X, Heart } from "lucide-react";
import Image from "next/image";
import { coupleData } from "@/data/weddingData";

export default function GiftSection() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <>
      <div className="flex justify-center items-center py-10 md:py-16 px-4">
        <div className="relative flex flex-col items-center bg-white/60 backdrop-blur-md px-6 py-10 rounded-3xl border border-rose/10 shadow-sm max-w-sm w-full transition-shadow hover:shadow-md">
          
          {/* Decorative Corner Elements */}
          <div className="absolute top-4 left-4 w-6 h-6 border-t-[1.5px] border-l-[1.5px] border-gold/40 rounded-tl-sm"></div>
          <div className="absolute bottom-4 right-4 w-6 h-6 border-b-[1.5px] border-r-[1.5px] border-gold/40 rounded-br-sm"></div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-6 z-10"
          >
            <h2 className="text-4xl font-display text-rose mb-3 drop-shadow-sm">Hộp Mừng Cưới</h2>
            <div className="w-8 h-px bg-gold/50 mx-auto mb-4" />
            <p className="text-muted text-[13px] md:text-sm font-body italic leading-relaxed px-4">
              Gửi gắm yêu thương và những lời chúc tốt đẹp nhất đến cô dâu, chú rể
            </p>
          </motion.div>

          <div className="relative mt-2 mb-4">
            <motion.div
              animate={{ rotate: [0, -4, 4, -4, 4, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut", repeatDelay: 2.5 }}
              className="relative z-10"
            >
              <button
                onClick={() => setIsPopupOpen(true)}
                className="group relative bg-white p-5 md:p-6 rounded-full shadow-md border border-rose/20 hover:border-gold/40 hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
              >
                <div className="absolute inset-0 bg-rose/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-full"></div>
                
                <Gift className="w-14 h-14 md:w-16 md:h-16 text-rose group-hover:text-gold transition-colors duration-300" />
                <div className="absolute top-1 right-2">
                  <motion.div animate={{ scale: [1, 1.15, 1] }} transition={{ repeat: Infinity, duration: 2 }}>
                    <Heart className="w-5 h-5 text-rose fill-rose group-hover:fill-gold group-hover:text-gold transition-colors duration-300" />
                  </motion.div>
                </div>
              </button>
            </motion.div>

            {/* Click me indicator */}
            <motion.div 
              initial={{ y: 0 }}
              animate={{ y: [0, -4, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap z-20"
            >
              <span className="text-[10px] sm:text-[11px] font-medium tracking-widest uppercase text-rose bg-cream px-3 py-1.5 rounded-full border border-rose/20 shadow-sm pointer-events-none">
                Nhấn vào để mở
              </span>
            </motion.div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isPopupOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              onClick={() => setIsPopupOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
            />

            {/* Modal */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-cream w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-sm shadow-2xl z-10 p-6 md:p-10 border border-gold/20 custom-scrollbar"
            >
              <button 
                onClick={() => setIsPopupOpen(false)}
                className="absolute top-4 right-4 p-2 bg-white/50 hover:bg-white rounded-full transition-colors z-20"
              >
                <X className="w-5 h-5 text-dark" />
              </button>

              <div className="text-center mb-8 mt-2">
                <h2 className="text-3xl md:text-4xl font-display text-rose mb-3 drop-shadow-sm">Hộp Mừng Cưới</h2>
                <div className="w-12 h-px bg-gold/50 mx-auto mb-4" />
                <p className="text-muted text-sm font-body italic leading-relaxed">
                  Sự hiện diện của bạn là món quà tuyệt vời nhất.<br className="hidden md:block"/>
                  Cảm ơn bạn đã luôn yêu thương và chúc phúc cho chúng tôi!
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                {/* Groom */}
                <div className="bg-white p-6 rounded-sm shadow-sm border border-black/5 text-center relative overflow-hidden transition-transform hover:-translate-y-1 duration-300">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gold"></div>
                  <h3 className="font-script text-dark mb-4 drop-shadow-sm text-3xl">Mừng chú rể</h3>
                  
                  <div className="relative w-40 h-40 md:w-48 md:h-48 mx-auto mb-5 border-2 border-dashed border-gold/30 p-2 rounded-sm bg-white">
                    <Image 
                      src={coupleData.groom.bankAccount.qrCode}
                      alt="QR Chú Rể"
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                  
                  <div className="space-y-1.5 font-body text-sm">
                    <p className="font-semibold text-rose text-base">{coupleData.groom.bankAccount.bankName}</p>
                    <p className="font-mono text-dark font-medium tracking-wider text-base">{coupleData.groom.bankAccount.accountNumber}</p>
                    <p className="text-muted uppercase tracking-widest text-[11px]">{coupleData.groom.bankAccount.accountHolder}</p>
                  </div>
                </div>

                {/* Bride */}
                <div className="bg-white p-6 rounded-sm shadow-sm border border-black/5 text-center relative overflow-hidden transition-transform hover:-translate-y-1 duration-300">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-rose"></div>
                  <h3 className="font-script text-dark mb-4 drop-shadow-sm text-3xl">Mừng cô dâu</h3>
                  
                  <div className="relative w-40 h-40 md:w-48 md:h-48 mx-auto mb-5 border-2 border-dashed border-rose/30 p-2 rounded-sm bg-white">
                    <Image 
                      src={coupleData.bride.bankAccount.qrCode}
                      alt="QR Cô Dâu"
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                  
                  <div className="space-y-1.5 font-body text-sm">
                    <p className="font-semibold text-rose text-base">{coupleData.bride.bankAccount.bankName}</p>
                    <p className="font-mono text-dark font-medium tracking-wider text-base">{coupleData.bride.bankAccount.accountNumber}</p>
                    <p className="text-muted uppercase tracking-widest text-[11px]">{coupleData.bride.bankAccount.accountHolder}</p>
                  </div>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
