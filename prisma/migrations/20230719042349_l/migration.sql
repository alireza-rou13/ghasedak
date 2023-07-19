/*
  Warnings:

  - You are about to drop the column `bookingLocationId` on the `Booking` table. All the data in the column will be lost.
  - You are about to drop the column `createdById` on the `Booking` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `Booking` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `Booking` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Booking" DROP CONSTRAINT "Booking_bookingLocationId_fkey";

-- DropForeignKey
ALTER TABLE "Booking" DROP CONSTRAINT "Booking_createdById_fkey";

-- AlterTable
ALTER TABLE "Booking" DROP COLUMN "bookingLocationId",
DROP COLUMN "createdById",
DROP COLUMN "created_at",
DROP COLUMN "updated_at";
