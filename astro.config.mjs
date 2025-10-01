// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	// THE FINAL FIX IS HERE:
	// We are setting the correct URL for your site.
	// This allows Astro's build process to correctly resolve all file paths.
	site: 'https://codes.peditxos.ir',
	integrations: [mdx(), sitemap()],
});
