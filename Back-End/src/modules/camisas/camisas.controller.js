import { prisma } from '../../db.js'

// GET /
export async function listarCamisasHandler(req, res) {
  try {
    // Sem filtros por enquanto; retorna catálogo completo.
    const camisas = await prisma.camisasfutebol.findMany()
    return res.json(camisas)
  } catch (error) {
    console.log(error)
    return res.status(500).json({ error: 'Erro ao buscar camisas.' })
  }
}
