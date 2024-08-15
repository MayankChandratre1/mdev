"use server"
import { auth } from "@/auth"
import { prisma } from "@/lib/db"


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
        image:string | null,
        about:string
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
                    image:true,
                    about:true
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
                    image:true,
                    about:true
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
                    image:true,
                    about:true
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
                    image:true,
                    about:true
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


export const createBlog = async ({title, content}:{
    title:string, content:string
}) => {
    try{
        const blog = await prisma.blog.create({
            data:{
                title:title,
                content,
                authorId:(await auth())?.user?.id || " ",
                isPublic:false,
                updatedAt:new Date(),
                createdAt:new Date(),
                thumbnail:"https://placehold.co/600x400"
            }
        })
        if(blog){
            return {id:blog.id, success:true}
        }
    }catch(err){
        console.log(err);
        return {id:null, error:true}
    }  
}

export const publish = async (id:string) => {
    try{
        const blog = await prisma.blog.update({
            where:{
                id
            },
            data:{
                isPublic:true,
            }
        })
        if(blog){
            return {id:blog.id, success:true}
        }
    }catch(err){
        console.log(err);
        return {id:null, error:true}
    }  
}

export const connectToTags = async (tags:string[],id:string) => {
    try{
        const blog = await prisma.blog.update(
            {
                where:{
                    id
                },
                data:{
                    tags:{
                        connectOrCreate:tags.map(tag => ({
                            where:{label:tag},
                            create:{label:tag}
                        }))
                    }
                }
            }
        )
        return {
            id,
            success:true
        }
    }catch(err){
        console.log("## BLOG-TAG ERROR: \n"+err);
        return {error:true}
    }
}

export const updateImage = async (id:string, url:string | undefined) => {
     try{
        const blog = await prisma.blog.update({
            where:{id},
            data:{
                thumbnail:url
            }
        })
        return {
            id,
            success:true
        }
    }catch(err){
        console.log("## Blog ERROR: \n"+err);
        return {error:true}
    }
}