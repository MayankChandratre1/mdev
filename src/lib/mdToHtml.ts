import {remark} from "remark"
import html from "remark-html"
export const mdToHtml = async (md:string) => {
    try{
        const response = await remark().use(html).process(md)
        return response.toString()
    }catch(err){
        console.log("##MDERR: "+err);
        return null
    }
}