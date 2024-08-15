"use server"
import { prisma } from "@/lib/db"


export const createManyTags = async (tags:string[]) => {
    try{
        const existingTags = await prisma.tag.findMany({
            where:{
                label:{
                    in:tags
                }
            }
        });
        const existingTagLabels = existingTags.map(tag => tag.label);
        const nonRepeatingTags = tags.filter(tag => !existingTagLabels.includes(tag))
        const createdTags = await prisma.tag.createManyAndReturn({
            data:nonRepeatingTags.map(tag=>({label:tag}))
        })
        return {
            tags:[...createdTags.map(tag=>tag.label), ...existingTagLabels],
            success:true
        }
    }catch(err){
        console.log("## TAG ERROR: \n"+err);
        return {error:true}
    }
}


