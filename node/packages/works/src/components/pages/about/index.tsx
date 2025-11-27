import { Article, Avatar, Text } from "portfolio-ui";

import me from "../../../assets/me_512x512.webp?url";

import * as styles from "./index.css";

import type { FC } from "react";

interface Props {
  body: string;
}

export const About: FC<Props> = ({ body }) => {
  return (
    <div className={styles.layout}>
      <Avatar className={styles.avatar} src={me} />
      <Text className={styles.name} color="mono.900">
        ichi-h
      </Text>
      <Article dangerouslySetInnerHTML={{ __html: body }} />
    </div>
  );
};
