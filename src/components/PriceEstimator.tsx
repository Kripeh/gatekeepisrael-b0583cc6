import { useState } from "react";
import { Phone, Calculator, AlertCircle } from "lucide-react";

const PHONE_LINK = "tel:+972508585310";

type SoilType = "light" | "heavy" | "rocky";

const soilLabels: Record<SoilType, string> = {
  light: "אדמה קלה",
  heavy: "אדמה כבדה",
  rocky: "אדמה סלעית",
};

const soilMultipliers: Record<SoilType, number> = {
  light: 1,
  heavy: 1.2,
  rocky: 1.5,
};

const PriceEstimator = () => {
  const [perimeter, setPerimeter] = useState<number>(100);
  const [gates, setGates] = useState<number>(1);
  const [soilType, setSoilType] = useState<SoilType>("light");
  const [showResult, setShowResult] = useState(false);

  const calculatePrice = () => {
    const floorPrice = (perimeter * 12) + (gates * 1000);
    const ceilingPrice = Math.round(floorPrice * 1.15);
    
    return { minPrice: floorPrice, maxPrice: ceilingPrice };
  };

  const handleCalculate = () => {
    setShowResult(true);
  };

  const { minPrice, maxPrice } = calculatePrice();

  return (
    <section className="py-16 md:py-24 bg-secondary/30" id="calculator">
      <div className="container">
        <div className="max-w-2xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
              <Calculator className="w-5 h-5" />
              <span className="font-bold">מחשבון הצעת מחיר</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-foreground mb-3">
              גלה את טווח המחיר{" "}
              <span className="text-primary text-glow">תוך 30 שניות</span>
            </h2>
            <p className="text-muted-foreground">
              הזן את פרטי השטח וקבל הערכת מחיר מיידית
            </p>
          </div>

          {/* Calculator Card */}
          <div className="card-forest rounded-2xl p-6 md:p-8">
            {/* Inputs */}
            <div className="space-y-6 mb-8">
              {/* Perimeter */}
              <div>
                <label className="block text-foreground font-bold mb-2">
                  היקף חלקה (מטרים)
                </label>
                <input
                  type="number"
                  value={perimeter}
                  onChange={(e) => setPerimeter(Number(e.target.value))}
                  className="w-full input-forest rounded-lg px-4 py-3 text-lg font-semibold"
                  min={10}
                  max={10000}
                />
                <p className="text-muted-foreground text-sm mt-1">
                  אורך הגדר הכולל סביב השטח
                </p>
              </div>

              {/* Gates */}
              <div>
                <label className="block text-foreground font-bold mb-2">
                  כמות שערים
                </label>
                <input
                  type="number"
                  value={gates}
                  onChange={(e) => setGates(Number(e.target.value))}
                  className="w-full input-forest rounded-lg px-4 py-3 text-lg font-semibold"
                  min={0}
                  max={20}
                />
              </div>

              {/* Soil Type */}
              <div>
                <label className="block text-foreground font-bold mb-2">
                  סוג אדמה
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {(Object.keys(soilLabels) as SoilType[]).map((type) => (
                    <button
                      key={type}
                      onClick={() => setSoilType(type)}
                      className={`px-4 py-3 rounded-lg font-bold transition-all ${
                        soilType === type
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground hover:bg-muted/80"
                      }`}
                    >
                      {soilLabels[type]}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Calculate Button */}
            {!showResult && (
              <button
                onClick={handleCalculate}
                className="w-full btn-cta-glow py-4 rounded-xl text-xl font-black"
              >
                חשב הצעת מחיר
              </button>
            )}

            {/* Result */}
            {showResult && (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                {/* Price Range */}
                <div className="bg-muted/50 rounded-xl p-6 text-center border border-primary/30">
                  <p className="text-muted-foreground mb-2">טווח מחיר משוער:</p>
                  <p className="text-4xl md:text-5xl font-black text-primary text-glow">
                    ₪{minPrice.toLocaleString()} - ₪{maxPrice.toLocaleString()}
                  </p>
                </div>

                {/* The Hook */}
                <div className="bg-primary/10 border-2 border-primary rounded-xl p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <AlertCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <p className="text-foreground font-semibold">
                      המחיר הסופי תלוי בתנאי השטח: שיפוע, מכשולים, גישה לחשמל ועוד.
                      <br />
                      <span className="text-primary">
                        התקשר עכשיו לקבלת הצעת מחיר מדויקת וסופית בטלפון!
                      </span>
                    </p>
                  </div>

                  {/* Massive CTA */}
                  <a
                    href={PHONE_LINK}
                    className="btn-cta-glow w-full flex items-center justify-center gap-3 py-5 rounded-xl text-xl font-black pulse-urgent"
                  >
                    <Phone className="w-6 h-6 animate-bounce-subtle" />
                    <span>קבל הצעה סופית עכשיו</span>
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
