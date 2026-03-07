"use client";

import Link from "next/link";
import { Icon, LeftArrowIcon } from "portfolio-ui";

import * as styles from "../page.css";

export function BackButton() {
  return (
    <nav className={styles.backNav}>
      <Link
        href="/"
        aria-label="トップページへ戻る"
        className={styles.backLink}
      >
        <Icon icon={LeftArrowIcon} color="mono.900" size={4} />
      </Link>
    </nav>
  );
}
