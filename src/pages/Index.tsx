import PersistentHeader from "@/components/PersistentHeader";
import HeroSection from "@/components/HeroSection";
import PriceEstimator from "@/components/PriceEstimator";
import TrustReasons from "@/components/TrustReasons";
import UrgencyBanner from "@/components/UrgencyBanner";
import Footer from "@/components/Footer";
import StickyMobileFooter from "@/components/StickyMobileFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <PersistentHeader />
      <HeroSection />
      <TrustReasons />
      <PriceEstimator />
      <UrgencyBanner />
      <Footer />
      <StickyMobileFooter />
    </div>
  );
};

export default Index;
