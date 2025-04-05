import codeStyle from "highlight.js/styles/base16/snazzy.min.css?url";
import {
  Article,
  Button,
  Icon,
  PublishIcon,
  Text,
  UpdateIcon,
} from "portfolio-ui";
import { type FC } from "react";

import "../../parts/linkCard.css";

import { useEnv } from "../../../utils/env";
import { Head } from "../../parts/head";
import { Title } from "../../parts/title";

import * as styles from "./index.css";

import type { Work } from "./types";

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
}

export const WorkPage: FC<Props> = ({ work }) => {
  return (
    <div className={styles.layout}>
      <Title>{work.title}</Title>
      <div className={styles.matter}>
        <Button size="sm" rounded>
          # {work.category}
        </Button>
      </div>
      <div className={styles.matter}>
        <div className={styles.date}>
          <Icon icon={PublishIcon} size={4} />
          <Text color="mono.900">{work.publishedAt}</Text>
        </div>
        <div className={styles.date}>
          <Icon icon={UpdateIcon} size={4} />
          <Text color="mono.900">{work.updatedAt}</Text>
        </div>
      </div>
      <Article dangerouslySetInnerHTML={{ __html: work.body }} />
    </div>
  );
};
