import NextLink from "next/link";
import { notFound } from "next/navigation";
import { parseMd2Html } from "portfolio-shared";

import { getFragments, getMarkdownBody } from "@/src/api/notion/fragments";

import { Heading, Text, Link, Icon, LeftArrowIcon } from "./_components";
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
          <Link
            className={styles.backButton}
            color="mono.900"
            as={NextLink}
            asProps={{
              href: "/",
              "aria-label": "トップページへ戻る",
            }}
          >
            <Icon icon={LeftArrowIcon} color="mono.900" size={4} />
            戻る
          </Link>
        </footer>
      </main>
    </div>
  );
}
