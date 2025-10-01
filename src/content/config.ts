import { defineCollection, z } from 'astro:content';

const releasesCollection = defineCollection({
	type: 'content',
	
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		// THE FIX IS HERE: We changed image() back to z.string()
		// This tells Astro to treat the image path as a simple URL
		// and not try to optimize it, which fixes the error.
		heroImage: z.string().optional(), 
		scriptUrl: z.string().optional(),
	}),
});

export const collections = {
  'releases': releasesCollection,
};

