import Container from "@/components/container";
import Products from "@/components/produtos";
import "./globals.css";

const Home = () => {
  return (
    <Container className="p-5 bg-cinza">
      <h2 className="text-xl font-bold ">Página Inicial</h2>
      <p className="text-sm font-semibold"> TEXTO SOBRE A PAGINA AQUI
      </p>
      <br/>
      <Products />
    </Container>
  );
};

export default Home;