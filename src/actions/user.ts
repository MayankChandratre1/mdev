"use server";

import { prisma } from "@/lib/db";





export const getUserById = async (id:string) => {
    try{
        const user = await prisma.user.findUnique({
            where:{
                id
            }
        })
        if(user) return { user }
        return null
    }catch(e){
        console.log("__USER_ERROR:__"+e);
        return null
    }
}

export const getUserByEmail = async (email:string) => {
    try{
        const user = await prisma.user.findUnique({
            where:{
                email
            }
        })
        if(user) return user 
        return null
    }catch(e){
        console.log("__USER_ERROR:__"+e);
        return null
    }
}