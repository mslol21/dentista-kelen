import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://drakelenodonto.com.br',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/contato/confirmacao') && !page.includes('/404')
    })
  ],
  compressHTML: true,
  build: {
    format: 'directory'
  }
});
