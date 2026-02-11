import { Shield, TrendingUp, Brain, Phone, AlertTriangle } from "lucide-react";

const PHONE_LINK = "tel:+972508585310";

const BoarCrisisGuide = () => {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-background to-secondary/30">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-destructive/10 border border-destructive/30 text-destructive px-5 py-2.5 rounded-full mb-4">
            <AlertTriangle className="w-5 h-5" />
            <span className="font-bold">מצב חירום חקלאי</span>
          </div>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground mb-4"
            style={{ textWrap: 'balance' }}
          >
            המדריך המלא למשבר{" "}
            <span className="text-primary">חזירי הבר</span>
          </h2>
          <p
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto"
            style={{ textWrap: 'pretty' }}
          >
            איך עוצרים את הנזק עכשיו עם 95% הצלחה מוכחת
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Success Rate Banner */}
          <div className="bg-primary text-primary-foreground rounded-2xl p-8 lg:p-10 mb-12 text-center">
            <div className="text-6xl md:text-7xl font-black mb-4">95%</div>
            <div className="text-2xl md:text-3xl font-bold mb-2">שיעור הצלחה</div>
            <p className="text-lg opacity-90 max-w-2xl mx-auto" style={{ textWrap: 'pretty' }}>
              95% מהלקוחות שלנו לא חווים פלישת חזירים לאחר התקנת הגדר החשמלית.
              נתון מבוסס על 180+ פרויקטים שהושלמו בשנתיים האחרונות.
            </p>
          </div>

          {/* Crisis Symptoms */}
          <div className="bg-card border border-border rounded-2xl p-8 lg:p-10 mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
              <AlertTriangle className="w-7 h-7 text-destructive" />
              האם אתה במשבר חזירי בר?
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "פלישות לילה חוזרות - 2-3 פעמים בשבוע",
                "נזק לתוצרת החקלאית - אובדן של אלפי שקלים",
                "הרס מערכות השקיה ותשתיות",
                "חרדה ולחץ מתמיד - חוסר שקט נפשי",
                "פתרונות קודמים נכשלו (רעש, תאורה, גידור רגיל)",
                "חוסר ביטחון לילדים ולחיות המשק"
              ].map((symptom, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-secondary/50 rounded-lg p-4">
                  <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">{symptom}</span>
                </div>
              ))}
            </div>
          </div>

          {/* How It Works - Psychological Barrier */}
          <div className="bg-card border border-border rounded-2xl p-8 lg:p-10 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                <Brain className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">
                הרתעה פסיכולוגית: למה זה עובד
              </h3>
            </div>

            <div className="space-y-6">
              <div className="bg-secondary/50 rounded-xl p-6">
                <h4 className="font-bold text-foreground mb-2">שלב 1: המפגש הראשון</h4>
                <p className="text-muted-foreground text-sm" style={{ textWrap: 'pretty' }}>
                  חזיר הבר נוגע בגדר ומקבל שוק חשמלי קצר אך עוצמתי. זה לא פוגע בו פיזית, אבל יוצר
                  חוויה שלילית חזקה שהמוח שלו זוכר לתמיד.
                </p>
              </div>

              <div className="bg-secondary/50 rounded-xl p-6">
                <h4 className="font-bold text-foreground mb-2">שלב 2: למידה מהירה</h4>
                <p className="text-muted-foreground text-sm" style={{ textWrap: 'pretty' }}>
                  חזירי בר הם בעלי חיים אינטליגנטיים. לאחר 1-3 מפגשים עם הגדר, הם לומדים להימנע
                  מהאזור לחלוטין. הם מזהים את הצליל של המחולל ואת מראה החוטים.
                </p>
              </div>

              <div className="bg-secondary/50 rounded-xl p-6">
                <h4 className="font-bold text-foreground mb-2">שלב 3: הרתעה ארוכת טווח</h4>
                <p className="text-muted-foreground text-sm" style={{ textWrap: 'pretty' }}>
                  הזיכרון של החזיר גורם לו להימנע מהאזור גם אם הגדר לא פעילה. זו הרתעה
                  פסיכולוגית מוחלטת - הם פשוט לא מגיעים יותר.
                </p>
              </div>
            </div>
          </div>

          {/* Why 95% Success */}
          <div className="bg-card border-2 border-primary rounded-2xl p-8 lg:p-10 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                <TrendingUp className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">
                למה דווקא 95% ולא 100%?
              </h3>
            </div>

            <div className="space-y-4">
              <p className="text-muted-foreground" style={{ textWrap: 'pretty' }}>
                אנחנו שקופים לגמרי: ב-5% מהמקרים, יש פלישות בודדות לאחר ההתקנה. זה קורה בעיקר כאשר:
              </p>
              <div className="space-y-3">
                {[
                  "המערכת לא תוחזקה כראוי (עשבייה גבוהה שמקצרת)",
                  "נפילת עץ או ענף שפגע בגדר",
                  "חזירים צעירים שעוד לא למדו את השיעור",
                  "בעיות טכניות שלא טופלו מיד"
                ].map((reason, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-sm">
                    <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-2" />
                    <span className="text-muted-foreground">{reason}</span>
                  </div>
                ))}
              </div>
              <div className="bg-primary/5 border-r-4 border-primary rounded-lg p-5 mt-4">
                <p className="text-foreground font-medium text-sm" style={{ textWrap: 'pretty' }}>
                  <strong>הפתרון:</strong> אנחנו מספקים תחזוקה ותמיכה מלאה. כל בעיה שמתגלה נפתרת
                  תוך 24 שעות. זו החבות שלנו אליכם.
                </p>
              </div>
            </div>
          </div>

          {/* Action Steps */}
          <div className="bg-card border border-border rounded-2xl p-8 lg:p-10 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                <Shield className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">
                מה לעשות עכשיו?
              </h3>
            </div>

            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">התקשר אלינו עכשיו</h4>
                  <p className="text-muted-foreground text-sm">
                    שיחת ייעוץ ראשונית בחינם - נבין את המצב ונציע פתרון מותאם
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">ביקור שטח מקצועי</h4>
                  <p className="text-muted-foreground text-sm">
                    ענבר, האגרונום שלנו, מגיע לשטח ומתכנן את הגדר לפי נתיבי הגישה
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">התקנה תוך 48 שעות</h4>
                  <p className="text-muted-foreground text-sm">
                    צוות מקצועי מתקין את המערכת במהירות. תתחיל לישון שקט כבר הלילה
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <a
              href={PHONE_LINK}
              className="inline-flex items-center gap-3 px-10 py-6 rounded-xl text-xl md:text-2xl font-black bg-primary text-primary-foreground hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
            >
              <Phone className="w-7 h-7" />
              <span>עצור את המשבר עכשיו - 050-858-5310</span>
            </a>
            <p className="text-muted-foreground text-sm mt-4">
              זמינים 24/7 למקרי חירום חקלאי
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BoarCrisisGuide;
