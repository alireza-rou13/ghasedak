/*
  Warnings:

  - You are about to drop the column `location` on the `booking` table. All the data in the column will be lost.
  - Added the required column `bookingLocationId` to the `booking` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "booking" DROP COLUMN "location",
ADD COLUMN     "bookingLocationId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "booking" ADD CONSTRAINT "booking_bookingLocationId_fkey" FOREIGN KEY ("bookingLocationId") REFERENCES "BookingLocation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
