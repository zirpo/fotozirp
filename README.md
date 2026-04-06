# Zirpography

A minimalist photography portfolio built with [Astro](https://astro.build) and Tailwind CSS v4.

## Features

- Masonry grid gallery with grayscale images
- Lightbox detail view with prev/next navigation and keyboard support
- Randomized image order on each page load
- Photography metadata display (camera, lens, settings)
- Responsive design with Noto Serif + Inter typography
- SEO-friendly with Open Graph, sitemap, and RSS feed

## Commands

| Command           | Action                                      |
| :---------------- | :------------------------------------------ |
| `npm install`     | Install dependencies                        |
| `npm run dev`     | Start local dev server at `localhost:4321`   |
| `npm run build`   | Build production site to `./dist/`           |
| `npm run preview` | Preview production build locally             |

## Adding Photos

Create a Markdown file in `src/content/posts/` with this frontmatter:

```md
---
title: "Photo Title"
date: 2026-04-06
image: "https://your-cdn.com/photo.webp"
camera: "X-T4"
lens: "XF27mmF2.8 R WR"
iso: 1600
aperture: "f/2.8"
shutter: "1/60"
---
```

All metadata fields except `title`, `date`, and `image` are optional.
