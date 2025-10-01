import { defineCollection, z } from 'astro:content';

const releasesCollection = defineCollection({
	type: 'content',
	
	// --- THE FIX IS HERE ---
	// We are going back to using the image() helper because images are now in src/assets.
	// This tells Astro to correctly process and optimize the images.
	schema: ({ image }) => z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		heroImage: image().optional(), 
		scriptUrl: z.string().optional(),
	}),
});

export const collections = {
  'releases': releasesCollection,
};

