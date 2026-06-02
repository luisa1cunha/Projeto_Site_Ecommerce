"use client";

import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { FavoritesProvider } from "@/components/favoritos-contexto";
import { CarrinhoProvider } from "@/components/carrinho-contexto";
import { TemaProvider } from "@/components/tema-contexto";

interface LayoutGlobalProps {
  children: ReactNode;
}

export default function LayoutGlobal({ children }: LayoutGlobalProps) {
  const pathname = usePathname();
  const semHeaderFooter = pathname === "/login" || pathname.startsWith("/auth");

  return (
    <TemaProvider>
      <FavoritesProvider>
        <CarrinhoProvider>
          {!semHeaderFooter && <Header />}
          {children}
          {!semHeaderFooter && <Footer />}
        </CarrinhoProvider>
      </FavoritesProvider>
    </TemaProvider>
  );
}
