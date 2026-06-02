import { requisicaoAutenticada } from "@/lib/authFetch";
import { Produto } from "@/constants/produtos";

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3001";

async function lerJsonResposta(response: Response) {
  const dados = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error((dados as any)?.error || "Falha na operacao de camisas.");
  }
  return dados;
}

export async function listarCamisasApi(): Promise<Produto[]> {
  const response = await fetch(`${API_URL}/`, {
    method: "GET",
    cache: "no-store",
  });

  const dados = await lerJsonResposta(response);
  return dados as Produto[];
}

export async function criarCamisaApi(payload: Omit<Produto, "id">): Promise<Produto> {
  const response = await requisicaoAutenticada(`${API_URL}/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const dados = await lerJsonResposta(response);
  return dados.camisa as Produto;
}

export async function atualizarCamisaApi(id: string, payload: Omit<Produto, "id">): Promise<Produto> {
  const response = await requisicaoAutenticada(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const dados = await lerJsonResposta(response);
  return dados.camisa as Produto;
}

export async function excluirCamisaApi(id: string): Promise<void> {
  const response = await requisicaoAutenticada(`${API_URL}/${id}`, {
    method: "DELETE",
  });

  await lerJsonResposta(response);
}

export async function uploadImagensCamisaApi(arquivos: File[]): Promise<string[]> {
  const formData = new FormData();
  arquivos.forEach((arquivo) => {
    formData.append("imagens", arquivo);
  });

  const response = await requisicaoAutenticada(`${API_URL}/upload`, {
    method: "POST",
    body: formData,
  });

  const dados = await lerJsonResposta(response);
  return dados.imagens as string[];
}
