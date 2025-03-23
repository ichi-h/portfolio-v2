import { Background } from "portfolio-ui";

import { Footer } from "../components/parts/footer";
import { Nav } from "../components/parts/nav";

import {
  layoutParentStyle,
  layoutStyle,
  layoutBgStyle,
  layoutContentStyle,
} from "./layout.css";

import type { ComponentProps, FC } from "react";

type Props = ComponentProps<"div">;

export const Layout: FC<Props> = ({ children }) => (
  <div className={layoutParentStyle}>
    <div className={layoutStyle}>
      <Nav />
      <Background
        classNameForBg={layoutBgStyle}
        color="mono.50"
        layoutPosition="absolute"
      >
        <div className={layoutContentStyle}>{children}</div>
      </Background>
      <Footer useCC={true} />
    </div>
  </div>
);
