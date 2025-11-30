import { Article, Link, Paragraph, Text } from "portfolio-ui";
import { type FC } from "react";

import "../../parts/linkCard.css";

import * as styles from "./index.css";

import type { TechPost } from "../../../api/notion/tech";

interface Props {
  post: TechPost;
  body: string;
}

export const PostPage: FC<Props> = ({ post, body }) => {
  return (
    <div className={styles.layout}>
      <div className={styles.matter}>
        <Text color="mono.500">#{post.category}</Text>
      </div>
      <div className={styles.matter}>
        <Text color="mono.900">Published: {post.publishedAt}</Text>
        <Text color="mono.900">Updated: {post.updatedAt}</Text>
      </div>
      <Article dangerouslySetInnerHTML={{ __html: body }} />
      <Paragraph align="right">
        <Link
          className={styles.ccImage}
          href="http://creativecommons.org/licenses/by/4.0/"
          rel="license"
          openInNewTab={true}
        >
          <img
            alt="Creative Commons License"
            src="https://i.creativecommons.org/l/by/4.0/88x31.png"
          />
        </Link>
      </Paragraph>
    </div>
  );
};
