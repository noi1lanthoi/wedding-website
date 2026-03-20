import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nam ❤️ Nu | Wedding Invitation",
  description:
    "Chúng tôi sắp cưới! Hãy cùng chung vui trong ngày trọng đại của chúng tôi. Xác nhận tham dự và gửi lời chúc tới cặp đôi.",
  keywords: ["wedding", "đám cưới", "wedding invitation", "thiệp cưới online"],
  openGraph: {
    title: "Nam ❤️ Nu | Wedding Invitation",
    description: "Chúng tôi sắp cưới! Hãy cùng chung vui trong ngày trọng đại.",
    type: "website",
    locale: "vi_VN",
  },
};

export const viewport = {
  themeColor: "#FAFAF9",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  viewportFit: "cover",
};

import { Playfair_Display, Great_Vibes, Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import MusicPlayer from "@/components/MusicPlayer";

const playfair = Playfair_Display({
  subsets: ["latin", "vietnamese"],
  variable: "--font-display",
  display: "swap",
});

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin", "vietnamese"],
  variable: "--font-script",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  variable: "--font-body",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`scroll-smooth ${playfair.variable} ${greatVibes.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <body className="antialiased font-body bg-cream text-dark">
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="original"
          enableSystem={false}
          themes={["original", "romantic", "classic", "nature"]}
        >
          <MusicPlayer />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
