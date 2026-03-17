// Wedding Data Configuration
// Customize this file with your wedding details

export const coupleData = {
  groom: {
    name: "Minh Hưng",
    fullName: "Trần Minh Hưng",
    parents: "Bà Nguyễn Thị Hà",
    image: "/images/groom.jpg",
    description:
      "Một chàng trai yêu thích công nghệ và du lịch, luôn tin rằng tình yêu đích thực sẽ đến đúng lúc.",
    bankAccount: {
      bankName: "TPBank",
      accountNumber: "0123456789",
      accountHolder: " TRAN MINH HUNG",
      qrCode: "https://img.vietqr.io/image/TPBank-0123456789-compact.png",
    },
  },
  bride: {
    name: "Mai Thảo",
    fullName: "Nguyễn Thị Mai Thảo",
    parents: "Ông Nguyễn Văn Thành & Bà Mai Thị Phượng",
    image: "/images/bride.jpg",
    description:
      "Cô gái yêu nghệ thuật và ẩm thực, tin rằng mỗi khoảnh khắc đều đáng để trân trọng.",
    bankAccount: {
      bankName: "Vietcombank",
      accountNumber: "9876543210",
      accountHolder: "NGUYEN THI MAI THAO",
      qrCode: "https://img.vietqr.io/image/VCB-9876543210-compact.png",
    },
  },
};

export const weddingDate = {
  date: new Date("2026-04-05T11:00:00"),
  displayDate: "05 tháng 04, 2026",
  lunarDate: "18 tháng 02, Bính Ngọ",
  dayOfWeek: "Chủ Nhật",
};

export const events = [
  {
    id: 2,
    name: "Tiệc Cưới Chung Vui",
    time: "11:00",
    date: "05/04/2026",
    venue: "Trung Tâm Hội Nghị & Tiệc Cưới Cát Tiên",
    address: "Thôn La Sơn, Xã Hưng Lộc, TP. Huế",
    mapUrl: "https://maps.app.goo.gl/RJ3tp3Mhuij7ZNDi8",
    description:
      "Sự hiện diện của Quý vị là niềm vinh hạnh cho gia đình chúng tôi",
    icon: "party",
  },
];

export const loveStory = [
  {
    id: 1,
    date: "Tháng 3, 2020",
    title: "Lần đầu gặp gỡ",
    description:
      "Chúng tôi gặp nhau tại một buổi họp mặt bạn bè. Ánh mắt đầu tiên, trái tim đã biết đây là người đặc biệt.",
    image: "/images/story/story-1.jpg",
  },
  {
    id: 2,
    date: "Tháng 6, 2020",
    title: "Buổi hẹn hò đầu tiên",
    description:
      "Một buổi tối lãng mạn bên bờ sông Sài Gòn. Từ đó, chúng tôi biết mình không thể thiếu nhau.",
    image: "/images/story/story-2.jpg",
  },
  {
    id: 3,
    date: "Tháng 12, 2022",
    title: "Chuyến du lịch đáng nhớ",
    description:
      "Cùng nhau khám phá Đà Lạt mộng mơ. Những kỷ niệm đẹp sẽ mãi in sâu trong tim.",
    image: "/images/story/story-3.jpg",
  },
  {
    id: 4,
    date: "Tháng 8, 2024",
    title: "Lời cầu hôn",
    description:
      '"Em đồng ý làm vợ anh nhé?" - Câu hỏi giản đơn nhưng mở ra một chương mới trong cuộc đời.',
    image: "/images/story/story-4.jpg",
  },
];

export const gallery = [
  {
    id: 1,
    src: "/images/gallery/111A6278.jpg",
    alt: "Pre-wedding photo 1",
  },
  {
    id: 2,
    src: "/images/gallery/111A6290.jpg",
    alt: "Pre-wedding photo 2",
  },
  {
    id: 3,
    src: "/images/gallery/111A6318.jpg",
    alt: "Pre-wedding photo 3",
  },
  {
    id: 4,
    src: "/images/gallery/111A6400.jpg",
    alt: "Pre-wedding photo 4",
  },
  {
    id: 5,
    src: "/images/gallery/111A6458.jpg",
    alt: "Pre-wedding photo 5",
  },
  {
    id: 6,
    src: "/images/gallery/111A6530.jpg",
    alt: "Pre-wedding photo 6",
  },
  {
    id: 7,
    src: "/images/gallery/111A6588.jpg",
    alt: "Pre-wedding photo 7",
  },
  {
    id: 8,
    src: "/images/gallery/111A6704.jpg",
    alt: "Pre-wedding photo 8",
  },
];

export const bankAccounts = [
  {
    name: "Trần Minh Hưng",
    bank: "Vietcombank",
    accountNumber: "1234567890",
    qrCode: "/images/qr-groom.png",
  },
  {
    name: "Nguyễn Thị Mai Thảo",
    bank: "Techcombank",
    accountNumber: "0987654321",
    qrCode: "/images/qr-bride.png",
  },
];

export const dressCode = {
  colors: ["Emerald Green", "Mint", "Cream", "White"],
  suggestion:
    "Trang phục lịch sự, tông màu xanh nhạt hoặc kem để tạo sự đồng điệu trong các bức ảnh.",
};

export const apiConfig = {
  // Thay thế URL bên dưới bằng URL Web App của bạn sau khi deploy Google Apps Script
  rsvpApiUrl:
    "https://script.google.com/macros/s/AKfycbyrnRyvZ6IetAmP1XkpV6xEzIHHikO4FPPsUADQ84_ZUbZ1F5tuPBlUqvIzPfLdK4hY/exec",
};
