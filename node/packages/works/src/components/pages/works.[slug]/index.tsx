import { Article, Link, Paragraph, Text } from "portfolio-ui";
import { type FC } from "react";

import "../../parts/linkCard.css";

import { Anchor } from "../../parts/anchor";

import * as styles from "./index.css";

import type { Work } from "../../../api/notion/works";

interface Props {
  work: Work;
  body: string;
}

export const WorkPage: FC<Props> = ({ work, body }) => {
  return (
    <div className={styles.layout}>
      <div className={styles.categories}>
        {work.categories.map((category) => (
          <Link
            as={Anchor}
            asProps={{ href: `/categories/${category}` }}
            color="mono.500"
            key={category}
          >
            #{category}
          </Link>
        ))}
      </div>
      <div className={styles.matter}>
        <Text color="mono.900">Published: {work.publishedAt}</Text>
        <Text color="mono.900">Updated: {work.updatedAt}</Text>
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
