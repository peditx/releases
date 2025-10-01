import { defineCollection, z } from 'astro:content';

const releasesCollection = defineCollection({
	type: 'content',
	
	// --- THE FINAL FIX IS HERE ---
	// We are changing image() back to z.string() one last time.
	// This will disable Astro's image processing, which is causing the memory crash.
	// The site will still display the image correctly.
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		heroImage: z.string().optional(), 
		scriptUrl: z.string().optional(),
	}),
});

export const collections = {
  'releases': releasesCollection,
};

