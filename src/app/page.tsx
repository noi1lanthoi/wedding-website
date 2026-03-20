import WelcomeEnvelope from "@/components/WelcomeEnvelope";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import EventsSection from "@/components/EventsSection";
import GallerySection from "@/components/GallerySection";
import RSVPSection from "@/components/RSVPSection";
import GiftSection from "@/components/GiftSection";
import Footer from "@/components/Footer";
import StickyBottomBar from "@/components/StickyBottomBar";
import FloatingWishes from "@/components/FloatingWishes";
import TransportationSection from "@/components/TransportationSection";



export default function Home() {
  return (
    <main className="min-h-[100dvh] relative" style={{ paddingBottom: 'calc(env(safe-area-inset-bottom, 0px) + 80px)' }}>
      {/* <UnderConstruction /> */}

      {/* 
        NOTE: Tạm thời ẩn các component hiện tại để hiển thị trang "Web chưa hoàn thiện".
        Sẽ mở comment lại khi website đã hoàn thiện.
      */}
      <WelcomeEnvelope />
      <Navbar />
      
      <div className="w-full overflow-x-hidden">
        <HeroSection />
        <EventsSection />

        <GallerySection />
        <TransportationSection />
        <GiftSection />
        <RSVPSection />
        <Footer />
        <FloatingWishes />
      </div>

      <StickyBottomBar />
    </main>
  );
}
