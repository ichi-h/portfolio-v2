import "portfolio-ui/style.css";

import * as styles from "@/app/layout.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "fragments.ichi-h.com",
  description: "ichi-h が執筆した詩などの文学作品の断片集",
};

const csp = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src 'self' https://fonts.gstatic.com",
  "img-src 'self' data: https:",
  "connect-src 'self' https://fonts.googleapis.com https://fonts.gstatic.com",
  "form-action 'self'",
  "frame-src https://www.youtube.com https://w.soundcloud.com",
  "base-uri 'none'",
  "object-src 'none'",
  "upgrade-insecure-requests",
].join("; ");

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={styles.html}>
      <head>
        <meta httpEquiv="Content-Security-Policy" content={csp} />
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
      </head>
      <body>{children}</body>
    </html>
  );
}
