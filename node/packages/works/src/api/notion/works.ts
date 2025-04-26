import { Client } from "@notionhq/client";

import { useEnv } from "../../utils/env";

interface Props {
  slug?: string;
  category?: string;
}

export interface Work {
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

const mockedWorksResponse: Work[] = [
  {
    id: "1",
    slug: "slug1",
    redirectTo: "",
    category: "philosophy",
    title: "Example Work 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl quis aliquam ultricies, nisl nisl aliquet nisl, nec ali",
    thumbnailUrl: "https://picsum.photos/200",
    publishedAt: "2024-01-01 00:00:00",
    updatedAt: "2024-01-01 00:00:00",
  },
  {
    id: "2",
    slug: "slug2",
    redirectTo: "",
    category: "development",
    title: "Example Work 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl quis aliquam ultricies, nisl nisl aliquet nisl, nec ali",
    thumbnailUrl: "https://picsum.photos/200",
    publishedAt: "2024-01-01 00:00:00",
    updatedAt: "2024-01-01 00:00:00",
  },
  {
    id: "3",
    slug: "slug3",
    redirectTo: "",
    category: "photography",
    title: "Example Work 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl quis aliquam ultricies, nisl nisl aliquet nisl, nec ali",
    thumbnailUrl: "https://picsum.photos/200",
    publishedAt: "2024-01-01 00:00:00",
    updatedAt: "2024-01-01 00:00:00",
  },
  {
    id: "4",
    slug: "slug4",
    redirectTo: "",
    category: "music",
    title: "Example Work 4",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl quis aliquam ultricies, nisl nisl aliquet nisl, nec ali",
    thumbnailUrl: "https://picsum.photos/200",
    publishedAt: "2024-01-01 00:00:00",
    updatedAt: "2024-01-01 00:00:00",
  },
  {
    id: "5",
    slug: "slug5",
    redirectTo: "",
    category: "philosophy",
    title: "Example Work 5",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl quis aliquam ultricies, nisl nisl aliquet nisl, nec ali",
    thumbnailUrl: "https://picsum.photos/200",
    publishedAt: "2024-01-01 00:00:00",
    updatedAt: "2024-01-01 00:00:00",
  },
  {
    id: "6",
    slug: "",
    redirectTo: "https://youtu.be/XhfNs3fSm2k?si=NMCefbtk6uN9JPAk",
    category: "music",
    title: "God's Warrior - Move It",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl quis aliquam ultricies, nisl nisl aliquet nisl, nec ali",
    thumbnailUrl: "https://i.ytimg.com/vi/XhfNs3fSm2k/maxresdefault.jpg",
    publishedAt: "2024-01-01 00:00:00",
    updatedAt: "2024-01-01 00:00:00",
  },
  {
    id: "6",
    slug: "",
    redirectTo:
      "https://soundcloud.com/imkotori/wisteria?si=d2d12a8a0b224d779aef793aa39827cd&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
    category: "music",
    title: "Wisteria by Kotori",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl quis aliquam ultricies, nisl nisl aliquet nisl, nec ali",
    thumbnailUrl:
      "https://i1.sndcdn.com/avatars-cLQysnY81lvRmbyb-XzS62w-t500x500.jpg",
    publishedAt: "2024-01-01 00:00:00",
    updatedAt: "2024-01-01 00:00:00",
  },
];

export const getWorks = async (props?: Props): Promise<Work[]> => {
  const { ENVIRONMENT, NOTION_SECRET_KEY, NOTION_DATABASE_ID } = useEnv();

  if (ENVIRONMENT !== "production") {
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
            ? page.properties.createdAt.created_time
            : "",
        title:
          page.properties.title.type === "title"
            ? (page.properties.title.title.pop()?.plain_text ?? "")
            : "",
      };
    });
};
