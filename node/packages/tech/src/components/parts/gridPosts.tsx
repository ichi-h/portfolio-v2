import {
  Paragraph,
  Text,
  Link,
  Icon,
  UpdateIcon,
  OpenInNewIcon,
} from "portfolio-ui";

import { useEnv } from "../../utils/env";

import { Anchor } from "./anchor";
import * as styles from "./gridPosts.css";

import type { TechPost } from "../../api/notion/tech";
import type { FC } from "react";

interface Props {
  posts: TechPost[];
}

export const GridPosts: FC<Props> = ({ posts }) => {
  return (
    <div className={styles.cardGrid}>
      {posts.map((post) => (
        <Link
          className={styles.cardLink}
          key={post.slug || post.id}
          as={Anchor}
          asProps={{
            href:
              post.redirectTo !== "" ? post.redirectTo : `/posts/${post.slug}`,
            target: post.redirectTo !== "" ? "_blank" : "_self",
          }}
          decoration="none"
        >
          <div className={styles.card}>
            <div className={styles.cardLayout}>
              <div className={styles.cardThumbnailBox}>
                <img
                  className={styles.cardThumbnail}
                  src={
                    post.thumbnailUrl ||
                    `${useEnv().OG_IMAGE_SERVER_URL}?title=${post.title}`
                  }
                  alt={post.title}
                  loading="lazy"
                />
              </div>
              <div className={styles.cardDateAndCategory}>
                <div className={styles.cardPublishedAt}>
                  <Icon size={3} icon={UpdateIcon} />
                  <Text fontSize="3" color="mono.900">
                    {post.publishedAt}
                  </Text>
                </div>
                <Text fontSize="3" color="mono.500">
                  # {post.category}
                </Text>
              </div>
              <Paragraph
                overflow="hidden"
                textOverflow="ellipsis"
                lineClamp={3}
              >
                <Text className={styles.cardTitle}>{post.title}</Text>
                {post.redirectTo !== "" && (
                  <Icon size={4} icon={OpenInNewIcon} color="mono.500" />
                )}
              </Paragraph>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};
