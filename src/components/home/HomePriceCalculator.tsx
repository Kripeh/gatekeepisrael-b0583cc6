import { useState } from "react";
import { Phone, Calculator, AlertCircle, User, Loader2, Wrench } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { logger } from "@/lib/logger";

type PestType = "boars" | "porcupines" | "foxes";

const pestLabels: Record<PestType, string> = {
  boars: "חזירים",
  porcupines: "דורבנים",
  foxes: "שועלים",
};

const HomePriceCalculator = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [perimeter, setPerimeter] = useState<number>(100);
  const [gates, setGates] = useState<number>(1);
  const [selectedPests, setSelectedPests] = useState<PestType[]>(["boars"]);
  const [showResult, setShowResult] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [priceResult, setPriceResult] = useState<{
    equipmentMin: number;
    equipmentMax: number;
    withInstallationMin: number;
    withInstallationMax: number;
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
      equipmentMin: Math.max(0, equipmentPrice - 1000),
      equipmentMax: equipmentPrice + 1000,
      withInstallationMin: Math.max(0, installationPrice - 1000),
      withInstallationMax: installationPrice + 1000,
    };
  };

  const validatePhone = (phoneNumber: string) => {
    const phoneRegex = /^0[0-9]{8,9}$/;
    return phoneRegex.test(phoneNumber.replace(/[-\s]/g, ''));
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
    if (perimeter < 10 || perimeter > 1000) {
      toast.error("היקף החצר צריך להיות בין 10 ל-1,000 מטרים");
      return;
    }

    setIsSubmitting(true);
    
    const prices = calculatePrice();
    
    try {
      const { error } = await supabase
        .from('leads')
        .insert({
          name: name.trim(),
          phone: phone.trim().replace(/[-\s]/g, ''),
          perimeter,
          gates,
          pest_types: selectedPests,
          estimated_min_price: prices.equipmentMin,
          estimated_max_price: prices.equipmentMax,
          lead_type: 'residential',
        });

      if (error) {
        throw error;
      }

      setPriceResult(prices);
      setShowResult(true);
      toast.success("הפרטים נשלחו בהצלחה!");
    } catch (error) {
      logger.error("Error submitting lead:", error);
      toast.error("שגיאה בשליחת הפרטים. נסה שוב.");
    } finally {
      setIsSubmitting(false);
    }
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
              <span className="text-primary text-glow">הגינה שלך?</span>
            </h2>
            <p 
              className="text-muted-foreground"
              style={{ textWrap: 'pretty' }}
            >
              מלא את הפרטים וקבל הערכת מחיר מיידית
            </p>
          </div>

          {/* Form Card */}
          <div className="card-forest rounded-2xl p-6 md:p-8">
            {/* Inputs */}
            <div className="space-y-6 mb-8">
              {/* Name */}
              <div>
                <label className="block text-foreground font-bold mb-2">
                  <User className="w-4 h-4 inline-block ml-2" />
                  שם מלא <span className="text-destructive">*</span>
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="הזן את שמך"
                  className="w-full input-forest rounded-lg px-4 py-3 text-lg font-semibold"
                  maxLength={100}
                  disabled={showResult}
                  required
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-foreground font-bold mb-2">
                  <Phone className="w-4 h-4 inline-block ml-2" />
                  מספר טלפון <span className="text-destructive">*</span>
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="050-000-0000"
                  className="w-full input-forest rounded-lg px-4 py-3 text-lg font-semibold"
                  dir="ltr"
                  disabled={showResult}
                  required
                />
              </div>

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
                  disabled={showResult}
                />
                <p className="text-muted-foreground text-sm mt-1">
                  💡 טיפ: מדוד את אורך הגדר הכולל סביב החצר. לא בטוח? התקשר ונעזור!
                </p>
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
                  disabled={showResult}
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
                      onClick={() => !showResult && togglePest(pest)}
                      disabled={showResult}
                      className={`px-4 py-3 rounded-lg font-bold transition-all ${
                        selectedPests.includes(pest)
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground hover:bg-muted/80"
                      } ${showResult ? "opacity-70 cursor-not-allowed" : ""}`}
                    >
                      {pestLabels[pest]}
                    </button>
                  ))}
                </div>
                <p className="text-muted-foreground text-sm mt-2">
                  הגנה מפני דורבנים או שועלים דורשת התאמות במערכת
                </p>
              </div>
            </div>

            {/* Submit Button */}
            {!showResult && (
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full btn-cta-glow py-4 rounded-xl text-xl font-black flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-6 h-6 animate-spin" />
                    <span>מחשב...</span>
                  </>
                ) : (
                  <span>קבל הערכת מחיר</span>
                )}
              </button>
            )}

            {/* Result */}
            {showResult && priceResult && (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                {/* Equipment Only Price */}
                <div className="bg-muted/50 rounded-xl p-6 text-center border border-border">
                  <div className="flex items-center justify-center gap-2 text-muted-foreground mb-2">
                    <span>ציוד בלבד (ללא התקנה)</span>
                  </div>
                  <p className="text-3xl md:text-4xl font-black text-foreground">
                    ₪{priceResult.equipmentMin.toLocaleString()} - ₪{priceResult.equipmentMax.toLocaleString()}
                  </p>
                </div>

                {/* With Installation Price */}
                <div className="bg-primary/10 rounded-xl p-6 text-center border-2 border-primary">
                  <div className="flex items-center justify-center gap-2 text-primary mb-2">
                    <Wrench className="w-5 h-5" />
                    <span className="font-bold">כולל התקנה מקצועית</span>
                  </div>
                  <p className="text-4xl md:text-5xl font-black text-primary text-glow">
                    ₪{priceResult.withInstallationMin.toLocaleString()} - ₪{priceResult.withInstallationMax.toLocaleString()}
                  </p>
                </div>

                {/* Accuracy Note */}
                <div className="flex items-start gap-2 text-muted-foreground text-sm">
                  <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <p>
                    לקבלת הצעת מחיר מדויקת יש למדוד את היקף החצר המדויק. התקשרו ונסייע במדידה!
                  </p>
                </div>

                {/* The Hook */}
                <div className="bg-primary/10 border-2 border-primary rounded-xl p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <AlertCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <p className="text-foreground font-semibold">
                      קיבלנו את הפרטים שלך! ניצור איתך קשר בהקדם.
                      <br />
                      <span className="text-primary">
                        רוצה לסגור עכשיו? התקשר לייעוץ חינם!
                      </span>
                    </p>
                  </div>

                  {/* Massive CTA */}
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

export default HomePriceCalculator;
