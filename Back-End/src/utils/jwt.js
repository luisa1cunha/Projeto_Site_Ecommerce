import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET || 'dev-secret-change-me'
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '30m'

export function gerarTokenAcesso(user) {
  return jwt.sign(
    {
      sub: user.id,
      email: user.email,
      nome: user.nome,
      role: user.role,
    },
    JWT_SECRET,
    { expiresIn: JWT_EXPIRES_IN },
  )
}

export function verificarTokenAcesso(token) {
  return jwt.verify(token, JWT_SECRET)
}

export function obterExpiracaoToken() {
  return JWT_EXPIRES_IN
}
