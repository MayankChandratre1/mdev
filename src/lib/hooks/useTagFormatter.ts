import { useEffect, useState } from "react"
import { tagFormatter } from "../tagFormatter"

export const useTagFormatter = () => {
    const [tags, setTags] = useState<string[]>([])
    const [tagString, setTagString] = useState<string>("")
    useEffect(()=>{
        const timeout = setTimeout(() => {
            setTags(tagFormatter(tagString))
        }, 1000);
        return ()=>{
            clearTimeout(timeout)
        }
    },[tagString])

    return {
        tags,
        stringToTags: setTagString,
    }
}