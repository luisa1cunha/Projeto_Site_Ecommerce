import "dotenv/config";
import { PrismaClient } from "../prisma/geracao/index.js";
import { PrismaPg } from "@prisma/adapter-pg";
import pg from "pg";

// Prisma Client gerado em prisma/geracao para manter tipagem e queries centralizadas.
// O Pool evita abrir nova conexão a cada request.
const { Pool } = pg;
const pool = new Pool({ connectionString: process.env.DATABASE_URL });

// Adapter oficial para usar o driver pg com Prisma.
const adapter = new PrismaPg(pool);

// Instância única compartilhada entre os módulos.
export const prisma = new PrismaClient({ adapter });