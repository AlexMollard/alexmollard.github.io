<h1 align="center">alexmollard.github.io</h1>
<p align="center">A modern, clean, minimal Jekyll site – auto‑deployed with GitHub Actions.</p>

## ✨ Features

- Lightweight: default Jekyll + Minima with lean custom styling
- Auto dark/light via `prefers-color-scheme`
- SEO + Atom feed (jekyll-seo-tag, jekyll-feed)
- GitHub Pages deployment via Actions (`deploy.yml`)
- No trackers, no JS build pipeline, just Markdown → HTML

## 📁 Structure

```
Gemfile                  # Dependencies (Jekyll + plugins)
_config.yml              # Site config & metadata
assets/css/main.scss     # Custom design layer
index.md                 # Hero + recent posts
about.md                 # About page
_posts/                  # Blog posts (add your own)
404.html                 # Friendly 404
.github/workflows/deploy.yml  # Build & deploy pipeline
```

## 🧪 Local Development

Prereqs: Ruby >= 3.1 & Bundler.

```powershell
bundle install
bundle exec jekyll serve --livereload
```

Visit http://127.0.0.1:4000

## ✍️ Creating a Post

Create `_posts/YYYY-MM-DD-title.md`:

```markdown
---
title: Focus Beats Complexity
excerpt: Short teaser sentence.
tags: [focus]
---

Write in Markdown. Front matter can include `tags`, `excerpt`, `image`, etc.
```

## 🚀 Deployment

Push to `master`. GitHub Actions will build Jekyll and publish `_site` to GitHub Pages using the official Pages actions.

Make sure Pages is set to "GitHub Actions" in the repo settings (Settings → Pages → Build and deployment).

## 🔧 Customization

Edit `assets/css/main.scss` for styling tweaks. Update metadata in `_config.yml`. Hero text lives in `index.md`.

## 📄 License

Content © Alex Mollard. Theme base © Minima (MIT). Custom enhancements MIT.

