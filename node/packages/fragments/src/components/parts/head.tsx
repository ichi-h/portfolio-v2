import { useEnv } from "../../utils/env";

interface Props {
  title?: string;
  url: string;
  description?: string;
  ogType: "website" | "article";
}

export const Head = ({
  title = "fragments.ichi-h.com",
  description = "fragments.ichi-h.com",
  url,
  ogType,
}: Props) => {
  const { APP_URL, OG_IMAGE_SERVER_URL } = useEnv();
  const ogImageUrl =
    url === "/"
      ? `${APP_URL}/ogp.webp`
      : `${OG_IMAGE_SERVER_URL}/fragments${url}`;

  return (
    <>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      <meta name="robots" content="index, follow" />
      <meta name="description" content={description} />
      <meta property="og:url" content={`${APP_URL}${url}`} />
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={title} />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content="fragments.ichi-h.com" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:site" content="@ichi_h4" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:domain" content="fragments.ichi-h.com" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Zen+Kaku+Gothic+Antique&display=swap"
        rel="stylesheet"
      />
    </>
  );
};
