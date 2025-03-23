import { Link } from "portfolio-ui";

import { navStyle, navLinksStyle, navLinkStyle } from "./nav.css";

import type { ComponentProps, FC, AnchorHTMLAttributes } from "react";

type Props = Omit<ComponentProps<"nav">, "children">;

const Anchor: FC<AnchorHTMLAttributes<HTMLAnchorElement>> = (props) => (
  <a {...props} />
);

export const Nav: FC<Props> = ({ ...props }) => (
  <nav className={navStyle} {...props}>
    <div className={navLinksStyle}>
      <Link
        className={navLinkStyle}
        as={Anchor}
        asProps={{ href: "/" }}
        color="mono.50"
      >
        ichi-h.com
      </Link>
    </div>
    <div className={navLinksStyle}>
      <Link
        className={navLinkStyle}
        as={Anchor}
        asProps={{ href: "/works" }}
        color="mono.50"
      >
        Works
      </Link>
      <Link
        className={navLinkStyle}
        as={Anchor}
        asProps={{ href: "/me" }}
        color="mono.50"
      >
        Me
      </Link>
      <Link
        className={navLinkStyle}
        as={Anchor}
        asProps={{ href: "/contact" }}
        color="mono.50"
      >
        Contact
      </Link>
    </div>
  </nav>
);
