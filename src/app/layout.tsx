import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nam ❤️ Nu | Wedding Invitation",
  description: "Chúng tôi sắp cưới! Hãy cùng chung vui trong ngày trọng đại của chúng tôi. Xác nhận tham dự và gửi lời chúc tới cặp đôi.",
  keywords: ["wedding", "đám cưới", "wedding invitation", "thiệp cưới online"],
  openGraph: {
    title: "Nam ❤️ Nu | Wedding Invitation",
    description: "Chúng tôi sắp cưới! Hãy cùng chung vui trong ngày trọng đại.",
    type: "website",
    locale: "vi_VN",
  },
};

import { ThemeProvider } from "@/components/ThemeProvider";
import MusicPlayer from "@/components/MusicPlayer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="scroll-smooth" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider attribute="data-theme" defaultTheme="original" enableSystem={false} themes={['original', 'romantic', 'classic', 'nature']}>
          <MusicPlayer />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
