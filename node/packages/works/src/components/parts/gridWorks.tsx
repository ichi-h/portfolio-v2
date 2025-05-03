import {
  Paragraph,
  Text,
  Link,
  Icon,
  UpdateIcon,
  YouTubeIcon,
  SoundCloudIcon,
  OpenInNewIcon,
} from "portfolio-ui";

import { useEnv } from "../../utils/env";

import { Anchor } from "./anchor";
import * as styles from "./gridWorks.css";

import type { Work } from "../../api/notion/works";
import type { FC } from "react";
import type { COLOR } from "@/packages/styles/constants";

interface Props {
  works: Work[];
}

const youtubeLinks = [
  "https://youtu.be",
  "https://www.youtube.com",
  "https://youtube.com",
];

const caseOfUrl =
  <T,>(pattern: { youtube: () => T; soundcloud: () => T; others: () => T }) =>
  (url: string): T => {
    if (youtubeLinks.some((link) => url.includes(link))) {
      return pattern.youtube();
    }
    if (url.includes("https://soundcloud.com")) {
      return pattern.soundcloud();
    }
    return pattern.others();
  };

export const GridWorks: FC<Props> = ({ works }) => {
  return (
    <div className={styles.cardGrid}>
      {works.map((work) => (
        <Link
          className={styles.cardLink}
          key={work.slug}
          as={Anchor}
          asProps={{
            href:
              work.redirectTo !== "" ? work.redirectTo : `/works/${work.slug}`,
            target: work.redirectTo !== "" ? "_blank" : "_self",
          }}
          decoration="none"
        >
          <div className={styles.card}>
            <div className={styles.cardLayout}>
              <div className={styles.cardThumbnailBox}>
                {work.redirectTo !== "" && (
                  <Icon
                    className={styles.cardThumbnailIcon}
                    size={7}
                    icon={caseOfUrl({
                      youtube: () => YouTubeIcon,
                      soundcloud: () => SoundCloudIcon,
                      others: () => OpenInNewIcon,
                    })(work.redirectTo)}
                    color={caseOfUrl<keyof typeof COLOR>({
                      youtube: () => "youtube",
                      soundcloud: () => "soundcloud",
                      others: () => "mono.500",
                    })(work.redirectTo)}
                  />
                )}
                <img
                  className={styles.cardThumbnail}
                  src={
                    work.thumbnailUrl ||
                    `${useEnv().OG_IMAGE_SERVER_URL}?title=${work.title}`
                  }
                  alt={work.title}
                />
              </div>
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
