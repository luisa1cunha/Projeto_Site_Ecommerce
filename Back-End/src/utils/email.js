// Utilitário de validação de e-mail
// Validação simples de formato (não verifica existência real do endereço).

export function emailValido(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}
