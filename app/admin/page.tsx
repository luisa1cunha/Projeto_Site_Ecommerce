"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Container from "@/components/container";
import Produtos from "@/components/produtos";
import { obterToken } from "@/lib/auth";
import { usuarioEhAdmin } from "@/lib/userSession";

export default function PainelAdminPage() {
  const router = useRouter();
  const [liberado, setLiberado] = useState(false);

  useEffect(() => {
    const token = obterToken();

    if (!token) {
      router.replace("/login");
      return;
    }

    if (!usuarioEhAdmin()) {
      router.replace("/");
      return;
    }

    setLiberado(true);
  }, [router]);

  if (!liberado) {
    return (
      <main className="mx-auto mt-10 max-w-5xl p-6 text-center">
        <p className="text-sm font-semibold text-slate-600">Validando permissao...</p>
      </main>
    );
  }

  return (
    <Container className="p-5">
      <div className="surface-card p-5">
      <h2 className="mb-2 text-xl font-bold text-slate-900 dark:text-slate-100">Painel Administrador</h2>
      <p className="mb-4 text-sm font-semibold text-slate-700 dark:text-slate-300">
        Aqui voce gerencia cadastro, edicao e exclusao de camisas.
      </p>
      <Produtos />
      </div>
    </Container>
  );
}
