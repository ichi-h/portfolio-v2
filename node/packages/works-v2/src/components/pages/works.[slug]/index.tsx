import codeStyle from "highlight.js/styles/base16/snazzy.min.css?url";
import { Article, Link, Text } from "portfolio-ui";
import { type FC } from "react";

import "../../parts/linkCard.css";

import { useEnv } from "../../../utils/env";
import { Anchor } from "../../parts/anchor";
import { Head } from "../../parts/head";

import * as styles from "./index.css";

import type { Work } from "../../../api/notion/works";

interface MetaProps {
  slug: string;
  title: string;
  description: string;
}

export const WorkHead: FC<MetaProps> = ({ slug, title, description }) => {
  const { OG_IMAGE_SERVER_URL } = useEnv();
  return (
    <>
      <Head
        url={`/works/${slug}`}
        title={`${title} - ichi-h.com`}
        description={description}
        ogType="article"
        ogImage={`${OG_IMAGE_SERVER_URL}?title=${title}`}
      />
      <link rel="stylesheet" href={codeStyle} />
    </>
  );
};

interface Props {
  work: Work;
  body: string;
}

export const WorkPage: FC<Props> = ({ work, body }) => {
  return (
    <div className={styles.layout}>
      <div className={styles.matter}>
        <Link
          as={Anchor}
          asProps={{ href: `/categories/${work.category}` }}
          color="mono.500"
        >
          #{work.category}
        </Link>
      </div>
      <div className={styles.matter}>
        <Text color="mono.900">Published: {work.publishedAt}</Text>
        <Text color="mono.900">Updated: {work.updatedAt}</Text>
      </div>
      <Article dangerouslySetInnerHTML={{ __html: body }} />
    </div>
  );
};
