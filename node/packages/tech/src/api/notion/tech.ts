import {
  createNotionClient,
  filterByCategory,
  queryDatabase,
  type NotionPage,
} from "portfolio-shared/notion";

import { useEnv } from "../../utils/env";

interface Props {
  slug?: string;
}

export interface TechPost {
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

const mockedTechResponse: TechPost[] = [
  {
    id: "1",
    slug: "tech-article-1",
    redirectTo: "",
    category: "development",
    title: "Getting Started with TypeScript",
    description:
      "A comprehensive guide to TypeScript fundamentals and best practices for modern web development.",
    thumbnailUrl: "https://picsum.photos/200",
    publishedAt: "2024-01-15",
    updatedAt: "2024-01-15",
  },
  {
    id: "2",
    slug: "tech-article-2",
    redirectTo: "",
    category: "development",
    title: "Building a Monorepo with pnpm",
    description:
      "Learn how to set up and manage a monorepo using pnpm workspaces and Turborepo for efficient development.",
    thumbnailUrl: "https://picsum.photos/200",
    publishedAt: "2024-02-01",
    updatedAt: "2024-02-01",
  },
  {
    id: "3",
    slug: "",
    redirectTo: "https://github.com",
    category: "development",
    title: "Open Source Contribution Guide",
    description:
      "Tips and best practices for contributing to open source projects effectively.",
    thumbnailUrl: "https://picsum.photos/200",
    publishedAt: "2024-02-15",
    updatedAt: "2024-02-15",
  },
];

/**
 * Get tech posts from Notion database
 * Filters by category: "development"
 */
export const getTechPosts = async (props?: Props): Promise<TechPost[]> => {
  const { ENVIRONMENT, NOTION_SECRET_KEY, NOTION_DATABASE_ID } = useEnv();

  if (ENVIRONMENT !== "production") {
    return mockedTechResponse;
  }

  const notion = createNotionClient(NOTION_SECRET_KEY);
  const allPages = await queryDatabase(notion, NOTION_DATABASE_ID, {
    ...props,
    category: "development",
  });

  // Filter by development category
  const filteredPages = filterByCategory(allPages, "development");

  return filteredPages.map(mapNotionPageToTechPost);
};

const mapNotionPageToTechPost = (page: NotionPage): TechPost => {
  return {
    id: page.id,
    updatedAt: page.updatedAt,
    description: page.description,
    category: page.category,
    slug: page.slug,
    redirectTo: page.redirectTo,
    thumbnailUrl: page.thumbnailUrl,
    publishedAt: page.publishedAt,
    title: page.title,
  };
};
