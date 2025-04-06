import { Paragraph, Text, Link, Icon, UpdateIcon } from "portfolio-ui";

import { useEnv } from "../../utils/env";

import { Anchor } from "./anchor";
import * as styles from "./gridWorks.css";

import type { Work } from "../../api/notion/works";
import type { FC } from "react";

interface Props {
  works: Work[];
}
export const GridWorks: FC<Props> = ({ works }) => {
  return (
    <div className={styles.cardGrid}>
      {works.map((work) => (
        <Link
          className={styles.cardLink}
          key={work.slug}
          as={Anchor}
          asProps={{ href: `/works/${work.slug}` }}
          decoration="none"
        >
          <div className={styles.card}>
            <div className={styles.cardLayout}>
              <img
                className={styles.cardThumbnail}
                src={
                  work.thumbnailUrl ||
                  `${useEnv().OG_IMAGE_SERVER_URL}?title=${work.title}`
                }
                alt={work.title}
              />
              <div className={styles.cardPublishedAt}>
                <Icon size={3} icon={UpdateIcon} />
                <Text fontSize="3" color="mono.900">
                  {work.publishedAt}
                </Text>
              </div>
              <Paragraph
                overflow="hidden"
                textOverflow="ellipsis"
                lineClamp={3}
              >
                <Text className={styles.cardTitle}>{work.title}</Text>
              </Paragraph>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};
