import { Heading, Link, Text } from "portfolio-ui";

import * as styles from "./index.css";

import type { NotionFragment } from "../../../api/notion/fragments";

interface Props {
  fragments: NotionFragment[];
}

interface SortFragments {
  year: string;
  values: NotionFragment[];
}

const groupFragmentsByYear = (fragments: NotionFragment[]): SortFragments[] => {
  const sorted = [...fragments].sort(
    (a, b) => new Date(b.writtenAt).getTime() - new Date(a.writtenAt).getTime(),
  );

  const map = new Map<string, NotionFragment[]>();

  for (const fragment of sorted) {
    const year = new Date(fragment.writtenAt).getFullYear().toString();
    if (!map.has(year)) {
      map.set(year, []);
    }
    map.get(year)!.push(fragment);
  }

  return Array.from(map.entries())
    .map(([year, values]) => ({ year, values }))
    .sort((a, b) => Number(b.year) - Number(a.year));
};

export const Home = ({ fragments }: Props) => {
  const grouped = groupFragmentsByYear(fragments);

  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <Heading level="1" color="mono.200">
          fragments.ichi-h.com
        </Heading>

        {grouped.map((group) => (
          <div>
            <Heading className={styles.yearHeading} level="2" color="mono.200">
              {group.year}
            </Heading>
            <ul className={styles.list}>
              {group.values.map((fragment) => (
                <li key={fragment.id} className={styles.listItem}>
                  <Link href={`/${fragment.slug}`} color="mono.200">
                    {fragment.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <footer className={styles.footer}>
          <Text fontSize="3" color="mono.300">
            Copyright ©{` ${new Date().getFullYear()} `}ichi-h All rights
            reserved.
          </Text>
          <Text fontSize="3" color="mono.300">
            All works are published under{" "}
            <Link
              href="https://creativecommons.org/licenses/by-nc-nd/4.0/"
              color="mono.300"
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
