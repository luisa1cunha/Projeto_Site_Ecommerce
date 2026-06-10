import { esqueciSenha, login, redefinirSenha, registro } from '@/lib/authApi'

describe('Frontend - authApi', () => {
  const fetchOriginal = global.fetch

  afterEach(() => {
    global.fetch = fetchOriginal
    jest.restoreAllMocks()
  })

  test('login envia POST com payload correto e retorna dados', async () => {
    const fetchMock = jest.fn().mockResolvedValue(
      {
        ok: true,
        json: async () => ({ token: 'token-ok', user: { id: 'u-1' } }),
      },
    )
    global.fetch = fetchMock as unknown as typeof fetch

    const resposta = await login({ email: 'rafael@teste.com', senha: '123456' })

    expect(fetchMock).toHaveBeenCalledWith('http://localhost:3001/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: 'rafael@teste.com', senha: '123456' }),
    })
    expect(resposta).toEqual({ token: 'token-ok', user: { id: 'u-1' } })
  })

  test('registro propaga erro de negocio retornado pela API', async () => {
    const fetchMock = jest.fn().mockResolvedValue(
      {
        ok: false,
        json: async () => ({ error: 'Ja existe um usuario com esse email.' }),
      },
    )
    global.fetch = fetchMock as unknown as typeof fetch

    await expect(
      registro({
        nome: 'Rafael',
        sobrenome: 'Silva',
        email: 'rafael@teste.com',
        senha: '123456',
      }),
    ).rejects.toThrow('Ja existe um usuario com esse email.')
  })

  test('esqueciSenha e redefinirSenha falham quando API estiver fora', async () => {
    global.fetch = jest.fn().mockRejectedValue(new Error('ECONNREFUSED')) as unknown as typeof fetch

    await expect(esqueciSenha({ email: 'rafael@teste.com' })).rejects.toThrow(
      'Não foi possível conectar com a API. Verifique se o Back-End está rodando.',
    )

    await expect(
      redefinirSenha({ email: 'rafael@teste.com', novaSenha: '123456' }),
    ).rejects.toThrow('Não foi possível conectar com a API. Verifique se o Back-End está rodando.')
  })
})
