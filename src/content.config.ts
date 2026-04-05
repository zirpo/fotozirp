import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
	// This loader tells Astro exactly where your Markdown files are!
	loader: glob({ pattern: "**/*.md", base: "./src/content/posts" }),
	schema: z.object({
		title: z.string(),
		date: z.coerce.date(),
		image: z.string(),
		camera: z.string().optional(),
		lens: z.string().optional(),
		iso: z.union([z.string(), z.number()]).optional(),
		aperture: z.string().optional(),
		shutter: z.string().optional(),
	}),
});

export const collections = { posts };
