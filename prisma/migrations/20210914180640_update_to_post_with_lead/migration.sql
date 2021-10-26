/*
  Warnings:

  - Made the column `leadId` on table `Post` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Post" ALTER COLUMN "leadId" SET NOT NULL;
