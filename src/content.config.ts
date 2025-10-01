import { defineCollection, z } from 'astro:content';

// 1. We define a new collection called "releases"
const releasesCollection = defineCollection({
	type: 'content', // It contains markdown files
	
    // 2. We define the schema to match the fields in your Decap CMS config.yml
	schema: ({ image }) => z.object({
		title: z.string(),
		description: z.string(),
		// This transforms the date string from the markdown file into a proper Date object
		pubDate: z.coerce.date(),
		// This tells Astro to expect an image path and helps optimize it
		heroImage: image().optional(), 
		scriptUrl: z.string().optional(),
	}),
});

// 3. We export the "releases" collection so the rest of your site can use it.
export const collections = {
  'releases': releasesCollection,
};

