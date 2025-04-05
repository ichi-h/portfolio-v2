export interface Work {
  slug: string;
  category: "philosophy" | "development" | "music" | "photograph";
  title: string;
  description: string;
  body: string;
  thumbnailUrl: string;
  publishedAt: string;
  updatedAt: string;
}
