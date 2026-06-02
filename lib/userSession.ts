export type UserRole = "USER" | "ADMIN";

export interface PerfilUsuario {
  id?: string;
  nome?: string;
  sobrenome?: string;
  email?: string;
  role?: UserRole;
}

export function obterPerfilUsuario(): PerfilUsuario | null {
  if (typeof window === "undefined") return null;

  const bruto = localStorage.getItem("perfil_usuario");
  if (!bruto) return null;

  try {
    return JSON.parse(bruto) as PerfilUsuario;
  } catch {
    return null;
  }
}

export function obterRoleUsuario(): UserRole {
  return obterPerfilUsuario()?.role === "ADMIN" ? "ADMIN" : "USER";
}

export function usuarioEhAdmin(): boolean {
  return obterRoleUsuario() === "ADMIN";
}
