import { Link, Icon, DownArrowIcon } from "portfolio-ui";

import * as styles from "./scroll-icon.css";

import type { ComponentProps, FC } from "react";

interface Props {
  to: string;
  className?: string;
  variant?: "medium" | "small";
}

export const ScrollIcon: FC<Props> = ({
  className,
  to,
  variant = "medium",
}) => {
  return (
    <Link type="a" href={to} className={className}>
      <Icon
        className={`${styles.downIcon} ${styles.downIconVariant[variant]}`}
        icon={DownArrowIcon}
        color="mono.50"
      />
    </Link>
  );
};
