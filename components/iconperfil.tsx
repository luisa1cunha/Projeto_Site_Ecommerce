import Link from "next/link";
import { CircleUser } from "lucide-react";
import React from "react";

const IconPerfil = () => {
  return (
    <Link href="/perfil" aria-label="Ir para perfil">
      <CircleUser className="w-5 h-5 text-black hover:text-ciano hoverEffect hover:cursor-pointer" />
    </Link>
  );
};

export default IconPerfil;


