import { PROFILE_DESCRIPTIONS } from "../../constants/profile";
import { useEnv } from "../../utils/env";

import ogp from "../../assets/ogp.jpg?url";

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
  description,
  ogImage,
  ogType,
}: Props) => {
  const { APP_URL } = useEnv();
  const ogImageUrl = ogImage ?? ogp;
  const descriptionValue = description ?? PROFILE_DESCRIPTIONS.join("");
  return (
    <>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <meta name="robots" content="index, follow" />
      <meta name="description" content={descriptionValue} />
      <meta property="og:url" content={`${APP_URL}${url}`} />
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={title} />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:description" content={descriptionValue} />
      <meta property="og:site_name" content="ichi-h.com" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={descriptionValue} />
      <meta name="twitter:site" content="@ichi_h3" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:domain" content="ichi-h.com" />
    </>
  );
};
