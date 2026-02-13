/**
 * React Island: Agricultural Price Calculator
 * Ported from src/components/PriceEstimator.tsx for use in Astro with client:visible
 */
import { useState, useEffect } from 'react';
import { supabase, logger } from './SupabaseProvider';

type PestType = 'boars' | 'deer' | 'porcupines';

const pestLabels: Record<PestType, string> = {
  boars: 'חזירים',
  deer: 'צביים',
  porcupines: 'דורבנים',
};

const WINTER_PROMO_DISCOUNT = 1000;
const WINTER_PROMO_END_DATE = '28/2/2025';
const PHONE_LINK = 'tel:+972508585310';

export default function PriceEstimatorIsland() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [perimeter, setPerimeter] = useState<number>(100);
  const [gates, setGates] = useState<number>(1);
  const [selectedPests, setSelectedPests] = useState<PestType[]>(['boars']);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [priceResult, setPriceResult] = useState<{
    originalMin: number; originalMax: number;
    discountedMin: number; discountedMax: number;
  } | null>(null);

  const togglePest = (pest: PestType) => {
    setSelectedPests(prev => prev.includes(pest) ? prev.filter(p => p !== pest) : [...prev, pest]);
  };

  const calculatePrice = () => {
    const basePrice = (perimeter * 12) + (gates * 1000);
    const deerMultiplier = selectedPests.includes('deer') ? 1.4 : 1;
    const floorPrice = Math.round(basePrice * deerMultiplier);
    const ceilingPrice = Math.round(floorPrice * 1.15);
    return {
      originalMin: floorPrice, originalMax: ceilingPrice,
      discountedMin: Math.max(1, floorPrice - WINTER_PROMO_DISCOUNT),
      discountedMax: Math.max(1, ceilingPrice - WINTER_PROMO_DISCOUNT),
    };
  };

  const validatePhone = (p: string) => /^0[0-9]{8,9}$/.test(p.replace(/[-\s]/g, ''));

  const handleCalculate = () => {
    if (perimeter < 10 || perimeter > 10000) { alert('היקף החלקה צריך להיות בין 10 ל-10,000 מטרים'); return; }
    if (selectedPests.length === 0) { alert('נא לבחור לפחות סוג מזיק אחד'); return; }
    if (gates < 0 || gates > 20) { alert('כמות שערים צריכה להיות בין 0 ל-20'); return; }
    const prices = calculatePrice();
    const newSessionId = crypto.randomUUID();
    setSessionId(newSessionId);
    supabase.from('calculator_sessions').insert({
      id: newSessionId,
      perimeter, gates, pest_types: selectedPests,
      estimated_min_price: prices.originalMin, estimated_max_price: prices.originalMax,
      lead_type: 'agricultural',
    }).then(({ error }: { error: any }) => {
      if (error) logger.error('Session save error:', error);
    });
    setPriceResult(prices);
    setStep(2);
  };

  const handleSubmitLead = async () => {
    if (!name.trim()) { alert('נא להזין שם'); return; }
    if (!phone.trim() || !validatePhone(phone)) { alert('נא להזין מספר טלפון תקין'); return; }
    if (!priceResult) return;
    setIsSubmitting(true);
    try {
      const leadId = crypto.randomUUID();
      const { error } = await supabase.from('leads').insert({
        id: leadId,
        name: name.trim(), phone: phone.trim().replace(/[-\s]/g, ''),
        perimeter, gates, pest_types: selectedPests,
        estimated_min_price: priceResult.discountedMin, estimated_max_price: priceResult.discountedMax,
        lead_type: 'agricultural',
      });
      if (error) throw error;
      if (sessionId) {
        supabase.from('calculator_sessions').update({ converted_to_lead: true, lead_id: leadId }).eq('id', sessionId)
          .then(({ error: e }: { error: any }) => { if (e) logger.error('Session update error:', e); });
      }
      fetch(`https://sqxmgqqtcgkjztpvhzzr.supabase.co/functions/v1/notify-new-lead`, {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name.trim(), phone: phone.trim().replace(/[-\s]/g, ''), perimeter, gates, pestTypes: selectedPests, minPrice: priceResult.discountedMin, maxPrice: priceResult.discountedMax, leadType: 'agricultural', winterPromo: true }),
      }).catch(err => logger.error('Telegram failed:', err));
      setShowThankYou(true);
      setTimeout(() => {
        setShowThankYou(false);
        setStep(3);
      }, 4000);
    } catch (error) {
      logger.error('Lead submit error:', error);
      alert('שגיאה בשליחת הפרטים. נסה שוב.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-6 relative">
      {/* Thank You Popup */}
      {showThankYou && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 animate-in fade-in duration-300" style={{ direction: 'rtl' }}>
          <div className="bg-card rounded-2xl p-8 md:p-10 max-w-md mx-4 text-center border-2 border-primary/30 animate-in zoom-in-95 duration-300">
            <div className="text-5xl mb-4">✅</div>
            <h3 className="text-2xl font-black text-foreground mb-3">תודה רבה!</h3>
            <p className="text-lg text-muted-foreground mb-2">קיבלנו את הפרטים שלך בהצלחה.</p>
            <p className="text-foreground font-semibold">נציג שלנו יחזור אליך בהקדם האפשרי.</p>
          </div>
        </div>
      )}
      {step === 1 && (
        <div className="space-y-6 animate-in fade-in duration-300">
          <div>
            <label className="block text-foreground font-bold mb-2">היקף חלקה (מטרים)</label>
            <input type="text" inputMode="numeric" value={perimeter === 0 ? '' : perimeter.toString()}
              onFocus={e => e.target.select()}
              onChange={e => { const v = e.target.value.replace(/\D/g, '').replace(/^0+/, ''); setPerimeter(v === '' ? 0 : parseInt(v, 10)); }}
              className="w-full input-forest rounded-lg px-4 py-3 text-lg font-semibold" />
            <p className="text-muted-foreground text-sm mt-1">אורך הגדר הכולל סביב השטח</p>
          </div>
          <div>
            <label className="block text-foreground font-bold mb-2">כמות שערים</label>
            <input type="text" inputMode="numeric" value={gates === 0 ? '' : gates.toString()}
              onFocus={e => e.target.select()}
              onChange={e => { const v = e.target.value.replace(/\D/g, '').replace(/^0+/, ''); setGates(v === '' ? 0 : parseInt(v, 10)); }}
              className="w-full input-forest rounded-lg px-4 py-3 text-lg font-semibold" />
          </div>
          <div>
            <label className="block text-foreground font-bold mb-2">סוג מזיקים (ניתן לבחור כמה)</label>
            <div className="grid grid-cols-3 gap-3">
              {(Object.keys(pestLabels) as PestType[]).map(pest => (
                <button key={pest} onClick={() => togglePest(pest)}
                  className={`px-4 py-3 rounded-lg font-bold transition-all ${selectedPests.includes(pest) ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground hover:bg-muted/80'}`}>
                  {pestLabels[pest]}
                </button>
              ))}
            </div>
          </div>
          <button onClick={handleCalculate} className="w-full btn-cta-glow py-4 rounded-xl text-xl font-black flex items-center justify-center gap-2">
            <span>חשב מחיר</span>
          </button>
        </div>
      )}

      {step === 2 && priceResult && (
        <div className="space-y-6 animate-in fade-in duration-500">
          <button onClick={() => setStep(1)} className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <span>← חזור לעריכה</span>
          </button>

          {/* General Professional Disclaimer - Always shown */}
          <div className="bg-blue-500/10 border-r-4 border-blue-500 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500 flex-shrink-0 mt-0.5">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 16v-4"/>
                <path d="M12 8h.01"/>
              </svg>
              <div className="text-sm text-foreground">
                <span className="font-bold">💡 חשוב לדעת:</span> מחשבון זה מספק אומדן ראשוני בלבד. כל חלקה חקלאית ייחודית ומושפעת מגורמים שונים כגון סוג קרקע, טופוגרפיה, נגישות, וסוג המזיקים בשטח. לקבלת הצעת מחיר מדויקת ומקצועית, נדרש סקר שטח מפורט על ידי הצוות שלנו.
              </div>
            </div>
          </div>

          {perimeter < 1000 && (
            <div className="bg-amber-500/10 border-r-4 border-amber-500 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-500 flex-shrink-0 mt-0.5">
                  <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/>
                  <path d="M12 9v4"/>
                  <path d="M12 17h.01"/>
                </svg>
                <p className="text-sm text-foreground">
                  <span className="font-bold">שימו לב:</span> חישוב זה הוא אומדן ראשוני. לחלקות קטנות מ-1,000 מטר, נדרש סקר שטח מקצועי לקבלת הצעת מחיר מדויקת.
                </p>
              </div>
            </div>
          )}
          <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl p-5 text-center border-2 border-primary relative overflow-hidden">
            <div className="absolute top-0 left-0 bg-primary text-primary-foreground px-3 py-1 text-xs font-bold rounded-br-lg">מבצע חורף</div>
            <p className="text-primary font-bold mb-2 mt-2">מחיר סופי כולל הכל</p>
            <p className="text-muted-foreground line-through text-lg mb-1">₪{priceResult.originalMin.toLocaleString()} - ₪{priceResult.originalMax.toLocaleString()}</p>
            <p className="text-4xl md:text-5xl font-black text-primary">₪{priceResult.discountedMin.toLocaleString()} - ₪{priceResult.discountedMax.toLocaleString()}</p>
            <p className="text-sm text-muted-foreground mt-3">חומרים + מערכת חשמלית + שערים + התקנה מקצועית</p>
            <div className="inline-flex items-center gap-1 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-bold mt-2">חוסכים ₪{WINTER_PROMO_DISCOUNT.toLocaleString()}!</div>
          </div>
          <div className="bg-gradient-to-r from-primary/20 to-primary/10 border-2 border-primary/50 rounded-xl p-5">
            <h3 className="text-foreground font-black text-lg mb-1">🔥 מבצע חורף - חסכו ₪{WINTER_PROMO_DISCOUNT.toLocaleString()}!</h3>
            <p className="text-muted-foreground text-sm mb-4">השאירו פרטים עכשיו וקבלו הנחה. <span className="text-primary font-semibold">המבצע בתוקף עד {WINTER_PROMO_END_DATE}</span></p>
            <div className="space-y-4">
              <div><label className="block text-foreground font-bold mb-2">שם מלא</label><input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="הזן את שמך" className="w-full input-forest rounded-lg px-4 py-3 text-lg font-semibold" maxLength={100} /></div>
              <div><label className="block text-foreground font-bold mb-2">מספר טלפון</label><input type="tel" value={phone} onChange={e => setPhone(e.target.value)} placeholder="050-000-0000" className="w-full input-forest rounded-lg px-4 py-3 text-lg font-semibold" dir="ltr" /></div>
              <button onClick={handleSubmitLead} disabled={isSubmitting} className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground py-4 rounded-xl text-xl font-black flex items-center justify-center gap-2 transition-all shadow-lg shadow-primary/30">
                <span>{isSubmitting ? 'שולח...' : 'קבל את ההנחה!'}</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {step === 3 && priceResult && (
        <div className="space-y-6 animate-in fade-in duration-500">
          <div className="text-center py-6">
            <h3 className="text-2xl font-black text-foreground mb-2">מעולה! קיבלנו את הפרטים</h3>
            <p className="text-muted-foreground">נציג יחזור אליך בהקדם עם הצעת מחיר מפורטת</p>
          </div>
          <div className="bg-muted/50 rounded-xl p-6 text-center border border-primary/30">
            <p className="text-foreground font-bold mb-1">מחיר סופי כולל הכל:</p>
            <p className="text-4xl md:text-5xl font-black text-primary">₪{priceResult.discountedMin.toLocaleString()} - ₪{priceResult.discountedMax.toLocaleString()}</p>
          </div>
          <div className="text-center">
            <a href={PHONE_LINK} className="btn-cta-glow inline-flex items-center gap-3 px-10 py-5 rounded-xl text-xl font-black">
              <span>התקשר עכשיו</span>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
