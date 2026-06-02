"use client";

import ProdutosFavoritos from "@/components/produtofavorito";
import { Produto } from "@/constants/produtos";

interface CamisaCardProps {
  produto: Produto;
  favorito: boolean;
  isAdmin: boolean;
  onToggleFavorito: (id: string) => void;
  onAdicionarAoCarrinho: (produto: Produto) => void;
  onOpenDetalhe: (produto: Produto) => void;
  onEditar: (produto: Produto) => void;
  onExcluir: (produto: Produto) => void;
}

export default function CamisaCard({
  produto,
  favorito,
  isAdmin,
  onToggleFavorito,
  onAdicionarAoCarrinho,
  onOpenDetalhe,
  onEditar,
  onExcluir,
}: CamisaCardProps) {
  return (
    <article className="relative overflow-hidden rounded-2xl bg-white shadow-md transition-shadow duration-300 hover:shadow-xl dark:bg-slate-900 dark:shadow-black/30">
      <button
        type="button"
        onClick={() => onOpenDetalhe(produto)}
        className="relative w-full text-left"
      >
        <img
          src={produto.imagens[0]}
          alt={produto.nome}
          className="w-full h-48 object-cover"
        />
        <span className="absolute top-2 left-2 rounded-full bg-ciano_escuro px-2 py-1 text-xs text-white dark:bg-ciano_escuro">
          {produto.time}
        </span>
      </button>

      <div className="absolute top-2 right-2">
        <button
          type="button"
          onClick={() => onToggleFavorito(produto.id)}
          className="rounded-full bg-white p-1 shadow transition hover:bg-gray-100 dark:bg-slate-900 dark:hover:bg-slate-800"
        >
          <ProdutosFavoritos active={favorito} />
        </button>
      </div>

      <div className="p-4 flex flex-col gap-1">
        <h2 className="line-clamp-2 text-base font-bold text-slate-900 dark:text-slate-100">{produto.nome}</h2>
        <p className="line-clamp-2 text-sm text-slate-600 dark:text-slate-300">{produto.descricao}</p>
        <p className="text-2xl font-bold text-ciano_escuro dark:text-ciano">R$ {produto.preco.toFixed(2)}</p>

        <button
          type="button"
          onClick={() => onAdicionarAoCarrinho(produto)}
          className="mt-1 rounded-xl bg-black py-2 text-sm font-semibold text-white transition hover:bg-ciano dark:bg-slate-800 dark:hover:bg-ciano_escuro"
        >
          Adicionar ao carrinho
        </button>

        {isAdmin && (
          <div className="mt-2 grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => onEditar(produto)}
              className="rounded-lg border border-slate-300 px-3 py-2 text-sm font-semibold hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
            >
              Editar
            </button>
            <button
              type="button"
              onClick={() => onExcluir(produto)}
              className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm font-semibold text-red-700 hover:bg-red-100"
            >
              Excluir
            </button>
          </div>
        )}
      </div>
    </article>
  );
}
