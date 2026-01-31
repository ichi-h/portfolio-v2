# Suggested Commands

## Package Management

### Installation
```bash
pnpm install
```

## Development

### Start Development Server (all packages in parallel)
```bash
pnpm dev
# or from root: cd node && pnpm dev
```

This uses Turbo to run dev tasks in parallel across all packages.

### Build All Packages
```bash
pnpm build
# or from root: cd node && pnpm build
```

### Deploy
```bash
pnpm deploy
# or from root: cd node && pnpm deploy
```

## Code Quality

### Format Code
```bash
pnpm format
# or from root: cd node && pnpm format
```
Runs Prettier on all files (excluding .prettierignore).

### Lint Code
```bash
pnpm lint
# or from root: cd node && pnpm lint
```

### Lint and Auto-fix
```bash
pnpm lintfix
# or from root: cd node && pnpm lintfix
```

## Git Hooks

The project uses husky and lint-staged:
- **Pre-commit**: Automatically runs Prettier and ESLint fix on staged files
- Configured in package.json under `lint-staged`

## Cloudflare (Wrangler)

For og-image and other Workers:
```bash
# Development
wrangler dev

# Deploy
wrangler deploy
```

## Nix Environment

### Enter Development Shell
```bash
nix develop
```

This sets up the environment and creates `.mcp.json` with Serena MCP server configuration.

## Turbo Commands

The project uses Turbo for monorepo task orchestration:
- Tasks are defined in `turbo.json`
- Dependencies between tasks are managed automatically
- Outputs are cached in `dist/**`

## System Commands (Linux)

Standard Linux/Unix commands are available:
- `ls`, `cd`, `pwd` - Navigation
- `grep`, `find` - Search
- `git` - Version control
- `cat`, `less` - File viewing

## Notes

- All commands should be run from the `node/` directory unless otherwise specified
- Package manager is pnpm (not npm or yarn)
- Node version requirement: >=24.0.0
