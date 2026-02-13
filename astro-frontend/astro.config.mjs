import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://gatekeepisrael.com',
  output: 'static',
  integrations: [
    react(),
    tailwind({
      config: { applyBaseStyles: false }
    }),
    sitemap({
      i18n: {
        defaultLocale: 'he',
        locales: { he: 'he' },
      },
    }),
  ],
  build: {
    inlineStylesheets: 'auto',
  },
  vite: {
    build: {
      cssCodeSplit: true,
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
        },
      },
      rollupOptions: {
        output: {
          manualChunks: (id) => {
            if (id.includes('node_modules')) {
              if (id.includes('react') || id.includes('react-dom')) {
                return 'react-vendor';
              }
              if (id.includes('lucide-react')) {
                return 'icons';
              }
              return 'vendor';
            }
          },
        },
      },
    },
  },
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
