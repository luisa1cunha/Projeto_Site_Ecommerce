import { Router } from 'express'
import {
  atualizarCamisaHandler,
  buscarCamisaPorIdHandler,
  criarCamisaHandler,
  excluirCamisaHandler,
  listarCamisasHandler,
  uploadImagensCamisaHandler,
} from './camisas.controller.js'
import { uploadCamisas } from './camisas.upload.js'
import { autenticarToken, autorizarRoles } from '../../middlewares/auth.middleware.js'

// Rotas de camisas
const camisasRouter = Router()

// Listagem pública de camisas.
camisasRouter.get('/', listarCamisasHandler)
camisasRouter.get('/:id', buscarCamisaPorIdHandler)

// Rotas administrativas protegidas por JWT + perfil ADMIN.
camisasRouter.post('/upload', autenticarToken, autorizarRoles('ADMIN'), uploadCamisas.array('imagens', 10), uploadImagensCamisaHandler)
camisasRouter.post('/', autenticarToken, autorizarRoles('ADMIN'), criarCamisaHandler)
camisasRouter.put('/:id', autenticarToken, autorizarRoles('ADMIN'), atualizarCamisaHandler)
camisasRouter.delete('/:id', autenticarToken, autorizarRoles('ADMIN'), excluirCamisaHandler)

export { camisasRouter }
