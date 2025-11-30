import { GridPosts } from "../../parts/gridPosts";

import type { TechPost } from "../../../api/notion/tech";
import type { FC } from "react";

interface Props {
  posts: TechPost[];
}

export const Posts: FC<Props> = ({ posts }) => {
  return <GridPosts posts={posts} />;
};
