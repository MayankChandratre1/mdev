"use client"
import { Button } from "@/components/ui/button"
import { ArrowLeftIcon } from "@radix-ui/react-icons"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { mdToHtml } from "@/lib/mdToHtml"
import Preview from "./Preview"
import InputArea from "./InputArea"



function Editor() {
  const router = useRouter()
  const [html, setHtml] = useState<string>("");
  const [isPrev, setIsPrev] = useState<boolean>(false)
  useEffect(()=>{
    const savedText = sessionStorage.getItem('blog')
    if(savedText){
      mdToHtml(savedText).then(html => {
        setHtml(html || " ## error \n")
      })
    }
  },[])

  
  return (
    <div className="min-h-screen flex flex-col space-y-3">
      <div>
        <Button variant={"ghost"} onClick={()=>{
            router.back();
        }}><ArrowLeftIcon/></Button>
      </div>
      <div>
        <Button variant={"outline"} onClick={()=>{
          setIsPrev(prev => !prev)
        }}>{isPrev ? "Raw":"Preview"}</Button>
      </div>
      {
        isPrev ? 
        <Preview html={html} />:
        <InputArea setHtml={setHtml} />
      }      
    </div>
  )
}



export default Editor