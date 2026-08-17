import { Avatar, Link, Paragraph, Text } from "portfolio-ui";

import me from "../../assets/me_512x512.webp?url";
import * as styles from "./author.css";
import { SNSLinks } from "./sns-links";
import { PROFILE_DESCRIPTIONS } from "../../constants/profile";

export const Author = () => (
  <div className={styles.authorBox}>
    <Link href="/about" color="mono.900" className={styles.avatarBox}>
      <Avatar className={styles.avatar} src={me} />
    </Link>
    <div className={styles.profileBox}>
      <Paragraph className={styles.profileName}>
        <Link href="/about" color="mono.900">
          <Text weight="bold" fontSize="6">
            ichi-h
          </Text>
        </Link>
      </Paragraph>
      <Paragraph>
        {PROFILE_DESCRIPTIONS.flatMap((item, index) =>
          index === 0 ? [item] : [<br key={`br-${index}`} />, item],
        )}
      </Paragraph>
      <SNSLinks className={styles.snsLinks} variant="dark" gap="small" />
    </div>
  </div>
);
