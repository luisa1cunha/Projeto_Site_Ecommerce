import "dotenv/config";
import { PrismaClient } from "../prisma/geracao/index.js";
import { PrismaPg } from "@prisma/adapter-pg";
import pg from "pg";

const { Pool } = pg;
const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function promoverParaAdmin() {
  const emailParaPromover = "admin@example.com";

  try {
    const usuario = await prisma.user.findUnique({
      where: { email: emailParaPromover },
    });

    if (!usuario) {
      console.log(`❌ Usuário com email '${emailParaPromover}' não encontrado.`);
      console.log(
        `\nCrie um usuário primeiro fazendo login em http://localhost:3000/login`
      );
      process.exit(1);
    }

    const usuarioAtualizado = await prisma.user.update({
      where: { email: emailParaPromover },
      data: { role: "ADMIN" },
    });

    console.log(`✅ Usuário promovido a ADMIN com sucesso!`);
    console.log(`\nDados do usuário:`);
    console.log(`  Email: ${usuarioAtualizado.email}`);
    console.log(`  Nome: ${usuarioAtualizado.nome}`);
    console.log(`  Permissão: ${usuarioAtualizado.role}`);
    console.log(
      `\nFaça login com o email '${emailParaPromover}' para acessar /admin`
    );
  } catch (error) {
    console.error(
      `❌ Erro ao promover usuário:`,
      error.message || error
    );
    process.exit(1);
  } finally {
    await prisma.$disconnect();
    process.exit(0);
  }
}

promoverParaAdmin();
