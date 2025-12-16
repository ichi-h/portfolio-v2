// Common types for Notion integration

export interface DatabaseQueryProps {
  slug?: string;
  categories?: string;
}

export interface NotionPage {
  id: string;
  slug: string;
  redirectTo: string;
  categories: string[];
  title: string;
  description: string;
  thumbnailUrl: string;
  publishedAt: string;
  updatedAt: string;
}
