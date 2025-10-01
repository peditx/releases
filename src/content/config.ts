import { defineConfig } from 'astro/config';

// https://astro.build/config
// We are removing ALL integrations (mdx, sitemap) for this test.
export default defineConfig({
  site: 'https://codes.peditxos.ir',
  output: 'static',
});

