import uiStyle from "portfolio-ui/style.css?url";

import * as styles from "@/app/layout.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "fragments.ichi-h.com",
  description: "ichi-h が執筆した詩などの文学作品の断片集",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={styles.html}>
      <head>
        <link rel="stylesheet" href={uiStyle} />
      </head>
      <body>{children}</body>
    </html>
  );
}
