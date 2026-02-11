import { Phone } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const PHONE_LINK = "tel:+972508585310";

const faqs = [
  {
    question: "האם הגדר באמת עוצרת חזירי בר?",
    answer: "חזיר בר הוא חיה אינטליגנטית. הגדר יוצרת מחסום פסיכולוגי - השוק החשמלי מלמד את החזיר להתרחק מהאזור לצמיתות. בזכות התכנון האגרונומי של ענבר, אנחנו מציבים את הגדר בנתיבי הגישה האסטרטגיים.",
  },
  {
    question: "האם הגדר מסוכנת לבני אדם או לחיות מחמד?",
    answer: "המערכות פועלות לפי תקנים מחמירים. מדובר בפולסים קצרים של מתח גבוה אך זרם נמוך מאוד. זה מרתיע וכואב לרגע, אך לא גורם נזק גופני. אמיתי, מהנדס החשמל שלנו, מוודא בטיחות מקסימלית בכל התקנה.",
  },
  {
    question: "מה קורה בחורף או בגשם חזק?",
    answer: "בזכות הניסיון של אפיק בתשתיות, אנחנו משתמשים במבודדים איכותיים וציוד עמיד למים. המערכת מתוכננת לעבוד בשיא היעילות גם בבוץ ובגשם ללא קצרים.",
  },
  {
    question: "למה לבחור בכם ולא בערכה להרכבה עצמית?",
    answer: "אנחנו לא מוכרים רק חוטים, אלא פתרון הנדסי. השילוב של הבנה חקלאית (דור שלישי), תכנון הנדסי (חשמל) וביצוע של לוחמים, מבטיח גדר שבאמת עובדת בשטח, עם אחריות מלאה.",
  },
  {
    question: "האם הגדר דורשת תחזוקה שוטפת?",
    answer: "בהחלט. כדי לשמור על יעילות מקסימלית, יש לבצע בדיקה חודשית פשוטה: גיזום עשבייה הנוגעת בחוטים ובדיקת מתח (שאנחנו נלמד אתכם לבצע). תחזוקה נכונה היא המפתח לשקט הנפשי שלכם לאורך שנים.",
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
              <span className="text-primary">על מיגון השטח</span>
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

          {/* Internal Links */}
          <div className="mt-10 p-6 bg-card/50 border border-border rounded-xl">
            <p className="text-muted-foreground leading-relaxed text-center text-pretty">
              למידע נוסף על{" "}
              <Link to="/installation" className="text-primary font-semibold hover:underline">התקנת גדר חשמלית</Link>
              {" "}מקצועית, בקרו בעמוד ההתקנה שלנו. רוצים לדעת{" "}
              <Link to="/pricing" className="text-primary font-semibold hover:underline">כמה עולה גדר חשמלית</Link>?
              {" "}ראו את המחירון המלא. תוהים{" "}
              <Link to="/why-electric-fence" className="text-primary font-semibold hover:underline">למה גדר חשמלית עדיפה</Link>
              {" "}על פתרונות אחרים? יש לנו את כל התשובות.
            </p>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <a 
              href={PHONE_LINK} 
              className="btn-cta-glow inline-flex items-center gap-3 px-10 py-5 rounded-xl text-xl font-black"
            >
              <Phone className="w-6 h-6" />
              <span>לייעוץ מקצועי בשטח - דברו איתנו</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
