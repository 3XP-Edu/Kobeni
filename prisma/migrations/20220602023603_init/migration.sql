/*
  Warnings:

  - You are about to drop the column `name` on the `Usuario` table. All the data in the column will be lost.
  - You are about to drop the column `telefone` on the `Usuario` table. All the data in the column will be lost.
  - You are about to drop the column `tipo` on the `Usuario` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Usuario" DROP COLUMN "name",
DROP COLUMN "telefone",
DROP COLUMN "tipo";
