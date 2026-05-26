'use client';
import Container from "@/components/container";
import ProdutosFavoritos from "@/components/produtofavorito";
import { useFavorites } from "@/components/favoritos-contexto";
import { produtos } from "@/constants/produtos";

const Favoritos = () => {
  const { favoritos, toggleFavorito, isFavorito } = useFavorites();
  const favoritosLista = produtos.filter((produto) => favoritos.includes(produto.id));

  return (
    <Container className="p-5 bg-yellow-200">
      <h2 className="text-xl font-bold">FAVORITOS</h2>
      <p className="text-sm mb-4 font-semibold">SEUS PRODUTOS FAVORITOS</p>
      

      {favoritosLista.length === 0 ? (
        <p className="text-sm text-black">Nenhum produto favorito adicionado ainda.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          {favoritosLista.map((produto) => (
            <div key={produto.id} className="bg-white rounded-2xl shadow-md overflow-hidden">
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
                    <ProdutosFavoritos active={isFavorito(produto.id)} />
                  </button>
                </div>
              </div>

              <div className="p-4">
                <h3 className="font-bold text-lg">{produto.nome}</h3>
                <p className="text-ciano_escuro font-bold text-2xl">R$ {produto.preco.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </Container>
  );
};

export default Favoritos; 