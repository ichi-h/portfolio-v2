# fragments.ichi-h.com

Short-form writing and creative pieces site built with Astro.

## Tech Stack

- **Framework**: Astro + React
- **Styling**: vanilla-extract (via `portfolio-styles`)
- **CMS**: Notion (via `portfolio-shared`)
- **Hosting**: Cloudflare Pages

## Development

```bash
# From the monorepo root (node/)
pnpm dev

# Or run only this package
cd packages/fragments
pnpm dev
```

Copy `.env.example` to `.env` and fill in the required values.

## Environment Variables

| Variable               | Description                    |
| ---------------------- | ------------------------------ |
| `ENVIRONMENT`          | `development` or `production`  |
| `NOTION_SECRET_KEY`    | Notion integration secret      |
| `NOTION_DATA_SOURCE_ID`| Notion database ID            |
| `APP_URL`              | Application URL                |
| `OG_IMAGE_SERVER_URL`  | OG image generation server URL |

In development mode (`ENVIRONMENT !== "production"`), mock data is used instead of Notion.

## Build / Deploy

```bash
pnpm build
pnpm deploy
```
