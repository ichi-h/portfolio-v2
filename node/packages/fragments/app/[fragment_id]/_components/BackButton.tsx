"use client";

import { LeftArrowIcon } from "portfolio-ui";

import * as styles from "../page.css";

export function BackButton() {
  return (
    <nav className={styles.backNav}>
      <a href="/" aria-label="トップページへ戻る" className={styles.backLink}>
        <LeftArrowIcon color="mono.900" />
      </a>
    </nav>
  );
}
