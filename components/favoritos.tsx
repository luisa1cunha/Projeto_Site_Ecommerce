import Link from "next/link";
import { Star } from "lucide-react";
import React from "react";

const Favoritos = () => {
  return (
    <Link href="/favoritos" className="group relative">
      <Star className="w-5 h-5 text-black hover:text-amarelo hoverEffect dark:text-slate-200 dark:hover:text-ciano" />
    </Link>
  );
};

export default Favoritos; 

