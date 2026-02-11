// Wedding Data Configuration
// Customize this file with your wedding details

export const coupleData = {
  groom: {
    name: "Minh Nam",
    fullName: "Nguyễn Minh Nam",
    parents: "Ông Nguyễn Văn A & Bà Trần Thị B",
    image: "/images/groom.jpg",
    description: "Một chàng trai yêu thích công nghệ và du lịch, luôn tin rằng tình yêu đích thực sẽ đến đúng lúc.",
    bankAccount: {
      bankName: "TPBank",
      accountNumber: "0123456789",
      accountHolder: " NGUYEN MINH NAM",
      qrCode: "https://img.vietqr.io/image/TPBank-0123456789-compact.png"
    }
  },
  bride: {
    name: "Thanh Nữ",
    fullName: "Lê Thanh Nữ",
    parents: "Ông Lê Văn C & Bà Phạm Thị D",
    image: "/images/bride.jpg",
    description: "Cô gái yêu nghệ thuật và ẩm thực, tin rằng mỗi khoảnh khắc đều đáng để trân trọng.",
    bankAccount: {
      bankName: "Vietcombank",
      accountNumber: "9876543210",
      accountHolder: "LE THANH NU",
      qrCode: "https://img.vietqr.io/image/VCB-9876543210-compact.png"
    }
  },
};

export const weddingDate = {
  date: new Date("2026-02-14T10:00:00"),
  displayDate: "14 tháng 02, 2026",
  lunarDate: "27 tháng Giêng, Bính Ngọ",
  dayOfWeek: "Thứ Bảy",
};

export const events = [
  {
    id: 1,
    name: "Lễ Vu Quy",
    time: "08:00",
    date: "14/02/2025",
    venue: "Tư gia nhà gái",
    address: "123 Đường ABC, Phường XYZ, Quận 1, TP.HCM",
    mapUrl: "https://maps.google.com/?q=10.7769,106.7009",
    description: "Nghi lễ rước dâu truyền thống",
    icon: "home",
  },
  {
    id: 2,
    name: "Lễ Thành Hôn",
    time: "11:00",
    date: "14/02/2025",
    venue: "Nhà hàng Diamond Palace",
    address: "456 Đường DEF, Quận 3, TP.HCM",
    mapUrl: "https://maps.google.com/?q=10.7849,106.6929",
    description: "Tiệc cưới chính thức",
    icon: "party",
  },
];

export const loveStory = [
  {
    id: 1,
    date: "Tháng 3, 2020",
    title: "Lần đầu gặp gỡ",
    description: "Chúng tôi gặp nhau tại một buổi họp mặt bạn bè. Ánh mắt đầu tiên, trái tim đã biết đây là người đặc biệt.",
    image: "/images/story-1.jpg",
  },
  {
    id: 2,
    date: "Tháng 6, 2020",
    title: "Buổi hẹn hò đầu tiên",
    description: "Một buổi tối lãng mạn bên bờ sông Sài Gòn. Từ đó, chúng tôi biết mình không thể thiếu nhau.",
    image: "/images/story-2.jpg",
  },
  {
    id: 3,
    date: "Tháng 12, 2022",
    title: "Chuyến du lịch đáng nhớ",
    description: "Cùng nhau khám phá Đà Lạt mộng mơ. Những kỷ niệm đẹp sẽ mãi in sâu trong tim.",
    image: "/images/story-3.jpg",
  },
  {
    id: 4,
    date: "Tháng 8, 2024",
    title: "Lời cầu hôn",
    description: '"Em đồng ý làm vợ anh nhé?" - Câu hỏi giản đơn nhưng mở ra một chương mới trong cuộc đời.',
    image: "/images/story-4.jpg",
  },
];

export const gallery = [
  { id: 1, src: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", alt: "Pre-wedding photo 1" },
  { id: 2, src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", alt: "Pre-wedding photo 2" },
  { id: 3, src: "https://images.unsplash.com/photo-1529634597503-139d3726fed5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", alt: "Pre-wedding photo 3" },
  { id: 4, src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", alt: "Pre-wedding photo 4" },
  { id: 5, src: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", alt: "Pre-wedding photo 5" },
  { id: 6, src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", alt: "Pre-wedding photo 6" },
  { id: 7, src: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", alt: "Pre-wedding photo 7" },
  { id: 8, src: "https://images.unsplash.com/photo-1544078751-58fee2d8a03b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", alt: "Pre-wedding photo 8" },
];

export const bankAccounts = [
  {
    name: "Nguyễn Minh Nam",
    bank: "Vietcombank",
    accountNumber: "1234567890",
    qrCode: "/images/qr-groom.png",
  },
  {
    name: "Lê Thanh Nữ",
    bank: "Techcombank",
    accountNumber: "0987654321",
    qrCode: "/images/qr-bride.png",
  },
];

export const dressCode = {
  colors: ["Pastel Pink", "Cream", "Gold"],
  suggestion: "Trang phục lịch sự, tông màu pastel hoặc kem để tạo sự đồng điệu trong các bức ảnh.",
};

export const apiConfig = {
  // Thay thế URL bên dưới bằng URL Web App của bạn sau khi deploy Google Apps Script
  rsvpApiUrl: "https://script.google.com/macros/s/AKfycbyrnRyvZ6IetAmP1XkpV6xEzIHHikO4FPPsUADQ84_ZUbZ1F5tuPBlUqvIzPfLdK4hY/exec", 
};
