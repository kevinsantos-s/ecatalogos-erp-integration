/*
  Warnings:

  - You are about to drop the column `userId` on the `bling_auth` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `companies` table. All the data in the column will be lost.
  - You are about to drop the `b2b_auth` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `users` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[b2bCompanyErpId]` on the table `companies` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "b2b_auth" DROP CONSTRAINT "b2b_auth_userId_fkey";

-- DropForeignKey
ALTER TABLE "bling_auth" DROP CONSTRAINT "bling_auth_userId_fkey";

-- DropForeignKey
ALTER TABLE "companies" DROP CONSTRAINT "companies_userId_fkey";

-- DropIndex
DROP INDEX "bling_auth_userId_key";

-- DropIndex
DROP INDEX "companies_userId_b2bCompanyErpId_key";

-- DropIndex
DROP INDEX "companies_userId_idx";

-- AlterTable
ALTER TABLE "bling_auth" DROP COLUMN "userId";

-- AlterTable
ALTER TABLE "companies" DROP COLUMN "userId";

-- DropTable
DROP TABLE "b2b_auth";

-- DropTable
DROP TABLE "users";

-- CreateIndex
CREATE UNIQUE INDEX "companies_b2bCompanyErpId_key" ON "companies"("b2bCompanyErpId");
