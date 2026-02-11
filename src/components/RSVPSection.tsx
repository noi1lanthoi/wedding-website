"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Heart, Send, User, Users, MessageSquare, CheckCircle, Loader2 } from "lucide-react";

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
  const [isLoadingWishes, setIsLoadingWishes] = useState(false);
  
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
      message: "Happy Wedding! Chúc anh chị mãi yêu thương nhau như ngày đầu! 🎊",
      time: "5 giờ trước",
    },
    {
      id: 3,
      name: "Lê Hoàng Nam",
      message: "Thật hạnh phúc khi được chứng kiến ngày vui của hai bạn. Chúc mừng! 🥂",
      time: "1 ngày trước",
    },
  ];

  const [wishes, setWishes] = useState<any[]>(sampleWishes);

  useEffect(() => {
    if (apiConfig.rsvpApiUrl) {
      setIsLoadingWishes(true);
      fetch(apiConfig.rsvpApiUrl)
        .then((res) => res.json())
        .then((data) => {
          if (data && Array.isArray(data)) {
            setWishes(data);
          }
        })
        .catch((err) => console.error("Error fetching wishes:", err))
        .finally(() => setIsLoadingWishes(false));
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
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    timestamp: new Date().toISOString()
                }),
                mode: 'no-cors' // Often needed for simple Google Script setups
            });
            
            // Re-fetch wishes or optimistically add
            const newWish = {
                id: Date.now(),
                name: formData.name,
                message: formData.message,
                time: "Vừa xong"
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
    <section id="rsvp" className="py-20 md:py-28 bg-gradient-to-b from-cream to-blush relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-rose/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-gold-light/20 rounded-full blur-3xl" />

      <div className="section-container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="text-gold text-sm tracking-[3px] uppercase block mb-4">
            Xác nhận tham dự
          </span>
          <h2 className="text-4xl md:text-5xl font-display text-dark mb-4">
            Xác Nhận Tham Dự & Lời Chúc
          </h2>
          <div className="divider">
            <Heart className="w-6 h-6 text-dusty-rose fill-current" />
          </div>
          <p className="text-muted max-w-2xl mx-auto mt-4 leading-relaxed">
            Sự hiện diện của bạn là món quà quý giá nhất với chúng tôi.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto items-start">
          {/* RSVP Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", delay: 0.2 }}
                    className="w-20 h-20 bg-gradient-to-br from-gold to-dusty-rose rounded-full flex items-center justify-center mx-auto mb-6"
                  >
                    <CheckCircle className="w-10 h-10 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-display text-dark mb-3">
                    Cảm ơn bạn!
                  </h3>
                  <p className="text-muted leading-relaxed">
                    Chúng tôi đã nhận được phản hồi của bạn.
                    <br />
                    Hẹn gặp bạn trong ngày trọng đại! 💕
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: "", attending: "", guests: 1, message: "" });
                    }}
                    className="mt-6 text-gold hover:underline bg-transparent border-none cursor-pointer"
                  >
                    Gửi phản hồi khác
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Input */}
                  <div>
                    <label className="block text-sm font-medium text-dark mb-2">
                      Họ và tên
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-dusty-rose" />
                      <input
                        type="text"
                        required
                        placeholder="Nhập họ và tên của bạn"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="form-input pl-12"
                      />
                    </div>
                  </div>

                  {/* Attending Options */}
                  <div>
                    <label className="block text-sm font-medium text-dark mb-3">
                      Bạn sẽ tham dự chứ?
                    </label>
                    <div className="grid grid-cols-2 gap-4">
                      <motion.button
                        type="button"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setFormData({ ...formData, attending: "yes" })}
                        className={`p-4 rounded-2xl border-2 transition-all duration-300 bg-transparent cursor-pointer ${
                          formData.attending === "yes"
                            ? "border-gold bg-gold/10"
                            : "border-rose hover:border-gold"
                        }`}
                      >
                        <span className="text-2xl block mb-2">🎉</span>
                        <span className="font-medium text-dark">Tôi sẽ đến</span>
                      </motion.button>

                      <motion.button
                        type="button"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setFormData({ ...formData, attending: "no" })}
                        className={`p-4 rounded-2xl border-2 transition-all duration-300 bg-transparent cursor-pointer ${
                          formData.attending === "no"
                            ? "border-dusty-rose bg-dusty-rose/10"
                            : "border-rose hover:border-dusty-rose"
                        }`}
                      >
                        <span className="text-2xl block mb-2">😢</span>
                        <span className="font-medium text-dark">Rất tiếc</span>
                      </motion.button>
                    </div>
                  </div>

                  {/* Number of Guests */}
                  {formData.attending === "yes" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                    >
                      <label className="block text-sm font-medium text-dark mb-2">
                        Số người tham dự
                      </label>
                      <div className="relative">
                        <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-dusty-rose" />
                        <select
                          value={formData.guests}
                          onChange={(e) => setFormData({ ...formData, guests: Number(e.target.value) })}
                          className="form-input pl-12 cursor-pointer appearance-none"
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
                    <label className="block text-sm font-medium text-dark mb-2">
                      Lời nhắn gửi cô dâu & chú rể
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-dusty-rose" />
                      <textarea
                        placeholder="Gửi lời chúc tới cặp đôi..."
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="form-input pl-12 resize-none"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={!formData.name || !formData.attending || isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full btn-primary"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Đang gửi...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Gửi xác nhận
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Wishes Wall */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-display text-dark mb-6 flex items-center gap-3">
              <Heart className="w-6 h-6 text-dusty-rose fill-current" />
              Lời chúc từ bạn bè
            </h3>

            <div className="space-y-4 max-h-[550px] overflow-y-auto pr-2">
              {wishes.map((wish, index) => (
                <motion.div
                  key={wish.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-5 shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-gold to-dusty-rose rounded-full flex items-center justify-center shrink-0">
                      <span className="text-white font-medium">
                        {wish.name.charAt(0)}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium text-dark truncate">{wish.name}</h4>
                        <span className="text-xs text-muted shrink-0 ml-2">{wish.time}</span>
                      </div>
                      <p className="text-dark leading-relaxed">{wish.message}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
