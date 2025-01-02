import { defineCollection, z } from 'astro:content';

const infoCollection = defineCollection({
  schema: z.object({
    id: z.string(),
    title: z.string(),
    description: z.string(),
    date: z.string().transform((str) => new Date(str)),
    tags: z.array(z.string()),
  }),
});

export const collections = {
  info: infoCollection,
};
