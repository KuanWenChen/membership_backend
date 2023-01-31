/*
  Warnings:

  - You are about to drop the column `domain` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[account]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX `User_domain_account_key` ON `User`;

-- AlterTable
ALTER TABLE `User` DROP COLUMN `domain`;

-- CreateIndex
CREATE UNIQUE INDEX `User_account_key` ON `User`(`account`);
