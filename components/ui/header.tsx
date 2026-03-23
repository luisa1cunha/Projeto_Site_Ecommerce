import React from "react";
import Container from "./container";
import Logo from "./logo";
import HeaderNav from "./headerNav";

const Header = () => {
  return (
    <header className="bg-white py-5 border-b-3 border-b-ciano/50">
        <Container className="flex items-center justify-between">
            <Logo />
            <HeaderNav />
            <div>
               {/*NavUsuário*/}
               Header
            </div>
        </Container>
    </header>
  );
};

export default Header; 