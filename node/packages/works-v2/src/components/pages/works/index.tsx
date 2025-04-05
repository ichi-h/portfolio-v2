import { Paragraph, Text, Link, Icon, UpdateIcon } from "portfolio-ui";

import { useEnv } from "../../../utils/env";
import { Anchor } from "../../parts/anchor";
import { Title } from "../../parts/title";

import * as styles from "./index.css";

import type { FC } from "react";

type Category =
  | "development"
  | "music"
  | "photograph"
  | "philosophy"
  | undefined;

export type Model = {
  total: number;
  works: {
    slug: string;
    category: Category;
    title: string;
    description: string;
    thumbnailUrl: string;
    publishedAt: string;
    updatedAt: string;
  }[];
};

interface Props {
  model: Model;
}

export const Index: FC<Props> = ({ model }) => {
  return (
    <div className={styles.layout}>
      <Title>Works</Title>
      <div className={styles.cardGrid}>
        {model.works.map((work) => (
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
    </div>
  );
};
