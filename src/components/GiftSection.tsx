"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Check } from "lucide-react";
import Image from "next/image";
import { coupleData } from "@/data/weddingData";

interface BankCardProps {
  person: {
    name: string;
    fullName: string;
    description: string;
    parents: string;
    image: string;
    bankAccount: {
      bankName: string;
      accountNumber: string;
      accountHolder: string;
      qrCode: string;
    };
  };
  type: "groom" | "bride";
  copied: string | null;
  handleCopy: (text: string, id: string) => void;
}

const BankCard = ({ person, type, copied, handleCopy }: BankCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ y: -2 }}
    transition={{ duration: 0.5 }}
    className="bg-white p-8 rounded-sm shadow-sm border border-black/5 relative group transition-all duration-300 w-full"
  >
    {/* Clean Scrapbook tape */}
    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-white/40 border border-black/5 -rotate-1 shadow-xs backdrop-blur-sm z-10" />

    <div className="flex flex-col items-center text-center">
      <h3 className="font-display text-2xl text-rose mb-1">
        {type === "groom" ? "Đến Chú Rể" : "Đến Cô Dâu"}
      </h3>
      <p className="font-body text-muted mb-8 text-sm uppercase tracking-widest">
        {person.fullName}
      </p>

      {/* QR Code */}
      <div className="bg-white p-3 rounded-sm border border-black/5 shadow-xs mb-8 w-56 h-56 flex items-center justify-center relative">
        <Image
          src={person.bankAccount.qrCode}
          alt={`QR Code ${person.bankAccount.bankName}`}
          fill
          sizes="224px"
          className="object-contain"
        />
      </div>

      {/* Bank Info */}
      <div className="w-full space-y-4 text-left border-t border-black/5 pt-6">
        <div className="flex flex-col gap-1">
          <span className="text-[10px] text-muted uppercase tracking-widest">
            Ngân hàng
          </span>
          <span className="font-medium text-dark">
            {person.bankAccount.bankName}
          </span>
        </div>

        <div className="flex items-center justify-between group/copy">
          <div className="flex flex-col gap-1">
            <span className="text-[10px] text-muted uppercase tracking-widest">
              Số tài khoản
            </span>
            <span className="font-mono text-xl text-dark tracking-wider">
              {person.bankAccount.accountNumber}
            </span>
          </div>

          <button
            onClick={() => handleCopy(person.bankAccount.accountNumber, type)}
            className="p-3 bg-cream hover:bg-gold/10 text-gold rounded-full transition-colors active:scale-95 border border-gold/20"
            title="Sao chép số tài khoản"
          >
            {copied === type ? (
              <Check size={18} className="text-green-600" />
            ) : (
              <Copy size={18} />
            )}
          </button>
        </div>

        <div className="flex flex-col gap-1">
          <span className="text-[10px] text-muted uppercase tracking-widest">
            Chủ tài khoản
          </span>
          <span className="font-medium text-dark">
            {person.bankAccount.accountHolder}
          </span>
        </div>
      </div>
    </div>
  </motion.div>
);

export default function GiftSection() {
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <section id="gift" className="py-20 md:py-28 bg-transparent relative">
      <div className="container mx-auto px-4 section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-rose text-sm tracking-[3px] uppercase block mb-4">
            Hộp Mừng Cưới
          </span>
          <h2 className="text-4xl md:text-5xl font-display text-dark mb-4 drop-shadow-sm">
            Gửi Lời Chúc
          </h2>
          <div className="w-16 h-px bg-gold/50 mx-auto mb-6" />

          <p className="font-body text-muted max-w-2xl mx-auto leading-relaxed">
            Sự hiện diện của bạn là tình cảm đáng quý nhất đối với chúng tôi.
            Nếu bạn muốn gửi thêm những món quà hiện kim, có thể gửi qua đây
            nhé.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-12 max-w-4xl mx-auto px-4 md:px-0">
          <BankCard
            person={coupleData.groom}
            type="groom"
            copied={copied}
            handleCopy={handleCopy}
          />
          <BankCard
            person={coupleData.bride}
            type="bride"
            copied={copied}
            handleCopy={handleCopy}
          />
        </div>
      </div>
    </section>
  );
}
