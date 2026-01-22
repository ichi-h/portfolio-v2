import { Link } from "portfolio-ui";

import * as styles from "./toc.css";

export const Toc = () => {
  return (
    <nav className={styles.toc}>
      <Link color="mono.50" href="#about-me">
        About Me
      </Link>
      <Link color="mono.50" href="#resume">
        Resume
      </Link>
      <Link color="mono.50" href="#skills">
        Skills
      </Link>
      <Link color="mono.50" href="#posts">
        Posts
      </Link>
    </nav>
  );
};
