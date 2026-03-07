import {
  createNotionClient,
  pageToMarkdown,
  queryDatabase,
  type NotionPage,
} from "portfolio-shared";

import { useEnv } from "../../utils/env";

interface Props {
  slug?: string;
}

export interface NotionFragment {
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

const mockedFragmentsResponse: NotionFragment[] = [
  {
    id: "1",
    slug: "first-snow",
    redirectTo: "",
    categories: ["fragment"],
    title: "初雪",
    description: "静寂の中 白い幕が降りてきた 街の音が消えていく",
    thumbnailUrl: "https://picsum.photos/200",
    publishedAt: "2024-01-01",
    updatedAt: "2024-01-01",
  },
  {
    id: "2",
    slug: "moonlit-path",
    redirectTo: "",
    categories: ["fragment"],
    title: "月の道",
    description: "月光が地面を染める 影は長く伸びて 行き先を指し示す",
    thumbnailUrl: "https://picsum.photos/200",
    publishedAt: "2024-01-01",
    updatedAt: "2024-01-01",
  },
  {
    id: "3",
    slug: "last-autumn",
    redirectTo: "",
    categories: ["fragment"],
    title: "最後の秋",
    description: "枯れ葉が舞い落ちる それぞれの色が 地面に溶けていく",
    thumbnailUrl: "https://picsum.photos/200",
    publishedAt: "2024-01-01",
    updatedAt: "2024-01-01",
  },
];

/**
 * Get fragments from Notion database
 * Filters by category: "fragment"
 */
export const getFragments = async (
  props?: Props,
): Promise<NotionFragment[]> => {
  const { ENVIRONMENT, NOTION_SECRET_KEY, NOTION_DATA_SOURCE_ID } = useEnv();

  if (ENVIRONMENT !== "production") {
    if (props?.slug) {
      return mockedFragmentsResponse.filter((f) => f.slug === props.slug);
    }
    return mockedFragmentsResponse;
  }

  const notion = createNotionClient(NOTION_SECRET_KEY);
  const allPages = await queryDatabase(notion, NOTION_DATA_SOURCE_ID, {
    ...props,
    category: "fragment",
  });

  return allPages.map(mapNotionPageToFragment).filter((f) => f.slug !== "");
};

const sanitizeUrl = (url: string): string => {
  try {
    const parsed = new URL(url);
    if (parsed.protocol !== "https:") return "";
    if (parsed.username || parsed.password) return "";
    return parsed.href;
  } catch {
    return "";
  }
};

const mapNotionPageToFragment = (page: NotionPage): NotionFragment => {
  return {
    id: page.id,
    updatedAt: page.updatedAt,
    description: page.description,
    categories: page.categories,
    slug: page.slug,
    redirectTo: sanitizeUrl(page.redirectTo),
    thumbnailUrl: sanitizeUrl(page.thumbnailUrl),
    publishedAt: page.publishedAt,
    title: page.title,
  };
};

const mockedMarkdownBody = `静寂の中
白い幕が降りてきた
街の音が消えていく
`;

const NOTION_PAGE_ID_PATTERN =
  /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}|[0-9a-f]{32})$/i;

/**
 * Get Markdown body of a fragment page from Notion
 */
export const getMarkdownBody = async (pageId: string): Promise<string> => {
  if (!NOTION_PAGE_ID_PATTERN.test(pageId)) {
    throw new Error("Invalid pageId format");
  }

  const { ENVIRONMENT, NOTION_SECRET_KEY } = useEnv();

  if (ENVIRONMENT !== "production") {
    return mockedMarkdownBody;
  }

  const notion = createNotionClient(NOTION_SECRET_KEY);
  return pageToMarkdown(notion, pageId);
};
