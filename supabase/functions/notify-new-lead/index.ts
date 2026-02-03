import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface LeadNotification {
  name: string;
  phone: string;
  perimeter: number;
  gates: number;
  pestTypes: string[];
  minPrice: number;
  maxPrice: number;
  leadType: 'residential' | 'agricultural';
}

const pestLabelsHebrew: Record<string, string> = {
  boars: "חזירים",
  deer: "איילות",
  porcupines: "דורבנים",
  foxes: "שועלים",
};

serve(async (req) => {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const TELEGRAM_BOT_TOKEN = Deno.env.get('TELEGRAM_BOT_TOKEN');
    const TELEGRAM_CHAT_ID = Deno.env.get('TELEGRAM_CHAT_ID');

    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
      console.error('Missing Telegram credentials');
      return new Response(
        JSON.stringify({ error: 'Missing Telegram credentials' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const lead: LeadNotification = await req.json();
    
    // Format phone for tel: link (convert 05X to +9725X)
    const formattedPhone = lead.phone.startsWith('0') 
      ? '+972' + lead.phone.slice(1) 
      : lead.phone;
    
    // Translate pest types to Hebrew
    const pestsHebrew = lead.pestTypes
      .map(p => pestLabelsHebrew[p] || p)
      .join(', ');
    
    // Build the message
    const leadTypeEmoji = lead.leadType === 'residential' ? '🏠' : '🌾';
    const leadTypeLabel = lead.leadType === 'residential' ? 'ביתי' : 'חקלאי';
    
    const message = `🔔 *ליד חדש - ${leadTypeLabel}!* ${leadTypeEmoji}

👤 *שם:* ${lead.name}
📱 *טלפון:* ${lead.phone}

📏 *היקף:* ${lead.perimeter.toLocaleString()} מ'
🚪 *שערים:* ${lead.gates}
🐗 *מזיקים:* ${pestsHebrew}

💰 *הערכת מחיר:* ₪${lead.minPrice.toLocaleString()} - ₪${lead.maxPrice.toLocaleString()}

📞 [להתקשר](tel:${formattedPhone})`;

    // Send to Telegram
    const telegramUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
    
    const telegramResponse = await fetch(telegramUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
        parse_mode: 'Markdown',
      }),
    });

    const telegramResult = await telegramResponse.json();
    
    if (!telegramResponse.ok) {
      console.error('Telegram API error:', telegramResult);
      return new Response(
        JSON.stringify({ error: 'Failed to send Telegram notification', details: telegramResult }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({ success: true }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
    
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error('Error in notify-new-lead:', error);
    return new Response(
      JSON.stringify({ error: errorMessage }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
