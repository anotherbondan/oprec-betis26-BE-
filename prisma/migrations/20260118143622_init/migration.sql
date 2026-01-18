-- CreateEnum
CREATE TYPE "Level" AS ENUM ('NEWBIE', 'HIKER', 'PORTER', 'RANGER');

-- CreateEnum
CREATE TYPE "Difficulty" AS ENUM ('BEGINNER', 'MODERATE', 'HARD', 'EXTREME');

-- CreateTable
CREATE TABLE "Hiker" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "level" "Level" NOT NULL,

    CONSTRAINT "Hiker_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Trail" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "difficulty" "Difficulty" NOT NULL,
    "openDate" TIMESTAMP(3) NOT NULL,
    "status" BOOLEAN NOT NULL,

    CONSTRAINT "Trail_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Permit" (
    "id" UUID NOT NULL,
    "tanggal" DATE NOT NULL,
    "hikerId" UUID NOT NULL,
    "trailId" UUID NOT NULL,

    CONSTRAINT "Permit_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Permit_hikerId_trailId_tanggal_key" ON "Permit"("hikerId", "trailId", "tanggal");

-- AddForeignKey
ALTER TABLE "Permit" ADD CONSTRAINT "Permit_hikerId_fkey" FOREIGN KEY ("hikerId") REFERENCES "Hiker"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Permit" ADD CONSTRAINT "Permit_trailId_fkey" FOREIGN KEY ("trailId") REFERENCES "Trail"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
