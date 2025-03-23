import { useEnv } from "../../../utils/env";
import { DefaultMeta } from "../../parts/meta";

export const MeMeta = () => (
  <>
    <title>Me - ichi-h.com</title>
    <DefaultMeta />
    <meta property="og:url" content="https://ichi-h.com/me" />
    <meta property="og:type" content="article" />
    <meta property="og:title" content="Me - ichi-h.com" />
    <meta property="og:image" content={`${useEnv().APP_URL}/top_ogp.webp`} />
    <meta
      property="og:description"
      content="To live is to think, create and sing."
    />
    <meta name="twitter:title" content="Me - ichi-h.com" />
    <meta
      name="twitter:description"
      content="To live is to think, create and sing."
    />
    <meta name="twitter:site" content="@ichi_h3" />
  </>
);
