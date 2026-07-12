import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://adityabhau.com',
  integrations: [sitemap()],
  build: { inlineStylesheets: 'auto' },
});
