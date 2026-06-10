import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import CarrinhoPage from '@/app/carrinho/page'
import { CarrinhoProvider, useCarrinho } from '@/components/carrinho-contexto'

const produtoTeste = {
  id: 'produto-1',
  nome: 'Camisa Teste',
  preco: 100,
  time: 'Time Teste',
  descricao: 'Descricao',
  imagens: ['/camisa.jpg'],
}

function AdicionarItemTeste() {
  const { adicionarAoCarrinho } = useCarrinho()

  return (
    <button type="button" onClick={() => adicionarAoCarrinho(produtoTeste)}>
      Adicionar item teste
    </button>
  )
}

describe('Frontend - Carrinho', () => {
  beforeEach(() => {
    window.localStorage.clear()
  })

  test('adiciona item, atualiza quantidade e atualiza total', () => {
    render(
      <CarrinhoProvider>
        <AdicionarItemTeste />
        <CarrinhoPage />
      </CarrinhoProvider>,
    )

    fireEvent.click(screen.getByRole('button', { name: 'Adicionar item teste' }))

    expect(screen.getByText('Camisa Teste')).toBeInTheDocument()
    expect(screen.getByText('Subtotal: R$ 100.00')).toBeInTheDocument()

    const blocoTotal = screen.getByText('Total do pedido').closest('div')?.parentElement
    expect(blocoTotal).toHaveTextContent('R$ 100.00')

    fireEvent.click(screen.getByRole('button', { name: '+' }))
    expect(screen.getByText('Subtotal: R$ 200.00')).toBeInTheDocument()
    expect(blocoTotal).toHaveTextContent('R$ 200.00')

    fireEvent.click(screen.getByRole('button', { name: '-' }))
    expect(screen.getByText('Subtotal: R$ 100.00')).toBeInTheDocument()
    expect(blocoTotal).toHaveTextContent('R$ 100.00')
  })
})
