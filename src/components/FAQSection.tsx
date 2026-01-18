import { Phone } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const PHONE_LINK = "tel:+972508585310";

const faqs = [
  {
    question: "האם הגדר בטוחה לבני אדם וחיות משק?",
    answer: "בהחלט. הגדרות שלנו מיוצרות לפי תקן ישראלי ואירופאי ומותאמות לשימוש חקלאי בטוח. הזרם החשמלי מותאם להרתעה בלבד – מספיק חזק להבריח חזירי בר, אך בטוח לחלוטין לבני אדם, ילדים וחיות משק כמו כבשים, פרות וסוסים. כל מערכת עוברת בדיקת בטיחות לפני מסירה.",
  },
  {
    question: "האם המערכת פועלת גם בהפסקות חשמל?",
    answer: "כן! כל מערכות גייטקיפ מגיעות עם אופציה לגיבוי סולארי עצמאי. הפאנל הסולארי טוען סוללה ייעודית שמספקת חשמל רצוף 24/7, גם בלילות וגם בימים מעוננים. המערכת אוטונומית לחלוטין ולא תלויה ברשת החשמל – אידיאלי לשטחים מרוחקים.",
  },
  {
    question: "כמה זמן לוקחת התקנה בשטח סלעי?",
    answer: "יש לנו ניסיון עשיר בהתקנות בכל סוגי הקרקע – כולל אדמה סלעית וקשה. אנחנו מגיעים עם ציוד מקצועי כולל מקדחות סלע ועוגנים מיוחדים. התקנה סטנדרטית לוקחת 1-3 ימים בהתאם להיקף השטח. לשטחים סלעיים במיוחד, אנחנו מתאימים את השיטה ואת הציוד לתנאי הקרקע.",
  },
  {
    question: "האם יש אחריות על הציוד והעבודה?",
    answer: "אנחנו מאמינים במה שאנחנו עושים. כל מערכת גייטקיפ מגיעה עם אחריות מלאה על הציוד והעבודה. אנחנו זמינים לכל שאלה או תקלה, ומספקים שירות תיקונים מהיר. המטרה שלנו היא שקט נפשי מלא – מהיום הראשון ולשנים הבאות.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background" id="faq">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 
              className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-4"
              style={{ textWrap: 'balance' }}
            >
              כל מה שחשוב לדעת{" "}
              <span className="text-primary text-glow">על מיגון השטח</span>
            </h2>
            <p 
              className="text-muted-foreground text-lg md:text-xl"
              style={{ textWrap: 'pretty' }}
            >
              התשובות לשאלות הנפוצות ביותר שאנחנו מקבלים מחקלאים
            </p>
          </div>

          {/* Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="card-forest rounded-xl px-6 border-none"
              >
                <AccordionTrigger className="text-right text-lg font-bold text-foreground hover:text-primary hover:no-underline py-6">
                  <span style={{ textWrap: 'balance' }}>{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  <p style={{ textWrap: 'pretty' }}>{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* CTA */}
          <div className="text-center mt-10">
            <p className="text-muted-foreground mb-4" style={{ textWrap: 'pretty' }}>
              יש לך שאלה נוספת? אנחנו כאן בשבילך
            </p>
            <a 
              href={PHONE_LINK} 
              className="btn-cta-glow inline-flex items-center gap-3 px-8 py-4 rounded-xl text-lg font-bold"
            >
              <Phone className="w-5 h-5" />
              <span>התקשר עכשיו</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
