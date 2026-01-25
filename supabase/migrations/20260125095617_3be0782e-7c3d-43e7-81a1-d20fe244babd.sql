-- Add explicit RESTRICTIVE policy to prevent non-admin users from INSERT on user_roles
-- This prevents privilege escalation by ensuring only admins can add new roles
CREATE POLICY "Non-admins cannot insert roles"
ON public.user_roles
AS RESTRICTIVE
FOR INSERT
TO authenticated
WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

-- Add explicit RESTRICTIVE policy to prevent non-admin users from UPDATE on user_roles
-- This prevents privilege escalation by ensuring only admins can modify roles
CREATE POLICY "Non-admins cannot update roles"
ON public.user_roles
AS RESTRICTIVE
FOR UPDATE
TO authenticated
USING (has_role(auth.uid(), 'admin'::app_role))
WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

-- Add explicit RESTRICTIVE policy to prevent non-admin users from DELETE on user_roles
-- This ensures only admins can remove roles
CREATE POLICY "Non-admins cannot delete roles"
ON public.user_roles
AS RESTRICTIVE
FOR DELETE
TO authenticated
USING (has_role(auth.uid(), 'admin'::app_role));