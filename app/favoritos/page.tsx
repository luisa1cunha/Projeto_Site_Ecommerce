'use client';

import { useEffect, useState } from "react";
import Container from "@/components/container";
import ProdutosFavoritos from "@/components/produtofavorito";
import { useFavorites } from "@/components/favoritos-contexto";
import { Produto, produtos as fallbackProdutos } from "@/constants/produtos";
import { listarCamisasApi } from "@/lib/camisasApi";

const Favoritos = () => {
  const { favoritos, toggleFavorito, isFavorito } = useFavorites();
  const [catalogo, setCatalogo] = useState<Produto[]>(fallbackProdutos);

  useEffect(() => {
    async function carregarCatalogo() {
      try {
        const lista = await listarCamisasApi();
        if (lista.length > 0) {
          setCatalogo(lista);
        }
      } catch {
        setCatalogo(fallbackProdutos);
      }
    }

    carregarCatalogo();
  }, []);

  const favoritosLista = catalogo.filter((produto) => favoritos.includes(produto.id));

  return (
    <Container className="p-5">
      <div className="surface-card p-5">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">FAVORITOS</h2>
      <p className="mb-4 text-sm font-semibold text-slate-700 dark:text-slate-300">SEUS PRODUTOS FAVORITOS</p>

      {favoritosLista.length === 0 ? (
        <p className="text-sm text-slate-700 dark:text-slate-300">Nenhum produto favorito adicionado ainda.</p>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-4">
          {favoritosLista.map((produto) => (
            <div key={produto.id} className="overflow-hidden rounded-2xl bg-white shadow-md dark:bg-slate-900 dark:shadow-black/30">
              <div className="relative">
                <img
                  src={produto.imagens[0]}
                  alt={produto.nome}
                  className="h-48 w-full object-cover"
                />
                <span className="absolute left-2 top-2 rounded-full bg-ciano_escuro px-2 py-1 text-xs text-white">
                  {produto.time}
                </span>
                <div className="absolute right-2 top-2">
                  <button
                    type="button"
                    onClick={() => toggleFavorito(produto.id)}
                    className="rounded-full bg-white p-1 shadow transition hover:bg-gray-100 dark:bg-slate-900 dark:hover:bg-slate-800"
                  >
                    <ProdutosFavoritos active={isFavorito(produto.id)} />
                  </button>
                </div>
              </div>

              <div className="p-4">
                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">{produto.nome}</h3>
                <p className="text-2xl font-bold text-ciano_escuro">R$ {produto.preco.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
      )}
      </div>
    </Container>
  );
};

export default Favoritos;
