-- Remove the conflicting policy that denies all SELECT access
DROP POLICY IF EXISTS "Deny anonymous SELECT on leads" ON public.leads;