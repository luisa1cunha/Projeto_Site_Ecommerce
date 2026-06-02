import React from "react";
import Container from "./container";
import Logo from "./logo";
import HeaderNav from "./headerNav";
import Pesquisa from "./pesquisa";
import Carrinho from "./carrinho";
import IconPerfil from "./iconperfil";
import Favoritos from "./favoritos";
import Menu from "./menu";
import BotaoTema from "./botao-tema";


const Header = () => {
  return (
    <header className="sticky top-0 z-40 border-b border-white/60 bg-[rgba(252,248,239,0.82)] py-4 backdrop-blur-xl dark:border-slate-700/80 dark:bg-[rgba(15,17,21,0.9)]">
        <Container className="grid grid-cols-[1fr_auto] items-center gap-3 md:grid-cols-[auto_1fr_auto] md:gap-4">
      <div className= "flex h-11 items-center justify-start gap-3 px-1">      
            <Menu />
            <Logo />
      </div>
          <HeaderNav />
            <div className="flex h-11 items-center justify-end gap-4 px-1 md:justify-self-end">
              <BotaoTema />
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