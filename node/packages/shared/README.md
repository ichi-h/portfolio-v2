# portfolio-shared

Shared resources for portfolio projects (works and tech applications).

## Structure

- `features/` - Domain-specific features (e.g., Notion API integration)
- `utils/` - Domain-independent utilities

## Usage

```typescript
// Import Notion features
import { getDatabase, filterByCategory } from "portfolio-shared";

// Import utilities
import { Result, formatDate } from "portfolio-shared";
```

## Development

```bash
# Build the package
pnpm build

# Watch mode for development
pnpm dev
```
