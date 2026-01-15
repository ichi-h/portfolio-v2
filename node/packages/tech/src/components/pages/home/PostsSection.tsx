import { GridPosts, type Post } from "portfolio-shared";
import { Heading, Text } from "portfolio-ui";

import * as styles from "./PostsSection.css";

import type { TechPost } from "../../../api/notion/tech";

interface Props {
  posts: TechPost[];
}

export const PostsSection = ({ posts }: Props) => {
  // Convert TechPost to Post format for GridPosts component
  const gridPosts: Post[] = posts.map((post) => ({
    id: post.id,
    slug: post.slug,
    redirectTo: post.redirectTo,
    categories: post.categories,
    title: post.title,
    description: post.description,
    thumbnailUrl: post.thumbnailUrl,
    publishedAt: post.publishedAt,
    updatedAt: post.updatedAt,
  }));

  return (
    <div className={styles.contentSection} id="posts">
      <Heading level="2" color="mono.50">
        Posts
      </Heading>

      <GridPosts
        className={styles.posts}
        posts={gridPosts}
        theme="dark"
        baseUrl="/posts"
      />
    </div>
  );
};
