interface LoginFormProps {
  loading: boolean
  loginData: { email: string; senha: string }
  setLoginData: React.Dispatch<React.SetStateAction<{ email: string; senha: string }>>
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => Promise<void>
  onForgot: () => Promise<void>
}

export default function LoginForm({ loading, loginData, setLoginData, onSubmit, onForgot }: LoginFormProps) {
  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <label className="grid gap-1 text-sm font-medium text-cyan-200">
        Email
        <input
          type="email"
          value={loginData.email}
          onChange={(event) => setLoginData((v) => ({ ...v, email: event.target.value }))}
          className="rounded-xl border border-slate-600 bg-slate-900 px-3 py-2 text-cyan-100 outline-none transition focus:border-cyan-400"
          placeholder="seunome@email.com"
          required
        />
      </label>
      <label className="grid gap-1 text-sm font-medium text-cyan-200">
        Senha
        <input
          type="password"
          value={loginData.senha}
          onChange={(event) => setLoginData((v) => ({ ...v, senha: event.target.value }))}
          className="rounded-xl border border-slate-600 bg-slate-900 px-3 py-2 text-cyan-100 outline-none transition focus:border-cyan-400"
          placeholder="Sua senha"
          required
        />
      </label>

      <button
        type="submit"
        disabled={loading}
        className="mt-2 rounded-xl bg-cyan-600 px-4 py-3 font-semibold text-slate-950 transition hover:bg-cyan-500 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? 'Entrando...' : 'Entrar'}
      </button>

      <button
        type="button"
        onClick={onForgot}
        className="justify-self-start text-sm font-semibold text-cyan-300 underline decoration-2 underline-offset-2"
      >
        Esqueceu sua senha?
      </button>
    </form>
  )
}
