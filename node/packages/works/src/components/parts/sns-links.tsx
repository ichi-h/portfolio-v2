import {
  Link,
  Icon,
  VRCIcon,
  XIcon,
  YouTubeIcon,
  SoundCloudIcon,
} from "portfolio-ui";

import * as styles from "./sns-links.css";
import type { ComponentProps, FC } from "react";

interface Props extends ComponentProps<"div"> {
  variant?: "light" | "dark";
  gap?: "normal" | "small";
}

export const SNSLinks: FC<Props> = ({
  variant = "light",
  gap = "normal",
  className,
  ...props
}) => {
  const color = variant === "light" ? "mono.50" : "mono.900";

  return (
    <div
      className={`${styles.links} ${styles.linksGapVariant[gap]} ${className}`}
      {...props}
    >
      <Link
        className={styles.snsLink}
        href="https://x.com/ichi_h4"
        openInNewTab
      >
        <Icon className={styles.snsIcon} icon={XIcon} color={color} />
      </Link>
      <Link
        className={styles.snsLink}
        href="https://vrchat.com/home/user/usr_a1a9f558-fe09-4222-8b19-3e7d8cf4ad65"
        openInNewTab
      >
        <Icon className={styles.snsIcon} icon={VRCIcon} color={color} />
      </Link>
      <Link
        className={styles.snsLink}
        href="https://www.youtube.com/@ichi-h"
        openInNewTab
      >
        <Icon className={styles.snsIcon} icon={YouTubeIcon} color={color} />
      </Link>
      <Link
        className={styles.snsLink}
        href="https://soundcloud.com/ichi-h"
        openInNewTab
      >
        <Icon className={styles.snsIcon} icon={SoundCloudIcon} color={color} />
      </Link>
    </div>
  );
};
