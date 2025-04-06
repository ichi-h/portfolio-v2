import { Client } from "@notionhq/client";

import { useEnv } from "../../utils/env";

interface Props {
  slug?: string;
  category?: string;
}

export interface Work {
  id: string;
  slug: string;
  category: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  publishedAt: string;
  updatedAt: string;
}

export const getWorks = async (props?: Props): Promise<Work[]> => {
  const { NOTION_SECRET_KEY, NOTION_DATABASE_ID } = useEnv();

  const notion = new Client({ auth: `${NOTION_SECRET_KEY}` });
  const response = await notion.databases.query({
    database_id: `${NOTION_DATABASE_ID}`,
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
            ? page.properties.updatedAt.last_edited_time.toString()
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
        languages: [],
        unpublishedAt:
          page.properties.unpublishedAt.type === "date"
            ? (page.properties.unpublishedAt.date?.start ?? "")
            : "",
        slug:
          page.properties.slug.type === "rich_text"
            ? (page.properties.slug.rich_text.pop()?.plain_text ?? "")
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
            ? page.properties.createdAt.created_time
            : "",
        title:
          page.properties.title.type === "title"
            ? (page.properties.title.title.pop()?.plain_text ?? "")
            : "",
      };
    });
};
