"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { obterToken, removerToken } from "@/lib/auth";

export default function PaginaPerfil() {
const [usuario, setUsuario] = useState<any>(null);
const [carregando, setCarregando] = useState(true); 
const router = useRouter();

  // useEffect executa ao carregar a página
  useEffect(() => {
    const verificarAcesso = () => {
      const token = obterToken();
      // se não tiver token, vaipara login
      if (!token) {
        router.replace("/login");
        return;
      }

      // busca dados do usuário no localstorage
      const usuarioRaw = localStorage.getItem("perfil_usuario");

      if (usuarioRaw) {
        try {
          // converte string para objeto
          setUsuario(JSON.parse(usuarioRaw));

        } catch (e) {
          // se der erro ao converter, remove token e redireciona
          console.error("Erro ao ler dados do usuário", e);
          removerToken(); 
          router.replace("/login");
          return;
        }

      } else {
        // se não tiver dados do usuário, redireciona
        router.replace("/login");
        return;
      }
      setCarregando(false);
    };

    verificarAcesso();

  }, [router]);

  // tela de carregamento enquanto verifica acesso
  if (carregando) {
    return (
      <div className="flex h-screen items-center justify-center text-white bg-slate-900">
        <p>Verificando acesso...</p>
      </div>
    );
  }

  // função para logout
  const sair = () => {
    removerToken();
    localStorage.removeItem("perfil_usuario");
    router.push("/login");
  };

  return (
    <main className="mx-auto mt-10 max-w-xl p-6 rounded-xl border border-slate-700 bg-slate-800 text-ciano shadow-lg font-poppins">

      <h1 className="text-2xl font-bold mb-4">Perfil do usuário</h1>
      <div className="space-y-3 text-branco_fundo">
        <p><strong>Nome:</strong> {usuario?.nome}</p>
        <p><strong>E-mail:</strong> {usuario?.email}</p>

        <button
          onClick={sair}
          className="mt-4 rounded-lg bg-ciano px-4 py-2 hover:bg-blue-300 text-slate-800 font-semibold"
        >
          Sair
        </button>
      </div>
    </main>
  );
}
