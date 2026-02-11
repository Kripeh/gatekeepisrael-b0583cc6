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
import CaseStudies from "@/components/CaseStudies";
import ROIComparison from "@/components/ROIComparison";
import BoarCrisisGuide from "@/components/BoarCrisisGuide";
import AgricultureSubsidies from "@/components/AgricultureSubsidies";
import DiscoverSolutions from "@/components/DiscoverSolutions";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="גדר חשמלית נגד חזירי בר | התקנה מקצועית בכל הארץ | גייטקיפ"
        description="מערכות הגנה חשמליות מקצועיות נגד חזירי בר לחקלאות וגינות. דור 3 לחקלאות + מהנדס חשמל. 95% הצלחה, אחריות מלאה. התקנה תוך 48 שעות ☎ 050-858-5310"
        keywords="גדר חשמלית, גדר חשמלית נגד חזירי בר, גדר חשמלית לחקלאות, גדר חשמלית לגינה, גדר חשמלית לחצר, מיגון חקלאי, הגנה מחזירי בר, התקנת גדר חשמלית, מחולל מתח סולארי, גייטקיפ"
        canonicalUrl="https://gatekeepisrael.com/"
      />
      <PersistentHeader />
      <main>
        <HeroSection />
        <BoarCrisisGuide />
        <DiscoverSolutions />
        <PriceEstimator />
        <ROIComparison />
        <Testimonials />
        <CaseStudies />
        <TrustReasons />
        <AgricultureSubsidies />
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
