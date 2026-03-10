import { Heading, Link, Text } from "portfolio-ui";

import * as styles from "./index.css";

import type { NotionFragment } from "../../../api/notion/fragments";

interface Props {
  fragments: NotionFragment[];
}

export const Home = ({ fragments }: Props) => {
  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <Heading level="1" color="mono.900">
          fragments.ichi-h.com
        </Heading>

        <ul className={styles.list}>
          {fragments.map((fragment) => (
            <li key={fragment.id} className={styles.listItem}>
              <Link href={`/${fragment.slug}`} color="mono.900">
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
};
