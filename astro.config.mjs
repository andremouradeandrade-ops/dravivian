import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Troque pelo domínio definitivo quando ele existir.
export default defineConfig({
  site: 'https://dravivian.vercel.app',
  integrations: [sitemap()],
});
