# Code Style and Conventions

## TypeScript

- Strict types, no any where avoidable
- `interface` for object types (not type aliases)
- `import type` for type-only imports

## Notion API Pattern (works/tech packages)

- `src/utils/env.ts` - useEnv() with validateEnv and import.meta.env
- `src/api/notion/{package}.ts` - interface, mock data array, fetch function, mapper
- Mock data returned when ENVIRONMENT !== "production"
- No index.ts in api/notion directories

## Environment Variables

- Accessed via `import.meta.env` (Vite-based)
- Validated with `validateEnv` from portfolio-shared
- Key vars: ENVIRONMENT, NOTION_SECRET_KEY, NOTION_DATA_SOURCE_ID

## Naming

- Interfaces: PascalCase (Work, TechPost, Fragment)
- Functions: camelCase (getWorks, getTechPosts, getFragments)
- Constants: SCREAMING_SNAKE_CASE for mock data
