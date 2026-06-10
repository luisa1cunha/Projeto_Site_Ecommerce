import React, { useState } from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import LoginForm from '@/components/auth/LoginForm'

function LoginFormHarness({ onSubmit }: { onSubmit: (event: React.FormEvent<HTMLFormElement>) => Promise<void> }) {
  const [loginData, setLoginData] = useState({ email: '', senha: '' })

  return (
    <LoginForm
      loading={false}
      loginData={loginData}
      setLoginData={setLoginData}
      onSubmit={onSubmit}
      onForgot={async () => {}}
    />
  )
}

describe('Frontend - Login', () => {
  test('renderiza campos e permite preenchimento dos inputs', () => {
    const onSubmit = jest.fn(async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()
    })

    render(<LoginFormHarness onSubmit={onSubmit} />)

    const inputEmail = screen.getByPlaceholderText('seunome@email.com') as HTMLInputElement
    const inputSenha = screen.getByPlaceholderText('Sua senha') as HTMLInputElement

    expect(screen.getByText('Email')).toBeInTheDocument()
    expect(screen.getByText('Senha')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Entrar' })).toBeInTheDocument()

    fireEvent.change(inputEmail, { target: { value: 'rafael@teste.com' } })
    fireEvent.change(inputSenha, { target: { value: '123456' } })

    expect(inputEmail.value).toBe('rafael@teste.com')
    expect(inputSenha.value).toBe('123456')
  })

  test('dispara a acao de autenticacao ao submeter', () => {
    const onSubmit = jest.fn(async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()
    })

    render(<LoginFormHarness onSubmit={onSubmit} />)

    fireEvent.change(screen.getByPlaceholderText('seunome@email.com'), {
      target: { value: 'rafael@teste.com' },
    })
    fireEvent.change(screen.getByPlaceholderText('Sua senha'), {
      target: { value: '123456' },
    })

    fireEvent.click(screen.getByRole('button', { name: 'Entrar' }))

    expect(onSubmit).toHaveBeenCalledTimes(1)
  })
})
