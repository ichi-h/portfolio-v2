import { Article, Avatar, Text } from "portfolio-ui";

import me from "../../../assets/me_512x512.webp?url";
import { Hr } from "../../parts/hr";
import { Title } from "../../parts/title";

import * as styles from "./index.css";

import type { FC } from "react";

interface Props {
  body: string;
}

export const About: FC<Props> = ({ body }) => {
  return (
    <div className={styles.layout}>
      <Title>About me</Title>
      <Avatar className={styles.avatar} src={me} />
      <Text className={styles.name} color="mono.900">
        ichi-h
      </Text>
      <Text className={styles.subtext} color="mono.900">
        To live is to think, create and sing.
        <br />
        考えることと作ることと歌うことが好きです。
      </Text>
      <Hr />
      <Article dangerouslySetInnerHTML={{ __html: body }} />
    </div>
  );
};
