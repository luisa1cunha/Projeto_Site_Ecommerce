"use client";

import { useState } from "react";
import { Produto } from "@/constants/produtos";

interface CamisaDetalheModalProps {
  produto: Produto;
  onClose: () => void;
}

export default function CamisaDetalheModal({ produto, onClose }: CamisaDetalheModalProps) {
  const [indiceImagem, setIndiceImagem] = useState(0);

  function irProxima() {
    setIndiceImagem((valorAtual) => (valorAtual + 1) % produto.imagens.length);
  }

  function irAnterior() {
    setIndiceImagem((valorAtual) => {
      if (valorAtual === 0) {
        return produto.imagens.length - 1;
      }
      return valorAtual - 1;
    });
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
      <div className="w-full max-w-4xl rounded-2xl bg-white p-4 shadow-2xl dark:bg-slate-900">
        <div className="mb-3 flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{produto.time}</p>
            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">{produto.nome}</h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg border border-slate-300 px-3 py-2 text-sm font-semibold hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
          >
            Fechar
          </button>
        </div>

        <div className="relative overflow-hidden rounded-xl bg-slate-100">
          <div className="flex h-[55vh] min-h-[280px] w-full items-center justify-center p-2 sm:p-4">
            <img
              src={produto.imagens[indiceImagem]}
              alt={`${produto.nome} - imagem ${indiceImagem + 1}`}
              className="h-full w-full rounded-lg object-contain"
            />
          </div>

          {produto.imagens.length > 1 && (
            <>
              <button
                type="button"
                onClick={irAnterior}
                className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-slate-200 bg-white/95 px-3 py-2 text-lg font-bold text-slate-900 shadow dark:border-slate-700 dark:bg-slate-900/90 dark:text-slate-100"
                aria-label="Imagem anterior"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={irProxima}
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-slate-200 bg-white/95 px-3 py-2 text-lg font-bold text-slate-900 shadow dark:border-slate-700 dark:bg-slate-900/90 dark:text-slate-100"
                aria-label="Proxima imagem"
              >
                ›
              </button>
            </>
          )}
        </div>

        {produto.imagens.length > 1 && (
          <div className="mt-3 grid grid-cols-4 gap-2 sm:grid-cols-6">
            {produto.imagens.map((imagem, indice) => (
              <button
                key={`${produto.id}-img-${indice}`}
                type="button"
                onClick={() => setIndiceImagem(indice)}
                className={`overflow-hidden rounded-lg border-2 transition ${
                  indiceImagem === indice
                    ? "border-ciano_escuro dark:border-ciano"
                    : "border-transparent hover:border-slate-300 dark:hover:border-slate-700"
                }`}
                aria-label={`Ver imagem ${indice + 1}`}
              >
                <img
                  src={imagem}
                  alt={`${produto.nome} miniatura ${indice + 1}`}
                  className="h-16 w-full object-cover"
                />
              </button>
            ))}
          </div>
        )}

        <p className="mt-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
          Foto {indiceImagem + 1} de {produto.imagens.length}
        </p>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm text-slate-600 dark:text-slate-300">{produto.descricao}</p>
          <p className="text-2xl font-extrabold text-ciano_escuro dark:text-ciano">R$ {produto.preco.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
}
