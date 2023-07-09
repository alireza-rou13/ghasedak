/*
  Warnings:

  - You are about to drop the `Phone` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `number` to the `Contact` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Phone" DROP CONSTRAINT "Phone_contactId_fkey";

-- DropForeignKey
ALTER TABLE "Phone" DROP CONSTRAINT "Phone_userId_fkey";

-- AlterTable
ALTER TABLE "Contact" ADD COLUMN     "number" INTEGER NOT NULL;

-- DropTable
DROP TABLE "Phone";
