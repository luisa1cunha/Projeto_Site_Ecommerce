import Container from "@/components/container";
import Produtos from "@/components/produtos";

const Camisetas = () => {
  return (
    <Container className="p-5 bg-red-300">
      <h2 className="text-xl font-semibold ">CAMISETAS</h2>
      <p className="text-sm"> PRODUTOS AQUI</p>
      <br/>
      <Produtos />
    </Container>
  );
};

export default Camisetas; 