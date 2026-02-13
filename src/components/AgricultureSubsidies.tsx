import { DollarSign, FileText, CheckCircle2, ExternalLink, Phone } from "lucide-react";

const PHONE_LINK = "tel:+972508585310";

const AgricultureSubsidies = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground mb-4"
            style={{ textWrap: 'balance' }}
          >
            סבסוד ממשרד החקלאות:{" "}
            <span className="text-primary">עזרה כלכלית להתקנת גדר</span>
          </h2>
          <p
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto"
            style={{ textWrap: 'pretty' }}
          >
            קבלו סיוע ממשלתי להגנה על השטח החקלאי שלכם מפני חזירי בר
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main Info Card */}
          <div className="bg-card border-2 border-primary rounded-2xl p-8 lg:p-10 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                <DollarSign className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">תכניות סבסוד זמינות</h3>
            </div>

            <div className="space-y-6">
              {/* Subsidy 1 */}
              <div className="bg-secondary/50 rounded-xl p-6">
                <h4 className="text-xl font-bold text-foreground mb-3">
                  סבסוד למניעת נזקי חיות בר
                </h4>
                <p className="text-muted-foreground mb-4" style={{ textWrap: 'pretty' }}>
                  משרד החקלאות מעניק סבסוד של עד <strong className="text-primary">50% מעלות ההתקנה</strong> למשקים חקלאיים
                  שסובלים מנזקי חזירי בר ובעלי חיים אחרים.
                </p>
                <div className="flex flex-wrap gap-3">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span>עד 50% סבסוד</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span>למשקים רשומים</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span>תהליך מהיר</span>
                  </div>
                </div>
              </div>

              {/* Subsidy 2 */}
              <div className="bg-secondary/50 rounded-xl p-6">
                <h4 className="text-xl font-bold text-foreground mb-3">
                  תכנית שימור קרקע חקלאית
                </h4>
                <p className="text-muted-foreground mb-4" style={{ textWrap: 'pretty' }}>
                  סיוע כלכלי לשימור קרקע חקלאית ומניעת שחיקה. גדרות חשמליות זכאיות למענקים במסגרת
                  תכנית זו כיוון שהן מונעות נזק לקרקע ע"י חזירי בר.
                </p>
                <div className="flex flex-wrap gap-3">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span>מענק ממשלתי</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span>עד 40% החזר</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span>ללא ריבית</span>
                  </div>
                </div>
              </div>

              {/* Subsidy 3 */}
              <div className="bg-secondary/50 rounded-xl p-6">
                <h4 className="text-xl font-bold text-foreground mb-3">
                  השקעה בטכנולוגיה חקלאית מתקדמת
                </h4>
                <p className="text-muted-foreground mb-4" style={{ textWrap: 'pretty' }}>
                  מערכות גדר חשמלית סולארית מוגדרות כטכנולוגיה חקלאית מתקדמת וזכאיות להנחה במס
                  ולהקלות במימון.
                </p>
                <div className="flex flex-wrap gap-3">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span>הנחה במס</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span>מימון מוזל</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span>פריסת תשלומים</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* How to Apply */}
          <div className="bg-card border border-border rounded-2xl p-8 lg:p-10 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                <FileText className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">איך מגישים בקשה?</h3>
            </div>

            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">צרו איתנו קשר</h4>
                  <p className="text-muted-foreground text-sm" style={{ textWrap: 'pretty' }}>
                    נעזור לכם להכין הצעת מחיר מפורטת המתאימה לדרישות משרד החקלאות
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">הגשת בקשה למשרד החקלאות</h4>
                  <p className="text-muted-foreground text-sm" style={{ textWrap: 'pretty' }}>
                    מגישים את המסמכים הנדרשים יחד עם הצעת המחיר למחלקת הסבסוד
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">אישור ותשלום</h4>
                  <p className="text-muted-foreground text-sm" style={{ textWrap: 'pretty' }}>
                    לאחר אישור הבקשה - אנחנו מתקינים ואתם מקבלים החזר כספי ממשרד החקלאות
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Important Note */}
          <div className="bg-primary/5 border-r-4 border-primary rounded-lg p-6 mb-8">
            <h4 className="font-bold text-foreground mb-2 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              חשוב לדעת
            </h4>
            <p className="text-muted-foreground text-sm" style={{ textWrap: 'pretty' }}>
              גייטקיפ היא חברה רשומה ומאושרת ע"י משרד החקלאות. כל ההתקנות שלנו עומדות בתקנים
              הנדרשים לקבלת הסבסוד. אנחנו נעזור לכם בכל שלבי התהליך - מההגשה ועד לקבלת הכסף.
            </p>
          </div>

          {/* External Link */}
          <div className="bg-card border border-border rounded-xl p-6 mb-8">
            <h4 className="font-bold text-foreground mb-3">מידע נוסף ממשרד החקלאות</h4>
            <a
              href="https://www.moag.gov.il"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
            >
              <ExternalLink className="w-4 h-4" />
              <span>אתר משרד החקלאות ופיתוח הכפר</span>
            </a>
          </div>

          {/* CTA */}
          <div className="text-center">
            <a
              href={PHONE_LINK}
              className="inline-flex items-center gap-3 px-10 py-5 rounded-xl text-xl font-black bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              <Phone className="w-6 h-6" />
              <span>נעזור לכם לקבל את הסבסוד - התקשרו עכשיו</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgricultureSubsidies;
