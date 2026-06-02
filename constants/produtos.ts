export interface Produto {
  id: string;
  nome: string;
  preco: number;
  time: string;
  descricao: string;
  imagens: string[];
}

export const produtos: Produto[] = [
  {
    id: "local-1",
    nome: "Rubro Negra 2026",
    preco: 299.9,
    time: "Flamengo",
    descricao: "Camisa titular com tecido leve e caimento esportivo.",
    imagens: [
      "/images/camisas/camisa-1.svg",
      "/images/camisas/camisa-1-alt.svg",
    ],
  },
  {
    id: "local-2",
    nome: "Tricolor Classica",
    preco: 239.9,
    time: "Fluminense",
    descricao: "Versao classica com gola polo e escudo bordado.",
    imagens: [
      "/images/camisas/camisa-2.svg",
      "/images/camisas/camisa-2-alt.svg",
    ],
  },
  {
    id: "local-3",
    nome: "Alvinegra Retro",
    preco: 199.9,
    time: "Santos",
    descricao: "Edicao retro inspirada na campanha historica.",
    imagens: ["/images/camisas/camisa-3.svg"],
  },
  {
    id: "local-4",
    nome: "Azul Royal 26",
    preco: 149.9,
    time: "Cruzeiro",
    descricao: "Modelo de treino com alta respirabilidade.",
    imagens: ["/images/camisas/camisa-4.svg"],
  },
];
