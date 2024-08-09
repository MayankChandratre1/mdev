import { auth } from "@/auth"
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
        name:string | null,
        image:string | null
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
                    name:true,
                    image:true
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

export const getBlogById: (id:string)=> Promise<PublicBlog | null> = async (id:string) => {
    const blog = await prisma.blog.findFirst({
        where:{
            id
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
                    name:true,
                    image:true
                }
            },
            tags:{
                select:{
                    label:true
                }
            }
        }
    })

    return blog
}

export const getBlogByAutherId: (authorId:string)=> Promise<PublicBlog | null> = async (authorId:string) => {
    const blog = await prisma.blog.findFirst({
        where:{
            authorId
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
                    name:true,
                    image:true
                }
            },
            tags:{
                select:{
                    label:true
                }
            }
        }
    })

    return blog
}

export const getCurrentUserBlogs: ()=> Promise<PublicBlog[]>  = async () => {
    const author = await auth()
    const blog = await prisma.blog.findMany({
        where:{
            authorId: author?.user?.id
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
                    name:true,
                    image:true
                }
            },
            tags:{
                select:{
                    label:true
                }
            }
        }
    })

    return blog
}

export const createBlog = async ({name, content}:{
    name:string, content:string
}) => {
    console.log("Create Blog Init");
    
    await prisma.blog.create({
        data:{
            title:name,
            content,
            authorId:(await auth())?.user?.id || " ",
            isPublic:true,
            updatedAt:new Date(),
            createdAt:new Date(),
            thumbnail:""
        }
    })
    console.log("Blog Created");
    
}