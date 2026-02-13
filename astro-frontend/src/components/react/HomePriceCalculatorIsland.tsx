/**
 * React Island: Residential Price Calculator
 * Ported from src/components/home/HomePriceCalculator.tsx for use in Astro with client:visible
 */
import { useState, useEffect } from 'react';
import { supabase, logger } from './SupabaseProvider';

type PestType = 'boars' | 'porcupines' | 'rockBadgers';

const pestLabels: Record<PestType, string> = {
  boars: 'חזירים',
  porcupines: 'דורבנים',
  rockBadgers: 'שפני סלע',
};

type Step = 'calculate' | 'details' | 'success';
const WINTER_DISCOUNT = 1000;
const PROMO_END_DATE = '28/2/2025';
const PHONE_LINK = 'tel:+972508585310';

export default function HomePriceCalculatorIsland() {
  const [step, setStep] = useState<Step>('calculate');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [perimeter, setPerimeter] = useState<number>(100);
  const [gates, setGates] = useState<number>(1);
  const [selectedPests, setSelectedPests] = useState<PestType[]>(['boars']);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [priceResult, setPriceResult] = useState<{
    withInstallationMin: number; withInstallationMax: number;
    discountedInstallationMin: number; discountedInstallationMax: number;
  } | null>(null);

  const togglePest = (pest: PestType) => {
    setSelectedPests(prev => prev.includes(pest) ? prev.filter(p => p !== pest) : [...prev, pest]);
  };

  const calculatePrice = () => {
    const basePrice = 1300 + (perimeter * 5.5);
    const pestBonus = selectedPests.includes('porcupines') || selectedPests.includes('rockBadgers') ? 700 : 0;
    const gatesCost = gates * 800;
    const equipmentPrice = Math.round(basePrice + pestBonus + gatesCost);
    const installationPrice = equipmentPrice + 2000;
    return {
      withInstallationMin: Math.max(1, installationPrice - 1000),
      withInstallationMax: installationPrice + 1000,
      discountedInstallationMin: Math.max(1, installationPrice - 1000 - WINTER_DISCOUNT),
      discountedInstallationMax: Math.max(1, installationPrice + 1000 - WINTER_DISCOUNT),
    };
  };

  const validatePhone = (p: string) => /^0[0-9]{8,9}$/.test(p.replace(/[-\s]/g, ''));

  const handleCalculate = () => {
    if (perimeter < 10 || perimeter > 1000) { alert('היקף החצר צריך להיות בין 10 ל-1,000 מטרים'); return; }
    if (selectedPests.length === 0) { alert('נא לבחור לפחות סוג מזיק אחד'); return; }
    if (gates < 0 || gates > 20) { alert('כמות שערים צריכה להיות בין 0 ל-20'); return; }
    const prices = calculatePrice();
    setPriceResult(prices);
    const newSessionId = crypto.randomUUID();
    setSessionId(newSessionId);
    supabase.from('calculator_sessions').insert({
      id: newSessionId,
      perimeter, gates, pest_types: selectedPests,
      estimated_min_price: prices.withInstallationMin, estimated_max_price: prices.withInstallationMax,
      lead_type: 'residential',
    }).then(({ error }: { error: any }) => {
      if (error) logger.error('Session save error:', error);
    });
    setStep('details');
  };

  const handleSubmit = async () => {
    if (!name.trim()) { alert('נא להזין שם'); return; }
    if (!phone.trim() || !validatePhone(phone)) { alert('נא להזין מספר טלפון תקין'); return; }
    setIsSubmitting(true);
    const prices = priceResult || calculatePrice();
    try {
      const leadId = crypto.randomUUID();
      const { error } = await supabase.from('leads').insert({
        id: leadId,
        name: name.trim(), phone: phone.trim().replace(/[-\s]/g, ''),
        perimeter, gates, pest_types: selectedPests,
        estimated_min_price: prices.discountedInstallationMin, estimated_max_price: prices.discountedInstallationMax,
        lead_type: 'residential',
      });
      if (error) throw error;
      if (sessionId) {
        supabase.from('calculator_sessions').update({ converted_to_lead: true, lead_id: leadId }).eq('id', sessionId)
          .then(({ error: e }: { error: any }) => { if (e) logger.error('Session update error:', e); });
      }
      fetch(`https://sqxmgqqtcgkjztpvhzzr.supabase.co/functions/v1/notify-new-lead`, {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name.trim(), phone: phone.trim().replace(/[-\s]/g, ''), perimeter, gates, pestTypes: selectedPests, minPrice: prices.discountedInstallationMin, maxPrice: prices.discountedInstallationMax, leadType: 'residential', winterPromo: true }),
      }).catch(err => logger.error('Telegram failed:', err));
      setShowThankYou(true);
      setTimeout(() => {
        setShowThankYou(false);
        setStep('success');
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
      {step === 'calculate' && (
        <div className="space-y-6 animate-in fade-in duration-300">
          <div>
            <label className="block text-foreground font-bold mb-2">היקף החצר (מטרים)</label>
            <input type="text" inputMode="numeric" value={perimeter === 0 ? '' : perimeter.toString()}
              onFocus={e => e.target.select()}
              onChange={e => { const v = e.target.value.replace(/\D/g, '').replace(/^0+/, ''); setPerimeter(v === '' ? 0 : parseInt(v, 10)); }}
              className="w-full input-forest rounded-lg px-4 py-3 text-lg font-semibold" />
            <p className="text-muted-foreground text-sm mt-1">💡 טיפ: מדוד את אורך הגדר הכולל סביב החצר. לא בטוח? התקשר ונעזור!</p>
          </div>
          <div>
            <label className="block text-foreground font-bold mb-2">כמות שערים</label>
            <input type="text" inputMode="numeric" value={gates === 0 ? '' : gates.toString()}
              onFocus={e => e.target.select()}
              onChange={e => { const v = e.target.value.replace(/\D/g, '').replace(/^0+/, ''); setGates(v === '' ? 0 : parseInt(v, 10)); }}
              className="w-full input-forest rounded-lg px-4 py-3 text-lg font-semibold" />
          </div>
          <div>
            <label className="block text-foreground font-bold mb-2">מאיזה מזיק להתגונן? (ניתן לבחור כמה)</label>
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

      {step === 'details' && priceResult && (
        <div className="space-y-6 animate-in fade-in duration-500">
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

          <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl p-5 text-center border-2 border-primary relative overflow-hidden">
            <div className="absolute top-0 left-0 bg-primary text-primary-foreground px-3 py-1 text-xs font-bold rounded-br-lg">מבצע חורף</div>
            <p className="text-primary font-bold mb-2 mt-2">מחיר סופי כולל הכל</p>
            <p className="text-muted-foreground line-through text-lg mb-1">₪{priceResult.withInstallationMin.toLocaleString()} - ₪{priceResult.withInstallationMax.toLocaleString()}</p>
            <p className="text-4xl md:text-5xl font-black text-primary">₪{priceResult.discountedInstallationMin.toLocaleString()} - ₪{priceResult.discountedInstallationMax.toLocaleString()}</p>
            <p className="text-sm text-muted-foreground mt-3">חומרים + מערכת חשמלית + שערים + התקנה מקצועית</p>
            <div className="inline-flex items-center gap-1 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-bold mt-2">חוסכים ₪{WINTER_DISCOUNT.toLocaleString()}!</div>
          </div>
          <div className="bg-gradient-to-r from-primary/20 to-primary/10 border-2 border-primary/50 rounded-xl p-5">
            <h3 className="text-foreground font-black text-lg mb-1">🔥 מבצע חורף - חסכו ₪{WINTER_DISCOUNT.toLocaleString()}!</h3>
            <p className="text-muted-foreground text-sm mb-4">השאירו פרטים עכשיו וקבלו הנחה. <span className="text-primary font-semibold">המבצע בתוקף עד {PROMO_END_DATE}</span></p>
            <div className="space-y-4">
              <div><label className="block text-foreground font-bold mb-2">שם מלא</label><input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="הזן את שמך" className="w-full input-forest rounded-lg px-4 py-3 text-lg font-semibold" maxLength={100} /></div>
              <div><label className="block text-foreground font-bold mb-2">מספר טלפון</label><input type="tel" value={phone} onChange={e => setPhone(e.target.value)} placeholder="050-000-0000" className="w-full input-forest rounded-lg px-4 py-3 text-lg font-semibold" dir="ltr" /></div>
              <button onClick={handleSubmit} disabled={isSubmitting} className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground py-4 rounded-xl text-xl font-black flex items-center justify-center gap-2 transition-all shadow-lg shadow-primary/30">
                <span>{isSubmitting ? 'שולח...' : 'קבל את ההנחה!'}</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {step === 'success' && priceResult && (
        <div className="space-y-6 animate-in fade-in duration-500">
          <div className="text-center py-6">
            <h3 className="text-2xl font-black text-foreground mb-2">מעולה! קיבלנו את הפרטים</h3>
            <p className="text-muted-foreground">נציג יחזור אליך בהקדם עם הצעת מחיר מפורטת</p>
          </div>
          <div className="bg-muted/50 rounded-xl p-6 text-center border border-primary/30">
            <p className="text-4xl md:text-5xl font-black text-primary">₪{priceResult.discountedInstallationMin.toLocaleString()} - ₪{priceResult.discountedInstallationMax.toLocaleString()}</p>
          </div>
          <div className="text-center">
            <a href={PHONE_LINK} className="btn-cta-glow inline-flex items-center gap-3 px-10 py-5 rounded-xl text-xl font-black"><span>התקשר עכשיו</span></a>
          </div>
        </div>
      )}
    </div>
  );
}
