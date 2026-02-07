import PersistentHeader from "@/components/PersistentHeader";
import HomeHeroSection from "@/components/home/HomeHeroSection";
import HomePriceCalculator from "@/components/home/HomePriceCalculator";
import HomeHowFenceWorks from "@/components/home/HomeHowFenceWorks";
import HomeComponentsDetail from "@/components/home/HomeComponentsDetail";
import HomeFAQSection from "@/components/home/HomeFAQSection";
import Footer from "@/components/Footer";
import StickyMobileFooter from "@/components/StickyMobileFooter";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import SEOHead from "@/components/SEOHead";

const HomeSolutions = () => {
  const homeownerFaqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "האם הגדר בטוחה לכלב או לחתול שלי?", "acceptedAnswer": { "@type": "Answer", "text": "בהחלט! המערכת משתמשת בפולסים קצרים של מתח גבוה אך זרם נמוך מאוד. אם חיית המחמד שלך תיגע בגדר, היא תרגיש דחיפה קלה שתלמד אותה להתרחק. אין סכנה של פציעה." } },
      { "@type": "Question", "name": "מה קורה אם ילד נוגע בגדר?", "acceptedAnswer": { "@type": "Answer", "text": "המערכות שלנו פועלות לפי תקני בטיחות מחמירים. השוק החשמלי לא נעים, אבל הוא לא מסוכן - בדומה לחשמל סטטי חזק." } },
      { "@type": "Question", "name": "כמה זמן לוקחת ההתקנה?", "acceptedAnswer": { "@type": "Answer", "text": "התקנה לחצר ביתית ממוצעת נעשית ביום אחד. אנחנו מגיעים עם כל הציוד הנדרש ומסיימים את כל העבודה באותו היום." } },
      { "@type": "Question", "name": "האם צריך לחבר את הגדר לחשמל?", "acceptedAnswer": { "@type": "Answer", "text": "לא! המערכת פועלת על אנרגיה סולארית באופן עצמאי לחלוטין. אין צורך בחיבור לרשת החשמל או במתיחת כבלים." } },
      { "@type": "Question", "name": "כמה עולה התחזוקה השוטפת?", "acceptedAnswer": { "@type": "Answer", "text": "התחזוקה מינימלית ובחינם! פעם בחודש יש לגזום עשבייה שגדלה ליד החוטים ולבדוק שהמתח תקין." } },
      { "@type": "Question", "name": "האם הגדר פוגעת במראה הגינה?", "acceptedAnswer": { "@type": "Answer", "text": "ממש לא! אנחנו משתמשים בחוטים דקים שכמעט לא נראים מרחוק. העמודים קטנים ודיסקרטיים." } },
      { "@type": "Question", "name": "האם אתם מגיעים לכל הארץ?", "acceptedAnswer": { "@type": "Answer", "text": "כן! אנחנו מספקים שירות התקנה בכל רחבי הארץ – מהגליל ועד הנגב." } }
    ]
  };

  return (
    <>
      <SEOHead
        title="גדר חשמלית ביתית נגד חזירים | הגנה על הגינה | גייטקיפ"
        description="הגנו על הגינה מחזירים, דורבנים ושועלים עם גדר חשמלית ביתית סולארית. שלושה חוטים, התקנה ביום אחד, בטוח לילדים ולחיות מחמד. שירות בכל הארץ."
        keywords="גדר חשמלית ביתית, גדר לגינה נגד חזירים, הגנה על גינה מחזירי בר, גדר חשמלית לבית פרטי, גדר סולארית לחצר"
        canonicalPath="/home-solutions"
        structuredData={homeownerFaqSchema}
      />
      <PersistentHeader />
      <main>
        <HomeHeroSection />
        <HomePriceCalculator />
        <HomeHowFenceWorks />
        <HomeComponentsDetail />
        <HomeFAQSection />
      </main>
      <Footer />
      <StickyMobileFooter />
      <FloatingWhatsApp />
    </>
  );
};

export default HomeSolutions;
