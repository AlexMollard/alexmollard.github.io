# alexmollard.github.io

Personal website powered by **Jekyll** with the **Minimal Mistakes** dark skin, automatically built & deployed via **GitHub Actions** to GitHub Pages.

## Local Development

Prerequisites: Ruby (>= 3.1) and Bundler.

Install dependencies and run the local server:

```powershell
bundle install
bundle exec jekyll serve --livereload
```

Site will be available at http://127.0.0.1:4000

## Structure

Key files/directories:

- `_config.yml` – Site configuration & theme settings
- `Gemfile` – Ruby gems including Jekyll and plugins
- `assets/css/main.scss` – Imports theme + custom overrides
- `_data/navigation.yml` – Primary navigation links
- `index.md` – Homepage (uses `home` layout showing posts)
- `about.md` – About page
- `.github/workflows/pages.yml` – Build & deploy workflow

## Adding Posts

Create a new file in `_posts` named `YYYY-MM-DD-title.md` with front matter:

```markdown
---
title: My New Post
categories: [blog]
tags: [tag1, tag2]
excerpt: Short summary.
---

Your content here.
```

## Theming

Global dark styling is set via `minimal_mistakes_skin: "dark"` in `_config.yml`. Override or extend styling in `assets/css/main.scss`.

## Deployment

Pushing changes to `master` triggers the GitHub Actions workflow which:

1. Installs Ruby & dependencies
2. Builds the site with Jekyll
3. Deploys the generated `_site` to GitHub Pages

## License

Content © Alex Mollard. Theme © Minimal Mistakes contributors (MIT License).
