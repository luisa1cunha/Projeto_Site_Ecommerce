import React from "react";
import Container from "./container";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-10 border-t border-white/60 bg-[rgba(11,19,30,0.96)] text-slate-100">
        <Container className="grid gap-8 py-8 sm:grid-cols-2 lg:grid-cols-4">
            <section>
              <h3 className="mb-2 text-lg font-black uppercase tracking-wide text-white">GR Imports</h3>
              <p className="text-sm text-slate-300">
                Camisas de futebol com estilo, conforto e autenticidade para torcedores e colecionadores.
              </p>
            </section>

            <section>
              <h4 className="mb-2 text-sm font-bold uppercase tracking-wide text-slate-200">Navegacao</h4>
              <ul className="space-y-1 text-sm text-slate-300">
                <li><Link href="/" className="hover:text-white">Inicio</Link></li>
                <li><Link href="/camisetas" className="hover:text-white">Camisetas</Link></li>
                <li><Link href="/ofertas" className="hover:text-white">Ofertas</Link></li>
                <li><Link href="/contato" className="hover:text-white">Contato</Link></li>
              </ul>
            </section>

            <section>
              <h4 className="mb-2 text-sm font-bold uppercase tracking-wide text-slate-200">Suporte</h4>
              <ul className="space-y-1 text-sm text-slate-300">
                <li>Atendimento: seg a sex</li>
                <li>Email: suporte@grimports.com</li>
                <li>Entrega para todo Brasil</li>
              </ul>
            </section>

            <section>
              <h4 className="mb-2 text-sm font-bold uppercase tracking-wide text-slate-200">Newsletter</h4>
              <p className="mb-3 text-sm text-slate-300">Receba novidades e ofertas em primeira mao.</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Seu email"
                  className="w-full rounded-lg border border-slate-600 bg-slate-900 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-400"
                />
                <button
                  type="button"
                  className="rounded-lg bg-ciano_escuro px-3 py-2 text-sm font-bold text-white hover:opacity-90"
                >
                  Enviar
                </button>
              </div>
            </section>
        </Container>

        <div className="border-t border-slate-800 py-3 text-center text-xs text-slate-400">
          © 2026 GR Imports. Todos os direitos reservados.
        </div>
    </footer>
  );
};

export default Footer; 