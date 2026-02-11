import { TrendingDown, TrendingUp, Check, X, Calculator } from "lucide-react";
import { Link } from "react-router-dom";

const ROIComparison = () => {
  return (
    <section className="py-20 lg:py-28 bg-secondary/30">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground mb-4"
            style={{ textWrap: 'balance' }}
          >
            למה גדר חשמלית{" "}
            <span className="text-primary">משתלמת יותר?</span>
          </h2>
          <p
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto"
            style={{ textWrap: 'pretty' }}
          >
            השוואת עלויות אמיתית: גדר חשמלית מול גידור פיזי מסורתי
          </p>
        </div>

        {/* Comparison Table */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Electric Fence */}
            <div className="bg-card border-2 border-primary rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 bg-primary text-primary-foreground px-4 py-1 text-sm font-bold rounded-br-lg">
                מומלץ
              </div>
              <div className="mt-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <TrendingDown className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">גדר חשמלית</h3>
                </div>

                {/* Pricing */}
                <div className="mb-6">
                  <div className="text-4xl font-black text-primary mb-2">10-25 ₪</div>
                  <div className="text-muted-foreground">למטר רץ (כולל התקנה)</div>
                </div>

                {/* Features */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">התקנה מהירה - 1-2 ימי עבודה</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">תחזוקה זולה - 200-500 ₪ לשנה</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">אפס צריכת חשמל (מערכות סולאריות)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">יעילות 95% בהרתעת חזירי בר</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">ניתן להרחבה ושינויים בקלות</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">חיי מערכת: 10-15 שנה</span>
                  </div>
                </div>

                {/* Total Cost Example */}
                <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                  <div className="text-sm font-bold text-foreground mb-2">דוגמה: 400 מטר</div>
                  <div className="text-2xl font-black text-primary mb-1">4,000-10,000 ₪</div>
                  <div className="text-xs text-muted-foreground">עלות התקנה חד פעמית</div>
                </div>
              </div>
            </div>

            {/* Traditional Fence */}
            <div className="bg-card border border-border rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-muted border border-border flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-muted-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">גידור מסורתי</h3>
              </div>

              {/* Pricing */}
              <div className="mb-6">
                <div className="text-4xl font-black text-muted-foreground mb-2">150-400 ₪</div>
                <div className="text-muted-foreground">למטר רץ (אלומיניום/רשת)</div>
              </div>

              {/* Features */}
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-2">
                  <X className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                  <span className="text-sm">התקנה איטית - 5-10 ימי עבודה</span>
                </div>
                <div className="flex items-start gap-2">
                  <X className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                  <span className="text-sm">תחזוקה יקרה - 2,000-5,000 ₪ לשנה</span>
                </div>
                <div className="flex items-start gap-2">
                  <X className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                  <span className="text-sm">דורש חפירות ויסודות</span>
                </div>
                <div className="flex items-start gap-2">
                  <X className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                  <span className="text-sm">חזירים יכולים לחפור מתחת או לפרוץ</span>
                </div>
                <div className="flex items-start gap-2">
                  <X className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                  <span className="text-sm">קשה לשינויים והרחבות</span>
                </div>
                <div className="flex items-start gap-2">
                  <X className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                  <span className="text-sm">חיי מערכת: 5-8 שנה (קורוזיה)</span>
                </div>
              </div>

              {/* Total Cost Example */}
              <div className="bg-muted/50 border border-border rounded-lg p-4">
                <div className="text-sm font-bold text-foreground mb-2">דוגמה: 400 מטר</div>
                <div className="text-2xl font-black text-muted-foreground mb-1">60,000-160,000 ₪</div>
                <div className="text-xs text-muted-foreground">עלות התקנה חד פעמית</div>
              </div>
            </div>
          </div>
        </div>

        {/* ROI Breakdown */}
        <div className="max-w-4xl mx-auto bg-card border border-border rounded-2xl p-8 mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
              <Calculator className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground">חישוב החזר השקעה (ROI)</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="bg-secondary/50 rounded-xl p-5">
              <div className="text-sm text-muted-foreground mb-2">עלות נזקי חזירים</div>
              <div className="text-3xl font-black text-foreground mb-1">50,000-150,000 ₪</div>
              <div className="text-xs text-muted-foreground">בשנה (ממוצע למשק)</div>
            </div>
            <div className="bg-secondary/50 rounded-xl p-5">
              <div className="text-sm text-muted-foreground mb-2">עלות גדר חשמלית</div>
              <div className="text-3xl font-black text-primary mb-1">4,000-10,000 ₪</div>
              <div className="text-xs text-muted-foreground">השקעה חד פעמית</div>
            </div>
            <div className="bg-primary/10 border border-primary/20 rounded-xl p-5">
              <div className="text-sm text-primary mb-2 font-bold">החזר השקעה</div>
              <div className="text-3xl font-black text-primary mb-1">1-3 חודשים</div>
              <div className="text-xs text-primary font-medium">לפי נתוני לקוחות</div>
            </div>
          </div>

          <div className="bg-primary/5 border-r-4 border-primary rounded-lg p-5">
            <p className="text-foreground font-medium" style={{ textWrap: 'pretty' }}>
              <strong>לדוגמה:</strong> חקלאי עם נזק שנתי של 100,000 ₪ שהשקיע 8,000 ₪ בגדר חשמלית -
              החזיר את ההשקעה תוך פחות מחודש, וחוסך 92,000 ₪ בשנה הראשונה בלבד.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            to="/pricing"
            className="inline-flex items-center gap-3 px-10 py-5 rounded-xl text-xl font-black bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            <Calculator className="w-6 h-6" />
            <span>חשב הצעת מחיר מדויקת לשטח שלך</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ROIComparison;
