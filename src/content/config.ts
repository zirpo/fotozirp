import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		date: z.date(),
		image: z.string(), // The Cloudflare R2 URL
		camera: z.string().optional(),
		lens: z.string().optional(),
		iso: z.number().optional(),
		aperture: z.string().optional(),
		shutter: z.string().optional(),
	}),
});

export const collections = { posts };
