/*
  Warnings:

  - You are about to drop the `user` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `user`;

-- CreateTable
CREATE TABLE `refers` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `referee_email` VARCHAR(191) NOT NULL,
    `referee_name` VARCHAR(191) NOT NULL,
    `referrer_email` VARCHAR(191) NOT NULL,
    `referrer_name` VARCHAR(191) NOT NULL,
    `voucher_code` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
