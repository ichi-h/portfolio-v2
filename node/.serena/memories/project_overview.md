# Project Overview

**Purpose**: Portfolio website monorepo for ichi-h

**Tech Stack**:

- pnpm workspaces + Turborepo (monorepo)
- TypeScript throughout
- Astro (works, tech packages)
- vinext/Next.js (fragments package)
- Vite
- vanilla-extract (CSS-in-JS)
- Notion API (portfolio-shared)
- Cloudflare Workers (og-image)

**Packages**:

- `shared` (portfolio-shared) - shared domain features, Notion integration, utils
- `styles` (portfolio-styles) - design system tokens
- `ui` (portfolio-ui) - React UI components
- `works` - Astro portfolio/works site
- `tech` - Astro tech profile site
- `fragments` - vinext/Next.js literary fragments site
- `og-image` - Cloudflare Worker for OG images
