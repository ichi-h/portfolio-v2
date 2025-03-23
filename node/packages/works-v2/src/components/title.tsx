import { Headline } from "portfolio-ui";

import { title } from "./title.css";

import type { FC } from "react";

type Props = {
  children: React.ReactNode;
};

export const Title: FC<Props> = ({ children }) => (
  <div className={title}>
    <Headline level="1">{children}</Headline>
  </div>
);
