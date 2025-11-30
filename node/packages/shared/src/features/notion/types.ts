// Common types for Notion integration

export interface DatabaseQueryProps {
  slug?: string;
  category?: string;
}

export interface NotionPage {
  id: string;
  slug: string;
  redirectTo: string;
  category: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  publishedAt: string;
  updatedAt: string;
}
