import type { FC, AnchorHTMLAttributes } from "react";

export const Anchor: FC<AnchorHTMLAttributes<HTMLAnchorElement>> = (props) => (
  <a {...props} />
);
