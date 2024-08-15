import { createBlog, publish } from "@/actions/blog"

export const saveBlog = async ({title, content}:{
    title:string,
    content:string
}) => {
    if(title.trim() !== "" && content.trim() != ""){
        const res = await createBlog({title, content})
        if(res && res.success){
         sessionStorage.removeItem('blog')   
         sessionStorage.removeItem('title') 
         return {id:res.id,success:"Blog Saved Successfully!"}  
        }else{
            return {error: "Blog Cannot be saved!"}
        }
    }else{
        return {error: "Blog Empty!"}
    }
}

export const publishBlog = async ({id}:{
    id:string
}) => {
    const res = await publish(id);
    if(res && res.success){
        sessionStorage.removeItem('blog')   
         sessionStorage.removeItem('title') 
         return {id:res.id,success:"Blog Published Successfully!"}  
    }else{
        return {error: "Blog Cannot be published!"}
    }
}