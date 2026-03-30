import { obterToken } from "@/lib/auth";

export async function requisicaoAutenticada(input: RequestInfo, init: RequestInit = {}) {
  const token = obterToken();

  // headers da requisição
  const headers = {
    ...(init.headers ?? {}), // mantém headers já existentes
    ...(token ? { Authorization: `Bearer ${token}` } : {}), // adiciona token se existir
  } as Record<string, string>;

  // faz a requisição usando fetch
  const response = await fetch(input, { ...init, headers });
  if (!response.ok) {
    const textoErro = await response.text();
    throw new Error(`Requisição falhou (status ${response.status}): ${textoErro}`);
  }
  return response;
}
