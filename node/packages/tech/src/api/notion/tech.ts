import {
  createNotionClient,
  filterByCategory,
  queryDatabase,
  type NotionPage,
} from "portfolio-shared";

import { useEnv } from "../../utils/env";

interface Props {
  slug?: string;
}

export interface TechPost {
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

const mockedTechResponse: TechPost[] = [
  {
    id: "1",
    slug: "tech-article-1",
    redirectTo: "",
    categories: ["development"],
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
    categories: ["development"],
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
    categories: ["development"],
    title: "Open Source Contribution Guide",
    description:
      "Tips and best practices for contributing to open source projects effectively.",
    thumbnailUrl: "https://picsum.photos/200",
    publishedAt: "2024-02-15",
    updatedAt: "2024-02-15",
  },
  {
    id: "4",
    slug: "tech-article-4",
    redirectTo: "",
    categories: ["development"],
    title: "Mastering React Hooks",
    description:
      "An in-depth look at React Hooks and how to use them to build functional components.",
    thumbnailUrl: "https://picsum.photos/200",
    publishedAt: "2024-03-01",
    updatedAt: "2024-03-01",
  },
  {
    id: "5",
    slug: "tech-article-5",
    redirectTo: "",
    categories: ["development"],
    title: "CSS-in-JS with Vanilla Extract",
    description:
      "Explore the benefits of using Vanilla Extract for styling your React applications with TypeScript support.",
    thumbnailUrl: "https://picsum.photos/200",
    publishedAt: "2024-03-15",
    updatedAt: "2024-03-15",
  },
  {
    id: "6",
    slug: "tech-article-6",
    redirectTo: "",
    categories: ["development"],
    title: "Optimizing Web Performance",
    description:
      "Techniques and tools for improving the performance of your web applications.",
    thumbnailUrl: "https://picsum.photos/200",
    publishedAt: "2024-04-01",
    updatedAt: "2024-04-01",
  },
];

/**
 * Get tech posts from Notion database
 * Filters by category: "development"
 */
export const getTechPosts = async (props?: Props): Promise<TechPost[]> => {
  const { ENVIRONMENT, NOTION_SECRET_KEY, NOTION_DATA_SOURCE_ID } = useEnv();

  if (ENVIRONMENT !== "production") {
    return mockedTechResponse;
  }

  const notion = createNotionClient(NOTION_SECRET_KEY);
  const allPages = await queryDatabase(notion, NOTION_DATA_SOURCE_ID, {
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
    categories: page.categories,
    slug: page.slug,
    redirectTo: page.redirectTo,
    thumbnailUrl: page.thumbnailUrl,
    publishedAt: page.publishedAt,
    title: page.title,
  };
};
