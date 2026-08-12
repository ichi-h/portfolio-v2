import { Heading, Link, Text, Avatar } from "portfolio-ui";

import me from "../../../assets/me_512x512.webp?url";
import { Footer } from "../../parts/footer";

import * as styles from "./index.css";
import { SNSLinks } from "../../parts/sns-links";

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
            <SNSLinks />
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
