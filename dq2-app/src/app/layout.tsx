import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ドラゴンクエストII",
  description: "ドラゴンクエストII HTML Canvas版",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body style={{ fontFamily: "monospace" }}>
        {children}
      </body>
    </html>
  );
}
