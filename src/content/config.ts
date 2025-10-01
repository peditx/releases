import { defineCollection, z } from 'astro:content';

const releasesCollection = defineCollection({
	type: 'content',
	
	// --- THE FINAL, DEFINITIVE FIX IS HERE ---
	// We are explicitly telling Astro to treat the image path as a simple string.
	// This completely disables Astro's image processing, which is causing all the crashes.
	// The site will still display the image correctly because we are using standard <img> tags.
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		heroImage: z.string().optional(), 
		scriptUrl: z.string().optional(),
		scriptContent: z.string().optional(), // Added scriptContent to the schema
	}),
});

export const collections = {
  'releases': releasesCollection,
};

