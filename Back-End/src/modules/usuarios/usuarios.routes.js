import { Router } from 'express'
import { listarUsuariosHandler } from './usuarios.controller.js'
import { autenticarToken } from '../../middlewares/auth.middleware.js'

// Rotas de usuários
const usuariosRouter = Router()

// Listagem de usuários (dados não sensíveis).
usuariosRouter.get('/', autenticarToken, listarUsuariosHandler)

export { usuariosRouter }
