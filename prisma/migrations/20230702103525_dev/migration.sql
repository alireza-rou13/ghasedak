/*
  Warnings:

  - You are about to drop the column `authorId` on the `booking` table. All the data in the column will be lost.
  - Added the required column `createdById` to the `booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedById` to the `booking` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "booking" DROP CONSTRAINT "booking_authorId_fkey";

-- AlterTable
ALTER TABLE "booking" DROP COLUMN "authorId",
ADD COLUMN     "createdById" TEXT NOT NULL,
ADD COLUMN     "updatedById" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "booking" ADD CONSTRAINT "booking_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
