import { emailValido } from '../../utils/email.js'

// Validações de entrada do módulo auth
// Convenção: retorna string com erro ou null quando válido.
export function validarRegistro(payload) {
  const { nome, email, senha } = payload

  if (!nome || !email || !senha) {
    return 'Nome, email e senha são obrigatórios.'
  }

  if (!emailValido(email)) {
    return 'Informe um email válido.'
  }

  if (senha.length < 6) {
    return 'A senha precisa ter no mínimo 6 caracteres.'
  }

  return null
}

export function validarLogin(payload) {
  const { email, senha } = payload

  if (!email || !senha) {
    return 'Email e senha são obrigatórios.'
  }

  if (!emailValido(email)) {
    return 'Informe um email válido.'
  }

  return null
}

export function validarRedefinicao(payload) {
  const { email, novaSenha } = payload

  if (!email || !novaSenha) {
    return 'Email e nova senha são obrigatórios.'
  }

  if (!emailValido(email)) {
    return 'Informe um email válido.'
  }

  if (novaSenha.length < 6) {
    return 'A nova senha precisa ter no mínimo 6 caracteres.'
  }

  return null
}

export function validarEsqueciSenha(payload) {
  const { email } = payload

  if (!email) {
    return 'Email e obrigatorio.'
  }

  if (!emailValido(email)) {
    return 'Informe um email valido.'
  }

  return null
}
