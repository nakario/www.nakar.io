import type { Metadata } from "next";
import "./globals.css";
import "beercss";

export const metadata: Metadata = {
  title: "nakario",
  description: "The portfolio of nakario",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="dark">
        {children}
      </body>
    </html>
  );
}
