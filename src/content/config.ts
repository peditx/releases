import { defineCollection, z } from 'astro:content';

// Define the schema for our "releases" collection to match the fields in config.yml
const releasesCollection = defineCollection({
	type: 'content', // This specifies that the collection contains markdown/mdx files
	
    // This schema validates the frontmatter of each markdown file
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// z.coerce will transform the date string from your markdown into a JavaScript Date object
		pubDate: z.coerce.date(),
		heroImage: z.string().optional(), // The path to the image is a string. .optional() means it's not required.
		scriptUrl: z.string().optional(), // The script URL is also a string and is optional.
	}),
});

// Export a `collections` object containing all our defined collections
export const collections = {
  'releases': releasesCollection,
};
