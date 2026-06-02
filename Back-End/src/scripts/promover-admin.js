import { prisma } from '../db.js'

async function main() {
  const email = (process.argv[2] || '').toLowerCase().trim()

  if (!email) {
    console.error('Uso: npm run promover-admin -- email@dominio.com')
    process.exit(1)
  }

  const atualizado = await prisma.user.updateMany({
    where: { email },
    data: { role: 'ADMIN' },
  })

  if (atualizado.count === 0) {
    console.error(`Nenhum usuario encontrado com o email: ${email}`)
    process.exit(1)
  }

  console.log(`Usuario promovido para ADMIN: ${email}`)
}

main()
  .catch((error) => {
    console.error('Erro ao promover admin:', error)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
