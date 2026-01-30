# Codebase Structure

## Root Structure

```
portfolio-v2/
├── flake.nix                 # Nix development environment
├── README.md                 # Project documentation
└── node/                     # Main monorepo directory
    ├── package.json          # Root package config
    ├── pnpm-workspace.yaml   # PNPM workspace config
    ├── turbo.json            # Turbo build config
    ├── eslint.config.mjs     # ESLint configuration
    ├── tsconfig.base.json    # Base TypeScript config
    └── packages/             # Monorepo packages
        ├── og-image/
        ├── shared/
        ├── styles/
        ├── ui/
        ├── works/
        └── tech/
```

## Package Details

### 1. og-image (Cloudflare Worker)
```
packages/og-image/
├── index.ts          # Worker entry point
├── package.json
├── tsconfig.json
└── wrangler.toml     # Cloudflare configuration
```
**Purpose**: Generate Open Graph images from query parameters

### 2. shared (Shared Domain/Utilities)
```
packages/shared/
├── package.json
├── tsconfig.json
├── vite.config.ts
└── src/
    ├── index.ts
    ├── components/   # Shared UI helpers (non-framework)
    ├── features/     # Domain features (md, notion)
    └── utils/        # Utilities (date, env, query params, result, etc.)
```
**Purpose**: Shared features and utilities used by `works` and `tech` apps

### 3. styles (Design System)
```
packages/styles/
├── index.ts
├── package.json
├── tsconfig.json
├── vite.config.ts
├── components/       # Component-specific styles
│   ├── article.css.ts
│   ├── avatar.css.ts
│   ├── background.css.ts
│   ├── button.css.ts
│   ├── dialog.css.ts
│   ├── heading.css.ts
│   ├── icon.css.ts
│   ├── link.css.ts
│   ├── paragraph.css.ts
│   ├── radio.css.ts
│   └── text.css.ts
├── constants/        # Design tokens
│   ├── breakPoint.ts
│   ├── color.ts
│   ├── px.ts
│   ├── ratio.ts
│   ├── rem.ts
│   └── index.ts
├── libs/
│   └── vanillaExtract.ts
└── styles/           # Utility styles
    ├── animation.ts
    ├── background.ts
    ├── blur.ts
    ├── border.ts
    ├── layout.ts
    ├── opacity.ts
    ├── overflow.ts
    ├── shadow.ts
    ├── sizing.ts
    ├── spacing.ts
    ├── text.ts
    ├── visibility.ts
    └── index.ts
```
**Purpose**: Framework-agnostic design system using vanilla-extract

### 4. ui (React Components)
```
packages/ui/
├── package.json
├── tsconfig.json
├── vite.config.ts
├── src/
│   ├── index.ts
│   └── components/
│       ├── index.ts
│       ├── article/
│       ├── avatar/
│       ├── background/
│       ├── buttons/
│       ├── dialog/
│       ├── heading/
│       ├── icons/
│       ├── link/
│       ├── paragraph/
│       ├── radio/
│       ├── text/
│       └── tooltip/
└── storybook-static/  # Built Storybook documentation
```
**Purpose**: React UI component library
**Note**: Depends on `styles` package

### 5. works (Astro Site)
```
packages/works/
├── astro.config.mjs
├── package.json
├── tsconfig.json
├── public/           # Static assets
└── src/
    ├── api/          # API endpoints
    ├── assets/       # Project assets
    ├── components/   # Astro/React components
    ├── layouts/      # Page layouts
    ├── pages/        # Astro pages
    ├── types/        # Types
    └── utils/        # Utility functions
```
**Purpose**: Works/portfolio page implementation
**Framework**: Astro with React integration

### 6. tech (Astro Site)
```
packages/tech/
├── astro.config.mjs
├── package.json
├── tsconfig.json
├── public/           # Static assets
└── src/
    ├── api/          # API endpoints
    ├── assets/       # Assets
    ├── components/   # Page/part components
    ├── layouts/      # Layout templates
    ├── pages/        # Astro pages
    ├── plugins/      # Build-time helpers (e.g., resume PDF)
    └── utils/        # Utility functions
```
**Purpose**: Tech profile site with sections on profile, skills, and posts
**Framework**: Astro

## Key Architecture Patterns

### Monorepo Strategy
- **Tool**: Turborepo for task orchestration
- **Package Manager**: pnpm with workspaces
- **Dependencies**: Managed through workspace protocol

### Shared Domain Layer
- `shared` package centralizes domain features and utilities
- `works` and `tech` import shared features (e.g., Notion, markdown helpers)

### Styling Architecture
- **System**: vanilla-extract (CSS-in-TypeScript)
- **Separation**: Styles are separate from components
- **Reusability**: Framework-agnostic design tokens

### Component Organization
- Each component type has its own directory
- Components export from index files
- Styles defined in separate `styles` package

### Build Pipeline
- Vite for bundling (styles, ui, shared)
- Turbo for parallel builds
- Cloudflare Wrangler for Worker deployment

## Import Patterns

### Path Aliases
- `@/*` - Points to current package root (defined in tsconfig)

### Package Imports
- Internal packages imported by name
- Example: `import { button } from '@portfolio/styles'`

## Development Workflow

1. Make changes in relevant package
2. Turbo handles dependencies automatically
3. Hot reload in development mode
4. Build verification before deployment