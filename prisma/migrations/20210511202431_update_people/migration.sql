/*
  Warnings:

  - Added the required column `onMission` to the `people` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "people" ADD COLUMN     "onMission" BOOLEAN NOT NULL;
