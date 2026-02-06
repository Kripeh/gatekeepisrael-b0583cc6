-- Create calculator_sessions table to track all calculations
CREATE TABLE public.calculator_sessions (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at timestamp with time zone NOT NULL DEFAULT now(),
    
    -- Fence parameters
    perimeter integer NOT NULL,
    gates integer NOT NULL DEFAULT 0,
    pest_types text[] NOT NULL DEFAULT '{}',
    
    -- Calculated prices (before discount)
    estimated_min_price integer NOT NULL,
    estimated_max_price integer NOT NULL,
    
    -- Lead type
    lead_type text NOT NULL DEFAULT 'agricultural',
    
    -- Conversion tracking
    converted_to_lead boolean NOT NULL DEFAULT false,
    lead_id uuid REFERENCES public.leads(id) ON DELETE SET NULL
);

-- Enable RLS
ALTER TABLE public.calculator_sessions ENABLE ROW LEVEL SECURITY;

-- Anyone can insert a session (anonymous users calculating prices)
CREATE POLICY "Anyone can insert calculator sessions"
ON public.calculator_sessions
FOR INSERT
WITH CHECK (true);

-- Anyone can update their own session to mark conversion (using session id)
CREATE POLICY "Anyone can update calculator sessions"
ON public.calculator_sessions
FOR UPDATE
USING (true)
WITH CHECK (true);

-- Only admins can view sessions (for analytics)
CREATE POLICY "Only admins can view calculator sessions"
ON public.calculator_sessions
FOR SELECT
USING (has_role(auth.uid(), 'admin'::app_role));

-- Only admins can delete sessions
CREATE POLICY "Only admins can delete calculator sessions"
ON public.calculator_sessions
FOR DELETE
USING (has_role(auth.uid(), 'admin'::app_role));

-- Add index for analytics queries
CREATE INDEX idx_calculator_sessions_converted ON public.calculator_sessions(converted_to_lead);
CREATE INDEX idx_calculator_sessions_lead_type ON public.calculator_sessions(lead_type);
CREATE INDEX idx_calculator_sessions_created_at ON public.calculator_sessions(created_at DESC);