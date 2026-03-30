const API_URL = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3001'

// função genérica para chamadas POST à API
async function chamarApi(path: string, body: unknown) {

  let resposta: Response

  try {
    // faz requisição para o backend
    resposta = await fetch(`${API_URL}${path}`, {
      method: 'POST', // método POST
      headers: { 'Content-Type': 'application/json' }, // define JSON
      body: JSON.stringify(body), // envia corpo convertido em JSON
    })

  } catch {
    throw new Error('Não foi possível conectar com a API. Verifique se o Back-End está rodando.')
  }

  // converter resposta para JSON
  const dados = await resposta.json().catch(() => ({}))

  if (!resposta.ok) {
    throw new Error((dados as any)?.error || 'Não foi possível concluir a operação.')
  }
  return dados
}

export function login(body: { email: string; senha: string }) {
  return chamarApi('/auth/login', body)
}

export function registro(body: { nome: string; sobrenome: string; email: string; senha: string }) {
  return chamarApi('/auth/registro', body)
}

export function esqueciSenha(body: { email: string }) {
  return chamarApi('/auth/esqueci-senha', body)
}

export function redefinirSenha(body: { email: string; novaSenha: string }) {
  return chamarApi('/auth/redefinir-senha', body)
}
