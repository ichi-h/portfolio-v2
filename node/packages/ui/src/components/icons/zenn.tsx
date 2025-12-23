import { COLOR } from "portfolio-styles";
import * as styles from "portfolio-styles/components/icon.css";
import { ComponentProps } from "react";

type Props = {
  color?: keyof typeof COLOR;
} & ComponentProps<"svg">;

export const ZennIcon = ({ color, ...props }: Props) => {
  return (
    <svg
      width={styles.w[4]}
      height={styles.h[4]}
      viewBox="-10 23 105 40"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill={color && COLOR[color]}
        d="M2.4 83.3h17c.9 0 1.7-.5 2.2-1.2L68.4 5.2C69 4.2 68.3 3 67.1 3H51c-.8 0-1.5.4-1.9 1.1L1.6 81.9C1.3 82.5 1.7 83.3 2.4 83.3zM61 82.1l22.1-35.5c.7-1.1-.1-2.5-1.4-2.5H65.7c-.6 0-1.2.3-1.5.8L41.5 81.2c-.6.9.1 2.1 1.2 2.1h16.3C59.8 83.3 60.6 82.9 61 82.1z"
      ></path>
    </svg>
  );
};
