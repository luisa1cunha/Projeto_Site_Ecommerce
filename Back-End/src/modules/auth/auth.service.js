import bcrypt from 'bcryptjs'
import { prisma } from '../../db.js'
import { gerarTokenAcesso, obterExpiracaoToken } from '../../utils/jwt.js'

function obterRoleSeguro(user) {
  return user?.role || 'USER'
}

// Regra de negócio: registro
export async function registrarUsuario({ nome, sobrenome, email, senha }) {
  // Normaliza para evitar duplicidade por diferença de maiúsculas/minúsculas.
  const emailNormalizado = email.toLowerCase().trim()
  const usuarioExistente = await prisma.user.findUnique({ where: { email: emailNormalizado } })

  if (usuarioExistente) {
    return { status: 409, body: { error: 'Ja existe um usuario com esse email.' } }
  }

  // Nunca salvar senha em texto puro.
  const senhaHash = await bcrypt.hash(senha, 10)
  const usuarioCriado = await prisma.user.create({
    data: {
      nome: nome.trim(),
      sobrenome: sobrenome?.trim() || null,
      email: emailNormalizado,
      senhaHash,
    },
    select: {
      id: true,
      nome: true,
      sobrenome: true,
      email: true,
      createdAt: true,
    },
  })

  return {
    status: 201,
    body: {
      message: 'Usuario registrado com sucesso.',
      user: {
        ...usuarioCriado,
        role: 'USER',
      },
    },
  }
}

// Regra de negócio: login
export async function autenticarUsuario({ email, senha }) {
  const emailNormalizado = email.toLowerCase().trim()
  const usuario = await prisma.user.findUnique({ where: { email: emailNormalizado } })

  // Resposta genérica para não indicar se o e-mail existe.
  if (!usuario || !usuario.senhaHash) {
    return { status: 401, body: { error: 'Credenciais invalidas.' } }
  }

  const senhaConfere = await bcrypt.compare(senha, usuario.senhaHash)

  if (!senhaConfere) {
    return { status: 401, body: { error: 'Credenciais invalidas.' } }
  }

  const token = gerarTokenAcesso({
    ...usuario,
    role: obterRoleSeguro(usuario),
  })

  return {
    status: 200,
    body: {
      message: 'Login realizado com sucesso.',
      token,
      tokenType: 'Bearer',
      expiresIn: obterExpiracaoToken(),
      user: {
        id: usuario.id,
        nome: usuario.nome,
        sobrenome: usuario.sobrenome,
        email: usuario.email,
        role: obterRoleSeguro(usuario),
      },
    },
  }
}

// Regra de negócio: início da recuperação de senha
export async function iniciarRecuperacaoSenha({ email }) {
  const emailNormalizado = email.toLowerCase().trim()
  const usuario = await prisma.user.findUnique({ where: { email: emailNormalizado } })

  // Mensagem neutra por segurança (evita enumeração de usuários).
  if (!usuario) {
    return { status: 200, body: { message: 'Se o email existir, voce ja pode redefinir sua senha.' } }
  }

  return {
    status: 200,
    body: {
      message: 'Conta encontrada. Agora informe a nova senha para concluir a redefinicao.',
    },
  }
}

// Regra de negócio: redefinição de senha
export async function redefinirSenha({ email, novaSenha }) {
  const emailNormalizado = email.toLowerCase().trim()
  const usuario = await prisma.user.findUnique({ where: { email: emailNormalizado } })

  if (!usuario) {
    return { status: 404, body: { error: 'Usuario nao encontrado.' } }
  }

  // Substitui hash atual pelo novo hash calculado.
  const senhaHash = await bcrypt.hash(novaSenha, 10)
  await prisma.user.update({
    where: { id: usuario.id },
    data: { senhaHash },
  })

  return { status: 200, body: { message: 'Senha redefinida com sucesso.' } }
}
