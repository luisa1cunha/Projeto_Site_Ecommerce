import { prisma } from '../db.js'

// Registra todas as requisições HTTP em tabela de auditoria.
export function registrarRequisicoes(req, res, next) {
  const inicio = Date.now()

  res.on('finish', () => {
    if (!prisma.requestLog || typeof prisma.requestLog.create !== 'function') {
      return
    }

    const duracaoMs = Date.now() - inicio

    const userId = req.user?.id || null
    const ip = req.ip || req.socket?.remoteAddress || null
    const userAgent = req.headers['user-agent'] || null

    prisma.requestLog
      .create({
        data: {
          method: req.method,
          path: req.originalUrl,
          statusCode: res.statusCode,
          durationMs: duracaoMs,
          ip,
          userAgent,
          userId,
        },
      })
      .catch((error) => {
        console.error('Falha ao registrar request:', error.message)
      })
  })

  next()
}
