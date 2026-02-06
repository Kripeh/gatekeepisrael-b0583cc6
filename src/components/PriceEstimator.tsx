import { useState } from "react";
import { Phone, Calculator, AlertCircle, User, Loader2, Gift, Sparkles, Clock, ArrowLeft } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { logger } from "@/lib/logger";

type PestType = "boars" | "deer" | "porcupines";

const pestLabels: Record<PestType, string> = {
  boars: "חזירים",
  deer: "צביים",
  porcupines: "דורבנים",
};

const WINTER_PROMO_DISCOUNT = 1000;
const WINTER_PROMO_END_DATE = "28/2/2025";

const PriceEstimator = () => {
  // Step management: 1 = parameters, 2 = results + contact form, 3 = success
  const [step, setStep] = useState<1 | 2 | 3>(1);
  
  // Form fields
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [perimeter, setPerimeter] = useState<number>(100);
  const [gates, setGates] = useState<number>(1);
  const [selectedPests, setSelectedPests] = useState<PestType[]>(["boars"]);
  
  // State
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [priceResult, setPriceResult] = useState<{ 
    originalMin: number; 
    originalMax: number;
    discountedMin: number;
    discountedMax: number;
  } | null>(null);

  const togglePest = (pest: PestType) => {
    setSelectedPests((prev) =>
      prev.includes(pest)
        ? prev.filter((p) => p !== pest)
        : [...prev, pest]
    );
  };

  const calculatePrice = () => {
    const basePrice = (perimeter * 12) + (gates * 1000);
    const deerMultiplier = selectedPests.includes("deer") ? 1.4 : 1;
    const floorPrice = Math.round(basePrice * deerMultiplier);
    const ceilingPrice = Math.round(floorPrice * 1.15);
    
    return { 
      originalMin: floorPrice, 
      originalMax: ceilingPrice,
      discountedMin: floorPrice - WINTER_PROMO_DISCOUNT,
      discountedMax: ceilingPrice - WINTER_PROMO_DISCOUNT,
    };
  };

  const validatePhone = (phoneNumber: string) => {
    const phoneRegex = /^0[0-9]{8,9}$/;
    return phoneRegex.test(phoneNumber.replace(/[-\s]/g, ''));
  };

  // Step 1: Calculate and show results
  const handleCalculate = () => {
    if (perimeter < 10 || perimeter > 10000) {
      toast.error("היקף החלקה צריך להיות בין 10 ל-10,000 מטרים");
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
    setStep(2);
  };

  // Step 2: Submit lead
  const handleSubmitLead = async () => {
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

    if (!priceResult) return;

    setIsSubmitting(true);
    
    try {
      const { error } = await supabase
        .from('leads' as any)
        .insert({
          name: name.trim(),
          phone: phone.trim().replace(/[-\s]/g, ''),
          perimeter,
          gates,
          pest_types: selectedPests,
          estimated_min_price: priceResult.discountedMin,
          estimated_max_price: priceResult.discountedMax,
        } as any);

      if (error) {
        throw error;
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
          minPrice: priceResult.discountedMin,
          maxPrice: priceResult.discountedMax,
          leadType: 'agricultural',
          winterPromo: true,
        }),
      }).catch(err => logger.error('Telegram notification failed:', err));

      setStep(3);
      toast.success("קיבלנו! נציג יחזור אליך בהקדם");
    } catch (error) {
      logger.error("Error submitting lead:", error);
      toast.error("שגיאה בשליחת הפרטים. נסה שוב.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const goBack = () => {
    setStep(1);
  };

  return (
    <section className="py-16 md:py-24 bg-secondary/30" id="calculator">
      <div className="container">
        <div className="max-w-2xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
              <Calculator className="w-5 h-5" />
              <span className="font-bold">הצעת מחיר מהירה</span>
            </div>
            <h2 
              className="text-3xl md:text-4xl font-black text-foreground mb-3"
              style={{ textWrap: 'balance' }}
            >
              קבל הערכת מחיר{" "}
              <span className="text-primary text-glow">תוך 30 שניות</span>
            </h2>
            <p 
              className="text-muted-foreground"
              style={{ textWrap: 'pretty' }}
            >
              {step === 1 ? "הזן את פרטי הגדר וקבל מחיר מיידי" : "השאר פרטים ונחזור אליך עם הצעה מותאמת"}
            </p>
          </div>

          {/* Form Card */}
          <div className="card-forest rounded-2xl p-6 md:p-8">
            
            {/* Step 1: Parameters */}
            {step === 1 && (
              <div className="space-y-6 animate-in fade-in duration-300">
                {/* Perimeter */}
                <div>
                  <label className="block text-foreground font-bold mb-2">
                    היקף חלקה (מטרים)
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
                    אורך הגדר הכולל סביב השטח
                  </p>
                  {perimeter > 0 && perimeter < 1000 && (
                    <p className="text-primary text-sm mt-2 flex items-center gap-1.5">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      <span>לעבודות קטנות מ-1,000 מטר ההערכה פחות מדויקת – מומלץ להתקשר לייעוץ</span>
                    </p>
                  )}
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
                </div>

                {/* Pest Type - Multi-select */}
                <div>
                  <label className="block text-foreground font-bold mb-2">
                    סוג מזיקים (ניתן לבחור כמה)
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

            {/* Step 2: Results + Contact Form */}
            {step === 2 && priceResult && (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                {/* Back Button */}
                <button
                  onClick={goBack}
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>חזור לעריכה</span>
                </button>

                {/* Winter Promo Banner */}
                <div className="bg-primary/10 border border-primary/30 rounded-xl p-4 flex items-center gap-3">
                  <div className="bg-primary rounded-full p-2">
                    <Gift className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-primary" />
                      מבצע חורף - חסכון של ₪{WINTER_PROMO_DISCOUNT.toLocaleString()}!
                    </p>
                    <p className="text-sm text-muted-foreground flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      בתוקף עד {WINTER_PROMO_END_DATE}
                    </p>
                  </div>
                </div>

                {/* Price Display */}
                <div className="bg-muted/50 rounded-xl p-6 text-center border border-primary/30">
                  <p className="text-muted-foreground mb-2">הערכת מחיר לפרויקט שלך:</p>
                  
                  {/* Original Price - Crossed Out */}
                  <p className="text-xl text-muted-foreground line-through mb-1">
                    ₪{priceResult.originalMin.toLocaleString()} - ₪{priceResult.originalMax.toLocaleString()}
                  </p>
                  
                  {/* Discounted Price */}
                  <p className="text-4xl md:text-5xl font-black text-primary text-glow">
                    ₪{priceResult.discountedMin.toLocaleString()} - ₪{priceResult.discountedMax.toLocaleString()}
                  </p>
                  
                  <p className="text-sm text-primary mt-2 font-semibold">
                    כולל הנחת מבצע חורף!
                  </p>

                  {perimeter < 1000 && (
                    <p className="text-primary text-sm mt-3 flex items-center justify-center gap-1.5">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      <span>לעבודות קטנות ההערכה פחות מדויקת – התקשר למחיר מדויק</span>
                    </p>
                  )}
                </div>

                {/* Contact Form */}
                <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
                  <p className="text-center font-bold text-foreground mb-4">
                    נשמע טוב? השאר פרטים ונחזור אליך בהקדם
                  </p>
                  
                  <div className="space-y-4">
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
                  </div>

                  {/* Submit Button */}
                  <button
                    onClick={handleSubmitLead}
                    disabled={isSubmitting}
                    className="w-full btn-cta-glow py-4 rounded-xl text-xl font-black flex items-center justify-center gap-2 mt-6"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-6 h-6 animate-spin" />
                        <span>שולח...</span>
                      </>
                    ) : (
                      <>
                        <Gift className="w-6 h-6" />
                        <span>קבל הצעה עם הנחה</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Success */}
            {step === 3 && priceResult && (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                {/* Success Message */}
                <div className="text-center py-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-full mb-4">
                    <Sparkles className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-black text-foreground mb-2">
                    מעולה! קיבלנו את הפרטים
                  </h3>
                  <p className="text-muted-foreground">
                    נציג יחזור אליך בהקדם עם הצעת מחיר מפורטת
                  </p>
                </div>

                {/* Final Price */}
                <div className="bg-muted/50 rounded-xl p-6 text-center border border-primary/30">
                  <p className="text-muted-foreground mb-2">המחיר המשוער שלך (כולל הנחה):</p>
                  <p className="text-4xl md:text-5xl font-black text-primary text-glow">
                    ₪{priceResult.discountedMin.toLocaleString()} - ₪{priceResult.discountedMax.toLocaleString()}
                  </p>
                </div>

                {/* CTA */}
                <div className="bg-primary/10 border-2 border-primary rounded-xl p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <AlertCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <p className="text-foreground font-semibold">
                      רוצה לדבר עכשיו?
                      <br />
                      <span className="text-primary">
                        התקשר ונענה מיד!
                      </span>
                    </p>
                  </div>

                  <a
                    href="tel:+972508585310"
                    className="btn-cta-glow w-full flex items-center justify-center gap-3 py-5 rounded-xl text-xl font-black pulse-urgent"
                  >
                    <Phone className="w-6 h-6 animate-bounce-subtle" />
                    <span>התקשר עכשיו</span>
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceEstimator;
