import clsx from "clsx";
import { h, w } from "portfolio-styles";
import * as styles from "portfolio-styles/components/avatar.css";
import { ComponentProps } from "react";

type Props = {
  src: string;
  size?: keyof typeof w;
} & ComponentProps<"img">;

export const Avatar = ({ className, src, size, ...props }: Props) => {
  return (
    <img
      className={clsx([
        className,
        styles.avatarBase,
        size && w[size],
        size && h[size],
      ])}
      src={src}
      {...props}
    />
  );
};
