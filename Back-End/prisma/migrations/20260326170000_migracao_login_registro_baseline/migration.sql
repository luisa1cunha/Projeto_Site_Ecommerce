-- Drift reconciliation migration: aligns migration history with the current schema.
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

ALTER TABLE "User" DROP CONSTRAINT IF EXISTS "User_pkey";
ALTER TABLE "User" ALTER COLUMN "id" TYPE UUID USING "id"::uuid;
ALTER TABLE "User" ALTER COLUMN "id" SET DEFAULT gen_random_uuid();
ALTER TABLE "User" ADD COLUMN IF NOT EXISTS "senhaHash" TEXT NOT NULL DEFAULT '';
ALTER TABLE "User" ADD COLUMN IF NOT EXISTS "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
ALTER TABLE "User" ADD COLUMN IF NOT EXISTS "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
ALTER TABLE "User" ADD CONSTRAINT "User_pkey" PRIMARY KEY ("id");

ALTER TABLE "camisasfutebol" DROP CONSTRAINT IF EXISTS "camisasfutebol_pkey";
ALTER TABLE "camisasfutebol" ALTER COLUMN "id" TYPE UUID USING "id"::uuid;
ALTER TABLE "camisasfutebol" ALTER COLUMN "id" SET DEFAULT gen_random_uuid();
ALTER TABLE "camisasfutebol" ADD COLUMN IF NOT EXISTS "ano" INTEGER;
ALTER TABLE "camisasfutebol" ADD CONSTRAINT "camisasfutebol_pkey" PRIMARY KEY ("id");

CREATE UNIQUE INDEX IF NOT EXISTS "User_email_key" ON "User"("email");
