# Task Completion Checklist

When completing a coding task, follow these steps:

## 1. Code Quality Checks

### Automatic (via git pre-commit)
If committing changes, husky will automatically:
- Run Prettier formatting on staged files
- Run ESLint fix on staged JavaScript/TypeScript files

### Manual Verification
Before considering a task complete:

```bash
# Format all code
pnpm format

# Lint code
pnpm lint

# Auto-fix linting issues
pnpm lintfix
```

## 2. Build Verification

```bash
# Ensure all packages build successfully
pnpm build
```

This verifies:
- TypeScript compiles without errors
- All dependencies are properly resolved
- Build outputs are generated correctly

## 3. Code Style Compliance

Verify the code follows project conventions:
- ✅ Imports are ordered correctly (builtin → external → parent → sibling → index → object → type)
- ✅ Newlines between import groups
- ✅ No unused imports
- ✅ No unused variables (except those starting with `_`)
- ✅ Tab width: 2 spaces
- ✅ Line width: 80 characters max
- ✅ Comments and documentation in English

## 4. TypeScript Checks

- ✅ No TypeScript errors
- ✅ Strict mode compliance
- ✅ Minimal use of `any` (warnings allowed, but should be justified)
- ✅ Proper type annotations where needed

## 5. Functionality Testing

Depending on the package:
- Test in development mode (`pnpm dev`)
- Verify in browser/appropriate environment
- Check console for errors or warnings

## 6. Documentation

If applicable:
- Update README files
- Add/update code comments (in English)
- Update Storybook stories (for UI components)

## 7. Integration

For monorepo changes:
- Verify dependent packages still work
- Check Turbo build dependencies
- Test cross-package imports

## Quick Checklist

```bash
# Run from node/ directory
pnpm lintfix  # Fix linting issues
pnpm format   # Format code
pnpm build    # Verify build
pnpm dev      # Test in development
```

## Notes

- Pre-commit hooks will catch most formatting/linting issues
- Build errors must be resolved before deployment
- All code comments and documentation must be in English
- Communication with developers can be in their language (e.g., Japanese)