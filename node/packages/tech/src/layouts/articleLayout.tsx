import { Background } from "portfolio-ui";

import { Footer } from "../components/parts/footer";
import { Nav } from "../components/parts/nav";
import { Title } from "../components/parts/title";

import {
  layoutParentStyle,
  layoutStyle,
  layoutBgStyle,
  layoutContentStyle,
} from "./articleLayout.css";

import type { ComponentProps, FC } from "react";

type Props = {
  title: string;
} & ComponentProps<"div">;

export const ArticleLayout: FC<Props> = ({ title, children }) => (
  <div className={layoutParentStyle}>
    <div className={layoutStyle}>
      <Nav />
      <Background
        classNameForBg={layoutBgStyle}
        color="mono.50"
        layoutPosition="absolute"
      >
        <div className={layoutContentStyle}>
          <Title>{title}</Title>
          {children}
        </div>
      </Background>
      <Footer />
    </div>
  </div>
);
