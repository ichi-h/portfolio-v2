import {
  createNotionClient,
  excludeByCategory,
  queryDatabase,
  type NotionPage,
} from "portfolio-shared/notion";
import { useEnv } from "../../utils/env";

interface Props {
  slug?: string;
  category?: string;
}

export interface Work {
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

const mockedWorksResponse: Work[] = [
  {
    id: "1",
    slug: "slug1",
    redirectTo: "",
    categories: ["philosophy", "music"],
    title: "Example Work 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl quis aliquam ultricies, nisl nisl aliquet nisl, nec ali",
    thumbnailUrl: "https://picsum.photos/200",
    publishedAt: "2024-01-01",
    updatedAt: "2024-01-01",
  },
  {
    id: "2",
    slug: "",
    redirectTo: "https://google.com",
    categories: ["development"],
    title: "Google",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl quis aliquam ultricies, nisl nisl aliquet nisl, nec ali",
    thumbnailUrl: "https://picsum.photos/200",
    publishedAt: "2024-01-01",
    updatedAt: "2024-01-01",
  },
  {
    id: "3",
    slug: "slug3",
    redirectTo: "",
    categories: ["photography"],
    title: "Example Work 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl quis aliquam ultricies, nisl nisl aliquet nisl, nec ali",
    thumbnailUrl: "https://picsum.photos/200",
    publishedAt: "2024-01-01",
    updatedAt: "2024-01-01",
  },
  {
    id: "4",
    slug: "slug4",
    redirectTo: "",
    categories: ["music"],
    title: "Example Work 4",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl quis aliquam ultricies, nisl nisl aliquet nisl, nec ali",
    thumbnailUrl: "https://picsum.photos/200",
    publishedAt: "2024-01-01",
    updatedAt: "2024-01-01",
  },
  {
    id: "5",
    slug: "slug5",
    redirectTo: "",
    categories: ["philosophy"],
    title: "Example Work 5",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl quis aliquam ultricies, nisl nisl aliquet nisl, nec ali",
    thumbnailUrl: "https://picsum.photos/200",
    publishedAt: "2024-01-01",
    updatedAt: "2024-01-01",
  },
  {
    id: "6",
    slug: "",
    redirectTo: "https://youtu.be/XhfNs3fSm2k?si=NMCefbtk6uN9JPAk",
    categories: ["music"],
    title: "God's Warrior - Move It",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl quis aliquam ultricies, nisl nisl aliquet nisl, nec ali",
    thumbnailUrl: "https://i.ytimg.com/vi/XhfNs3fSm2k/maxresdefault.jpg",
    publishedAt: "2024-01-01",
    updatedAt: "2024-01-01",
  },
  {
    id: "6",
    slug: "",
    redirectTo:
      "https://soundcloud.com/imkotori/wisteria?si=d2d12a8a0b224d779aef793aa39827cd&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
    categories: ["music"],
    title: "Wisteria by Kotori",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl quis aliquam ultricies, nisl nisl aliquet nisl, nec ali",
    thumbnailUrl:
      "https://i1.sndcdn.com/avatars-cLQysnY81lvRmbyb-XzS62w-t500x500.jpg",
    publishedAt: "2024-01-01",
    updatedAt: "2024-01-01",
  },
];

export const getWorks = async (props?: Props): Promise<Work[]> => {
  const { ENVIRONMENT, NOTION_SECRET_KEY, NOTION_DATABASE_ID } = useEnv();

  if (ENVIRONMENT !== "production") {
    return mockedWorksResponse;
  }

  const notion = createNotionClient(NOTION_SECRET_KEY);
  const allPages = await queryDatabase(notion, NOTION_DATABASE_ID, props);

  // Exclude development categories for works
  // const filteredPages = excludeByCategory(allPages, "development");

  // return filteredPages.map(mapNotionPageToWork);
  return allPages.map(mapNotionPageToWork);
};

const mapNotionPageToWork = (page: NotionPage): Work => {
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
