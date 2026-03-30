import { prisma } from '../../db.js'

// GET /usuarios
export async function listarUsuariosHandler(req, res) {
  try {
    const users = await prisma.user.findMany({
      // Evita expor campos sensíveis como senhaHash.
      select: {
        id: true,
        nome: true,
        sobrenome: true,
        email: true,
        createdAt: true,
      },
    })

    return res.json(users)
  } catch (error) {
    console.log(error)
    return res.status(500).json({ error: 'Erro ao buscar usuarios.' })
  }
}
