"use client";

import React from "react";
import { Moon, Sun } from "lucide-react";
import { useTema } from "@/components/tema-contexto";

export default function BotaoTema() {
  const { tema, alternarTema } = useTema();

  return (
    <button
      type="button"
      onClick={alternarTema}
      className="inline-flex items-center gap-2 rounded-full border border-slate-300/80 bg-white/70 px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-slate-700 transition hover:bg-white dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-200 dark:hover:bg-slate-900"
      aria-label={tema === "dark" ? "Ativar tema claro" : "Ativar tema escuro"}
      title={tema === "dark" ? "Tema claro" : "Tema escuro"}
    >
      {tema === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
      <span className="hidden sm:inline">{tema === "dark" ? "Claro" : "Escuro"}</span>
    </button>
  );
}
