/*
  Warnings:

  - Added the required column `bookingLocationId` to the `Booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `createdById` to the `Booking` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `endDate` on the `Booking` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `startDate` on the `Booking` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Booking" ADD COLUMN     "bookingLocationId" TEXT NOT NULL,
ADD COLUMN     "createdById" TEXT NOT NULL,
ADD COLUMN     "status" "BookingStatus" NOT NULL DEFAULT 'WAITING',
ADD COLUMN     "type" "BookingType" NOT NULL DEFAULT 'HYBRID',
DROP COLUMN "endDate",
ADD COLUMN     "endDate" INTEGER NOT NULL,
DROP COLUMN "startDate",
ADD COLUMN     "startDate" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_bookingLocationId_fkey" FOREIGN KEY ("bookingLocationId") REFERENCES "BookingLocation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
