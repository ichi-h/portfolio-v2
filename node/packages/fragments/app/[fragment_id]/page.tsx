import { notFound } from "next/navigation";

import { Heading } from "@/app/_components";
import { getFragments } from "@/src/api/notion/fragments";

import { BackButton } from "./_components/BackButton";
import * as styles from "./page.css";

type Props = {
  params: Promise<{ fragment_id: string }>;
};

const SLUG_PATTERN = /^[a-zA-Z0-9_-]{1,200}$/;

export default async function FragmentPage({ params }: Props) {
  const { fragment_id } = await params;
  if (!SLUG_PATTERN.test(fragment_id)) {
    notFound();
  }
  const fragments = await getFragments({ slug: fragment_id });
  const fragment = fragments[0];

  if (!fragment) {
    notFound();
  }

  return (
    <div className={styles.wrapper}>
      <main className={styles.main}>
        <section className={styles.dataSection}>
          <Heading level="6" color="mono.900">
            Fragment (placeholder)
          </Heading>
          <dl className={styles.dataList}>
            <dt className={styles.dt}>id</dt>
            <dd className={styles.dd}>{fragment.id}</dd>

            <dt className={styles.dt}>title</dt>
            <dd className={styles.dd}>{fragment.title}</dd>

            <dt className={styles.dt}>thumbnailUrl</dt>
            <dd className={styles.dd}>{fragment.thumbnailUrl}</dd>

            <dt className={styles.dt}>description</dt>
            <dd className={styles.ddContent}>{fragment.description}</dd>
          </dl>
        </section>
      </main>

      <BackButton />
    </div>
  );
}
