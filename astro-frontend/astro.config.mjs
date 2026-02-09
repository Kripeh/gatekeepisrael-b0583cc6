import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://gatekeepisrael.com',
  output: 'static',
  integrations: [
    react(),
    tailwind(),
    sitemap({
      i18n: {
        defaultLocale: 'he',
        locales: { he: 'he' },
      },
    }),
  ],
  redirects: {
    '/wild-boar-electric-fence-protection': {
      status: 301,
      destination: '/blog/boar-history-israel',
    },
    '/blog/boar_history_israel': {
      status: 301,
      destination: '/blog/boar-history-israel',
    },
    '/blog/electrical_fence_technology': {
      status: 301,
      destination: '/blog/electrical-fence-technology',
    },
  },
  trailingSlash: 'never',
});
