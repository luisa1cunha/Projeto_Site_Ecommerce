import { verificarTokenAcesso } from '../utils/jwt.js'

// Middleware para proteger rotas privadas usando JWT Bearer token.
export function autenticarToken(req, res, next) {
  const authHeader = req.headers.authorization

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Token de acesso ausente.' })
  }

  const token = authHeader.split(' ')[1]

  try {
    const payload = verificarTokenAcesso(token)
    req.user = {
      id: payload.sub,
      email: payload.email,
      nome: payload.nome,
    }

    return next()
  } catch {
    return res.status(401).json({ error: 'Token inválido ou expirado.' })
  }
}
