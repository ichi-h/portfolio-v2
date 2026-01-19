import {
  Heading,
  Link,
  Text,
  Avatar,
  Icon,
  XIcon,
  YouTubeIcon,
  SoundCloudIcon,
} from "portfolio-ui";

import me from "../../../assets/me_512x512.webp?url";
import { Footer } from "../../parts/footer";

import * as styles from "./index.css";

export const Home = () => {
  return (
    <>
      <div className={styles.outer}>
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <Heading level="1">
              <Text className={styles.title} color="mono.50">
                ichi-h.com
              </Text>
            </Heading>
          </div>
          <div className={styles.headerRight}>
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

        <div className={styles.me}>
          <Link className={styles.avatarLink} href="/about">
            <Avatar className={styles.avatar} src={me} />
          </Link>
          <Text className={styles.name} color="mono.50">
            ichi-h
          </Text>
          <div className={styles.pageLinks}>
            <Link className={styles.pageLink} href="/about" color="mono.50">
              About
            </Link>
            <Link className={styles.pageLink} href="/works" color="mono.50">
              Works
            </Link>
          </div>
        </div>

        <div className={styles.footer}>
          <Footer />
        </div>
      </div>

      <div className={styles.overlay} />
    </>
  );
};
