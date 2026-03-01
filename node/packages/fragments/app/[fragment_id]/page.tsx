import { notFound } from "next/navigation";

import { Heading } from "@/app/_components";
import { FRAGMENTS } from "@/data/fragments";

import { BackButton } from "./_components/BackButton";
import * as styles from "./page.css";

type Props = {
  params: Promise<{ fragment_id: string }>;
};

export default async function FragmentPage({ params }: Props) {
  const { fragment_id } = await params;
  const fragment = FRAGMENTS.find((f) => f.id === fragment_id);

  if (!fragment) {
    notFound();
  }

  return (
    <div className={styles.wrapper}>
      <main className={styles.main}>
        <section className={styles.dataSection}>
          <Heading level="6" color="mono.400">
            Fragment (placeholder)
          </Heading>
          <dl className={styles.dataList}>
            <dt className={styles.dt}>id</dt>
            <dd className={styles.dd}>{fragment.id}</dd>

            <dt className={styles.dt}>title</dt>
            <dd className={styles.dd}>{fragment.title}</dd>

            <dt className={styles.dt}>thumbnailUrl</dt>
            <dd className={styles.dd}>{fragment.thumbnailUrl}</dd>

            <dt className={styles.dt}>content</dt>
            <dd className={styles.ddContent}>{fragment.content}</dd>
          </dl>
        </section>
      </main>

      <BackButton />
    </div>
  );
}
