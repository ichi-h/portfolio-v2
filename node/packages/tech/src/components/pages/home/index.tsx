import {
  Heading,
  Link,
  Text,
  Avatar,
  Button,
  Icon,
  GitHubIcon,
  XIcon,
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
          <Link className={styles.avatarLink} href="/posts">
            <Avatar className={styles.avatar} src={me} />
          </Link>
          <Heading level="1">
            <Text className={styles.title} color="mono.50">
              tech.ichi-h.com
            </Text>
          </Heading>
          <Text className={styles.description} color="mono.50">
            Technical articles and development notes
          </Text>
        </div>
        <div className={styles.content}>
          <div className={styles.contentBox}>
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
        </div>
        <Anchor href="/posts">
          <Button className={styles.enterButton} variant="white" bold>
            View Posts
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
