import { Article, Avatar, Paragraph, Text } from "portfolio-ui";

import me from "../../../assets/me_512x512.webp?url";

import * as styles from "./index.css";

import type { FC } from "react";
import { PROFILE_DESCRIPTIONS } from "../../../constants/profile";
import { SNSLinks } from "../../parts/sns-links";

interface Props {
  body: string;
}

export const About: FC<Props> = ({ body }) => {
  return (
    <div className={styles.layout}>
      <div className={styles.profileBox}>
        <Avatar className={styles.avatar} src={me} />
        <Text className={styles.name} color="mono.900">
          ichi-h
        </Text>
        <SNSLinks variant="dark" />
        <div className={styles.subtext}>
          <Paragraph>{PROFILE_DESCRIPTIONS[0]}</Paragraph>
          <Paragraph>{PROFILE_DESCRIPTIONS[1]}</Paragraph>
          <Paragraph>{PROFILE_DESCRIPTIONS[2]}</Paragraph>
          <Paragraph>{PROFILE_DESCRIPTIONS[3]}</Paragraph>
        </div>
      </div>
      <Article dangerouslySetInnerHTML={{ __html: body }} />
    </div>
  );
};
