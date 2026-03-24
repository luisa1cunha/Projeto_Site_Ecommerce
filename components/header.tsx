import React from "react";
import Container from "./container";
import Logo from "./logo";
import HeaderNav from "./headerNav";
import Pesquisa from "./pesquisa";
import Carrinho from "./carrinho";
import IconPerfil from "./iconperfil";
import Favoritos from "./favoritos";
import Menu from "./menu";


const Header = () => {
  return (
    <header className="bg-white py-5 border-b-3 border-b-ciano/50">
        <Container className="flex items-center justify-between">
      <div className= "w-auto md:w1/3 flex items-center justify-start gap-3">      
            <Menu />
            <Logo />
      </div>
          <HeaderNav />
            <div className="w-auto md:w1/3 flex items-center justify-end gap-5">
               <Pesquisa />
               <Carrinho />
               <Favoritos />
               <IconPerfil />
            </div>
        </Container>
    </header>
  );
};

export default Header; 