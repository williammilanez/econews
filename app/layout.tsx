import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Econews",
  description: "Notícias sobre sustentabilidade e meio ambiente",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
