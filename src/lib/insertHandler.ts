import { Dispatch, RefObject, SetStateAction } from "react"

const patterns = {
    bold: {
        value:" **** ",
        offset:3
    },
    italic: {
        value:" __ ",
        offset:2
    },
    code:{
        value:"\n```\n\n```\n",
        offset:5
    },
    link:{
        value:" [alias]() ",
        offset:9
    },
    image:{
        value:"\n![alt]()\n",
        offset:8
    },
    quote:{
        value:"\n>",
        offset:2
    },
    H1:{
        value:"\n# ",
        offset:3
    },
    H2:{
        value:"\n## ",
        offset:4
    },
    H3:{
        value:"\n### ",
        offset:5
    },
    H4:{
        value:"\n#### ",
        offset:6
    },
    H5:{
        value:"\n##### ",
        offset:7
    },
    H6:{
        value:"\n###### ",
        offset:8
    },
}

export type insertType = "bold" | "code" | "italic" | "link" | "image" | "quote" | "H1" | "H2" | "H3" | "H4" | "H5" | "H6"

const insertHandler = (type:insertType, {ref,initial, set}:{
    ref:RefObject<HTMLTextAreaElement>,
    initial:string,
    set:Dispatch<SetStateAction<string>>
}) => {
    if(!ref){
        console.log("No ref");
        return
    }
    const textarea = ref.current;
    const start = textarea?.selectionStart ;
    const end = textarea?.selectionEnd;
    const {value,offset} = patterns[type]
    // Insert '**' at the cursor position
    const newText = initial.slice(0, start) + value + initial.slice(start);

    set(newText);

    // Set the cursor position between the two asterisks
    setTimeout(() => {
      textarea?.setSelectionRange((start||0)+offset,(start||0)+offset);
      textarea?.focus();
    }, 0);
}

export default insertHandler