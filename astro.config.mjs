import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://alexmollard.github.io',
  integrations: [sitemap()],
});
