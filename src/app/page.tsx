import WelcomeEnvelope from "@/components/WelcomeEnvelope";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CoupleSection from "@/components/CoupleSection";
import StorySection from "@/components/StorySection";
import EventsSection from "@/components/EventsSection";
import GallerySection from "@/components/GallerySection";
import RSVPSection from "@/components/RSVPSection";
import GiftSection from "@/components/GiftSection";
import Footer from "@/components/Footer";
import StickyBottomBar from "@/components/StickyBottomBar";
import FloatingWishes from "@/components/FloatingWishes";

import UnderConstruction from "@/components/UnderConstruction";

export default function Home() {
  return (
    <main className="min-h-screen">
      <UnderConstruction />

      {/* 
        NOTE: Tạm thời ẩn các component hiện tại để hiển thị trang "Web chưa hoàn thiện".
        Sẽ mở comment lại khi website đã hoàn thiện.
      */}
      {/*
      <WelcomeEnvelope />
      <Navbar />
      <HeroSection />
      <CoupleSection />
      <StorySection />
      <EventsSection />
      <GallerySection />
      <GiftSection />
      <RSVPSection />
      <Footer />
      <FloatingWishes />
      <StickyBottomBar />
      */}
    </main>
  );
}
