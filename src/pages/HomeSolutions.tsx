import PersistentHeader from "@/components/PersistentHeader";
import HomeHeroSection from "@/components/home/HomeHeroSection";
import HomeWhySection from "@/components/home/HomeWhySection";
import HomePriceCalculator from "@/components/home/HomePriceCalculator";
import HomeHowItWorks from "@/components/home/HomeHowItWorks";
import HomeFAQSection from "@/components/home/HomeFAQSection";
import Footer from "@/components/Footer";
import StickyMobileFooter from "@/components/StickyMobileFooter";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import SEOHead from "@/components/SEOHead";

const HomeSolutions = () => {
  return (
    <>
      <SEOHead
        title="גדר חשמלית ביתית נגד חזירים | הגנה על הגינה | גייטקיפ"
        description="הגנו על הגינה מחזירים, דורבנים ושועלים עם גדר חשמלית ביתית. בטוח לילדים ולחיות מחמד. קבלו הצעת מחיר תוך 30 שניות."
        keywords="גדר חשמלית ביתית, גדר לגינה נגד חזירים, הגנה על גינה מחזירי בר, גדר חשמלית לבית פרטי"
        canonicalPath="/home-solutions"
      />
      <PersistentHeader />
      <main>
        <HomeHeroSection />
        <HomeWhySection />
        <HomePriceCalculator />
        <HomeHowItWorks />
        <HomeFAQSection />
      </main>
      <Footer />
      <StickyMobileFooter />
      <FloatingWhatsApp />
    </>
  );
};

export default HomeSolutions;
