import { defineCollection, z } from 'astro:content';

const releasesCollection = defineCollection({
	type: 'content',
	// We define the schema with the RENAMED field
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		// RENAMED from heroImage to coverImage
		coverImage: z.string().optional(), 
		scriptUrl: z.string().optional(),
		scriptContent: z.string().optional(),
	}),
});

export const collections = {
  'releases': releasesCollection,
};

