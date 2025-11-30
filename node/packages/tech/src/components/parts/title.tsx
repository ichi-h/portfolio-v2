import { Heading } from "portfolio-ui";

import { title } from "./title.css";

import type { FC } from "react";

type Props = {
  children: React.ReactNode;
};

export const Title: FC<Props> = ({ children }) => (
  <div className={title}>
    <Heading level="1">{children}</Heading>
  </div>
);
