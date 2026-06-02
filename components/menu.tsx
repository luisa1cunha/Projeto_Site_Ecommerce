"use client";
import { AlignLeft } from "lucide-react";
import React from "react";
import MenuLateral from "./menulateral";

const Menu = () => {
  const [MenuLateralaberto, setMenuLateralAberto] = React.useState(false);
    return (
      <>
        <button onClick={() => setMenuLateralAberto(!MenuLateralaberto)}>
            <AlignLeft className="w-5 h-5 text-black hover:text-ciano hoverEffect 
          md:hidden hover:cursor-pointer md:gap-0 dark:text-slate-200 dark:hover:text-ciano" />
        </button>
        <div className="md:hidden">      
            <MenuLateral 
             Aberto={MenuLateralaberto} 
             Fechado={() => setMenuLateralAberto(false)}
            />
        </div>
      </>
  );
};

export default Menu; 

