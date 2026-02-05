-- Add rating column to testimonials table for Review Schema
ALTER TABLE public.testimonials 
ADD COLUMN rating INTEGER DEFAULT 5 CHECK (rating >= 1 AND rating <= 5);

-- Update existing testimonials with default rating of 5
UPDATE public.testimonials SET rating = 5 WHERE rating IS NULL;