import type { DatabaseQueryProps, NotionPage } from "./types";
import type { Client } from "@notionhq/client";

/**
 * Query Notion database with optional filters
 */
export const queryDatabase = async (
  client: Client,
  databaseId: string,
  props?: DatabaseQueryProps,
): Promise<NotionPage[]> => {
  const response = await client.databases.query({
    database_id: databaseId,
    sorts: [
      {
        property: "publishedAt",
        direction: "descending",
      },
    ],
    filter: {
      and: [
        {
          property: "unpublishedAt",
          date: {
            is_empty: true,
          },
        },
        {
          property: "publishedAt",
          date: {
            is_not_empty: true,
          },
        },
        ...(props && props.category
          ? [
            {
              property: "category",
              select: {
                equals: props.category,
              },
            },
          ]
          : []),
        ...(props && props.slug
          ? [
            {
              property: "slug",
              rich_text: {
                equals: props.slug,
              },
            },
          ]
          : []),
      ],
    },
  });

  return response.results
    .filter((page) => "properties" in page)
    .map((page) => {
      return {
        id: page.id,
        updatedAt:
          page.properties.updatedAt.type === "last_edited_time"
            ? page.properties.updatedAt.last_edited_time
              .toString()
              .split("T")[0]
            : "",
        description:
          page.properties.description.type === "rich_text"
            ? (page.properties.description.rich_text.pop()?.plain_text ?? "")
            : "",
        category:
          page.properties.category.type === "select"
            ? page.properties.category.select !== null &&
              "name" in page.properties.category.select
              ? page.properties.category.select.name
              : ""
            : "",
        unpublishedAt:
          page.properties.unpublishedAt.type === "date"
            ? (page.properties.unpublishedAt.date?.start ?? "")
            : "",
        slug:
          page.properties.slug.type === "rich_text"
            ? (page.properties.slug.rich_text.pop()?.plain_text ?? "")
            : "",
        redirectTo:
          page.properties.redirectTo.type === "url"
            ? page.properties.redirectTo.url
              ? page.properties.redirectTo.url.toString()
              : ""
            : "",
        thumbnailUrl:
          page.properties.thumbnailUrl.type === "rich_text"
            ? (page.properties.thumbnailUrl.rich_text.pop()?.plain_text ?? "")
            : "",
        publishedAt:
          page.properties.publishedAt.type === "date"
            ? (page.properties.publishedAt.date?.start ?? "")
            : "",
        createdAt:
          page.properties.createdAt.type === "created_time"
            ? page.properties.createdAt.created_time.split("T")[0]
            : "",
        title:
          page.properties.title.type === "title"
            ? (page.properties.title.title.pop()?.plain_text ?? "")
            : "",
      };
    });
};

/**
 * Filter pages by category
 */
export const filterByCategory = (
  pages: NotionPage[],
  category: string,
): NotionPage[] => {
  return pages.filter((page) => page.category === category);
};

/**
 * Exclude pages by category
 */
export const excludeByCategory = (
  pages: NotionPage[],
  category: string,
): NotionPage[] => {
  return pages.filter((page) => page.category !== category);
};
