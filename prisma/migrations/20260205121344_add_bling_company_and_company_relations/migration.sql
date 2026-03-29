/*
  Warnings:

  - A unique constraint covering the columns `[blingCompanyId]` on the table `bling_auth` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `blingCompanyId` to the `bling_auth` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "bling_auth" ADD COLUMN     "blingCompanyId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "bling_companies" (
    "id" TEXT NOT NULL,
    "blingCompanyId" TEXT NOT NULL,
    "nome" TEXT,
    "cnpj" TEXT,
    "email" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "bling_companies_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "bling_companies_blingCompanyId_key" ON "bling_companies"("blingCompanyId");

-- CreateIndex
CREATE UNIQUE INDEX "bling_auth_blingCompanyId_key" ON "bling_auth"("blingCompanyId");

-- AddForeignKey
ALTER TABLE "bling_auth" ADD CONSTRAINT "bling_auth_blingCompanyId_fkey" FOREIGN KEY ("blingCompanyId") REFERENCES "bling_companies"("blingCompanyId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "companies" ADD CONSTRAINT "companies_blingCompanyId_fkey" FOREIGN KEY ("blingCompanyId") REFERENCES "bling_companies"("blingCompanyId") ON DELETE SET NULL ON UPDATE CASCADE;
