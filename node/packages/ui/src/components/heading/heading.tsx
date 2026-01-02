import clsx from "clsx";
import * as styles from "portfolio-styles/components/heading.css";
import { ComponentProps } from "react";

type Props = {
  level: `${keyof typeof styles.heading}`;
  color?: keyof (typeof styles)["fontColor"];
} & ComponentProps<"h1">;

export const Heading = ({
  children,
  className,
  level,
  color,
  ...props
}: Props) => {
  const Component = `h${level}` as const;
  return (
    <Component
      className={clsx([
        styles.heading[level],
        styles.fontColor[color ?? "mono.900"],
        className,
      ])}
      {...props}
    >
      {children}
    </Component>
  );
};
