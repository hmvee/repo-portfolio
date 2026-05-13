import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    type: z.enum(['Web Application', 'Design', 'Writing', 'Open Source', 'Side Project', 'Client Work']),
    tech: z.array(z.string()),
    year: z.number(),
    featured: z.boolean().optional().default(false),
    url: z.string().url().optional(),
    // Hex color for the project card visual block
    color: z.string().optional().default('#2D4A6B'),
    // Text color for the title overlay on the color block (light or dark)
    colorText: z.enum(['light', 'dark']).optional().default('light'),
  }),
});

export const collections = { projects };
