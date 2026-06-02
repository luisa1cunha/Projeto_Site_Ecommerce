"use client";

import { useEffect, useState } from 'react'
import LoginForm from '@/components/auth/LoginForm'
import RegisterForm from '@/components/auth/RegisterForm'
import ResetPasswordForm from '@/components/auth/ResetPasswordForm'
import { esqueciSenha, login, redefinirSenha, registro } from '@/lib/authApi'
import { emailValido } from '@/lib/emailValidation'
import { gravarToken, obterToken, removerToken, CHAVE_TOKEN } from '@/lib/auth'
import { useRouter } from 'next/navigation'

// Chave usada para ultima atividade do usuário e limite da inatividade/15 min
const LAST_ACTIVITY_STORAGE_KEY = 'auth_last_activity'
const INACTIVITY_LIMIT_MS = Number(process.env.NEXT_PUBLIC_INACTIVITY_MINUTES ?? 15) * 60 * 1000

export default function PaginaLogin() {
  const router = useRouter()
  const [modo, setModo] = useState<'login' | 'register'>('login')
  const [carregando, setCarregando] = useState(false)
  const [mensagem, setMensagem] = useState('')
  const [erro, setErro] = useState('')
  const [loginData, setLoginData] = useState({ email: '', senha: '' })
  const [registerData, setRegisterData] = useState({ nome: '', sobrenome: '', email: '', senha: '' })
  const [resetData, setResetData] = useState({ novaSenha: '' })
  const [forgotOpen, setForgotOpen] = useState(false)

  // useEffect para monitorar atividade do usuário
  useEffect(() => {
    // registra atividade do usuário
    function registrarAtividade() {
      const token = obterToken()
      // registra atividade se estiver logado
      if (token) {
        localStorage.setItem(LAST_ACTIVITY_STORAGE_KEY, String(Date.now()))
      }
    }

    // verifica inatividade
    function validarInatividade() {
      const token = obterToken()
      const ultimoUso = Number(localStorage.getItem(LAST_ACTIVITY_STORAGE_KEY) || 0)

      // Se não tiver token ou atividade, sai
      if (!token || !ultimoUso) return

      const tempoInativo = Date.now() - ultimoUso

      // Se passou do tempo limite, desloga
      if (tempoInativo >= INACTIVITY_LIMIT_MS) {
        removerToken()
        localStorage.removeItem(LAST_ACTIVITY_STORAGE_KEY)

        // Reset estados
        setForgotOpen(false)
        setModo('login')
        setMensagem('Sessão expirada por inatividade. Faça login novamente.')
      }
    }

    // Eventos/atividade
    const eventos = ['click', 'keydown', 'mousemove', 'scroll', 'touchstart']
    eventos.forEach((evento) => window.addEventListener(evento, registrarAtividade, { passive: true }))
    // Verifica inatividade a cada 15 segundos
    const intervalId = window.setInterval(validarInatividade, 15000)

    return () => {
      eventos.forEach((evento) => window.removeEventListener(evento, registrarAtividade))
      window.clearInterval(intervalId)
    }
  }, [])

  // modal de recuperação de senha
  async function onOpenForgotModal() {
    setErro('')
    setMensagem('')

    const emailLogin = loginData.email?.trim()
    // validação de email
    if (!emailValido(emailLogin)) {
      setErro('Digite um email válido.')
      return
    }

    setCarregando(true)
    try {
      const dados = await esqueciSenha({ email: emailLogin })
      // se encontrou conta abre modal
      if (dados.message?.includes('Conta encontrada')) {
        setResetData({ novaSenha: '' })
        setForgotOpen(true)
      } else {
        setErro('Digite um email válido.')
      }

    } catch (err: any) {
      setErro(err.message)

    } finally {
      setCarregando(false)
    }
  }

  // função de login
  async function onLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    setErro('')
    setMensagem('')

    // validação de email
    if (!emailValido(loginData.email)) {
      setErro('Digite um email válido para entrar.')
      return
    }

    setCarregando(true)

    try {
      const dados = await login(loginData)

      // recebe token do backend
      const tokenRecebido = dados.token || dados.tokenAcesso || ''

      if (!tokenRecebido) {
        throw new Error('Token não retornado pelo backend.')
      }

      gravarToken(tokenRecebido)
      localStorage.setItem(LAST_ACTIVITY_STORAGE_KEY, String(Date.now()))

      // salva dados do usuário
      if (dados.user) {
        const usuarioComRole = {
          ...dados.user,
          role: dados.user?.role === 'ADMIN' ? 'ADMIN' : 'USER',
        }
        localStorage.setItem('perfil_usuario', JSON.stringify(usuarioComRole))
      }
      setMensagem(`${dados.message || 'Login realizado com sucesso.'} Bem-vindo(a), ${dados.user?.nome ?? 'usuário'}.`)

      // redireciona para pag inicial
      router.push('/')

    } catch (err: any) {
      setErro(err.message)

    } finally {
      setCarregando(false)
    }
  }

  // função de registro
  async function onRegister(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    setErro('')
    setMensagem('')

    // validação de email
    if (!emailValido(registerData.email)) {
      setErro('Informe um email válido para criar sua conta.')
      return
    }

    setCarregando(true)

    try {
      const dados = await registro(registerData)
      setMensagem(`${dados.message} Agora faça login.`)
      setModo('login')
      setLoginData({ email: registerData.email, senha: '' })

    } catch (err: any) {
      setErro(err.message)

    } finally {
      setCarregando(false)
    }
  }

  // função de redefinir senha
  async function onResetPassword(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    setErro('')
    setMensagem('')

    const emailLogin = loginData.email?.trim()

    // validação de email
    if (!emailValido(emailLogin)) {
      setErro('Digite um email válido.')
      return
    }

    // validação de senha
    if (resetData.novaSenha.length < 6) {
      setErro('A nova senha precisa ter no mínimo 6 caracteres.')
      return
    }

    setCarregando(true)

    try {
      const dados = await redefinirSenha({ email: emailLogin, novaSenha: resetData.novaSenha })
      setMensagem(dados.message)
      setModo('login')
      setForgotOpen(false)
      setResetData({ novaSenha: '' })
      setLoginData((valorAnterior) => ({ ...valorAnterior, email: emailLogin }))

    } catch (err: any) {
      setErro(err.message)

    } finally {
      setCarregando(false)
    }
  }

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-zinc-900 px-4 py-10 text-cyan-100 sm:px-8">
      <div className="pointer-events-none absolute -left-16 top-10 h-56 w-56 rounded-full bg-slate-700/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-12 bottom-6 h-72 w-72 rounded-full bg-zinc-600/15 blur-3xl" />
      
      <section className="mx-auto w-full max-w-3xl rounded-3xl border border-slate-700/80 bg-slate-900/75 p-3 shadow-2xl shadow-cyan-950/40 backdrop-blur sm:p-6">
        <header className="mb-8 text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-400">GR Imports</p>
          <h1 className="mt-2 text-3xl font-bold leading-tight text-cyan-300 sm:text-4xl">Seja bem vindo a GR Imports!</h1>
          <p className="mt-3 max-w-2xl text-sm text-cyan-100 sm:text-base">Realize seu login ou crie sua conta.</p>
        </header>

        <div className="grid gap-4 text-sm font-semibold sm:grid-cols-2">
          <button type="button" onClick={() => setModo('login')} className={`rounded-xl px-4 py-3 transition ${modo === 'login' ? 'bg-cyan-500 text-slate-950' : 'bg-slate-800 text-cyan-200 hover:bg-slate-700'}`}>
            Login
          </button>

          <button type="button" onClick={() => setModo('register')} className={`rounded-xl px-4 py-3 transition ${modo === 'register' ? 'bg-cyan-500 text-slate-950' : 'bg-slate-800 text-cyan-200 hover:bg-slate-700'}`}>
            Registrar
          </button>
        </div>

        <div className="mt-6 rounded-2xl border border-slate-700 bg-slate-950/65 p-4 shadow-inner shadow-black/30 sm:p-5">
          {modo === 'login' && (
            <LoginForm loading={carregando} loginData={loginData} setLoginData={setLoginData} onSubmit={onLogin} onForgot={onOpenForgotModal} />
          )}
          {modo === 'register' && (
            <RegisterForm loading={carregando} registerData={registerData} setRegisterData={setRegisterData} onSubmit={onRegister} />
          )}
          {mensagem && (
            <p className="mt-5 rounded-xl border border-cyan-500/40 bg-cyan-500/10 px-4 py-3 text-sm font-semibold text-cyan-200">{mensagem}</p>
          )}
          {erro && (
            <p className="mt-5 rounded-xl border border-cyan-400/50 bg-cyan-900/30 px-4 py-3 text-sm font-semibold text-cyan-100">{erro}</p>
          )}
        </div>
      </section>
      {forgotOpen && (
        <div className="absolute inset-0 z-30 flex items-center justify-center bg-black/60 px-4">

          <div className="w-full max-w-md rounded-2xl border border-slate-700 bg-slate-950/95 p-5 shadow-2xl shadow-black/50">
            <div className="mb-4 flex items-start justify-between gap-4">
              <div>
                <h2 className="text-lg font-bold text-cyan-300">Recuperar senha</h2>
                <p className="text-sm text-cyan-100">Valide a conta e depois defina a nova senha.</p>
              </div>
              <button type="button" onClick={() => { setForgotOpen(false); setResetData({ novaSenha: '' }) }} className="rounded-lg bg-slate-800 px-3 py-2 text-sm font-semibold text-cyan-200 hover:bg-slate-700">
                Fechar
              </button>
            </div>

            <ResetPasswordForm loading={carregando} resetData={resetData} setResetData={setResetData} onSubmit={onResetPassword} />
          </div>
        </div>
      )}
    </main>
  )
}
