import Container from "@/components/container";
import Produtos from "@/components/produtos";

const Camisetas = () => {
  return (
    <Container className="page-fade p-4 sm:p-5">
      <section className="surface-card mb-5 p-5 sm:p-6">
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-ciano_escuro dark:text-ciano">Catalogo</p>
        <h2 className="section-title">Camisetas</h2>
        <p className="mt-2 text-sm font-medium text-slate-700 dark:text-slate-300">
          Navegue pelos modelos mais recentes e encontre a camisa ideal para sua colecao.
        </p>
      </section>
      <Produtos />
    </Container>
  );
};

export default Camisetas; 