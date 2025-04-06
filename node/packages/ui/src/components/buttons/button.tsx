import clsx from "clsx";
import * as styles from "portfolio-styles/components/button.css";
import { ComponentProps } from "react";

type Props = {
  children?: React.ReactNode;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  variant?: "black" | "white";
  bold?: boolean;
  rounded?: boolean;
} & ComponentProps<"button">;

export const Button = ({
  className,
  children,
  size,
  variant = "black",
  bold = false,
  rounded = false,
  ...props
}: Props) => {
  return (
    <button
      {...props}
      className={clsx([
        styles.buttonBase,
        styles.buttonVariant[variant],
        styles.buttonWeight[`${bold}`],
        size && styles.buttonSize[size],
        styles.buttonRound[rounded ? "rounded" : "default"],
        className,
      ])}
    >
      {children}
    </button>
  );
};
