/*
  Warnings:

  - The `status` column on the `booking` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `type` on the `booking` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "BookingStatus" AS ENUM ('WAITING', 'APPROVED', 'REJECTED', 'CANCELLED');

-- CreateEnum
CREATE TYPE "BookingType" AS ENUM ('VIRTUAL', 'PRESENCE', 'HYBRID');

-- DropIndex
DROP INDEX "booking_title_key";

-- AlterTable
ALTER TABLE "booking" DROP COLUMN "status",
ADD COLUMN     "status" "BookingStatus" NOT NULL DEFAULT 'WAITING',
DROP COLUMN "type",
ADD COLUMN     "type" "BookingType" NOT NULL;
