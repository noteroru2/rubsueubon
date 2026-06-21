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
    quickAnswer: z
      .object({
        question: z.string(),
        answer: z.string(),
      })
      .optional(),
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

const areas = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/areas' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    slug: z.string(),
    category: z.string(),
    areaName: z.string(),
    areaServed: z.string(),
    heroTitle: z.string(),
    heroSubtitle: z.string(),
    ctaText: z.string(),
    keywords: z.array(z.string()).default([]),
    quickAnswer: z
      .object({
        question: z.string(),
        answer: z.string(),
      })
      .optional(),
    faqs: z
      .array(
        z.object({
          question: z.string(),
          answer: z.string(),
        }),
      )
      .optional(),
    relatedServices: z
      .array(
        z.object({
          label: z.string(),
          href: z.string(),
        }),
      )
      .optional(),
  }),
});

const examples = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/examples' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    slug: z.string(),
    caseType: z.literal('example'),
    proofStatus: z.literal('example_only'),
    disclaimer: z.string(),
    keywords: z.array(z.string()).default([]),
  }),
});

const cameraModels = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/camera-models' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    slug: z.string(),
    category: z.literal('camera-model'),
    brand: z.string().default('Sony'),
    modelName: z.string(),
    productType: z.string().default('กล้อง Mirrorless'),
    serviceType: z.string().default('รับซื้อกล้องมือสอง'),
    areaServed: z.string().default('อุบลราชธานี'),
    isModelPage: z.boolean().default(true),
    ctaText: z.string().default('ส่งรูปประเมินราคาทาง LINE'),
    faqs: z
      .array(
        z.object({
          question: z.string(),
          answer: z.string(),
        }),
      )
      .optional(),
    quickAnswer: z
      .object({
        question: z.string(),
        answer: z.string(),
      })
      .optional(),
    acceptedConditions: z.array(z.string()).optional(),
    rejectedConditions: z.array(z.string()).optional(),
  }),
});

const modelServices = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/model-services' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    slug: z.string(),
    category: z.literal('model-service'),
    brand: z.string(),
    modelName: z.string(),
    productType: z.string(),
    serviceType: z.string(),
    areaServed: z.string().default('อุบลราชธานี'),
    parentService: z.string(),
    isModelPage: z.boolean().default(true),
    ctaText: z.string().default('ส่งรูปประเมินราคาทาง LINE'),
    faqs: z
      .array(
        z.object({
          question: z.string(),
          answer: z.string(),
        }),
      )
      .optional(),
    quickAnswer: z
      .object({
        question: z.string(),
        answer: z.string(),
      })
      .optional(),
    acceptedConditions: z.array(z.string()).optional(),
    rejectedConditions: z.array(z.string()).optional(),
  }),
});

export const collections = { services, updates, blog, areas, examples, cameraModels, modelServices };
