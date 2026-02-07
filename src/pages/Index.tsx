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
import SEOHead from "@/components/SEOHead";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="גדר חשמלית נגד חזירי בר | גדר חשמלית לחקלאות - גייטקיפ"
        description="גדר חשמלית נגד חזירי בר ומזיקים - גייטקיפ מתקינים גדרות חשמליות לחקלאות בכל הארץ. גדר חשמלית מקצועית עם התקנה מהירה ואחריות מלאה. התקשרו להצעת מחיר!"
        keywords="גדר חשמלית, גדר חשמלית נגד חזירי בר, גדר חשמלית לחקלאות, גדר חשמלית נגד מזיקים, מיגון חקלאי, הגנה מחזירי בר, התקנת גדר חשמלית, גדרות חשמליות, גדר חשמלית חקלאית"
        canonicalUrl="https://gatekeepisrael.com/"
      />
      <PersistentHeader />
      <main>
        <HeroSection />
        <PriceEstimator />
        <Testimonials />
        <TrustReasons />
        <FAQSection />
        <AboutSection />
        <UrgencyBanner />
      </main>
      <Footer />
      <StickyMobileFooter />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
