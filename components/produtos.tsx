'use client';
import { useFavorites } from "@/components/favoritos-contexto";
import { produtos } from "@/constants/produtos";
import ProdutosFavoritos from "./produtofavorito";

const Produtos: React.FC = () => {
  const { toggleFavorito, isFavorito } = useFavorites();

  return (
    <div className="min-h-screen bg-gray-100 p-6 rounded-2xl">
      <h1 className="text-2xl font-bold mb-6">Produtos</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {produtos.map((produto) => {
          const favorito = isFavorito(produto.id);

          return (
            <div
              key={produto.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              <div className="relative">
                <img
                  src={produto.imagem}
                  alt={produto.nome}
                  className="w-full h-48 object-cover"
                />
                <span className="absolute top-2 left-2 bg-ciano_escuro text-white text-xs px-2 py-1 rounded-full">
                  {produto.time}
                </span>
                <div className="absolute top-2 right-2">
                  <button
                    type="button"
                    onClick={() => toggleFavorito(produto.id)}
                    className="bg-white p-1 rounded-full shadow hover:bg-gray-100 transition"
                  >
                    <ProdutosFavoritos active={favorito} />
                  </button>
                </div>
              </div>

              <div className="p-4 flex flex-col gap-0">
                <h2 className="text-1xl font-bold line-clamp-2">
                  {produto.nome}
                </h2>

                <p className="text-ciano_escuro font-bold text-2xl">
                  R$ {produto.preco.toFixed(2)}
                </p>

                <button className="mt-1 bg-black text-white py-2 rounded-xl hover:bg-ciano transition text-1xl">
                  Adicionar ao carrinho
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Produtos;
