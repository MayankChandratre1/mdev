-- AlterTable
ALTER TABLE "Blog" ALTER COLUMN "createdAt" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "about" TEXT NOT NULL DEFAULT 'A Lovely Blogger.';
