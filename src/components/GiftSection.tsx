"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Check, CreditCard, Gift } from "lucide-react";
import { coupleData } from "@/data/weddingData";

export default function GiftSection() {
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  const BankCard = ({ person, type }: { person: any, type: 'groom' | 'bride' }) => (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-3xl overflow-hidden shadow-xl border border-blush/20 group hover:shadow-2xl transition-all duration-300"
    >
      {/* Card Header Color Stripe */}
      <div className={`h-3 w-full ${type === 'groom' ? 'bg-[#7a8fa3]' : 'bg-[#e8c4c4]'}`} />
      
      <div className="p-6 md:p-8 flex flex-col items-center text-center">
        {/* Avatar/Icon */}
        <div className="mb-4 relative">
            <div className={`w-20 h-20 rounded-full flex items-center justify-center border-4 ${type === 'groom' ? 'border-[#7a8fa3]/30 bg-[#7a8fa3]/10' : 'border-[#e8c4c4]/30 bg-[#e8c4c4]/10'}`}>
               <Gift className={`w-8 h-8 ${type === 'groom' ? 'text-[#7a8fa3]' : 'text-[#e8c4c4]'}`} />
            </div>
        </div>

        <h3 className="font-display text-2xl mb-1">{type === 'groom' ? 'Mừng Chú Rể' : 'Mừng Cô Dâu'}</h3>
        <p className="font-body text-gray-500 mb-6 text-sm">{person.fullName}</p>
        
        {/* QR Code */}
        <div className="bg-white p-2 rounded-xl border border-gray-100 shadow-inner mb-6 w-48 h-48 flex items-center justify-center relative overflow-hidden group-hover:border-gold/30 transition-colors">
            {/* Using VietQR API for dynamic QR generation which is more reliable than static placeholder */}
            <img 
                src={person.bankAccount.qrCode} 
                alt={`QR Code ${person.bankAccount.bankName}`}
                className="w-full h-full object-contain"
            />
        </div>

        {/* Bank Info */}
        <div className="w-full space-y-3">
            <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg border border-gray-100">
                <span className="text-xs text-gray-500 uppercase tracking-wider">Ngân hàng</span>
                <span className="font-medium text-dark">{person.bankAccount.bankName}</span>
            </div>
            
            <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg border border-gray-100 relative group/copy">
                <div className="flex flex-col items-start">
                     <span className="text-xs text-gray-500 uppercase tracking-wider">Số tài khoản</span>
                     <span className="font-mono text-lg font-bold text-dark tracking-wide">{person.bankAccount.accountNumber}</span>
                </div>
                
                <button 
                  onClick={() => handleCopy(person.bankAccount.accountNumber, type)}
                  className="p-2 hover:bg-white rounded-full transition-colors active:scale-95"
                  title="Sao chép số tài khoản"
                >
                    {copied === type ? <Check size={18} className="text-green-500" /> : <Copy size={18} className="text-gray-400 group-hover/copy:text-gold" />}
                </button>
            </div>

            <div className="text-center pt-2">
                <p className="text-xs text-gray-400 uppercase tracking-widest">Chủ tài khoản</p>
                <p className="text-sm font-semibold text-dark mt-1">{person.bankAccount.accountHolder}</p>
            </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="gift" className="py-20 md:py-32 bg-[#FDFBF7] relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        
        <div className="container mx-auto px-4 section-container">
            <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
               className="text-center mb-16"
            >
                <div className="flex items-center justify-center gap-4 mb-4">
                    <div className="h-px w-12 bg-gold/50" />
                    <span className="text-gold uppercase tracking-[0.2em] text-sm font-medium">Hộp Mừng Cưới</span>
                    <div className="h-px w-12 bg-gold/50" />
                </div>
                <h2 className="font-script text-4xl md:text-6xl text-dark mb-6">Gửi Lời Chúc</h2>
                <p className="font-body text-gray-600 max-w-2xl mx-auto italic leading-relaxed">
                    Sự hiện diện của quý khách là món quà ý nghĩa nhất đối với chúng tôi.
                    Nhưng nếu quý khách muốn gửi món quà hiện kim, xin vui lòng sử dụng thông tin bên dưới.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 max-w-4xl mx-auto px-4 md:px-0">
                <BankCard person={coupleData.groom} type="groom" />
                <BankCard person={coupleData.bride} type="bride" />
            </div>
        </div>
    </section>
  );
}
