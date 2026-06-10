import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const services = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/services' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    subheadline: z.string(),
    navLabel: z.string(),
    geoLinkLabel: z.string(),
    keywords: z.array(z.string()),
    category: z.string(),
    featuredImage: z.string().optional(),
    brands: z.array(z.string()).default([]),
    acceptedConditions: z.array(z.string()).default([]),
    rejectedConditions: z.array(z.string()).default([]),
    faqs: z
      .array(
        z.object({
          question: z.string(),
          answer: z.string(),
        }),
      )
      .optional(),
    order: z.number().default(99),
    slug: z.string(),
    tier: z.enum(['main', 'brand']).default('main'),
    parentSlug: z.string().optional(),
    parentLabel: z.string().optional(),
  }),
});

const updates = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/updates' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    image: z.string().optional(),
    relatedServiceSlug: z.string().optional(),
    relatedServiceLabel: z.string().optional(),
    relatedAreaSlug: z.string().optional(),
    relatedAreaLabel: z.string().optional(),
    slug: z.string(),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    image: z.string().optional(),
    keywords: z.array(z.string()).default([]),
    slug: z.string(),
  }),
});

export const collections = { services, updates, blog };
