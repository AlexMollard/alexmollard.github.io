<h1 align="center">alexmollard.github.io</h1>
<p align="center">Modern Astro site – fast, accessible, content‑first, with dark/light theme, RSS & sitemap.</p>

## ✨ Features

- Astro 4 + typed content collections
- Global stylesheet + CSS variables + adaptive typography
- Dark / Light theme toggle (localStorage persisted)
- Zero-JS pages by default (only ~1 KB for theme island)
- RSS feed (`/rss.xml`) & automatic sitemap (`/sitemap-index.xml`)
- Open Graph & basic SEO meta tags
- Syntax highlighting (Shiki via Astro markdown config)
- GitHub Pages CI deploy

## 📁 Structure

```
package.json                 # Node scripts & deps
astro.config.mjs             # Astro config + integrations (sitemap)
tsconfig.json                # TypeScript strict config
public/                      # Static assets (favicons, manifest)
src/consts.ts                # Site constants
src/styles/global.css        # Global styles & themes
src/components/              # Header, Footer, ThemeToggle
src/layouts/                 # Base, Page, Post layouts
src/pages/                   # Routes (/, /about, /projects, /blog, /tags, /categories, /404)
src/content/blog/            # Blog markdown posts
src/data/pinned.json         # Project metadata
.github/workflows/deploy.yml # CI build & deploy
```

## 🧪 Local Development

Prereqs: Node.js 20+

```powershell
npm install
npm run dev
```

Open http://localhost:4321

## ✍️ Creating a Post

Create `src/content/blog/YYYY-MM-DD-slug.md`:

```markdown
---
title: Focus Beats Complexity
description: Short teaser sentence.
pubDate: 2025-08-21
tags: [focus]
categories: [engineering]
draft: false
---

Markdown body here.
```

The front matter is schema‑validated; invalid keys or wrong types will surface in build output.

## 🚀 Deployment

Push to `master`. GitHub Actions builds & uploads `dist/` as a Pages artifact, then publishes.

Ensure Pages is configured to use GitHub Actions in repo settings.

## 🔧 Customization

- Adjust design tokens in `src/styles/global.css` (`--color-*`, spacing, fonts).
- Add MDX support by installing `@astrojs/mdx` and updating `astro.config.mjs`.
- Add more islands (React/Vue/Svelte) only where interactivity is required.
- Place static assets (images, icons) into `public/` for root-relative serving.

## 📄 License

Content © Alex Mollard. Layout/components MIT unless noted.

