-- Add server-side validation constraints to the leads table
-- This ensures data integrity even if client-side validation is bypassed

-- Name must be between 1 and 100 characters
ALTER TABLE public.leads 
ADD CONSTRAINT leads_name_length 
CHECK (char_length(trim(name)) >= 1 AND char_length(name) <= 100);

-- Phone must match Israeli phone format (starts with 0, followed by 8-9 digits)
ALTER TABLE public.leads 
ADD CONSTRAINT leads_phone_format 
CHECK (phone ~ '^0[0-9]{8,9}$');

-- Perimeter must be between 10 and 10000 meters
ALTER TABLE public.leads 
ADD CONSTRAINT leads_perimeter_range 
CHECK (perimeter >= 10 AND perimeter <= 10000);

-- Gates must be between 0 and 20
ALTER TABLE public.leads 
ADD CONSTRAINT leads_gates_range 
CHECK (gates >= 0 AND gates <= 20);

-- Pest types must not be empty and contain valid values
ALTER TABLE public.leads 
ADD CONSTRAINT leads_pest_types_valid 
CHECK (array_length(pest_types, 1) >= 1);

-- Estimated prices must be positive
ALTER TABLE public.leads 
ADD CONSTRAINT leads_prices_positive 
CHECK (estimated_min_price > 0 AND estimated_max_price > 0 AND estimated_max_price >= estimated_min_price);