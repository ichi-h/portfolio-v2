# Code Style and Conventions

## TypeScript Configuration

### Compiler Options
- **Target**: ESNext
- **Module**: ESNext with Node resolution
- **JSX**: preserve
- **Strict mode**: enabled
- **Path aliases**: `@/*` maps to current directory
- **Lib**: dom, dom.iterable, esnext

### General Settings
- Force consistent casing in file names
- Skip lib check
- Resolve JSON modules
- Isolated modules
- ES module interop

## Code Formatting (Prettier)

### Configuration
- **Tab width**: 2 spaces
- **Print width**: 80 characters

### Auto-formatting
- Runs on pre-commit via husky and lint-staged
- Applies to: `*.{js,ts,jsx,tsx,json,md}`

## Linting (ESLint)

### Rules and Configuration
- Uses flat config (eslint.config.mjs)
- Extends:
  - prettier
  - plugin:@typescript-eslint/recommended

### Key Rules
1. **Unused variables**: Error (except args starting with `_`)
2. **Unused imports**: Warning (auto-removed)
3. **No explicit any**: Warning
4. **Import ordering**: Enforced with specific groups

### Import Order
Required order with newlines between groups:
1. builtin
2. external
3. parent (with `@/**` patterns before others)
4. sibling
5. index
6. object
7. type

Imports within groups are alphabetically sorted.

### Global Ignores
- Config files (`*.config.ts`, `*.config.js`)
- node_modules
- Build outputs (dist, build, out, .next)
- Storybook (storybook-static, .storybook)
- Astro (.astro)
- works package
- .direnv

## Naming Conventions

Based on the codebase structure:
- **Files**: kebab-case for most files
- **Components**: PascalCase (React components)
- **Types/Interfaces**: PascalCase
- **Functions/Variables**: camelCase
- **CSS files**: `*.css.ts` for vanilla-extract

## Comments and Documentation

According to copilot-instructions.md:
- **All comments and documentation in code must be written in English**
- Communication with developers should be in their language (e.g., Japanese for Japanese developers)
- But code comments, documentation, etc. are always in English

## TypeScript Best Practices

- Use strict mode
- Avoid `any` (warning enforced)
- Prefer type inference when clear
- Use path aliases (`@/`) for imports