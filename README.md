# Alex Mollard Landing (Astro Minimal)

Personal landing page built with [Astro](https://astro.build) minimal starter.

## Dev

```bash
pnpm install
pnpm dev
```
Visit http://localhost:4321

## Deploy

Automated via GitHub Actions (`.github/workflows/deploy.yml`). On push to `master` it will:

1. Install dependencies with pnpm
2. Build the site
3. Publish to GitHub Pages

Ensure repository settings have Pages source set to GitHub Actions. `site` in `astro.config.mjs` is already configured.

Manual build (optional):
```bash
pnpm build
pnpm preview
```

## Structure

- `src/components` basic components
- `src/pages/index.astro` main landing page

Feel free to iterate.
