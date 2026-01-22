import PersistentHeader from "@/components/PersistentHeader";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TrustReasons from "@/components/TrustReasons";
import Testimonials from "@/components/Testimonials";
import PriceEstimator from "@/components/PriceEstimator";
import FAQSection from "@/components/FAQSection";
import UrgencyBanner from "@/components/UrgencyBanner";
import Footer from "@/components/Footer";
import StickyMobileFooter from "@/components/StickyMobileFooter";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <PersistentHeader />
      <HeroSection />
      <AboutSection />
      <TrustReasons />
      <Testimonials />
      <PriceEstimator />
      <FAQSection />
      <UrgencyBanner />
      <Footer />
      <StickyMobileFooter />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
