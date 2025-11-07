import { defineCollection, z } from 'astro:content';

const books = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    publishDate: z.coerce.date(),
    coverImage: z.string(),
    description: z.string(),
    ageRange: z.string().optional(),
    isbn: z.string().optional(),
    publisher: z.string().optional(),
    purchaseLinks: z.array(z.object({
      retailer: z.string(),
      url: z.string(),
    })).optional(),
    featured: z.boolean().default(false),
    order: z.number().default(0),
  }),
});

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    publishDate: z.coerce.date(),
    author: z.string().default('Author Name'),
    image: z.string().optional(),
    description: z.string(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().default(false),
  }),
});

const events = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    eventDate: z.coerce.date(),
    endDate: z.coerce.date().optional(),
    location: z.string(),
    eventType: z.enum(['Book Signing', 'Reading', 'Workshop', 'Virtual Event', 'School Visit', 'Other']),
    description: z.string(),
    image: z.string().optional(),
    registrationLink: z.string().optional(),
  }),
});

const pages = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
  }),
});

export const collections = {
  books,
  blog,
  events,
  pages,
};
