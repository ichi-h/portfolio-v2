# Tech

技術系コンテンツ専用のWebアプリケーションです。

## Overview

- NotionのDBから`category: "development"`のコンテンツを取得して表示
- `works`パッケージと技術スタックを共有
- システムフォントを使用（Webフォントなし）
- 軽量化された画像を使用

## Development

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev
```

## Build

```bash
pnpm build
```

## Deploy

Cloudflare Pagesへデプロイ:

```bash
pnpm deploy
```

## Project Structure

```
src/
├── api/          # Notion API integration
├── assets/       # Static assets
├── components/   # React/Astro components
│   ├── pages/    # Page-level components
│   └── parts/    # Reusable parts
├── layouts/      # Layout templates
├── pages/        # Astro pages (file-based routing)
└── utils/        # Utility functions
```

## Dependencies

- `portfolio-shared`: Common utilities and Notion API integration
- `portfolio-styles`: Shared styling system (vanilla-extract)
- `portfolio-ui`: Shared UI components

## Difference from `works`

| Feature         | `works`                | `tech`                         |
| --------------- | ---------------------- | ------------------------------ |
| Content         | Portfolio works        | Development/Technical articles |
| Category Filter | `!= "development"`     | `== "development"`             |
| Web Fonts       | Yes                    | No (System fonts)              |
| Focus           | Creative work showcase | Technical content              |
