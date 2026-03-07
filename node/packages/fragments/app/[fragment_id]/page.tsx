import { notFound } from "next/navigation";
import { parseMd2Html } from "portfolio-shared";

import { getFragments, getMarkdownBody } from "@/src/api/notion/fragments";

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

  const markdownBody = await getMarkdownBody(fragment.id);
  const body = await parseMd2Html(markdownBody);

  return (
    <div className={styles.wrapper}>
      <main className={styles.main}>
        <h1 className={styles.title}>{fragment.title}</h1>
        <div
          className={styles.fragment}
          dangerouslySetInnerHTML={{ __html: body }}
        />
        <p className={styles.writtenAt}>{fragment.publishedAt}</p>
      </main>

      <BackButton />
    </div>
  );
}
