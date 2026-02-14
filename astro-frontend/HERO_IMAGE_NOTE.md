# Hero Image Setup

## ⚠️ Action Required (Placeholder Currently Active)

**Currently using:** `about-vineyard.jpg` as a temporary placeholder

## ⚠️ Replace with Your Hero Image

The hero image path has been updated to use a local file: `/images/hero-bg.jpg`

### What You Need to Do:

1. **Save your hero image** (the one you uploaded) to:
   ```
   /home/user/gatekeepisrael-b0583cc6/astro-frontend/public/images/hero-bg.jpg
   ```

2. The image should be the one currently at:
   ```
   https://sqxmgqqtcgkjztpvhzzr.supabase.co/storage/v1/object/public/images/heroImageNew2
   ```

### Benefits:

✅ **75% smaller file size** (Astro will optimize to AVIF/WebP)
✅ **Faster load time** (no external request)
✅ **Better SEO** (faster LCP)
✅ **No Supabase dependency** for the hero image

### Auto-Optimization:

Astro's `<OptimizedImage>` component will automatically:
- Generate AVIF format (~150KB)
- Generate WebP format (~250KB)
- Generate fallback JPG (~400KB)
- Create responsive sizes
- Serve the best format for each browser

Once you save the image, the optimization will happen automatically during build!
