import { Router } from 'express'
import { listarCamisasHandler } from './camisas.controller.js'

// Rotas de camisas
const camisasRouter = Router()

// Listagem pública de camisas.
camisasRouter.get('/', listarCamisasHandler)

export { camisasRouter }
