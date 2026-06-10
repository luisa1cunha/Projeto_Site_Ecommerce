import { jest } from '@jest/globals'

const verificarTokenAcessoMock = jest.fn()

jest.unstable_mockModule('../src/utils/jwt.js', () => ({
  verificarTokenAcesso: verificarTokenAcessoMock,
}))

const { autenticarToken, autorizarRoles } = await import('../src/middlewares/auth.middleware.js')

function criarRes() {
  const res = {}
  res.status = jest.fn(() => res)
  res.json = jest.fn(() => res)
  return res
}

describe('Back-End - auth middleware', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  test('bloqueia quando header Authorization nao existe', () => {
    const req = { headers: {} }
    const res = criarRes()
    const next = jest.fn()

    autenticarToken(req, res, next)

    expect(res.status).toHaveBeenCalledWith(401)
    expect(res.json).toHaveBeenCalledWith({ error: 'Token de acesso ausente.' })
    expect(next).not.toHaveBeenCalled()
  })

  test('bloqueia quando token e invalido', () => {
    verificarTokenAcessoMock.mockImplementationOnce(() => {
      throw new Error('token invalido')
    })

    const req = { headers: { authorization: 'Bearer token-invalido' } }
    const res = criarRes()
    const next = jest.fn()

    autenticarToken(req, res, next)

    expect(verificarTokenAcessoMock).toHaveBeenCalledWith('token-invalido')
    expect(res.status).toHaveBeenCalledWith(401)
    expect(res.json).toHaveBeenCalledWith({ error: 'Token inválido ou expirado.' })
    expect(next).not.toHaveBeenCalled()
  })

  test('permite seguir quando token e valido', () => {
    verificarTokenAcessoMock.mockReturnValueOnce({
      sub: 'u-1',
      email: 'rafael@teste.com',
      nome: 'Rafael',
      role: 'ADMIN',
    })

    const req = { headers: { authorization: 'Bearer token-valido' } }
    const res = criarRes()
    const next = jest.fn()

    autenticarToken(req, res, next)

    expect(req.user).toEqual({
      id: 'u-1',
      email: 'rafael@teste.com',
      nome: 'Rafael',
      role: 'ADMIN',
    })
    expect(next).toHaveBeenCalledTimes(1)
  })

  test('autorizarRoles bloqueia perfil nao permitido', () => {
    const middleware = autorizarRoles('ADMIN')
    const req = { user: { role: 'USER' } }
    const res = criarRes()
    const next = jest.fn()

    middleware(req, res, next)

    expect(res.status).toHaveBeenCalledWith(403)
    expect(res.json).toHaveBeenCalledWith({ error: 'Acesso negado para este perfil.' })
    expect(next).not.toHaveBeenCalled()
  })

  test('autorizarRoles permite perfil autorizado', () => {
    const middleware = autorizarRoles('ADMIN')
    const req = { user: { role: 'ADMIN' } }
    const res = criarRes()
    const next = jest.fn()

    middleware(req, res, next)

    expect(next).toHaveBeenCalledTimes(1)
  })
})
