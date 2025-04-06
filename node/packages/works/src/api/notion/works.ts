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

const mockedWorksResponse: Work[] = [
  {
    id: "1",
    slug: "slug1",
    category: "philosophy",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl quis aliquam ultricies, nisl nisl aliquet nisl, nec ali",
    thumbnailUrl: "https://picsum.photos/200",
    publishedAt: "2024-01-01 00:00:00",
    updatedAt: "2024-01-01 00:00:00",
  },
  {
    id: "2",
    slug: "slug2",
    category: "development",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl quis aliquam ultricies, nisl nisl aliquet nisl, nec ali",
    thumbnailUrl: "https://picsum.photos/200",
    publishedAt: "2024-01-01 00:00:00",
    updatedAt: "2024-01-01 00:00:00",
  },
  {
    id: "3",
    slug: "slug3",
    category: "photography",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl quis aliquam ultricies, nisl nisl aliquet nisl, nec ali",
    thumbnailUrl: "https://picsum.photos/200",
    publishedAt: "2024-01-01 00:00:00",
    updatedAt: "2024-01-01 00:00:00",
  },
  {
    id: "4",
    slug: "slug4",
    category: "music",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl quis aliquam ultricies, nisl nisl aliquet nisl, nec ali",
    thumbnailUrl: "https://picsum.photos/200",
    publishedAt: "2024-01-01 00:00:00",
    updatedAt: "2024-01-01 00:00:00",
  },
  {
    id: "5",
    slug: "slug5",
    category: "philosophy",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl quis aliquam ultricies, nisl nisl aliquet nisl, nec ali",
    thumbnailUrl: "https://picsum.photos/200",
    publishedAt: "2024-01-01 00:00:00",
    updatedAt: "2024-01-01 00:00:00",
  },
];

export const getWorks = async (props?: Props): Promise<Work[]> => {
  const { ENVIRONMENT, NOTION_SECRET_KEY, NOTION_DATABASE_ID } = useEnv();

  if (ENVIRONMENT === "development") {
    return mockedWorksResponse;
  }

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
