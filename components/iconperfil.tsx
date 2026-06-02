"use client";

import Link from "next/link";
import { CircleUser } from "lucide-react";
import React, { useEffect, useState } from "react";
import { obterToken } from "@/lib/auth";

const IconPerfil = () => {
  const [autenticado, setAutenticado] = useState(false);

  useEffect(() => {
    setAutenticado(Boolean(obterToken()));
  }, []);

  return (
    <Link
      href={autenticado ? "/perfil" : "/login"}
      aria-label={autenticado ? "Ir para perfil" : "Ir para login"}
      className="inline-flex items-center gap-2 rounded-md px-2 py-1 text-sm font-semibold text-black hover:text-ciano hoverEffect dark:text-slate-200 dark:hover:text-ciano"
    >
      <CircleUser className="w-5 h-5" />
      <span className="hidden lg:inline">{autenticado ? "Perfil" : "Entrar"}</span>
    </Link>
  );
};

export default IconPerfil;


