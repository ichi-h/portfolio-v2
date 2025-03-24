import clsx from "clsx";
import * as styles from "portfolio-styles/components/icon.css";
import { COLOR } from "portfolio-styles/constants";
import { ComponentProps } from "react";

import { TIcon } from ".";

type Props = {
  icon: TIcon;
  size?: keyof typeof styles.w;
  color?: keyof typeof COLOR;
} & ComponentProps<"div">;

export const Icon = ({ className, icon, size, color, ...props }: Props) => {
  const Component = icon;
  return (
    <div className={clsx([className, size && styles.w[size]])} {...props}>
      <Component color={color} />
    </div>
  );
};
