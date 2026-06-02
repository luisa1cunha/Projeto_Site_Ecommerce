// Validações de entrada do módulo de camisas.
// Convenção: retorna string com erro ou null quando válido.
export function validarCriacaoCamisa(payload) {
  const { nome, preco, time, imagens } = payload

  if (!nome || preco === undefined || !time) {
    return 'Nome, preco e time sao obrigatorios.'
  }

  if (Number(preco) <= 0) {
    return 'Preco deve ser maior que zero.'
  }

  if (!Array.isArray(imagens) || imagens.length === 0) {
    return 'Informe ao menos uma imagem da camisa.'
  }

  return null
}

export function validarEdicaoCamisa(payload) {
  const { nome, preco, time, imagens } = payload

  if (!nome || preco === undefined || !time) {
    return 'Nome, preco e time sao obrigatorios.'
  }

  if (Number(preco) <= 0) {
    return 'Preco deve ser maior que zero.'
  }

  if (!Array.isArray(imagens) || imagens.length === 0) {
    return 'Informe ao menos uma imagem da camisa.'
  }

  return null
}
