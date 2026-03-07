import { headers } from "next/headers";
import uiStyle from "portfolio-ui/style.css?url";

import * as styles from "@/app/layout.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "fragments.ichi-h.com",
  description: "ichi-h が執筆した詩などの文学作品の断片集",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const nonce = (await headers()).get("x-nonce") ?? undefined;
  return (
    <html lang="ja" className={styles.html} nonce={nonce}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Zen+Kaku+Gothic+Antique&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href={uiStyle} />
      </head>
      <body>{children}</body>
    </html>
  );
}
