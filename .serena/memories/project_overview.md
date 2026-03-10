# Project Overview

## Purpose
This is a portfolio website project for ichi-h.com. It includes:
- Works/portfolio site (Astro)
- Tech profile site (Astro)
- Fragments/short-form writing site (Astro)
- UI component library
- OG image generation service
- Design system using vanilla-extract
- Shared domain/features library for apps

## URL
- Main site: https://ichi-h.com
- Tech: https://tech.ichi-h.com
- Fragments: https://fragments.ichi-h.com
- Storybook (UI components): https://portfolio-ui-40i.pages.dev

## Tech Stack

### Main Technologies
- **Runtime**: Node.js
- **Package Manager**: pnpm (workspaces)
- **Language**: TypeScript
- **Build Tool**: Turbo (monorepo)
- **Frontend Frameworks**:
  - Astro (works, tech)
  - React (UI library / Astro integration)
- **Styling**: vanilla-extract

### Cloud Services
- **Cloudflare**: Pages & Workers, DNS

### CMS
- **Notion**: Content management (via shared features)

### Development Tools
- Vite
- ESLint
- Prettier
- Husky & lint-staged for pre-commit hooks
- Wrangler (Cloudflare CLI)

## Monorepo Structure

The project is organized as a monorepo under the `node/` directory with the following packages:

### Packages

1. **og-image**
   - Generates og:image from query parameters
   - Cloudflare Worker

2. **shared**
   - Shared domain features and utilities
   - Used by `works`, `tech`, and `fragments`

3. **styles**
   - Design system and styles using vanilla-extract
   - Framework-agnostic (can support React, Astro, etc.)
   - Contains design tokens and utility styles

4. **ui**
   - React UI components
   - Uses styles from the `styles` package
   - Has Storybook for component documentation

5. **works**
   - Implementation of the works/portfolio page
   - Built with Astro and React
   - Uses vanilla-extract for styling

6. **tech**
   - Tech profile site (profile, skills, posts)
   - Built with Astro

7. **fragments**
   - Short-form writing and creative pieces site
   - Built with Astro and React
   - Uses Notion as CMS (via shared package)
   - Deployed on Cloudflare Pages

## Development Environment

The project uses Nix flakes for environment management. The flake configures:
- Development shell
- MCP server (Serena) integration