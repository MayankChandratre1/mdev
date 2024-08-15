export const tagFormatter = (rawTags:string) => {
    const rawTagsArray = rawTags.split(' ');
    const filteredTagsArray = rawTagsArray.filter((tag)=>{
        return tag.startsWith('#')
    })
    const processedTags = filteredTagsArray.map(tag=> tag.slice(1).toLowerCase())
    const tags = Array.from(new Set(processedTags))
    return tags
}