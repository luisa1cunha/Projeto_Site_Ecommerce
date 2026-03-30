import { Router } from 'express'
import {
  esqueciSenhaHandler,
  loginHandler,
  redefinirSenhaHandler,
  registroHandler,
} from './auth.controller.js'

// Apenas mapeia endpoints para handlers; sem regra de negócio aqui.
const authRouter = Router()

authRouter.post('/registro', registroHandler)
authRouter.post('/login', loginHandler)
authRouter.post('/esqueci-senha', esqueciSenhaHandler)
authRouter.post('/redefinir-senha', redefinirSenhaHandler)

export { authRouter }
