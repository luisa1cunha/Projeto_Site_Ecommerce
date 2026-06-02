import { ShoppingCart } from "lucide-react";
import React from "react";
import Link from "next/link";
import { useCarrinho } from "@/components/carrinho-contexto";

const Carrinho = () => {
  const { quantidadeTotal } = useCarrinho();

  return ( 
    <Link href={"/carrinho"} className="group relative">
        <ShoppingCart className="w-5 h-5 text-black hover:text-ciano hoverEffect dark:text-slate-200 dark:hover:text-ciano" />
        <span className="absolute -top-2 -right-2 w-4 h-4 bg-ciano 
        text-white rounded-full text-xs 
        flex items-center justify-center group-hover:bg-ciano/80
        hover:cursor-pointer">
         {quantidadeTotal}
        </span>
    </Link>

  );
};

export default Carrinho; 

