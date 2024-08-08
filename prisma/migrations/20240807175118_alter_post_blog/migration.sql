/*
  Warnings:

  - You are about to drop the column `postId` on the `Comment` table. All the data in the column will be lost.
  - You are about to drop the column `postId` on the `Like` table. All the data in the column will be lost.
  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_tag-post` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[blogId,userId]` on the table `Comment` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[blogId,userId]` on the table `Like` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `blogId` to the `Comment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `blogId` to the `Like` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_postId_fkey";

-- DropForeignKey
ALTER TABLE "Like" DROP CONSTRAINT "Like_postId_fkey";

-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_authorId_fkey";

-- DropForeignKey
ALTER TABLE "_tag-post" DROP CONSTRAINT "_tag-post_A_fkey";

-- DropForeignKey
ALTER TABLE "_tag-post" DROP CONSTRAINT "_tag-post_B_fkey";

-- DropIndex
DROP INDEX "Comment_postId_userId_key";

-- DropIndex
DROP INDEX "Like_postId_userId_key";

-- AlterTable
ALTER TABLE "Comment" DROP COLUMN "postId",
ADD COLUMN     "blogId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Like" DROP COLUMN "postId",
ADD COLUMN     "blogId" TEXT NOT NULL;

-- DropTable
DROP TABLE "Post";

-- DropTable
DROP TABLE "_tag-post";

-- CreateTable
CREATE TABLE "Blog" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "thumbnail" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "authorId" TEXT NOT NULL,
    "likeCount" INTEGER NOT NULL DEFAULT 0,
    "commentCount" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Blog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_tag-blog" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_tag-blog_AB_unique" ON "_tag-blog"("A", "B");

-- CreateIndex
CREATE INDEX "_tag-blog_B_index" ON "_tag-blog"("B");

-- CreateIndex
CREATE UNIQUE INDEX "Comment_blogId_userId_key" ON "Comment"("blogId", "userId");

-- CreateIndex
CREATE UNIQUE INDEX "Like_blogId_userId_key" ON "Like"("blogId", "userId");

-- AddForeignKey
ALTER TABLE "Blog" ADD CONSTRAINT "Blog_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Like" ADD CONSTRAINT "Like_blogId_fkey" FOREIGN KEY ("blogId") REFERENCES "Blog"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_blogId_fkey" FOREIGN KEY ("blogId") REFERENCES "Blog"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_tag-blog" ADD CONSTRAINT "_tag-blog_A_fkey" FOREIGN KEY ("A") REFERENCES "Blog"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_tag-blog" ADD CONSTRAINT "_tag-blog_B_fkey" FOREIGN KEY ("B") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;
