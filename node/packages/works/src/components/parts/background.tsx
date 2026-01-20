import { Background as Bg } from "portfolio-ui";

import { backgroundChildStyle } from "./background.css";

import type { ComponentProps, FC } from "react";

type Props = ComponentProps<"div">;

export const Background: FC<Props> = ({ children }) => {
  return (
    <Bg
      classNameForBg={backgroundChildStyle}
      src="/bg.webp"
      opacity={80}
      layoutPosition="fixed"
    >
      {children}
    </Bg>
  );
};
