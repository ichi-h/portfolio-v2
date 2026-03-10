import { Heading, Text } from "portfolio-ui";

import { BackButton } from "../../parts/backButton";

import * as styles from "./index.css";

import type { NotionFragment } from "../../../api/notion/fragments";

interface Props {
  fragment: NotionFragment;
  body: string;
}

export const FragmentPage = ({ fragment, body }: Props) => {
  return (
    <div className={styles.wrapper}>
      <main className={styles.main}>
        <div className={styles.title}>
          <Heading level="1">{fragment.title}</Heading>
        </div>
        <div
          className={styles.fragment}
          dangerouslySetInnerHTML={{ __html: body }}
        />
        <Text color="mono.800" className={styles.writtenAt}>
          （{fragment.writtenAt}）
        </Text>
        <footer>
          <BackButton className={styles.backButton} />
        </footer>
      </main>
    </div>
  );
};
