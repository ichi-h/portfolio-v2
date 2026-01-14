import {
  Heading,
  Link,
  Text,
  Avatar,
  Icon,
  GitHubIcon,
  XIcon,
  ZennIcon,
  Article,
} from "portfolio-ui";

import me from "../../../assets/me_512x512.webp?url";
import { Footer } from "../../parts/footer";

import * as styles from "./index.css";

interface Props {
  meBody: string;
}

export const Home = ({ meBody }: Props) => {
  return (
    <>
      <div className={styles.contentAnimation}>
        <div className={styles.contentSection}>
          <div className={styles.me}>
            <Link className={styles.avatarLink} href="/posts">
              <Avatar className={styles.avatar} src={me} />
            </Link>
            <Heading level="1">
              <Text className={styles.title} color="mono.50">
                tech.ichi-h.com
              </Text>
            </Heading>
          </div>
          <div className={styles.content}>
            <div className={styles.contentBox}>
              <div className={styles.links}>
                <Link
                  className={styles.snsLink}
                  href="https://x.com/ichi_h3"
                  openInNewTab
                >
                  <Icon
                    className={styles.snsIcon}
                    icon={XIcon}
                    color="mono.50"
                  />
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
                <Link
                  className={styles.snsLink}
                  href="https://zenn.dev/ichi_h"
                  openInNewTab
                >
                  <Icon
                    className={styles.snsIcon}
                    icon={ZennIcon}
                    color="mono.50"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.contentSection}>
          <Heading level="2">
            <Text className={styles.heading} color="mono.50">
              fun resolve(issue): happiness value
            </Text>
          </Heading>
          <Article dangerouslySetInnerHTML={{ __html: meBody }} theme="dark" />
        </div>
        <div className={styles.contentSection}>
          <Heading level="2">
            <Text className={styles.heading} color="mono.50">
              Posts
            </Text>
          </Heading>
        </div>
        <div className={styles.footer}>
          <Footer />
        </div>
      </div>
      <div className={styles.overlay} />
    </>
  );
};
