import type { Metadata } from "next";
import "./globals.css";
import LayoutGlobal from "@/components/layoutglobal";

export const metadata: Metadata = {
  title: "Teste site",
  description: "Trabalho de Lab. de Programação",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className="font-poppins antialiased">
        <LayoutGlobal>{children}</LayoutGlobal>
      </body>
    </html>
  );
}
