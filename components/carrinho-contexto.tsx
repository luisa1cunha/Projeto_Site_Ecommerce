"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Produto } from "@/constants/produtos";

export interface CarrinhoItem {
  produto: Produto;
  quantidade: number;
}

interface CarrinhoContextValue {
  itens: CarrinhoItem[];
  quantidadeTotal: number;
  valorTotal: number;
  adicionarAoCarrinho: (produto: Produto) => void;
  incrementarQuantidade: (produtoId: string) => void;
  decrementarQuantidade: (produtoId: string) => void;
  removerDoCarrinho: (produtoId: string) => void;
  limparCarrinho: () => void;
}

const CHAVE_STORAGE_CARRINHO = "carrinho_itens";

const CarrinhoContext = createContext<CarrinhoContextValue | undefined>(undefined);

export function CarrinhoProvider({ children }: { children: React.ReactNode }) {
  const [itens, setItens] = useState<CarrinhoItem[]>([]);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(CHAVE_STORAGE_CARRINHO);
      if (!stored) return;

      const parsed = JSON.parse(stored) as CarrinhoItem[];
      if (!Array.isArray(parsed)) return;

      const itensValidos = parsed
        .filter(
          (item) =>
            item &&
            typeof item === "object" &&
            item.produto &&
            typeof item.produto.id === "string" &&
            typeof item.quantidade === "number" &&
            item.quantidade > 0,
        )
        .map((item) => ({ ...item, quantidade: Math.floor(item.quantidade) }));

      setItens(itensValidos);
    } catch {
    }
  }, []);

  useEffect(() => {
    try {
      window.localStorage.setItem(CHAVE_STORAGE_CARRINHO, JSON.stringify(itens));
    } catch {
    }
  }, [itens]);

  const adicionarAoCarrinho = useCallback((produto: Produto) => {
    setItens((valorAtual) => {
      const jaExiste = valorAtual.find((item) => item.produto.id === produto.id);
      if (jaExiste) {
        return valorAtual.map((item) =>
          item.produto.id === produto.id
            ? { ...item, quantidade: item.quantidade + 1 }
            : item,
        );
      }

      return [...valorAtual, { produto, quantidade: 1 }];
    });
  }, []);

  const incrementarQuantidade = useCallback((produtoId: string) => {
    setItens((valorAtual) =>
      valorAtual.map((item) =>
        item.produto.id === produtoId
          ? { ...item, quantidade: item.quantidade + 1 }
          : item,
      ),
    );
  }, []);

  const decrementarQuantidade = useCallback((produtoId: string) => {
    setItens((valorAtual) =>
      valorAtual
        .map((item) =>
          item.produto.id === produtoId
            ? { ...item, quantidade: item.quantidade - 1 }
            : item,
        )
        .filter((item) => item.quantidade > 0),
    );
  }, []);

  const removerDoCarrinho = useCallback((produtoId: string) => {
    setItens((valorAtual) => valorAtual.filter((item) => item.produto.id !== produtoId));
  }, []);

  const limparCarrinho = useCallback(() => {
    setItens([]);
  }, []);

  const quantidadeTotal = useMemo(
    () => itens.reduce((soma, item) => soma + item.quantidade, 0),
    [itens],
  );

  const valorTotal = useMemo(
    () => itens.reduce((soma, item) => soma + item.produto.preco * item.quantidade, 0),
    [itens],
  );

  const value = useMemo(
    () => ({
      itens,
      quantidadeTotal,
      valorTotal,
      adicionarAoCarrinho,
      incrementarQuantidade,
      decrementarQuantidade,
      removerDoCarrinho,
      limparCarrinho,
    }),
    [
      itens,
      quantidadeTotal,
      valorTotal,
      adicionarAoCarrinho,
      incrementarQuantidade,
      decrementarQuantidade,
      removerDoCarrinho,
      limparCarrinho,
    ],
  );

  return <CarrinhoContext.Provider value={value}>{children}</CarrinhoContext.Provider>;
}

export function useCarrinho() {
  const context = useContext(CarrinhoContext);
  if (!context) {
    throw new Error("useCarrinho deve ser usado dentro de CarrinhoProvider");
  }
  return context;
}
