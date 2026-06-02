import Container from "@/components/container";
import Products from "@/components/produtos";
import "./globals.css";
import Link from "next/link";

const Home = () => {
  return (
    <Container className="page-fade p-4 sm:p-5">
      <section className="surface-card relative overflow-hidden p-6 sm:p-8">
        <div className="pointer-events-none absolute -right-10 -top-14 h-56 w-56 rounded-full bg-[rgba(121,224,207,0.35)] blur-3xl" />
        <div className="pointer-events-none absolute -left-14 bottom-0 h-52 w-52 rounded-full bg-[rgba(250,121,89,0.26)] blur-3xl" />

        <div className="relative z-10 max-w-2xl">
          <p className="mb-2 inline-flex rounded-full border border-ciano_escuro/30 bg-white/70 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-ciano_escuro dark:border-slate-600 dark:bg-slate-800/80 dark:text-ciano">
            Colecao oficial 2026
          </p>
          <h1 className="mb-3 text-3xl font-black uppercase leading-tight text-[rgb(11,19,30)] sm:text-5xl dark:text-slate-100">
            Sua camisa favorita, com estilo de jogo grande.
          </h1>
          <p className="mb-6 max-w-xl text-sm font-medium text-slate-700 sm:text-base dark:text-slate-300">
            Encontre modelos atuais, retro e edicoes especiais com entrega rapida e qualidade premium.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/camisetas"
              className="rounded-xl bg-ciano_escuro px-5 py-3 text-sm font-bold text-white transition hover:opacity-90 dark:bg-ciano_escuro dark:hover:bg-ciano"
            >
              Explorar camisetas
            </Link>
            <Link
              href="/ofertas"
              className="rounded-xl border border-slate-300 bg-white/80 px-5 py-3 text-sm font-bold text-slate-800 transition hover:bg-white dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-100 dark:hover:bg-slate-900"
            >
              Ver ofertas
            </Link>
          </div>
        </div>
      </section>

      <section className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <article className="surface-card p-4">
          <p className="mb-1 text-xs font-bold uppercase tracking-[0.14em] text-ciano_escuro dark:text-ciano">Entrega</p>
          <h3 className="text-base font-black text-[rgb(11,19,30)] dark:text-slate-100">Envio para todo Brasil</h3>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">Despacho rapido e rastreio em tempo real.</p>
        </article>
        <article className="surface-card p-4">
          <p className="mb-1 text-xs font-bold uppercase tracking-[0.14em] text-ciano_escuro dark:text-ciano">Qualidade</p>
          <h3 className="text-base font-black text-[rgb(11,19,30)] dark:text-slate-100">Tecidos premium</h3>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">Conforto, respirabilidade e caimento esportivo.</p>
        </article>
        <article className="surface-card p-4">
          <p className="mb-1 text-xs font-bold uppercase tracking-[0.14em] text-ciano_escuro dark:text-ciano">Pagamento</p>
          <h3 className="text-base font-black text-[rgb(11,19,30)] dark:text-slate-100">Compra segura</h3>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">Processo protegido com confirmacao de pedido.</p>
        </article>
      </section>

      <section className="mt-7">
        <div className="mb-4 flex flex-wrap items-end justify-between gap-2">
          <h2 className="section-title">Destaques da semana</h2>
          <p className="text-sm font-semibold text-slate-600 dark:text-slate-300">Escolhas mais vendidas agora</p>
        </div>
        <Products />
      </section>
    </Container>
  );
};

export default Home;