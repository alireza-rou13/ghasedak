-- AlterTable
ALTER TABLE "User" ADD COLUMN     "data" JSONB;

-- CreateTable
CREATE TABLE "Setting" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT false,
    "options" JSONB,

    CONSTRAINT "Setting_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Setting_title_key" ON "Setting"("title");

-- CreateIndex
CREATE UNIQUE INDEX "Setting_key_key" ON "Setting"("key");
