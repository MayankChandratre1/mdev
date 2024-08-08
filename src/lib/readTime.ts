export const readTime = (content:string) => {
    const data = content.split(' ')
    const wordsPerMinute = 200
    const time = data.length/wordsPerMinute
    return Math.ceil(time)
}