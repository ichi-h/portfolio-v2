import { Heading, Link, Text } from "@/app/_components";
import { FRAGMENTS } from "@/data/fragments";

import * as styles from "./page.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <Heading level="1" color="mono.900">
          fragments.ichi-h.com
        </Heading>

        <ul className={styles.list}>
          {FRAGMENTS.map((fragment) => (
            <li key={fragment.id} className={styles.listItem}>
              <Link href={`/${fragment.id}`} color="mono.900">
                {fragment.title}
              </Link>
            </li>
          ))}
        </ul>

        <footer className={styles.footer}>
          <Text fontSize="3" color="mono.800">
            Copyright ©{` ${new Date().getFullYear()} `}ichi-h All rights
            reserved.
          </Text>
          <Text fontSize="3" color="mono.800">
            All works are published under{" "}
            <Link
              href="https://creativecommons.org/licenses/by-nc-nd/4.0/"
              color="mono.800"
              openInNewTab
            >
              CC BY-NC-ND 4.0
            </Link>
            .
          </Text>
        </footer>
      </div>
    </main>
  );
}
