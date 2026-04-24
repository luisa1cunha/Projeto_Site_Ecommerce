export interface Produto {
  id: number;
  nome: string;
  preco: number;
  imagem: string;
  time: string;
}

export const produtos: Produto[] = [
  {
    id: 1,
    nome: "Camiseta 1",
    preco: 299.9,
    imagem: "https://via.placeholder.com/300",
    time: "Time 1",
  },
  {
    id: 2,
    nome: "Camiseta 2",
    preco: 89.9,
    imagem: "https://via.placeholder.com/300",
    time: "Time 2",
  },
  {
    id: 3,
    nome: "Camiseta 3",
    preco: 199.9,
    imagem: "https://via.placeholder.com/300",
    time: "Time 3",
  },
  {
    id: 4,
    nome: "Camiseta 4",
    preco: 149.9,
    imagem: "https://via.placeholder.com/300",
    time: "Time 4",
  },
];
