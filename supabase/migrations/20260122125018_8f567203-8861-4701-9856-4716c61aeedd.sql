-- Create the images bucket with public access
INSERT INTO storage.buckets (id, name, public)
VALUES ('images', 'images', true);

-- Allow anyone to view images (public read)
CREATE POLICY "Public read access for images"
ON storage.objects FOR SELECT
USING (bucket_id = 'images');

-- Allow authenticated admins to upload images
CREATE POLICY "Admin upload access for images"
ON storage.objects FOR INSERT
WITH CHECK (
  bucket_id = 'images' 
  AND public.has_role(auth.uid(), 'admin')
);

-- Allow authenticated admins to update images
CREATE POLICY "Admin update access for images"
ON storage.objects FOR UPDATE
USING (
  bucket_id = 'images' 
  AND public.has_role(auth.uid(), 'admin')
);

-- Allow authenticated admins to delete images
CREATE POLICY "Admin delete access for images"
ON storage.objects FOR DELETE
USING (
  bucket_id = 'images' 
  AND public.has_role(auth.uid(), 'admin')
);