export const tagFormatter = (rawTags:string) => {
    const rawTagsArray = rawTags.split(' ');
    const filteredTagsArray = rawTagsArray.filter((tag)=>{
        return tag.startsWith('#')
    })
    return filteredTagsArray
}