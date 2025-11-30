# Design Patterns and Guidelines

## Architecture Principles

### Separation of Concerns
The project follows a clear separation between:
- **Styling** (`styles` package): Design system, tokens, component styles
- **Components** (`ui` package): React component implementations
- **Applications** (`works` package): Page implementations and business logic
- **Services** (`og-image` package): Utility services

This allows:
- Reusability across different frameworks
- Clear boundaries and dependencies
- Easier testing and maintenance

### Framework Agnostic Design System
The `styles` package is intentionally separated from React:
- Uses vanilla-extract for type-safe CSS
- Exports design tokens and utility styles
- Can be consumed by React, Vue, or other frameworks
- Prevents tight coupling

## Code Organization Patterns

### Component Structure
Each UI component typically includes:
- Component implementation in `ui/src/components/{name}/`
- Styles in `styles/components/{name}.css.ts`
- Storybook stories for documentation
- Index file for clean exports

### File Naming
- **React components**: PascalCase (e.g., `Button.tsx`)
- **Utilities**: camelCase (e.g., `vanillaExtract.ts`)
- **Styles**: kebab-case with `.css.ts` extension (e.g., `button.css.ts`)
- **Config files**: Standard conventions (e.g., `astro.config.mjs`)

### Export Patterns
- Use barrel exports (`index.ts`) for clean imports
- Export named exports, avoid default exports where possible
- Group related exports together

## TypeScript Patterns

### Type Safety
- Strict mode enabled
- Explicit types for public APIs
- Inference allowed for internal implementation
- Minimal use of `any` (only when necessary)

### Module Organization
- ESNext modules throughout
- Use `import type` for type-only imports
- Resolve JSON modules when needed

## Styling Patterns

### vanilla-extract Usage
- Define styles in `.css.ts` files
- Use design tokens from `constants/`
- Create reusable style utilities
- Type-safe style definitions

### Design Token Organization
Located in `styles/constants/`:
- **colors**: Color palette
- **spacing**: rem/px values
- **breakpoints**: Responsive breakpoints
- **ratios**: Proportional values

### Style Utilities
Located in `styles/styles/`:
- **layout**: Flexbox, grid utilities
- **spacing**: Margin, padding
- **sizing**: Width, height
- **text**: Typography utilities
- **animation**: Transitions, animations
- **effects**: Shadows, blur, opacity

## Monorepo Patterns

### Package Dependencies
- Explicit dependencies in `package.json`
- Turbo manages build order
- Dev mode with hot reload across packages

### Task Orchestration
- Define tasks in `turbo.json`
- Use `^` prefix for dependency tasks
- Specify outputs for caching

## API and Integration Patterns

### Cloudflare Workers
- Hono for API framework
- Defined in `og-image` package
- Configuration in `wrangler.toml`

### Astro Integration
- React components in Astro
- vanilla-extract plugin integration
- Server-side rendering support

## Development Guidelines

### When Adding New Features

1. **New Component**:
   - Add styles to `styles/components/{name}.css.ts`
   - Create component in `ui/src/components/{name}/`
   - Add Storybook story
   - Export from index files

2. **New Design Token**:
   - Add to appropriate file in `styles/constants/`
   - Export from `constants/index.ts`
   - Use in component styles

3. **New Utility Style**:
   - Add to appropriate file in `styles/styles/`
   - Export from `styles/index.ts`
   - Document usage

### When Modifying Existing Code

1. Check for usages across packages
2. Maintain backward compatibility when possible
3. Update dependent components if breaking changes
4. Verify builds across affected packages

## Special Considerations

### Serena Usage
According to `.github/copilot-instructions.md`:
- **USE SERENA when referencing code or similar tasks**
- Leverage Serena's semantic code understanding
- Use symbolic tools for code navigation

### Language Guidelines
- **Code comments**: Always in English
- **Developer communication**: Use developer's language (e.g., Japanese)
- **Documentation**: In English

### Pre-commit Automation
- Formatting and linting run automatically
- Fix issues before manual intervention
- Trust the automated tools