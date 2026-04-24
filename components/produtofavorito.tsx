'use client';
import { Star, StarOff } from "lucide-react";

interface ProdutosFavoritosProps {
  active: boolean;
}

const ProdutosFavoritos: React.FC<ProdutosFavoritosProps> = ({ active }) => {
  return (
    <div className="cursor-pointer">
      {active ? (
        <Star className="w-5 h-5 text-yellow-400" />
      ) : (
        <StarOff className="w-5 h-5 text-gray-400" />
      )}
    </div>
  );
};

export default ProdutosFavoritos;
