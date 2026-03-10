import { notFound } from "next/navigation";
import { parseMd2Html } from "portfolio-shared";

import { getFragments, getMarkdownBody } from "@/src/api/notion/fragments";

import { Heading, Text, BackButton } from "./_components";
import * as styles from "./page.css";

type Props = {
  params: Promise<{ fragment_id: string }>;
};

export async function generateStaticParams() {
  const fragments = await getFragments();
  return fragments.map((f) => ({ fragment_id: f.slug }));
}

export default async function FragmentPage({ params }: Props) {
  const { fragment_id } = await params;
  // TODO: N+1 Notion API呼び出し: generateStaticParams() でも getFragments() を呼んでいるため、
  // ビルド時に fragment 数 + 1 回の API 呼び出しが発生する。
  // コンテンツ数が増えた場合はビルド時にまとめて取得してキャッシュする方式を検討すること。
  const fragments = await getFragments({ slug: fragment_id });
  const fragment = fragments[0];

  if (!fragment) notFound();

  const markdownBody = await getMarkdownBody(fragment.id);
  const body = await parseMd2Html(markdownBody);

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
}
