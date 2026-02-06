/**
 * React Island: Dynamic Testimonials
 * Fetches random active testimonials from Supabase
 */
import { useState, useEffect } from 'react';
import { supabase, logger } from './SupabaseProvider';

interface Testimonial {
  id: string;
  content: string;
  reviewer_name: string;
  crop_type: string;
  location: string;
}

export default function TestimonialsIsland() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const { data, error } = await supabase
          .from('testimonials')
          .select('*')
          .eq('is_active', true);
        if (error) throw error;
        const shuffled = (data || []).sort(() => Math.random() - 0.5);
        setTestimonials(shuffled.slice(0, 3));
      } catch (err) {
        logger.error('Failed to fetch testimonials:', err);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchTestimonials();
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (error) {
    return <div className="text-center text-muted-foreground py-12">לא ניתן לטעון את הביקורות כרגע</div>;
  }

  if (testimonials.length === 0) {
    return <div className="text-center text-muted-foreground py-12">אין ביקורות להצגה</div>;
  }

  return (
    <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
      {testimonials.map((t) => (
        <div key={t.id} className="card-forest rounded-2xl p-8 relative group hover:border-primary/50 transition-all duration-500">
          <div className="absolute -top-4 right-6 w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-foreground"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/></svg>
          </div>
          <blockquote className="text-foreground text-lg leading-relaxed mb-6 mt-4" style={{ textWrap: 'pretty' as any }}>
            "{t.content}"
          </blockquote>
          <div className="border-t border-border pt-4">
            <p className="font-bold text-foreground">{t.reviewer_name}</p>
            <p className="text-primary text-sm font-semibold">{t.crop_type}</p>
            <p className="text-muted-foreground text-sm">{t.location}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
