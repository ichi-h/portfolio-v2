import {
  Heading,
  Link,
  Text,
  Avatar,
  Icon,
  GitHubIcon,
  XIcon,
  ZennIcon,
} from "portfolio-ui";
import me from "../../../assets/me_512x512.webp?url";
import * as styles from "./index.css";

export const TopSection = () => {
  return (
    <div className={styles.topSection}>
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
      <div className={styles.topLink}>
          <Link href="https://ichi-h.com" openInNewTab color="mono.50">
             <Text className={styles.description}>Philosophy, Art & Life &gt;</Text>
          </Link>
      </div>
    </div>
  );
};
