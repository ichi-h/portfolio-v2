# portfolio-shared

Shared domain features and utilities used by the `works` and `tech` apps.

## Structure

- `components/` - Shared UI helpers (non-framework)
- `features/` - Domain-specific features (e.g., Notion, markdown)
- `utils/` - Domain-independent utilities

## Usage

```typescript
// Domain features
import { getDatabase, filterByCategory } from "portfolio-shared";

// Utilities
import { Result, formatDate } from "portfolio-shared";
```

## Development

```bash
# Build the package
pnpm build

# Watch mode for development
pnpm dev
```
