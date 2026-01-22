import { Link, Icon, DownArrowIcon, UpArrowIcon } from "portfolio-ui";

import * as styles from "./scroll-icon.css";

import type { FC } from "react";

interface Props {
  to: string;
  direction: "up" | "down";
  id?: string;
  className?: string;
}

export const ScrollIcon: FC<Props> = ({ to, direction, className, id }) => {
  return (
    <Link type="a" href={to} className={className} id={id}>
      <Icon
        className={styles.arrowIcon}
        icon={direction === "up" ? UpArrowIcon : DownArrowIcon}
      />
    </Link>
  );
};
