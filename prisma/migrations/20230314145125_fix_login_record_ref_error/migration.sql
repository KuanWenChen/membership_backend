-- DropForeignKey
ALTER TABLE `LoginRecord` DROP FOREIGN KEY `LoginRecord_id_fkey`;

-- AddForeignKey
ALTER TABLE `LoginRecord` ADD CONSTRAINT `LoginRecord_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
