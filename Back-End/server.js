import express from 'express'
import cors from 'cors'
import { authRouter } from './src/modules/auth/auth.routes.js'
import { camisasRouter } from './src/modules/camisas/camisas.routes.js'
import { usuariosRouter } from './src/modules/usuarios/usuarios.routes.js'
import { registrarRequisicoes } from './src/middlewares/request-log.middleware.js'

const app = express()

// Middleware para parsear JSON no corpo das requests.
app.use(express.json())

// CORS limitado ao Front-End. Em produção, definir FRONTEND_URL no ambiente.
const allowedOrigins = [
    process.env.FRONTEND_URL,
    'http://localhost:5173',
    'http://localhost:5174',
].filter(Boolean)

const localhostRegex = /^http:\/\/(localhost|127\.0\.0\.1):\d+$/

app.use(
    cors({
        origin: (origin, callback) => {
            // Permite chamadas sem Origin (ex: curl/postman)
            if (!origin) {
                return callback(null, true)
            }

            if (allowedOrigins.includes(origin)) {
                return callback(null, true)
            }

            // Em desenvolvimento, aceita localhost em qualquer porta (Vite pode alternar 5173/5174/5175...).
            if (localhostRegex.test(origin)) {
                return callback(null, true)
            }

            return callback(new Error('Origem não permitida pelo CORS'))
        },
    }),
)

// Auditoria de tráfego da API.
app.use(registrarRequisicoes)

// Mapeamento de módulos da API.
app.use('/', camisasRouter)
app.use('/usuarios', usuariosRouter)
app.use('/auth', authRouter)

app.listen(3001, () => {
    console.log('Servidor rodando em http://localhost:3001')
})


