export const CHAVE_TOKEN = "mock_jwt_token";

export const gravarToken = (token: string) => {
  if (typeof window === "undefined") return;
  localStorage.setItem(CHAVE_TOKEN, token);
};

export const obterToken = (): string | null => {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(CHAVE_TOKEN);
};

export const removerToken = () => {
  if (typeof window === "undefined") return;
  localStorage.removeItem(CHAVE_TOKEN);
};

export const estaAutenticado = (): boolean => Boolean(obterToken());