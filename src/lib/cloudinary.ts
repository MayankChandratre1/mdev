import { CloudinaryUploadWidgetResults, CloudinaryUploadWidgetInfo } from "next-cloudinary";

export const onUploadSuccess =  (results:CloudinaryUploadWidgetResults) => {
    try{
        const {info} = results
        if(typeof info != 'string'){
            return {
                url: info?.secure_url,
                success: "Uploaded Successfully!"
            }
        }
    }catch(err){
        console.error("## Cloudinary Err:\n"+err)
        return {error:"Upload was Unsuccessful!"}
    }
}