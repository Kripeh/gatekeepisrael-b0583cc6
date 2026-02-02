-- Add lead_type column to distinguish between agricultural and residential leads
ALTER TABLE public.leads 
ADD COLUMN lead_type TEXT DEFAULT 'agricultural' NOT NULL;

-- Add check constraint for valid lead types
ALTER TABLE public.leads
ADD CONSTRAINT leads_lead_type_check 
CHECK (lead_type IN ('agricultural', 'residential'));