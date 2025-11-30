# Project Overview

## Purpose
This is a portfolio website project for ichi-h.com. It includes:
- Main portfolio site (works page)
- UI component library
- OG image generation service
- Design system using vanilla-extract

## URL
- Main site: https://ichi-h.com
- Storybook (UI components): https://portfolio-ui-40i.pages.dev

## Tech Stack

### Main Technologies
- **Runtime**: Node.js (>=20.0.0)
- **Package Manager**: pnpm@10.10.0
- **Language**: TypeScript 5.8.3
- **Build Tool**: Turbo (monorepo)
- **Frontend Frameworks**:
  - Remix (React) for main app
  - Astro for works page
  - React 19.1.0
- **Styling**: vanilla-extract
- **API Framework**: Hono

### Cloud Services
- **Cloudflare**: Pages & Workers, DNS

### CMS
- **Notion**: Content management

### Development Tools
- Vite 6.2.5
- ESLint 9.24.0
- Prettier 3.5.3
- Husky & lint-staged for pre-commit hooks
- Wrangler 4.7.2 (Cloudflare CLI)

## Monorepo Structure

The project is organized as a monorepo under the `node/` directory with the following packages:

### Packages

1. **og-image**
   - Generates og:image from query parameters
   - Cloudflare Worker

2. **styles**
   - Design system and styles using vanilla-extract
   - Framework-agnostic (can support React, Vue, etc.)
   - Contains design tokens and utility styles

3. **ui**
   - React UI components
   - Uses styles from the `styles` package
   - Has Storybook for component documentation

4. **works**
   - Implementation of the works page
   - Built with Astro and React
   - Uses vanilla-extract for styling

## Development Environment

The project uses Nix flakes for environment management. The flake configures:
- Development shell
- MCP server (Serena) integration