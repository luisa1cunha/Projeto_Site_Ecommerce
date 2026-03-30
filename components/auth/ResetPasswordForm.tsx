interface ResetPasswordFormProps {
  loading: boolean
  resetData: { novaSenha: string }
  setResetData: React.Dispatch<React.SetStateAction<{ novaSenha: string }>>
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => Promise<void>
}

export default function ResetPasswordForm({ loading, resetData, setResetData, onSubmit }: ResetPasswordFormProps) {
  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <label className="grid gap-1 text-sm font-medium text-cyan-200">
        Nova senha
        <input
          type="password"
          value={resetData.novaSenha}
          onChange={(event) => setResetData((v) => ({ ...v, novaSenha: event.target.value }))}
          className="rounded-xl border border-slate-600 bg-slate-900 px-3 py-2 text-cyan-100 outline-none transition focus:border-cyan-400"
          minLength={6}
          placeholder="Digite a nova senha"
          required
        />
      </label>

      <button
        type="submit"
        disabled={loading}
        className="rounded-xl bg-cyan-600 px-4 py-3 font-semibold text-slate-950 transition hover:bg-cyan-500 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? 'Atualizando...' : 'Trocar senha'}
      </button>
    </form>
  )
}
