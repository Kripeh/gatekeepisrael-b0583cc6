import { Phone, CheckCircle, XCircle, Zap, Shield, Leaf, Users, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import ServicePageLayout from "@/components/ServicePageLayout";

const PHONE_LINK = "tel:+972508585310";
const PHONE_DISPLAY = "050-858-5310";

const WhyElectricFence = () => {
  const { data: testimonials } = useQuery({
    queryKey: ['service-page-testimonials'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('testimonials')
        .select('*')
        .eq('is_active', true)
        .limit(2);
      
      if (error) throw error;
      return data;
    },
    staleTime: 5 * 60 * 1000,
  });

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "למה גדר חשמלית עובדת נגד חזירי בר?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "גדר חשמלית יוצרת מחסום פסיכולוגי ופיזי. החזיר מקבל זעזוע קל אך לא נעים בנגיעה ראשונה ולומד להימנע מהאזור לחלוטין. זה פתרון הרתעתי יעיל יותר מגדרות פיזיות שחזירים יכולים לחפור מתחתן."
        }
      },
      {
        "@type": "Question",
        "name": "האם גדר חשמלית בטוחה לאדם?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "כן. הגדר עובדת במתח גבוה (5,000-10,000V) אך זרם נמוך מאוד (מיליאמפרים בודדים). זה יוצר זעזוע לא נעים אך לא מסוכן. כל ההתקנות כוללות שלטי אזהרה כנדרש בחוק."
        }
      }
    ]
  };

  return (
    <ServicePageLayout
      title="למה גדר חשמלית נגד חזירי בר | גייטקיפ"
      description="גדר חשמלית היא הפתרון היעיל ביותר נגד חזירי בר. למדו למה שיטות אחרות נכשלות ואיך גדר חשמלית מגנה על השטח שלכם"
      keywords="גדר נגד חזירי בר, הגנה מחזירי בר, פתרון לחזירי בר, גדר חשמלית יתרונות"
      canonicalPath="/why-electric-fence"
      breadcrumbs={[{ label: "למה גדר חשמלית" }]}
      schemaMarkup={schemaMarkup}
    >
      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-black mb-6 text-balance">
              למה גדר חשמלית היא הפתרון היעיל ביותר נגד חזירי בר?
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 text-pretty">
              אחרי שראינו עשרות חקלאים מנסים פתרונות שונים, אנחנו יודעים מה עובד ומה לא. הנה כל מה שצריך לדעת
            </p>
          </div>
        </div>
      </section>

      {/* The Boar Problem */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              בעיית חזירי הבר בישראל
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-muted-foreground mb-4">
                  אוכלוסיית חזירי הבר בישראל צמחה באופן דרמטי בעשורים האחרונים. הם גורמים לנזקים של מיליוני שקלים בשנה לחקלאים בכל רחבי הארץ.
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <XCircle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                    <span>הרס יבולים שלמים בלילה אחד</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                    <span>נזקים למערכות השקיה ותשתיות</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                    <span>סכנה לבטיחות עובדים ומבקרים</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                    <span>הפסדים כספיים שחוזרים כל עונה</span>
                  </li>
                </ul>
              </div>
              <div className="bg-card p-6 rounded-2xl border border-border">
                <h3 className="font-bold text-lg mb-4">האזורים המושפעים ביותר:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• הגליל העליון והתחתון</li>
                  <li>• עמק יזרעאל</li>
                  <li>• הכרמל</li>
                  <li>• השפלה (גזר, לכיש)</li>
                  <li>• הנגב הצפוני</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Other Methods Fail */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              למה שיטות אחרות נכשלות?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card p-6 rounded-2xl border border-destructive/30">
                <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                  <XCircle className="w-5 h-5 text-destructive" />
                  גדרות פיזיות רגילות
                </h3>
                <p className="text-muted-foreground text-sm">
                  חזירי בר חופרים מתחת לגדרות או פורצים דרכן. גדר פיזית צריכה להיות קבורה לפחות 50 ס"מ באדמה כדי להיות יעילה - יקר מאוד ולא תמיד אפשרי.
                </p>
              </div>
              <div className="bg-card p-6 rounded-2xl border border-destructive/30">
                <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                  <XCircle className="w-5 h-5 text-destructive" />
                  חומרי הדברה וריחות
                </h3>
                <p className="text-muted-foreground text-sm">
                  חזירים מתרגלים לריחות תוך זמן קצר. רעלים אסורים לשימוש ומסוכנים לסביבה ולבעלי חיים אחרים.
                </p>
              </div>
              <div className="bg-card p-6 rounded-2xl border border-destructive/30">
                <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                  <XCircle className="w-5 h-5 text-destructive" />
                  ציד וצלפים
                </h3>
                <p className="text-muted-foreground text-sm">
                  יקר מאוד, דורש אישורים, לא פותר את הבעיה לטווח ארוך. חזירים חדשים ממלאים את החלל במהירות.
                </p>
              </div>
              <div className="bg-card p-6 rounded-2xl border border-destructive/30">
                <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                  <XCircle className="w-5 h-5 text-destructive" />
                  מכשירי הבהלה (אור/קול)
                </h3>
                <p className="text-muted-foreground text-sm">
                  חזירים מתרגלים תוך ימים ספורים. לא אפקטיבי לטווח ארוך ומפריע לשכנים.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Electric Fences Work */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              איך גדר חשמלית עובדת?
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Zap className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">מחסום פסיכולוגי</h3>
                      <p className="text-muted-foreground text-sm">
                        החזיר נוגע בחוט, מקבל זעזוע לא נעים, ולומד להימנע מהגדר לחלוטין. הזיכרון נשאר לאורך זמן.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Shield className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">מחסום פיזי</h3>
                      <p className="text-muted-foreground text-sm">
                        החוטים עצמם מהווים מחסום. גם אם חזיר מנסה לעבור, הוא יקבל זעזועים מרובים שירתיעו אותו.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">בטוח לחלוטין</h3>
                      <p className="text-muted-foreground text-sm">
                        מתח גבוה אך זרם נמוך מאוד. לא מסוכן לאדם או לבעלי חיים - רק לא נעים.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-card p-6 rounded-2xl border border-border">
                <h3 className="font-bold text-lg mb-4 text-center">נתונים טכניים</h3>
                <ul className="space-y-3">
                  <li className="flex justify-between border-b border-border pb-2">
                    <span className="text-muted-foreground">מתח</span>
                    <span className="font-medium">5,000-10,000V</span>
                  </li>
                  <li className="flex justify-between border-b border-border pb-2">
                    <span className="text-muted-foreground">זרם</span>
                    <span className="font-medium">מיליאמפרים בודדים</span>
                  </li>
                  <li className="flex justify-between border-b border-border pb-2">
                    <span className="text-muted-foreground">פולסים</span>
                    <span className="font-medium">1 לשנייה</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-muted-foreground">אנרגיה לפולס</span>
                    <span className="font-medium">0.3-3 ג'אול</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Rate */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">
              שיעור הצלחה
            </h2>
            <div className="bg-card p-8 rounded-2xl border border-primary/20 border-2 inline-block">
              <p className="text-5xl md:text-6xl font-black text-primary mb-2">95%+</p>
              <p className="text-muted-foreground">מהלקוחות שלנו מדווחים על הפסקה מוחלטת של נזקי חזירים</p>
            </div>
            <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
              * בתנאי שהגדר מותקנת נכון ומתוחזקת באופן שוטף. אנחנו מלווים את הלקוחות שלנו גם אחרי ההתקנה.
            </p>
          </div>
        </div>
      </section>

      {/* Maintenance */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              דרישות תחזוקה
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-card p-6 rounded-2xl border border-border text-center">
                <div className="text-3xl font-bold text-primary mb-2">חודשי</div>
                <h3 className="font-bold mb-2">בדיקת מתח</h3>
                <p className="text-muted-foreground text-sm">
                  בדיקה מהירה עם מד מתח לוודא שהגדר עובדת
                </p>
              </div>
              <div className="bg-card p-6 rounded-2xl border border-border text-center">
                <div className="text-3xl font-bold text-primary mb-2">לפי הצורך</div>
                <h3 className="font-bold mb-2">ניכוש צמחייה</h3>
                <p className="text-muted-foreground text-sm">
                  הרחקת עשבים שנוגעים בחוטים ומורידים מתח
                </p>
              </div>
              <div className="bg-card p-6 rounded-2xl border border-border text-center">
                <div className="text-3xl font-bold text-primary mb-2">שנתי</div>
                <h3 className="font-bold mb-2">בדיקה מקיפה</h3>
                <p className="text-muted-foreground text-sm">
                  בדיקת כל הרכיבים, הידוק חיבורים, החלפת בלאי
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Environmental & Safety */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              בטיחות וסביבה
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4 p-6 bg-card rounded-2xl border border-border">
                <Shield className="w-8 h-8 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-bold mb-2">בטוח לשימוש</h3>
                  <p className="text-muted-foreground text-sm">
                    הזעזוע לא נעים אך לא מסוכן. כל ההתקנות כוללות שלטי אזהרה כנדרש בחוק. מאושר לשימוש חקלאי.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 bg-card rounded-2xl border border-border">
                <Leaf className="w-8 h-8 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-bold mb-2">ידידותי לסביבה</h3>
                  <p className="text-muted-foreground text-sm">
                    לא הורג, רק מרתיע. לא משתמש בכימיקלים. צריכת חשמל מינימלית (או אפסית עם סולארי).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {testimonials && testimonials.length > 0 && (
        <section className="py-12 md:py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center flex items-center justify-center gap-2">
                <Users className="w-8 h-8 text-primary" />
                מה אומרים החקלאים
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="bg-card p-6 rounded-2xl border border-border">
                    <p className="text-muted-foreground mb-4 italic">
                      "{testimonial.content}"
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <span className="text-primary font-bold">
                          {testimonial.reviewer_name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <p className="font-bold text-sm">{testimonial.reviewer_name}</p>
                        <p className="text-muted-foreground text-xs">
                          {testimonial.crop_type} | {testimonial.location}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Final CTA */}
      <section className="py-16 md:py-20 bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-4xl font-black mb-6">
              מוכן להגן על השטח שלך?
            </h2>
            <p className="text-lg opacity-90 mb-8">
              התקשר עכשיו לייעוץ חינם. נסביר על התהליך ונתאים את הפתרון לצרכים שלך
            </p>
            <a 
              href={PHONE_LINK}
              className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-xl text-lg font-bold hover:bg-white/90 transition-colors"
            >
              <Phone className="w-6 h-6" />
              <span>התקשר עכשיו - {PHONE_DISPLAY}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-12">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-lg font-bold mb-4">קישורים נוספים:</h3>
            <div className="flex flex-wrap gap-4">
              <Link to="/installation" className="text-primary hover:underline">תהליך ההתקנה</Link>
              <Link to="/solar-fence" className="text-primary hover:underline">גדר סולארית</Link>
              <Link to="/pricing" className="text-primary hover:underline">מחירון מלא</Link>
              <Link to="/home-solutions" className="text-primary hover:underline">פתרונות לבית פרטי</Link>
              <Link to="/service-areas" className="text-primary hover:underline">אזורי שירות</Link>
              <Link to="/wild-boar-electric-fence-protection" className="text-primary hover:underline">מדריך חזירי בר</Link>
            </div>
          </div>
        </div>
      </section>
    </ServicePageLayout>
  );
};

export default WhyElectricFence;
