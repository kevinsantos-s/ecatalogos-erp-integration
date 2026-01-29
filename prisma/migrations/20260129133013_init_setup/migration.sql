-- CreateTable
CREATE TABLE "integrations" (
    "id" BIGSERIAL NOT NULL,
    "blingCompanyId" TEXT NOT NULL,
    "blingToken" TEXT NOT NULL,
    "b2bCompanyErpId" TEXT NOT NULL,
    "b2bToken" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "integrations_pkey" PRIMARY KEY ("id")
);
