"use client";

import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import Header from "@/components/header";
import Footer from "@/components/footer";

interface LayoutGlobalProps{
  children: ReactNode;
}

export default function LayoutGlobal({ children }: LayoutGlobalProps) {
  const pathname = usePathname();
  const semHeaderFooter = pathname === "/login" || pathname.startsWith("/auth");

  return (
    <>
      {!semHeaderFooter && <Header />}
      {children}
      {!semHeaderFooter && <Footer />}
    </>
  );
}
