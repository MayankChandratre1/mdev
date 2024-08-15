import { connectToTags, publish, updateImage } from "@/actions/blog";
import { createManyTags } from "@/actions/tags"

export const publishBlog = async (id:string, tags:string[], url?:string,) => {
    const areTagsCreated = await createManyTags(tags);
    if(areTagsCreated.success){
        const areTagsConnected = await connectToTags(tags, id)
        if(areTagsConnected.success){
            const isThumbnailUpdated = await updateImage(id, url)
            if(isThumbnailUpdated.success){
                const isPublished = await publish(id)
                if(isPublished?.success){
                    return {
                        success:"Blog Successfully Published"
                    }
                }
            }
        }
    }
    return {error:"Something Went Wrong!!"}
}