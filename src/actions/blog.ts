import { prisma, Blog, Tag } from "@/lib/db"


export type PublicBlog = {
    id:string,
    title:string,
    content:string,
    createdAt:Date,
    updatedAt:Date,
    likeCount:number,
    commentCount:number,
    thumbnail:string,
    author:{
        name:string | null
    },
    tags:{
        label:string
    }[]
}



export const getAllBlogs: ()=> Promise<PublicBlog[]> = async () => {
    const blogs = await prisma.blog.findMany({
        where:{
            isPublic:true
        },
        select:{
            id:true,
            title:true,
            content:true,
            createdAt:true,
            updatedAt:true,
            likeCount:true,
            commentCount:true,
            thumbnail:true,
            author:{
                select:{
                    name:true
                }
            },
            tags:{
                select:{
                    label:true
                }
            }
        }
    })

    return blogs
}