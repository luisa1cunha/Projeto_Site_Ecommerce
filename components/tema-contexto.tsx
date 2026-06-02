"use client";

import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

type Tema = "light" | "dark";

interface TemaContextValue {
  tema: Tema;
  alternarTema: () => void;
}

const CHAVE_TEMA = "tema_preferido";

const TemaContext = createContext<TemaContextValue | undefined>(undefined);

function aplicarTemaNoDocumento(tema: Tema) {
  const html = document.documentElement;
  if (tema === "dark") {
    html.classList.add("dark");
  } else {
    html.classList.remove("dark");
  }
}

export function TemaProvider({ children }: { children: React.ReactNode }) {
  const [tema, setTema] = useState<Tema>(() => {
    if (typeof window === "undefined") {
      return "light";
    }

    try {
      const salvo = window.localStorage.getItem(CHAVE_TEMA) as Tema | null;
      if (salvo === "light" || salvo === "dark") {
        return salvo;
      }

      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    } catch {
      return "light";
    }
  });

  useEffect(() => {
    aplicarTemaNoDocumento(tema);
    try {
      window.localStorage.setItem(CHAVE_TEMA, tema);
    } catch {
    }
  }, [tema]);

  const alternarTema = () => {
    setTema((valorAtual) => (valorAtual === "dark" ? "light" : "dark"));
  };

  const value = useMemo(
    () => ({ tema, alternarTema }),
    [tema],
  );

  return <TemaContext.Provider value={value}>{children}</TemaContext.Provider>;
}

export function useTema() {
  const context = useContext(TemaContext);
  if (!context) {
    throw new Error("useTema deve ser usado dentro de TemaProvider");
  }
  return context;
}
