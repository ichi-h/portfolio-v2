import clsx from "clsx";
import * as styles from "portfolio-styles/components/linkCard.css";

import { Icon, OpenInNewIcon, Paragraph, Text } from "../";

import type { ComponentProps, FC } from "react";

type Props = {
  href: string;
  title: string;
  description: string;
  thumbnailUrl?: string;
  theme?: "light" | "dark";
} & ComponentProps<"div">;

export const LinkCard: FC<Props> = ({
  className,
  href,
  title,
  description,
  thumbnailUrl,
  theme = "light",
  ...props
}) => (
  <div className={clsx([styles.hoverAnimation, className])} {...props}>
    <a
      className={styles.unstyledAnchor}
      href={href}
      rel="noopener noreferrer"
      target="_blank"
    >
      <div className={clsx([styles.linkCard, styles.linkCardVariant[theme]])}>
        <div className={styles.layout}>
          <div className={styles.content}>
            <Paragraph
              textOverflow="ellipsis"
              overflow="hidden"
              lineClamp={2}
              color={theme === "light" ? "mono.900" : "mono.50"}
            >
              <div className={styles.title}>
                <Text fontSize="5" weight="bold">
                  {title}
                </Text>
                <Icon icon={OpenInNewIcon} size={4} />
              </div>
            </Paragraph>
            <Paragraph
              textOverflow="ellipsis"
              overflow="hidden"
              lineClamp={2}
              color={theme === "light" ? "mono.900" : "mono.50"}
            >
              <Text fontSize="4">{description}</Text>
            </Paragraph>
          </div>
          {thumbnailUrl ? (
            <div
              className={styles.thumbnail}
              style={{ backgroundImage: `url(${thumbnailUrl})` }}
            />
          ) : (
            <div className={styles.thumbnail}>
              <Text fontSize="4" color="mono.500">
                No Image
              </Text>
            </div>
          )}
        </div>
      </div>
    </a>
  </div>
);
