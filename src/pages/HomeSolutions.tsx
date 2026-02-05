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
  // FAQ schema specific to homeowners (different from agricultural FAQ in index.html)
  const homeownerFaqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "האם הגדר בטוחה לכלב או לחתול שלי?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "בהחלט! המערכת משתמשת בפולסים קצרים של מתח גבוה אך זרם נמוך מאוד. אם חיית המחמד שלך תיגע בגדר, היא תרגיש דחיפה קלה שתלמד אותה להתרחק - בדיוק כמו שהחזירים לומדים. אין סכנה של פציעה."
        }
      },
      {
        "@type": "Question",
        "name": "מה קורה אם ילד נוגע בגדר?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "המערכות שלנו פועלות לפי תקני בטיחות מחמירים. השוק החשמלי לא נעים, אבל הוא לא מסוכן - בדומה לחשמל סטטי חזק. לאחר נגיעה אחת, הילד יבין לא לגעת שוב. אנחנו ממליצים להסביר לילדים על הגדר מראש."
        }
      },
      {
        "@type": "Question",
        "name": "כמה עולה התחזוקה השוטפת?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "התחזוקה מינימלית ובחינם! פעם בחודש יש לגזום עשבייה שגדלה ליד החוטים ולבדוק שהמתח תקין (לוקח 5 דקות). אנחנו נלמד אתכם בדיוק איך לעשות את זה. אין עלויות שוטפות מעבר לחשמל זניח."
        }
      },
      {
        "@type": "Question",
        "name": "האם הגדר פוגעת במראה הגינה?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ממש לא! אנחנו משתמשים בחוטים דקים שכמעט לא נראים מרחוק. העמודים קטנים ודיסקרטיים. רוב השכנים והאורחים לא ישימו לב שיש גדר חשמלית בכלל."
        }
      },
      {
        "@type": "Question",
        "name": "מה קורה כשיורד גשם או בחורף?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "המערכות שלנו מתוכננות לעבוד בכל מזג אוויר. אנחנו משתמשים במבודדים איכותיים וציוד עמיד למים. גם בגשם שוטף המערכת ממשיכה לעבוד ביעילות מלאה."
        }
      },
      {
        "@type": "Question",
        "name": "כמה זמן לוקחת ההתקנה?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "התקנה לחצר ביתית ממוצעת לוקחת בין שעתיים לחצי יום, תלוי בגודל ובמורכבות השטח. אנחנו מגיעים עם כל הציוד והכל נעשה באותו יום."
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
        structuredData={homeownerFaqSchema}
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
