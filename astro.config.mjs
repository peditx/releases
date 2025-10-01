import { defineConfig } from 'astro/config';

// https://astro.build/config
// This version is clean and does NOT import 'astro:content', which fixes the build error.
export default defineConfig({
  site: 'https://codes.peditxos.ir',
  output: 'static',
});

