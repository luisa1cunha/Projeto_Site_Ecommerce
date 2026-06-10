import express from 'express'
import request from 'supertest'
import { jest } from '@jest/globals'

const findManyMock = jest.fn()
const createMock = jest.fn()

jest.unstable_mockModule('../src/db.js', () => ({
  prisma: {
    camisasfutebol: {
      findMany: findManyMock,
      create: createMock,
      findUnique: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
    },
  },
}))

jest.unstable_mockModule('../src/middlewares/auth.middleware.js', () => ({
  autenticarToken: (req, res, next) => {
    req.user = { id: 'admin-1', role: 'ADMIN' }
    next()
  },
  autorizarRoles: () => (req, res, next) => next(),
}))

const { camisasRouter } = await import('../src/modules/camisas/camisas.routes.js')

function criarAppTeste() {
  const app = express()
  app.use(express.json())
  app.use('/', camisasRouter)
  return app
}

describe('Back-End - Produtos', () => {
  test('GET produtos retorna status HTTP 200 e estrutura da resposta', async () => {
    findManyMock.mockResolvedValueOnce([
      {
        id: 'c-1',
        nome: 'Camisa Teste',
        preco: '199.9',
        time: 'Time Teste',
        descricao: 'Descricao',
        imagens: ['/camisa.jpg'],
      },
    ])

    const response = await request(criarAppTeste()).get('/')

    expect(response.status).toBe(200)
    expect(Array.isArray(response.body)).toBe(true)
    expect(response.body[0]).toMatchObject({
      id: 'c-1',
      nome: 'Camisa Teste',
      time: 'Time Teste',
      descricao: 'Descricao',
    })
    expect(typeof response.body[0].preco).toBe('number')
    expect(Array.isArray(response.body[0].imagens)).toBe(true)
  })

  test('POST criacao de produto com dados validos retorna 201', async () => {
    createMock.mockResolvedValueOnce({
      id: 'c-2',
      nome: 'Camisa Nova',
      preco: 249.9,
      time: 'Time Novo',
      descricao: 'Descricao nova',
      imagens: ['/nova.jpg'],
    })

    const response = await request(criarAppTeste())
      .post('/')
      .set('Authorization', 'Bearer token-teste')
      .send({
        nome: 'Camisa Nova',
        preco: 249.9,
        time: 'Time Novo',
        descricao: 'Descricao nova',
        imagens: ['/nova.jpg'],
      })

    expect(response.status).toBe(201)
    expect(response.body).toMatchObject({
      message: 'Camisa criada com sucesso.',
      camisa: {
        id: 'c-2',
        nome: 'Camisa Nova',
      },
    })
  })

  test('POST criacao de produto com dados invalidos retorna 400', async () => {
    const response = await request(criarAppTeste())
      .post('/')
      .set('Authorization', 'Bearer token-teste')
      .send({
        preco: 0,
        time: '',
        imagens: [],
      })

    expect(response.status).toBe(400)
    expect(response.body).toEqual({ error: 'Nome, preco e time sao obrigatorios.' })
  })
})
