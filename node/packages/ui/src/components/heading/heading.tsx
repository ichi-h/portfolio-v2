import clsx from "clsx";
import * as styles from "portfolio-styles/components/heading.css";
import { ComponentProps } from "react";

type Props = {
  level: `${keyof typeof styles.heading}`;
} & ComponentProps<"h1">;

export const Heading = ({ children, className, level, ...props }: Props) => {
  const Component = `h${level}` as const;
  return (
    <Component className={clsx([styles.heading[level], className])} {...props}>
      {children}
    </Component>
  );
};
