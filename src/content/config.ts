import { defineCollection, z } from 'astro:content';

const releasesCollection = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    pubDate: z
      .string()
      .or(z.date())
      .transform((val) => new Date(val)),
    heroImage: z.string(),
    scriptUrl: z.string().url(),
  }),
});

export const collections = { 'releases': releasesCollection };
