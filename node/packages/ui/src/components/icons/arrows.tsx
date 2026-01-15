import * as styles from "portfolio-styles/components/icon.css";
import { COLOR } from "portfolio-styles/constants";
import { ComponentProps } from "react";

type Props = {
  color?: keyof typeof COLOR;
} & ComponentProps<"svg">;

export const DownArrowIcon = ({ color = "mono.900", ...props }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={styles.w[4]}
      height={styles.h[4]}
      viewBox="0 -960 960 960"
      fill={COLOR[color]}
      {...props}
    >
      <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
    </svg>
  );
};

export const LeftArrowIcon = ({ color = "mono.900", ...props }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={styles.w[4]}
      height={styles.h[4]}
      viewBox="0 -960 960 960"
      fill={COLOR[color]}
      {...props}
    >
      <path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z" />
    </svg>
  );
};

export const RightArrowIcon = ({ color = "mono.900", ...props }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={styles.w[4]}
      height={styles.h[4]}
      viewBox="0 -960 960 960"
      fill={COLOR[color]}
      {...props}
    >
      <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
    </svg>
  );
};

export const UpArrowIcon = ({ color = "mono.900", ...props }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={styles.w[4]}
      height={styles.h[4]}
      viewBox="0 -960 960 960"
      fill={COLOR[color]}
      {...props}
    >
      <path d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z" />
    </svg>
  );
};
