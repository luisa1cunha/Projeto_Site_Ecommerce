import { ShoppingCart } from "lucide-react";
import React from "react";
import Link from "next/link";

const Carrinho = () => {
  return ( 
    <Link href={"/carrinho"} className="group relative">
        <ShoppingCart className="w-5 h-5 text-black hover:text-ciano hoverEffect" />
        <span className="absolute -top-2 -right-2 w-4 h-4 bg-ciano 
        text-white rounded-full text-xs 
        flex items-center justify-center group-hover:bg-ciano/80
        hover:cursor-pointer">
         0
        </span>
    </Link>

  );
};

export default Carrinho; 

