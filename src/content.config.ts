import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    techStack: z.array(z.string()),
    status: z.enum(['已开源', '开发中']),
    order: z.number(),
    github: z.string().optional(),
    demo: z.string().optional(),
    metrics: z.array(z.string()).optional(),
  }),
});

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().default(false),
    excerpt: z.string().optional(),
    externalUrl: z.string().optional(),
  }),
});

export const collections = { projects, blog };
