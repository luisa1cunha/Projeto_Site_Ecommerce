import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import Produtos from '@/components/produtos'
import { listarCamisasApi } from '@/lib/camisasApi'

jest.mock('@/lib/camisasApi', () => ({
  listarCamisasApi: jest.fn(),
  criarCamisaApi: jest.fn(),
  atualizarCamisaApi: jest.fn(),
  excluirCamisaApi: jest.fn(),
  uploadImagensCamisaApi: jest.fn(),
}))

jest.mock('@/components/favoritos-contexto', () => ({
  useFavorites: () => ({
    toggleFavorito: jest.fn(),
    isFavorito: () => false,
  }),
}))

jest.mock('@/components/carrinho-contexto', () => ({
  useCarrinho: () => ({
    adicionarAoCarrinho: jest.fn(),
  }),
}))

jest.mock('@/lib/userSession', () => ({
  usuarioEhAdmin: () => false,
}))

jest.mock('@/components/camisa-card', () => ({
  __esModule: true,
  default: ({ produto }: { produto: { nome: string } }) => <div data-testid="camisa-card">{produto.nome}</div>,
}))

jest.mock('@/components/camisa-detalhe-modal', () => ({
  __esModule: true,
  default: () => null,
}))

describe('Frontend - Listagem de produtos', () => {
  test('usa mock da API e renderiza os produtos retornados', async () => {
    const listarCamisasMock = listarCamisasApi as jest.MockedFunction<typeof listarCamisasApi>
    listarCamisasMock.mockResolvedValueOnce([
      {
        id: '1',
        nome: 'Camisa A',
        preco: 199.9,
        time: 'Time A',
        descricao: 'Descricao A',
        imagens: ['/a.jpg'],
      },
      {
        id: '2',
        nome: 'Camisa B',
        preco: 249.9,
        time: 'Time B',
        descricao: 'Descricao B',
        imagens: ['/b.jpg'],
      },
    ])

    render(<Produtos />)

    await waitFor(() => {
      expect(listarCamisasMock).toHaveBeenCalledTimes(1)
    })

    expect(await screen.findByText('Camisa A')).toBeInTheDocument()
    expect(await screen.findByText('Camisa B')).toBeInTheDocument()
    await waitFor(() => {
      expect(screen.getAllByTestId('camisa-card')).toHaveLength(2)
    })
  })
})
