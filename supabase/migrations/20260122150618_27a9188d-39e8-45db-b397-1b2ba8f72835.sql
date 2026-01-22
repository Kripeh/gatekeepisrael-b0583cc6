-- Create leads table for storing contact form submissions
CREATE TABLE public.leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  phone text NOT NULL,
  perimeter integer NOT NULL,
  gates integer NOT NULL,
  pest_types text[] NOT NULL DEFAULT '{}',
  estimated_min_price integer NOT NULL,
  estimated_max_price integer NOT NULL,
  created_at timestamp with time zone NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert leads (public form)
CREATE POLICY "Anyone can submit leads"
ON public.leads
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Only admins can view leads
CREATE POLICY "Only admins can view leads"
ON public.leads
FOR SELECT
TO authenticated
USING (has_role(auth.uid(), 'admin'::app_role));

-- Only admins can update leads
CREATE POLICY "Only admins can update leads"
ON public.leads
FOR UPDATE
TO authenticated
USING (has_role(auth.uid(), 'admin'::app_role))
WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

-- Only admins can delete leads
CREATE POLICY "Only admins can delete leads"
ON public.leads
FOR DELETE
TO authenticated
USING (has_role(auth.uid(), 'admin'::app_role));