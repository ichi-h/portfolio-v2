import { useEnv } from "../../utils/env";

interface Props {
  title?: string;
  url: string;
  description?: string;
  ogImage?: string;
  ogType: "website" | "article";
}

export const Head = ({
  title = "ichi-h.com",
  url,
  description = "To live is to think, create and sing.",
  ogImage,
  ogType,
}: Props) => {
  const { APP_URL } = useEnv();
  const ogImageUrl = ogImage ?? `${APP_URL}/top_ogp.webp`;
  return (
    <>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <meta name="robots" content="index, follow" />
      <meta property="og:url" content={`${APP_URL}${url}`} />
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={title} />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content="ichi-h.com" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:site" content="@ichi_h3" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:domain" content="ichi-h.com" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Zen+Kaku+Gothic+New&display=swap"
      />
    </>
  );
};
