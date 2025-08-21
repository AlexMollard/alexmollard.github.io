<h1 align="center">alexmollard.github.io</h1>
<p align="center">Astro-powered minimalist site – Markdown-first, zero unnecessary JS, deployed via GitHub Pages Actions.</p>

## ✨ Features

- Astro 4 + content collections (type-safe front matter)
- Zero JS shipped by default (islands only when needed)
- RSS feed (`/rss.xml`)
- GitHub Pages deployment via Actions (`deploy.yml`)
- Dark/light friendly palette, no trackers

## 📁 Structure

```
package.json                 # Node scripts & deps
astro.config.mjs             # Astro config
tsconfig.json                # TypeScript strict config
src/consts.ts                # Site constants
src/layouts/                 # Base, Page, Post layouts
src/components/              # Reusable components
src/pages/                   # Route pages (/, /about, /projects, /blog, /tags, /categories)
src/content/blog/            # Markdown posts (content collection)
src/data/pinned.json         # Project metadata (formerly _data/pinned.yml)
.github/workflows/deploy.yml # Build & deploy pipeline
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

Edit global palette / typography in `src/layouts/BaseLayout.astro` (inline CSS for now). Extract to a stylesheet or add Tailwind / UnoCSS if complexity grows.

Add interactive components by creating `.astro` (or React/Vue/Svelte) components and importing them where needed.

## 📄 License

Content © Alex Mollard. Layout/components MIT unless noted.

