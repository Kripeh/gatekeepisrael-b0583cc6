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
    question: "האם הגדר בטוחה לכלב או לחתול שלי?",
    answer: "בהחלט! המערכת משתמשת בפולסים קצרים של מתח גבוה אך זרם נמוך מאוד. אם חיית המחמד שלך תיגע בגדר, היא תרגיש דחיפה קלה שתלמד אותה להתרחק - בדיוק כמו שהחזירים לומדים. אין סכנה של פציעה.",
  },
  {
    question: "מה קורה אם ילד נוגע בגדר?",
    answer: "המערכות שלנו פועלות לפי תקני בטיחות מחמירים. השוק החשמלי לא נעים, אבל הוא לא מסוכן - בדומה לחשמל סטטי חזק. לאחר נגיעה אחת, הילד יבין לא לגעת שוב. אנחנו ממליצים להסביר לילדים על הגדר מראש.",
  },
  {
    question: "כמה עולה התחזוקה השוטפת?",
    answer: "התחזוקה מינימלית ובחינם! פעם בחודש יש לגזום עשבייה שגדלה ליד החוטים ולבדוק שהמתח תקין (לוקח 5 דקות). אנחנו נלמד אתכם בדיוק איך לעשות את זה. אין עלויות שוטפות מעבר לחשמל זניח.",
  },
  {
    question: "האם הגדר פוגעת במראה הגינה?",
    answer: "ממש לא! אנחנו משתמשים בחוטים דקים שכמעט לא נראים מרחוק. העמודים קטנים ודיסקרטיים. רוב השכנים והאורחים לא ישימו לב שיש גדר חשמלית בכלל.",
  },
  {
    question: "מה קורה כשיורד גשם או בחורף?",
    answer: "המערכות שלנו מתוכננות לעבוד בכל מזג אוויר. אנחנו משתמשים במבודדים איכותיים וציוד עמיד למים. גם בגשם שוטף המערכת ממשיכה לעבוד ביעילות מלאה.",
  },
  {
    question: "כמה זמן לוקחת ההתקנה?",
    answer: "התקנה לחצר ביתית ממוצעת לוקחת בין שעתיים לחצי יום, תלוי בגודל ובמורכבות השטח. אנחנו מגיעים עם כל הציוד והכל נעשה באותו יום.",
  },
];

const HomeFAQSection = () => {
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
              שאלות נפוצות{" "}
              <span className="text-primary text-glow">לבעלי בתים</span>
            </h2>
            <p 
              className="text-muted-foreground text-lg md:text-xl"
              style={{ textWrap: 'pretty' }}
            >
              כל מה שחשוב לדעת לפני שמגנים על הגינה
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
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">יש עוד שאלות? נשמח לעזור!</p>
            <a 
              href={PHONE_LINK} 
              className="btn-cta-glow inline-flex items-center gap-3 px-10 py-5 rounded-xl text-xl font-black"
            >
              <Phone className="w-6 h-6" />
              <span>דברו איתנו עכשיו</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeFAQSection;
