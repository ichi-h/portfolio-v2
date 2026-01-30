# portfolio-v2

- URL: https://ichi-h.com
- Storybook: https://portfolio-ui-40i.pages.dev

## Overview

This repository contains the portfolio codebase. The monorepo lives under `node/` and includes
Astro sites, a React UI library, a design system, a shared domain library, and an OG image worker.

## Packages

- `node/packages/works` - Astro portfolio/works site
- `node/packages/tech` - Astro tech profile site
- `node/packages/ui` - React UI component library (Storybook)
- `node/packages/styles` - Design system with vanilla-extract
- `node/packages/shared` - Shared domain features and utilities
- `node/packages/og-image` - Cloudflare Worker for OG images

## Requirements

- Node.js >= 20
- pnpm (workspace root is `node/`)

## Development

```bash
cd node
pnpm install
pnpm dev
```

## Build / Deploy

```bash
cd node
pnpm build
pnpm deploy
```
