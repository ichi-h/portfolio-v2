import {
  Heading,
  Link,
  Text,
  Avatar,
  Button,
  Icon,
  GitHubIcon,
  XIcon,
  YouTubeIcon,
  SoundCloudIcon,
} from "portfolio-ui";

import me from "../../../assets/me_512x512.webp?url";
import { Anchor } from "../../parts/anchor";
import { Footer } from "../../parts/footer";

import * as styles from "./index.css";

export const Home = () => {
  return (
    <>
      <div className={styles.outer}>
        <div className={styles.me}>
          <Avatar className={styles.avatar} src={me} />
          <Heading level="1">
            <Text className={styles.title} color="mono.50">
              ichi-h.com
            </Text>
          </Heading>
        </div>
        <div className={styles.content}>
          <div className={styles.contentBox}>
            <Heading level="2">
              <Text className={styles.categoryTitle} color="mono.50">
                Tech
              </Text>
            </Heading>
            <div className={styles.links}>
              <Link
                className={styles.snsLink}
                href="https://x.com/ichi_h3"
                openInNewTab
              >
                <Icon className={styles.snsIcon} icon={XIcon} color="mono.50" />
              </Link>
              <Link
                className={styles.snsLink}
                href="https://github.com/ichi-h"
                openInNewTab
              >
                <Icon
                  className={styles.snsIcon}
                  icon={GitHubIcon}
                  color="mono.50"
                />
              </Link>
            </div>
          </div>
          <div className={styles.separator} />
          <div className={styles.contentBox}>
            <Heading level="2">
              <Text className={styles.categoryTitle} color="mono.50">
                Creative
              </Text>
            </Heading>
            <div className={styles.links}>
              <Link
                className={styles.snsLink}
                href="https://x.com/ichi_h4"
                openInNewTab
              >
                <Icon className={styles.snsIcon} icon={XIcon} color="mono.50" />
              </Link>
              <Link
                className={styles.snsLink}
                href="https://www.youtube.com/@ichi-h"
                openInNewTab
              >
                <Icon
                  className={styles.snsIcon}
                  icon={YouTubeIcon}
                  color="mono.50"
                />
              </Link>
              <Link
                className={styles.snsLink}
                href="https://soundcloud.com/ichi-h"
                openInNewTab
              >
                <Icon
                  className={styles.snsIcon}
                  icon={SoundCloudIcon}
                  color="mono.50"
                />
              </Link>
            </div>
          </div>
        </div>
        <Anchor href="/works">
          <Button className={styles.enterButton} variant="white" bold>
            Enter
          </Button>
        </Anchor>
        <div className={styles.footer}>
          <Footer />
        </div>
      </div>
      <div className={styles.overlay} />
    </>
  );
};
