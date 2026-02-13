import { useState } from "react";
import { Phone, Calculator, AlertCircle, User, Loader2, Wrench, Gift, Clock, Sparkles } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { logger } from "@/lib/logger";

type PestType = "boars" | "porcupines" | "foxes";

const pestLabels: Record<PestType, string> = {
  boars: "חזירים",
  porcupines: "דורבנים",
  foxes: "שועלים",
};

type Step = "calculate" | "details" | "success";

const WINTER_DISCOUNT = 1000;
const PROMO_END_DATE = "28/2/2025";

const HomePriceCalculator = () => {
  const [step, setStep] = useState<Step>("calculate");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [perimeter, setPerimeter] = useState<number>(100);
  const [gates, setGates] = useState<number>(1);
  const [selectedPests, setSelectedPests] = useState<PestType[]>(["boars"]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [priceResult, setPriceResult] = useState<{
    equipmentMin: number;
    equipmentMax: number;
    withInstallationMin: number;
    withInstallationMax: number;
    discountedEquipmentMin: number;
    discountedEquipmentMax: number;
    discountedInstallationMin: number;
    discountedInstallationMax: number;
  } | null>(null);

  const togglePest = (pest: PestType) => {
    setSelectedPests((prev) =>
      prev.includes(pest)
        ? prev.filter((p) => p !== pest)
        : [...prev, pest]
    );
  };

  const calculatePrice = () => {
    // Linear formula: basePrice = 1,300 + (perimeter × 5.5)
    const basePrice = 1300 + (perimeter * 5.5);
    
    // Porcupines/foxes add +700₪
    const pestBonus = selectedPests.includes("porcupines") || selectedPests.includes("foxes") ? 700 : 0;
    
    // Gates: +800₪ per gate
    const gatesCost = gates * 800;
    
    const equipmentPrice = Math.round(basePrice + pestBonus + gatesCost);
    const installationPrice = equipmentPrice + 2000;
    
    return {
      equipmentMin: Math.max(1, equipmentPrice - 1000),
      equipmentMax: equipmentPrice + 1000,
      withInstallationMin: Math.max(1, installationPrice - 1000),
      withInstallationMax: installationPrice + 1000,
      // Discounted prices
      discountedEquipmentMin: Math.max(1, equipmentPrice - 1000 - WINTER_DISCOUNT),
      discountedEquipmentMax: Math.max(1, equipmentPrice + 1000 - WINTER_DISCOUNT),
      discountedInstallationMin: Math.max(1, installationPrice - 1000 - WINTER_DISCOUNT),
      discountedInstallationMax: Math.max(1, installationPrice + 1000 - WINTER_DISCOUNT),
    };
  };

  const validatePhone = (phoneNumber: string) => {
    const phoneRegex = /^0[0-9]{8,9}$/;
    return phoneRegex.test(phoneNumber.replace(/[-\s]/g, ''));
  };

  const handleCalculate = async () => {
    // Validate parameters
    if (perimeter < 10 || perimeter > 1000) {
      toast.error("היקף החצר צריך להיות בין 10 ל-1,000 מטרים");
      return;
    }
    if (selectedPests.length === 0) {
      toast.error("נא לבחור לפחות סוג מזיק אחד");
      return;
    }
    if (gates < 0 || gates > 20) {
      toast.error("כמות שערים צריכה להיות בין 0 ל-20");
      return;
    }

    const prices = calculatePrice();
    setPriceResult(prices);

    // Save calculator session for analytics (fire and forget)
    supabase
      .from('calculator_sessions')
      .insert({
        perimeter,
        gates,
        pest_types: selectedPests,
        estimated_min_price: prices.equipmentMin,
        estimated_max_price: prices.equipmentMax,
        lead_type: 'residential',
      })
      .select('id')
      .single()
      .then(({ data, error }) => {
        if (error) {
          logger.error('Failed to save calculator session:', error);
        } else if (data) {
          setSessionId(data.id);
        }
      });

    setStep("details");
  };

  const handleSubmit = async () => {
    // Validation
    if (!name.trim()) {
      toast.error("נא להזין שם");
      return;
    }
    if (name.trim().length > 100) {
      toast.error("השם ארוך מדי");
      return;
    }
    if (!phone.trim()) {
      toast.error("נא להזין מספר טלפון");
      return;
    }
    if (!validatePhone(phone)) {
      toast.error("נא להזין מספר טלפון תקין");
      return;
    }

    setIsSubmitting(true);
    
    const prices = priceResult || calculatePrice();
    
    try {
      const { data: leadData, error } = await supabase
        .from('leads')
        .insert({
          name: name.trim(),
          phone: phone.trim().replace(/[-\s]/g, ''),
          perimeter,
          gates,
          pest_types: selectedPests,
          estimated_min_price: prices.discountedEquipmentMin,
          estimated_max_price: prices.discountedEquipmentMax,
          lead_type: 'residential',
        })
        .select('id')
        .single();

      if (error) {
        throw error;
      }

      // Update calculator session to mark conversion
      if (sessionId && leadData) {
        supabase
          .from('calculator_sessions')
          .update({ converted_to_lead: true, lead_id: leadData.id })
          .eq('id', sessionId)
          .then(({ error: updateError }) => {
            if (updateError) {
              logger.error('Failed to update calculator session:', updateError);
            }
          });
      }

      // Send Telegram notification (fire and forget)
      const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
      fetch(`${supabaseUrl}/functions/v1/notify-new-lead`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          phone: phone.trim().replace(/[-\s]/g, ''),
          perimeter,
          gates,
          pestTypes: selectedPests,
          minPrice: prices.discountedEquipmentMin,
          maxPrice: prices.discountedEquipmentMax,
          leadType: 'residential',
          winterPromo: true,
        }),
      }).catch(err => logger.error('Telegram notification failed:', err));

      setStep("success");
      toast.success("מעולה! נציג יחזור אליך בהקדם עם ההנחה");
    } catch (error) {
      logger.error("Error submitting lead:", error);
      toast.error("שגיאה בשליחת הפרטים. נסה שוב.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setStep("calculate");
    setName("");
    setPhone("");
    setPriceResult(null);
    setSessionId(null);
  };

  return (
    <section className="py-16 md:py-24 bg-background" id="calculator">
      <div className="container">
        <div className="max-w-2xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
              <Calculator className="w-5 h-5" />
              <span className="font-bold">מחשבון מחיר ביתי</span>
            </div>
            <h2 
              className="text-3xl md:text-4xl font-black text-foreground mb-3"
              style={{ textWrap: 'balance' }}
            >
              כמה עולה להגן על{" "}
              <span className="text-primary">הגינה שלך?</span>
            </h2>
            <p 
              className="text-muted-foreground"
              style={{ textWrap: 'pretty' }}
            >
              {step === "calculate" && "הזן את הפרטים וקבל הערכת מחיר מיידית - בלי התחייבות"}
              {step === "details" && "נראה טוב? השאר פרטים ונחזור אליך עם הצעה משתלמת"}
              {step === "success" && "קיבלנו! נציג יחזור אליך בהקדם"}
            </p>
          </div>

          {/* Form Card */}
          <div className="card-forest rounded-2xl p-6 md:p-8">
            
            {/* Step 1: Calculate */}
            {step === "calculate" && (
              <div className="space-y-6 animate-in fade-in duration-300">
                {/* Perimeter */}
                <div>
                  <label className="block text-foreground font-bold mb-2">
                    היקף החצר (מטרים)
                  </label>
                  <input
                    type="text"
                    inputMode="numeric"
                    value={perimeter === 0 ? "" : perimeter.toString()}
                    onFocus={(e) => e.target.select()}
                    onChange={(e) => {
                      const value = e.target.value.replace(/\D/g, '').replace(/^0+/, '');
                      setPerimeter(value === "" ? 0 : parseInt(value, 10));
                    }}
                    className="w-full input-forest rounded-lg px-4 py-3 text-lg font-semibold"
                  />
                  <p className="text-muted-foreground text-sm mt-1">
                    💡 טיפ: מדוד את אורך הגדר הכולל סביב החצר. לא בטוח? התקשר ונעזור!
                  </p>
                  <div className="flex items-start gap-2 bg-accent/50 border border-accent rounded-lg p-3 mt-2">
                    <AlertCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">
                      המחשבון מספק הערכה כללית. לחצרות מתחת ל-1,000 מ' מומלץ{" "}
                      <a href="tel:+972508585310" className="text-primary font-bold hover:underline">
                        להתקשר לייעוץ
                      </a>{" "}
                      וקבלת הצעת מחיר מדויקת.
                    </p>
                  </div>
                </div>

                {/* Gates */}
                <div>
                  <label className="block text-foreground font-bold mb-2">
                    כמות שערים
                  </label>
                  <input
                    type="text"
                    inputMode="numeric"
                    value={gates === 0 ? "" : gates.toString()}
                    onFocus={(e) => e.target.select()}
                    onChange={(e) => {
                      const value = e.target.value.replace(/\D/g, '').replace(/^0+/, '');
                      setGates(value === "" ? 0 : parseInt(value, 10));
                    }}
                    className="w-full input-forest rounded-lg px-4 py-3 text-lg font-semibold"
                  />
                  <p className="text-muted-foreground text-sm mt-1">
                    שערי כניסה לחצר שיש לשלב במערכת
                  </p>
                </div>

                {/* Pest Type - Multi-select */}
                <div>
                  <label className="block text-foreground font-bold mb-2">
                    מאיזה מזיק להתגונן? (ניתן לבחור כמה)
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {(Object.keys(pestLabels) as PestType[]).map((pest) => (
                      <button
                        key={pest}
                        onClick={() => togglePest(pest)}
                        className={`px-4 py-3 rounded-lg font-bold transition-all ${
                          selectedPests.includes(pest)
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted text-muted-foreground hover:bg-muted/80"
                        }`}
                      >
                        {pestLabels[pest]}
                      </button>
                    ))}
                  </div>
                  <p className="text-muted-foreground text-sm mt-2">
                    הגנה מפני דורבנים או שועלים דורשת התאמות במערכת
                  </p>
                </div>

                {/* Calculate Button */}
                <button
                  onClick={handleCalculate}
                  className="w-full btn-cta-glow py-4 rounded-xl text-xl font-black flex items-center justify-center gap-2"
                >
                  <Calculator className="w-6 h-6" />
                  <span>חשב מחיר</span>
                </button>
              </div>
            )}

            {/* Step 2: Show Price + Get Details */}
            {step === "details" && priceResult && (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">

                {/* General Professional Disclaimer - Always shown */}
                <div className="bg-blue-500/10 border-r-4 border-blue-500 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500 flex-shrink-0 mt-0.5">
                      <circle cx="12" cy="12" r="10"/>
                      <path d="M12 16v-4"/>
                      <path d="M12 8h.01"/>
                    </svg>
                    <div className="text-sm text-foreground">
                      <span className="font-bold">💡 חשוב לדעת:</span> מחשבון זה מספק אומדן ראשוני בלבד. כל נכס ייחודי ומושפע מגורמים שונים כגון גודל החצר, מבנה השטח, נגישות ודרישות ספציפיות. לקבלת הצעת מחיר מדויקת ומקצועית, נדרש סקר שטח מפורט על ידי הצוות שלנו.
                    </div>
                  </div>
                </div>

                {/* Price Display */}
                <div className="space-y-4">

                  {/* With Installation Price - Featured */}
                  <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl p-5 text-center border-2 border-primary relative overflow-hidden">
                    {/* Promo Badge */}
                    <div className="absolute top-0 left-0 bg-primary text-primary-foreground px-3 py-1 text-xs font-bold rounded-br-lg flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      מבצע חורף
                    </div>
                    
                    <div className="flex items-center justify-center gap-2 text-primary mb-2 mt-2">
                      <Wrench className="w-5 h-5" />
                      <span className="font-bold">מחיר סופי כולל הכל</span>
                    </div>
                    
                    {/* Original Price (crossed out) */}
                    <p className="text-muted-foreground line-through text-lg mb-1">
                      ₪{priceResult.withInstallationMin.toLocaleString()} - ₪{priceResult.withInstallationMax.toLocaleString()}
                    </p>
                    
                    {/* Discounted Price */}
                    <p className="text-4xl md:text-5xl font-black text-primary">
                      ₪{priceResult.discountedInstallationMin.toLocaleString()} - ₪{priceResult.discountedInstallationMax.toLocaleString()}
                    </p>
                    
                    {/* What's Included */}
                    <p className="text-sm text-muted-foreground mt-3 mb-2">
                      חומרים + מערכת חשמלית + שערים + התקנה מקצועית
                    </p>
                    
                    {/* Savings Badge */}
                    <div className="inline-flex items-center gap-1 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-bold">
                      <Gift className="w-4 h-4" />
                      חוסכים ₪{WINTER_DISCOUNT.toLocaleString()}!
                    </div>
                  </div>
                </div>

                {/* Winter Promo CTA */}
                <div className="bg-gradient-to-r from-primary/20 to-primary/10 border-2 border-primary/50 rounded-xl p-5">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="bg-primary text-primary-foreground p-2 rounded-full flex-shrink-0">
                      <Gift className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-foreground font-black text-lg mb-1">
                        🔥 מבצע חורף - חסכו ₪{WINTER_DISCOUNT.toLocaleString()}!
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        השאירו פרטים עכשיו וקבלו הנחה של ₪{WINTER_DISCOUNT.toLocaleString()} על הזמנה דרך האתר.
                        <span className="text-primary font-semibold"> המבצע בתוקף עד {PROMO_END_DATE}</span>
                      </p>
                    </div>
                  </div>

                  {/* Contact Form */}
                  <div className="space-y-4 mt-6">
                    {/* Name */}
                    <div>
                      <label className="block text-foreground font-bold mb-2">
                        <User className="w-4 h-4 inline-block ml-2" />
                        שם מלא
                      </label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="הזן את שמך"
                        className="w-full input-forest rounded-lg px-4 py-3 text-lg font-semibold"
                        maxLength={100}
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-foreground font-bold mb-2">
                        <Phone className="w-4 h-4 inline-block ml-2" />
                        מספר טלפון
                      </label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="050-000-0000"
                        className="w-full input-forest rounded-lg px-4 py-3 text-lg font-semibold"
                        dir="ltr"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground py-4 rounded-xl text-xl font-black flex items-center justify-center gap-2 transition-all shadow-lg shadow-primary/30"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-6 h-6 animate-spin" />
                          <span>שולח...</span>
                        </>
                      ) : (
                        <>
                          <Gift className="w-6 h-6" />
                          <span>קבל את ההנחה!</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Urgency Timer */}
                  <div className="flex items-center justify-center gap-2 mt-4 text-primary text-sm">
                    <Clock className="w-4 h-4" />
                    <span>המבצע בתוקף עד {PROMO_END_DATE} בלבד</span>
                  </div>
                </div>

                {/* Back Link */}
                <button
                  onClick={handleReset}
                  className="w-full text-muted-foreground hover:text-foreground text-sm underline transition-colors"
                >
                  ← חזרה לחישוב מחדש
                </button>
              </div>
            )}

            {/* Step 3: Success */}
            {step === "success" && priceResult && (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                {/* Success Message */}
                <div className="text-center py-8">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/20 rounded-full mb-4">
                    <Sparkles className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-2xl font-black text-foreground mb-2">
                    מעולה! ההנחה שמורה עבורך 🎉
                  </h3>
                  <p className="text-muted-foreground">
                    נציג יחזור אליך תוך 24 שעות עם הצעה מותאמת אישית
                  </p>
                </div>

                {/* Final Price Reminder */}
                <div className="bg-primary/10 rounded-xl p-6 text-center border-2 border-primary">
                  <p className="text-muted-foreground mb-2">המחיר שלך עם ההנחה:</p>
                  <p className="text-3xl md:text-4xl font-black text-primary">
                    ₪{priceResult.discountedInstallationMin.toLocaleString()} - ₪{priceResult.discountedInstallationMax.toLocaleString()}
                  </p>
                  <div className="inline-flex items-center gap-1 text-primary text-sm font-bold mt-2">
                    <Gift className="w-4 h-4" />
                    כולל הנחת מבצע חורף ₪{WINTER_DISCOUNT.toLocaleString()}
                  </div>
                </div>

                {/* Quick Call CTA */}
                <div className="bg-muted/50 rounded-xl p-5 border border-border">
                  <p className="text-foreground font-semibold text-center mb-4">
                    לא רוצה לחכות? התקשר עכשיו לסגירה מהירה
                  </p>
                  <a
                    href="tel:+972508585310"
                    className="btn-cta-glow w-full flex items-center justify-center gap-3 py-4 rounded-xl text-xl font-black"
                  >
                    <Phone className="w-6 h-6" />
                    <span>050-858-5310</span>
                  </a>
                </div>

                {/* New Calculation */}
                <button
                  onClick={handleReset}
                  className="w-full text-muted-foreground hover:text-foreground text-sm underline transition-colors"
                >
                  ← חישוב מחדש
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePriceCalculator;
