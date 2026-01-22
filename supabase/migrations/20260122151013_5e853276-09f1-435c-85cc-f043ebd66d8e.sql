-- Add explicit RESTRICTIVE policy to deny SELECT for anonymous users on leads table
-- This acts as an additional safety layer
CREATE POLICY "Deny anonymous SELECT on leads"
ON public.leads
AS RESTRICTIVE
FOR SELECT
TO anon
USING (false);