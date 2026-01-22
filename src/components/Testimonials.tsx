import { Quote, Phone, Loader2 } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

const PHONE_LINK = "tel:+972508585310";

const Testimonials = () => {
  const { data: testimonials, isLoading, error } = useQuery({
    queryKey: ['testimonials'],
    queryFn: async () => {
      // Fetch random testimonials using Supabase
      const { data, error } = await supabase
        .from('testimonials')
        .select('*')
        .eq('is_active', true);
      
      if (error) throw error;
      
      // Shuffle and take 3 random testimonials
      const shuffled = data?.sort(() => Math.random() - 0.5) || [];
      return shuffled.slice(0, 3);
    },
    staleTime: 0, // Always fetch fresh data for randomness
  });

  return (
    <section className="py-20 md:py-28 bg-secondary/20">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-4"
            style={{ textWrap: 'balance' }}
          >
            השטח שלהם{" "}
            <span className="text-primary text-glow">כבר מוגן</span>
          </h2>
          <p 
            className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto"
            style={{ textWrap: 'pretty' }}
          >
            חקלאים מכל הארץ בחרו בגייטקיפ – וזה מה שיש להם להגיד
          </p>
        </div>

        {/* Testimonials Grid */}
        {isLoading ? (
          <div className="flex justify-center items-center py-12">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
          </div>
        ) : error ? (
          <div className="text-center text-muted-foreground py-12">
            לא ניתן לטעון את הביקורות כרגע
          </div>
        ) : testimonials && testimonials.length > 0 ? (
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="card-forest rounded-2xl p-8 relative group hover:border-primary/50 transition-all duration-500"
              >
                {/* Quote Icon */}
                <div className="absolute -top-4 right-6 w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                  <Quote className="w-5 h-5 text-primary-foreground" />
                </div>

                {/* Quote */}
                <blockquote 
                  className="text-foreground text-lg leading-relaxed mb-6 mt-4"
                  style={{ textWrap: 'pretty' }}
                >
                  "{testimonial.content}"
                </blockquote>

                {/* Author */}
                <div className="border-t border-border pt-4">
                  <p className="font-bold text-foreground">{testimonial.reviewer_name}</p>
                  <p className="text-primary text-sm font-semibold">{testimonial.crop_type}</p>
                  <p className="text-muted-foreground text-sm">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center text-muted-foreground py-12">
            אין ביקורות להצגה
          </div>
        )}

        {/* CTA */}
        <div className="text-center mt-14">
          <p 
            className="text-muted-foreground text-lg mb-4"
            style={{ textWrap: 'pretty' }}
          >
            מוכן להגן על השטח שלך גם? דבר איתנו עוד היום
          </p>
          <a 
            href={PHONE_LINK} 
            className="btn-cta-glow inline-flex items-center gap-3 px-10 py-5 rounded-xl text-xl font-black pulse-urgent"
          >
            <Phone className="w-6 h-6 animate-bounce-subtle" />
            <span>התקשר עכשיו</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
