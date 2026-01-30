# Tech

## Development

````bash
# Install dependencies
pnpm install

# Start development server
# tech

Astro site for the tech profile page. The site is a single-page layout divided into sections
such as profile, values, skills, and posts.

## Dependencies

- `portfolio-shared`
- `portfolio-styles`
- `portfolio-ui`

## Scripts

```bash
pnpm dev
pnpm build
pnpm preview
pnpm deploy
````

## Notes

- Deployment targets Cloudflare Pages via Wrangler.
- `postinstall` installs Chromium for PDF generation.
  │ ├── pages/ # Page-level components
