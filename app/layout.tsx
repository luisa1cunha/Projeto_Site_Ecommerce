import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";

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
    <html lang="en">
      <body className="font-poppins antialiased">
        <Header />   
        {children}
        <Footer />
      </body>
    </html>
  );
}
