import { PrismaClient, User, Blog, Like, Comment, Tag } from "@prisma/client";

declare module globalThis {
    var prisma: PrismaClient
} 

export const prisma = globalThis.prisma || new PrismaClient()
export type {
    User,
    Blog,
    Like,
    Comment,
    Tag
}
if(process.env.NODE_ENV !== "production") globalThis.prisma = prisma