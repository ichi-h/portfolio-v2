import { Link, Icon, DownArrowIcon } from "portfolio-ui";

import * as styles from "./scroll-icon.css";

import type { FC } from "react";

interface Props {
  to: string;
  className?: string;
  classNameForIcon?: string;
}

export const ScrollIcon: FC<Props> = ({ className, classNameForIcon, to }) => {
  return (
    <Link type="a" href={to} className={className}>
      <Icon
        className={`${styles.downIcon} ${classNameForIcon ?? ""}`}
        icon={DownArrowIcon}
        color="mono.50"
      />
    </Link>
  );
};
