# node

Monorepo workspace for the portfolio project. All packages are located in `node/packages`.

## Packages

- `og-image` - Cloudflare Worker that generates OG images
- `shared` - Shared domain features and utilities for apps
- `styles` - Design system with vanilla-extract (tokens + utilities)
- `ui` - React UI component library (Storybook)
- `works` - Astro portfolio/works site
- `tech` - Astro tech profile site

## Scripts (workspace root)

```bash
pnpm dev      # turbo dev --parallel
pnpm build    # turbo build
pnpm deploy   # turbo deploy
pnpm format   # prettier --write .
pnpm lint     # eslint .
pnpm lintfix  # eslint . --fix
```

## Development

```bash
pnpm install
pnpm dev
```
