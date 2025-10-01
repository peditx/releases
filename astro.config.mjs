import { defineCollection, z } from 'astro:content';

const releasesCollection = defineCollection({
	type: 'content',
	// We are simplifying the schema to the absolute minimum for this test.
	schema: z.object({
		title: z.string(),
	}),
});

export const collections = {
  'releases': releasesCollection,
};

