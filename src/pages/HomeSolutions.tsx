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
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "האם הגדר בטוחה לכלב או לחתול שלי?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "בהחלט! המערכת משתמשת בפולסים קצרים של מתח גבוה אך זרם נמוך מאוד. אם חיית המחמד שלך תיגע בגדר, היא תרגיש דחיפה קלה שתלמד אותה להתרחק."
        }
      },
      {
        "@type": "Question",
        "name": "מה קורה אם ילד נוגע בגדר?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "המערכות שלנו פועלות לפי תקני בטיחות מחמירים. השוק החשמלי לא נעים, אבל הוא לא מסוכן - בדומה לחשמל סטטי חזק."
        }
      },
      {
        "@type": "Question",
        "name": "כמה עולה התחזוקה השוטפת?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "התחזוקה מינימלית ובחינם! פעם בחודש יש לגזום עשבייה שגדלה ליד החוטים ולבדוק שהמתח תקין."
        }
      },
      {
        "@type": "Question",
        "name": "האם הגדר פוגעת במראה הגינה?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ממש לא! אנחנו משתמשים בחוטים דקים שכמעט לא נראים מרחוק. העמודים קטנים ודיסקרטיים."
        }
      }
    ]
  };

  return (
    <>
      <SEOHead
        title="גדר חשמלית ביתית נגד חזירים | הגנה על הגינה | גייטקיפ"
        description="הגנו על הגינה מחזירים, דורבנים ושועלים עם גדר חשמלית ביתית. בטוח לילדים ולחיות מחמד. קבלו הצעת מחיר תוך 30 שניות."
        keywords="גדר חשמלית ביתית, גדר לגינה נגד חזירים, הגנה על גינה מחזירי בר, גדר חשמלית לבית פרטי"
        canonicalPath="/home-solutions"
        structuredData={faqSchema}
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
