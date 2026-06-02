"use client";

import Link from "next/link";
import Container from "@/components/container";
import { useCarrinho } from "@/components/carrinho-contexto";

const Carrinho = () => {
  const {
    itens,
    valorTotal,
    incrementarQuantidade,
    decrementarQuantidade,
    removerDoCarrinho,
    limparCarrinho,
  } = useCarrinho();

  return (
    <Container className="p-5">
      <div className="rounded-2xl bg-slate-50 p-4 sm:p-6 dark:bg-slate-900/70">
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Seu carrinho</h2>
          {itens.length > 0 && (
            <button
              type="button"
              onClick={limparCarrinho}
              className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm font-semibold text-red-700 hover:bg-red-100 dark:border-red-900 dark:bg-red-950/40 dark:text-red-300 dark:hover:bg-red-950/60"
            >
              Limpar carrinho
            </button>
          )}
        </div>

        {itens.length === 0 ? (
          <div className="rounded-xl border border-dashed border-slate-300 bg-white p-6 text-center dark:border-slate-700 dark:bg-slate-900">
            <p className="text-slate-700 dark:text-slate-300">Seu carrinho esta vazio.</p>
            <Link
              href="/camisetas"
              className="mt-3 inline-block rounded-xl bg-ciano_escuro px-4 py-2 text-sm font-semibold text-white hover:opacity-90 dark:bg-ciano_escuro dark:hover:bg-ciano"
            >
              Ver camisetas
            </Link>
          </div>
        ) : (
          <>
            <div className="space-y-3">
              {itens.map((item) => (
                <article
                  key={item.produto.id}
                  className="flex flex-col gap-3 rounded-xl border border-slate-200 bg-white p-3 sm:flex-row sm:items-center sm:justify-between dark:border-slate-700 dark:bg-slate-900"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={item.produto.imagens[0]}
                      alt={item.produto.nome}
                      className="h-20 w-20 rounded-lg object-cover"
                    />
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-slate-100">{item.produto.nome}</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-300">{item.produto.time}</p>
                      <p className="text-sm font-semibold text-ciano_escuro dark:text-ciano">
                        R$ {item.produto.preco.toFixed(2)}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => decrementarQuantidade(item.produto.id)}
                      className="h-8 w-8 rounded-lg border border-slate-300 text-lg font-bold text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
                    >
                      -
                    </button>
                    <span className="min-w-8 text-center font-semibold text-slate-900 dark:text-slate-100">{item.quantidade}</span>
                    <button
                      type="button"
                      onClick={() => incrementarQuantidade(item.produto.id)}
                      className="h-8 w-8 rounded-lg border border-slate-300 text-lg font-bold text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
                    >
                      +
                    </button>
                    <button
                      type="button"
                      onClick={() => removerDoCarrinho(item.produto.id)}
                      className="ml-2 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm font-semibold text-red-700 hover:bg-red-100 dark:border-red-900 dark:bg-red-950/40 dark:text-red-300 dark:hover:bg-red-950/60"
                    >
                      Remover
                    </button>
                  </div>

                  <p className="text-right text-sm font-bold text-slate-900 dark:text-slate-100">
                    Subtotal: R$ {(item.produto.preco * item.quantidade).toFixed(2)}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-6 rounded-xl bg-slate-900 p-4 text-white dark:border dark:border-slate-700">
              <div className="mb-3 flex items-center justify-between">
                <p className="text-sm text-slate-300">Total do pedido</p>
                <p className="text-2xl font-bold">R$ {valorTotal.toFixed(2)}</p>
              </div>
              <button
                type="button"
                className="w-full rounded-xl bg-ciano_escuro px-4 py-3 text-sm font-semibold text-white hover:opacity-90 dark:bg-ciano_escuro dark:hover:bg-ciano"
              >
                Finalizar compra
              </button>
            </div>
          </>
        )}
      </div>
    </Container>
  );
};

export default Carrinho; 