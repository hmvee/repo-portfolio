import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://hmvee.github.io',
  base: '/repo-portfolio',
  integrations: [sitemap()],
  compressHTML: true,
});
