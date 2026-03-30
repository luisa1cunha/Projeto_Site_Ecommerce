import {
  autenticarUsuario,
  iniciarRecuperacaoSenha,
  redefinirSenha,
  registrarUsuario,
} from './auth.service.js'
import {
  validarEsqueciSenha,
  validarLogin,
  validarRedefinicao,
  validarRegistro,
} from './auth.validation.js'

// POST /auth/registro
export async function registroHandler(req, res) {
  try {
    // Controller: valida entrada e delega regra de negócio para o service.
    const erroValidacao = validarRegistro(req.body)
    if (erroValidacao) {
      return res.status(400).json({ error: erroValidacao })
    }

    const resultado = await registrarUsuario(req.body)
    return res.status(resultado.status).json(resultado.body)
  } catch (error) {
    console.log(error)
    return res.status(500).json({ error: 'Erro ao registrar usuario.' })
  }
}

// POST /auth/login
export async function loginHandler(req, res) {
  try {
    // Mantém a mesma estrutura de resposta para facilitar consumo no Front-End.
    const erroValidacao = validarLogin(req.body)
    if (erroValidacao) {
      return res.status(400).json({ error: erroValidacao })
    }

    const resultado = await autenticarUsuario(req.body)
    return res.status(resultado.status).json(resultado.body)
  } catch (error) {
    console.log(error)
    return res.status(500).json({ error: 'Erro ao realizar login.' })
  }
}

// POST /auth/esqueci-senha
export async function esqueciSenhaHandler(req, res) {
  try {
    // Primeiro passo do fluxo de recuperação.
    const erroValidacao = validarEsqueciSenha(req.body)
    if (erroValidacao) {
      return res.status(400).json({ error: erroValidacao })
    }

    const resultado = await iniciarRecuperacaoSenha(req.body)
    return res.status(resultado.status).json(resultado.body)
  } catch (error) {
    console.log(error)
    return res.status(500).json({ error: 'Erro ao iniciar recuperacao de senha.' })
  }
}

// POST /auth/redefinir-senha
export async function redefinirSenhaHandler(req, res) {
  try {
    // Segundo passo do fluxo de recuperação.
    const erroValidacao = validarRedefinicao(req.body)
    if (erroValidacao) {
      return res.status(400).json({ error: erroValidacao })
    }

    const resultado = await redefinirSenha(req.body)
    return res.status(resultado.status).json(resultado.body)
  } catch (error) {
    console.log(error)
    return res.status(500).json({ error: 'Erro ao redefinir senha.' })
  }
}
