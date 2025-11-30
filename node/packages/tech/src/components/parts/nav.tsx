import { Link } from "portfolio-ui";

import { Anchor } from "./anchor";
import { navStyle, navLinksStyle, navLinkStyle } from "./nav.css";

import type { ComponentProps, FC } from "react";

type Props = Omit<ComponentProps<"nav">, "children">;

export const Nav: FC<Props> = ({ ...props }) => (
  <nav className={navStyle} {...props}>
    <div className={navLinksStyle}>
      <Link
        className={navLinkStyle}
        as={Anchor}
        asProps={{ href: "/" }}
        color="mono.50"
      >
        tech.ichi-h.com
      </Link>
    </div>
    <div className={navLinksStyle}>
      <Link
        className={navLinkStyle}
        as={Anchor}
        asProps={{ href: "/posts" }}
        color="mono.50"
      >
        Posts
      </Link>
      <Link
        className={navLinkStyle}
        as={Anchor}
        asProps={{ href: "/about" }}
        color="mono.50"
      >
        About
      </Link>
      <Link
        className={navLinkStyle}
        as={Anchor}
        asProps={{ href: "https://ichi-h.com", target: "_blank" }}
        color="mono.50"
      >
        Works
      </Link>
    </div>
  </nav>
);
