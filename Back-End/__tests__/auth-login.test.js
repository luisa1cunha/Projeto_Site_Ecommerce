import express from 'express'
import request from 'supertest'
import { jest } from '@jest/globals'

const autenticarUsuarioMock = jest.fn()

jest.unstable_mockModule('../src/modules/auth/auth.service.js', () => ({
  registrarUsuario: jest.fn(),
  autenticarUsuario: autenticarUsuarioMock,
  iniciarRecuperacaoSenha: jest.fn(),
  redefinirSenha: jest.fn(),
}))

const { authRouter } = await import('../src/modules/auth/auth.routes.js')

function criarAppTeste() {
  const app = express()
  app.use(express.json())
  app.use('/auth', authRouter)
  return app
}

describe('Back-End - Login', () => {
  test('retorna sucesso com credenciais validas', async () => {
    autenticarUsuarioMock.mockResolvedValueOnce({
      status: 200,
      body: {
        message: 'Login realizado com sucesso.',
        token: 'token-teste',
        user: {
          id: 'u-1',
          nome: 'Rafael',
          email: 'rafael@teste.com',
          role: 'USER',
        },
      },
    })

    const response = await request(criarAppTeste())
      .post('/auth/login')
      .send({ email: 'rafael@teste.com', senha: '123456' })

    expect(response.status).toBe(200)
    expect(response.body.token).toBe('token-teste')
    expect(response.body.user).toMatchObject({
      id: 'u-1',
      email: 'rafael@teste.com',
    })
  })

  test('retorna erro com credenciais invalidas', async () => {
    autenticarUsuarioMock.mockResolvedValueOnce({
      status: 401,
      body: { error: 'Credenciais invalidas.' },
    })

    const response = await request(criarAppTeste())
      .post('/auth/login')
      .send({ email: 'rafael@teste.com', senha: 'senha-errada' })

    expect(response.status).toBe(401)
    expect(response.body).toEqual({ error: 'Credenciais invalidas.' })
  })
})
