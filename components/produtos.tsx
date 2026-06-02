'use client';

import { useEffect, useMemo, useState } from "react";
import { useFavorites } from "@/components/favoritos-contexto";
import CamisaCard from "@/components/camisa-card";
import CamisaDetalheModal from "@/components/camisa-detalhe-modal";
import { Produto, produtos as fallbackProdutos } from "@/constants/produtos";
import {
  atualizarCamisaApi,
  criarCamisaApi,
  excluirCamisaApi,
  listarCamisasApi,
  uploadImagensCamisaApi,
} from "@/lib/camisasApi";
import { usuarioEhAdmin } from "@/lib/userSession";
import { useCarrinho } from "@/components/carrinho-contexto";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3001";

const Produtos: React.FC = () => {
  const { toggleFavorito, isFavorito } = useFavorites();
  const { adicionarAoCarrinho } = useCarrinho();
  const [catalogo, setCatalogo] = useState<Produto[]>(fallbackProdutos);
  const [produtoSelecionado, setProdutoSelecionado] = useState<Produto | null>(null);
  const [admin, setAdmin] = useState(false);
  const [carregando, setCarregando] = useState(false);
  const [formAberto, setFormAberto] = useState(false);
  const [modoEdicao, setModoEdicao] = useState(false);
  const [produtoEmEdicao, setProdutoEmEdicao] = useState<Produto | null>(null);
  const [erroFormulario, setErroFormulario] = useState("");
  const [arquivosImagem, setArquivosImagem] = useState<File[]>([]);
  const [form, setForm] = useState({
    nome: "",
    preco: "",
    time: "",
    descricao: "",
    imagensTexto: "",
  });

  useEffect(() => {
    setAdmin(usuarioEhAdmin());

    async function carregarCatalogo() {
      try {
        const lista = await listarCamisasApi();
        if (lista.length > 0) {
          setCatalogo(lista);
        }
      } catch {
        setCatalogo(fallbackProdutos);
      }
    }

    carregarCatalogo();
  }, []);

  const tituloPagina = useMemo(() => (admin ? "Produtos (Admin)" : "Produtos"), [admin]);

  function abrirFormularioNovo() {
    setModoEdicao(false);
    setProdutoEmEdicao(null);
    setErroFormulario("");
    setArquivosImagem([]);
    setForm({ nome: "", preco: "", time: "", descricao: "", imagensTexto: "" });
    setFormAberto(true);
  }

  function abrirFormularioEdicao(produto: Produto) {
    setModoEdicao(true);
    setProdutoEmEdicao(produto);
    setErroFormulario("");
    setArquivosImagem([]);
    setForm({
      nome: produto.nome,
      preco: String(produto.preco),
      time: produto.time,
      descricao: produto.descricao,
      imagensTexto: produto.imagens.join("\n"),
    });
    setFormAberto(true);
  }

  function validarFormulario() {
    if (!form.nome.trim() || !form.preco.trim() || !form.time.trim()) {
      return "Nome, preco e time sao obrigatorios.";
    }

    const precoNumero = Number(form.preco);
    if (Number.isNaN(precoNumero) || precoNumero <= 0) {
      return "Informe um preco valido maior que zero.";
    }

    const imagensTexto = form.imagensTexto
      .split("\n")
      .map((linha) => linha.trim())
      .filter(Boolean);

    if (imagensTexto.length === 0 && arquivosImagem.length === 0) {
      return "Informe imagens no campo de URLs ou envie arquivos.";
    }

    return null;
  }

  async function resolverImagens() {
    const imagensDigitadas = form.imagensTexto
      .split("\n")
      .map((linha) => linha.trim())
      .filter(Boolean)
      .map((url) => (url.startsWith("/") ? `${API_BASE_URL}${url}` : url));

    if (arquivosImagem.length === 0) {
      return imagensDigitadas;
    }

    const imagensUpload = await uploadImagensCamisaApi(arquivosImagem);
    const absolutasUpload = imagensUpload.map((url) => `${API_BASE_URL}${url}`);
    return [...imagensDigitadas, ...absolutasUpload];
  }

  async function salvarFormulario() {
    const erro = validarFormulario();
    if (erro) {
      setErroFormulario(erro);
      return;
    }

    setCarregando(true);
    setErroFormulario("");

    try {
      const imagens = await resolverImagens();
      const payload = {
        nome: form.nome.trim(),
        preco: Number(form.preco),
        time: form.time.trim(),
        descricao: form.descricao.trim() || "Sem descricao.",
        imagens,
      };

      if (modoEdicao && produtoEmEdicao) {
        const atualizado = await atualizarCamisaApi(produtoEmEdicao.id, payload);
        setCatalogo((valorAtual) =>
          valorAtual.map((item) => (item.id === atualizado.id ? atualizado : item)),
        );
      } else {
        const criado = await criarCamisaApi(payload);
        setCatalogo((valorAtual) => [criado, ...valorAtual]);
      }

      setFormAberto(false);
    } catch (error: any) {
      setErroFormulario(error.message || "Falha ao salvar camisa.");
    } finally {
      setCarregando(false);
    }
  }

  async function excluirProduto(produto: Produto) {
    const confirmar = window.confirm(`Confirma excluir a camisa ${produto.nome}?`);
    if (!confirmar) return;

    try {
      await excluirCamisaApi(produto.id);
      setCatalogo((valorAtual) => valorAtual.filter((item) => item.id !== produto.id));
    } catch (error: any) {
      window.alert(error.message || "Falha ao excluir camisa.");
    }
  }

  return (
    <div className="min-h-screen rounded-2xl bg-gray-100 p-6 dark:bg-slate-900/60">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100">{tituloPagina}</h1>
        {admin && (
          <button
            type="button"
            onClick={abrirFormularioNovo}
            className="rounded-xl bg-ciano_escuro px-4 py-2 text-sm font-semibold text-white hover:opacity-90 dark:bg-ciano_escuro dark:hover:bg-ciano"
          >
            Adicionar Camisa
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {catalogo.map((produto) => {
          const favorito = isFavorito(produto.id);

          return (
            <CamisaCard
              key={produto.id}
              produto={produto}
              favorito={favorito}
              isAdmin={admin}
              onToggleFavorito={toggleFavorito}
              onAdicionarAoCarrinho={adicionarAoCarrinho}
              onOpenDetalhe={setProdutoSelecionado}
              onEditar={abrirFormularioEdicao}
              onExcluir={excluirProduto}
            />
          );
        })}
      </div>

      {produtoSelecionado && (
        <CamisaDetalheModal
          produto={produtoSelecionado}
          onClose={() => setProdutoSelecionado(null)}
        />
      )}

      {formAberto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
          <div className="w-full max-w-xl rounded-2xl bg-white p-5 shadow-2xl dark:bg-slate-900">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                {modoEdicao ? "Editar Camisa" : "Adicionar Camisa"}
              </h2>
              <button
                type="button"
                onClick={() => setFormAberto(false)}
                className="rounded-lg border border-slate-300 px-3 py-2 text-sm font-semibold hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
              >
                Fechar
              </button>
            </div>

            <div className="grid gap-3">
              <input
                type="text"
                value={form.nome}
                onChange={(event) => setForm((v) => ({ ...v, nome: event.target.value }))}
                className="rounded-xl border border-slate-300 px-3 py-2 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
                placeholder="Nome da camisa"
              />
              <input
                type="number"
                min="0"
                step="0.01"
                value={form.preco}
                onChange={(event) => setForm((v) => ({ ...v, preco: event.target.value }))}
                className="rounded-xl border border-slate-300 px-3 py-2 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
                placeholder="Valor"
              />
              <input
                type="text"
                value={form.time}
                onChange={(event) => setForm((v) => ({ ...v, time: event.target.value }))}
                className="rounded-xl border border-slate-300 px-3 py-2 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
                placeholder="Time"
              />
              <textarea
                value={form.descricao}
                onChange={(event) => setForm((v) => ({ ...v, descricao: event.target.value }))}
                className="min-h-20 rounded-xl border border-slate-300 px-3 py-2 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
                placeholder="Descricao"
              />
              <textarea
                value={form.imagensTexto}
                onChange={(event) => setForm((v) => ({ ...v, imagensTexto: event.target.value }))}
                className="min-h-24 rounded-xl border border-slate-300 px-3 py-2 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
                placeholder="URLs de imagens (uma por linha). Pode usar /uploads/camisas/..."
              />
              <div>
                <label
                  htmlFor="upload-camisa-imagens"
                  className="inline-flex cursor-pointer items-center rounded-xl bg-ciano_escuro px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90"
                >
                  Escolher fotos
                </label>
                <input
                  id="upload-camisa-imagens"
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={(event) => setArquivosImagem(Array.from(event.target.files || []))}
                  className="sr-only"
                />
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300">
                Fotos selecionadas: <strong>{arquivosImagem.length}</strong>.
                Use varias URLs (uma por linha) e/ou selecione varios arquivos no upload.
              </p>

              {erroFormulario && (
                <p className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm font-semibold text-red-700">
                  {erroFormulario}
                </p>
              )}

              <button
                type="button"
                onClick={salvarFormulario}
                disabled={carregando}
                className="rounded-xl bg-ciano_escuro px-4 py-2 text-sm font-semibold text-white hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-ciano_escuro dark:hover:bg-ciano"
              >
                {carregando
                  ? "Salvando..."
                  : modoEdicao
                    ? "Salvar Alteracoes"
                    : "Cadastrar Camisa"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Produtos;
