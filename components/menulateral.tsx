import React from "react";
import Logo from "./logo";
import Link from "next/link";
import { headerData } from "@/constants/data";

interface MenuLateralProps {
    Aberto: boolean;
    Fechado: () => void;
}

const MenuLateral = ({ Aberto, Fechado }: MenuLateralProps) => {
    return (     
        <div className ={ `fixed inset-y-0 h-screen left-0 z-50 w-full
        bg-preto/30 shadow-xl 
        ${Aberto ? "translate-x-0" : "-translate-x-full"}
        hoverEffect`}>

            <div className= "min-w-72 max-w-96 bg-preto h-screen p-10 border-r border-r-ciano flex flex-col gap-6">
              <div className ="flex items-center justify-between gap-5"> 
                <Logo className="text-white" />
                <button onClick={Fechado} 
                className="text-white hover:text-cinza hoverEffect ">
                    X
                </button>
               </div>    

                  <div className="flex flex-col space-y-4 font-semibold font-family-sans">
                      {headerData?.map((item) => (
                        <Link href={item?.href} key={item?.title} className="block text-white text-lg font-semibold hover:text-ciano hoverEffect">
                          {item?.title}
                        </Link>
                        ))}
                  </div>
            </div>

        </div>

    );
};

export default MenuLateral; 