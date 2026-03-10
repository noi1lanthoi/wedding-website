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

export default function Home() {
  return (
    <main className="min-h-screen">
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
    </main>
  );
}
