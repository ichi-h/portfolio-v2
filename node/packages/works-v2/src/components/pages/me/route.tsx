import { Avatar, GitHubIcon, Icon, Link, Text, XIcon } from "portfolio-ui";

import me from "../../../assets/me_512x512.webp?url";
import { Hr } from "../../parts/hr";
import { Title } from "../../parts/title";

import * as styles from "./route.css";

export default function Index() {
  return (
    <div className={styles.layout}>
      <Title>About me</Title>
      <Avatar className={styles.avatar} src={me} size={64} />
      <Text className={styles.name} color="mono.900">
        ichi-h
      </Text>
      <Text className={styles.subtext} color="mono.900">
        考えること。作ること。
      </Text>
      <div className={styles.snsLinks}>
        <Link
          className={styles.snsLink}
          href="https://github.com/ichi-h"
          openInNewTab
        >
          <Icon className={styles.snsIcon} icon={GitHubIcon} />
        </Link>
        <Link
          className={styles.snsLink}
          href="https://twitter.com/ichi_h3"
          openInNewTab
        >
          <Icon className={styles.snsIcon} icon={XIcon} />
        </Link>
      </div>
      <Hr />
      <Text fontSize="4" color="mono.900">
        Coming soon...
      </Text>
    </div>
  );
}
