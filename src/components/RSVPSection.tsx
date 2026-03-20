"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Heart,
  Send,
  User,
  Users,
  MessageSquare,
  CheckCircle,
  Loader2,
} from "lucide-react";

interface FormData {
  name: string;
  attending: "yes" | "no" | "";
  guests: number;
  message: string;
}

import { apiConfig } from "@/data/weddingData";

// ... existing imports

export default function RSVPSection() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    attending: "",
    guests: 1,
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Sample data fallback
  const sampleWishes = [
    {
      id: 1,
      name: "Nguyễn Văn Anh",
      message: "Chúc hai bạn trăm năm hạnh phúc, sớm có thiên thần nhỏ! 💕",
      time: "2 giờ trước",
    },
    {
      id: 2,
      name: "Trần Thị Mai",
      message:
        "Happy Wedding! Chúc anh chị mãi yêu thương nhau như ngày đầu! 🎊",
      time: "5 giờ trước",
    },
    {
      id: 3,
      name: "Lê Hoàng Nam",
      message:
        "Thật hạnh phúc khi được chứng kiến ngày vui của hai bạn. Chúc mừng! 🥂",
      time: "1 ngày trước",
    },
  ];

  interface Wish {
    id: number;
    name: string;
    message: string;
    time: string;
  }

  const [wishes, setWishes] = useState<Wish[]>(sampleWishes);

  useEffect(() => {
    if (apiConfig.rsvpApiUrl) {
      fetch(apiConfig.rsvpApiUrl)
        .then((res) => res.json())
        .then((data) => {
          if (data && Array.isArray(data)) {
            setWishes(data);
          }
        })
        .catch((err) => console.error("Error fetching wishes:", err));
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (apiConfig.rsvpApiUrl) {
        // Send to Google Sheets
        // Note: Google Apps Script Web App needs to handle POST requests
        // Use 'no-cors' mode if you encounter CORS issues, but getting response is harder

        // Standard fetch assuming backend supports CORS
        await fetch(apiConfig.rsvpApiUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...formData,
            timestamp: new Date().toISOString(),
          }),
          mode: "no-cors", // Often needed for simple Google Script setups
        });

        // Re-fetch wishes or optimistically add
        const newWish = {
          id: Date.now(),
          name: formData.name,
          message: formData.message,
          time: "Vừa xong",
        };
        setWishes([newWish, ...wishes]);
      } else {
        // Simulator behavior
        await new Promise((resolve) => setTimeout(resolve, 1500));
        if (formData.message) {
          setWishes([
            {
              id: Date.now(),
              name: formData.name,
              message: formData.message,
              time: "Vừa xong",
            },
            ...wishes,
          ]);
        }
      }

      setIsSubmitted(true);
    } catch (error) {
      console.error("Submit error:", error);
      alert("Có lỗi xảy ra khi gửi. Vui lòng thử lại.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="rsvp" className="py-10 md:py-10 bg-transparent relative">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "0px 0px -15% 0px" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-center mb-8"
        >
          <span className="text-rose text-sm tracking-[3px] uppercase block mb-4">
            Xác nhận tham dự
          </span>
          <h2 className="text-4xl md:text-5xl font-display text-dark mb-4 drop-shadow-sm">
            Xác Nhận & Lời Chúc
          </h2>
          <div className="w-16 h-px bg-gold/50 mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-start px-4">
          {/* RSVP Form */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "0px 0px -15% 0px" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="w-full relative"
          >
            {/* Background Scrapbook Card */}
            <div className="bg-white p-6 md:p-10 rounded-sm shadow-sm border border-black/5 relative z-10">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-6 bg-white/40 border border-black/5 rotate-2 shadow-xs backdrop-blur-sm z-20" />

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", delay: 0.2 }}
                    className="w-16 h-16 bg-cream rounded-full flex items-center justify-center mx-auto mb-6 border border-gold/30"
                  >
                    <CheckCircle className="w-8 h-8 text-gold" />
                  </motion.div>
                  <h3 className="text-3xl font-script text-rose mb-3">
                    Cảm ơn bạn!
                  </h3>
                  <p className="text-muted leading-relaxed font-body">
                    Chúng tôi đã nhận được yêu thương từ bạn.
                    <br />
                    Hẹn gặp bạn trong ngày trọng đại! 💕
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: "",
                        attending: "",
                        guests: 1,
                        message: "",
                      });
                    }}
                    className="mt-8 text-gold hover:text-dark uppercase tracking-widest text-xs font-medium transition-colors bg-transparent border-none cursor-pointer"
                  >
                    Gửi phản hồi khác
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 font-body">
                  <div className="text-center mb-8">
                    <p className="text-muted italic text-sm">
                      Sự hiện diện của bạn là món quà tuyệt voi nhất.
                    </p>
                  </div>

                  {/* Name Input */}
                  <div>
                    <label className="block text-xs font-medium text-dark/70 mb-2 uppercase tracking-wider">
                      Họ và tên
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-dark/40" />
                      <input
                        type="text"
                        required
                        placeholder="Nguyễn Văn A"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full bg-cream/50 border border-black/10 rounded-sm py-3 pl-12 pr-4 text-sm focus:outline-none focus:border-gold/50 focus:bg-white transition-colors"
                      />
                    </div>
                  </div>

                  {/* Attending Options */}
                  <div>
                    <label className="block text-xs font-medium text-dark/70 mb-3 uppercase tracking-wider">
                      Xác nhận
                    </label>
                    <div className="grid grid-cols-2 gap-4">
                      <button
                        type="button"
                        onClick={() =>
                          setFormData({ ...formData, attending: "yes" })
                        }
                        className={`py-3 px-4 rounded-sm border transition-all duration-300 text-sm flex items-center justify-center gap-2 ${
                          formData.attending === "yes"
                            ? "bg-rose border-rose text-white"
                            : "bg-white border-black/10 text-dark/70 hover:border-rose/50 hover:bg-rose/5"
                        }`}
                      >
                        <Heart
                          className={`w-4 h-4 ${formData.attending === "yes" ? "fill-white" : ""}`}
                        />
                        Sẽ tham dự
                      </button>

                      <button
                        type="button"
                        onClick={() =>
                          setFormData({ ...formData, attending: "no" })
                        }
                        className={`py-3 px-4 rounded-sm border transition-all duration-300 text-sm flex items-center justify-center gap-2 ${
                          formData.attending === "no"
                            ? "bg-dark/10 border-dark/20 text-dark"
                            : "bg-white border-black/10 text-dark/70 hover:border-dark/30 hover:bg-dark/5"
                        }`}
                      >
                        Rất tiếc
                      </button>
                    </div>
                  </div>

                  {/* Number of Guests */}
                  {formData.attending === "yes" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                    >
                      <label className="block text-xs font-medium text-dark/70 mb-2 uppercase tracking-wider">
                        Số người tham dự
                      </label>
                      <div className="relative">
                        <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-dark/40" />
                        <select
                          value={formData.guests}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              guests: Number(e.target.value),
                            })
                          }
                          className="w-full bg-cream/50 border border-black/10 rounded-sm py-3 pl-12 pr-4 text-sm focus:outline-none focus:border-gold/50 focus:bg-white transition-colors appearance-none cursor-pointer"
                        >
                          {[1, 2, 3, 4, 5].map((num) => (
                            <option key={num} value={num}>
                              {num} người
                            </option>
                          ))}
                        </select>
                      </div>
                    </motion.div>
                  )}

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-medium text-dark/70 mb-2 uppercase tracking-wider">
                      Lời nhắn (Nếu có)
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-4 top-3.5 w-4 h-4 text-dark/40" />
                      <textarea
                        placeholder="Chúc hai bạn trăm năm hạnh phúc..."
                        rows={3}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        className="w-full bg-cream/50 border border-black/10 rounded-sm py-3 pl-12 pr-4 text-sm focus:outline-none focus:border-gold/50 focus:bg-white transition-colors resize-none"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={
                      !formData.name || !formData.attending || isSubmitting
                    }
                    className={`w-full py-4 rounded-sm flex items-center justify-center gap-2 transition-all font-medium uppercase tracking-widest text-xs mt-4 ${
                      !formData.name || !formData.attending || isSubmitting
                        ? "bg-black/5 text-dark/40 cursor-not-allowed border border-black/5"
                        : "bg-gold hover:bg-rose text-white border border-transparent hover:shadow-md"
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Đang gửi...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Gửi Phản Hồi
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Wishes Wall */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "0px 0px -15% 0px" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="w-full font-body"
          >
            <div className="flex items-center gap-4 mb-8">
              <h3 className="text-3xl font-script text-rose">Sổ Lưu Bút</h3>
              <div className="flex-1 h-px bg-black/5" />
            </div>

            <div className="space-y-6 max-h-[600px] overflow-y-auto pr-4 custom-scrollbar">
              {wishes.map((wish, index) => {
                const isLeft = index % 2 === 0;
                return (
                  <motion.div
                    key={wish.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`bg-white rounded-sm p-5 border border-black/5 shadow-xs relative ${isLeft ? "mr-4" : "ml-4"}`}
                  >
                    {/* Tiny piece of tape */}
                    <div className="absolute -top-2 left-4 w-8 h-4 bg-white/60 border border-black/5 rotate-3 shadow-xs backdrop-blur-sm z-10" />

                    <div className="flex flex-col">
                      <p className="text-dark/90 leading-relaxed text-sm mb-3 italic">
                        &quot;{wish.message}&quot;
                      </p>

                      <div className="flex items-center justify-between border-t border-black/5 pt-3 mt-auto">
                        <span className="font-display text-rose tracking-wide">
                          {wish.name}
                        </span>
                        <span className="text-[10px] text-muted tracking-widest uppercase">
                          {wish.time}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
