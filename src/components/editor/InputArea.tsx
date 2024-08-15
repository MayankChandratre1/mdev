"use client"
import { Input } from '@/components/ui/input'
import React, { ChangeEventHandler, Dispatch, SetStateAction, useEffect, useRef, useState, useTransition } from 'react'
import InsertBar from './InsertBar'
import { Textarea } from '@/components/ui/textarea'
import { mdToHtml } from '@/lib/mdToHtml'
import { Button } from '../ui/button'
import insertHandler, { insertType } from '@/lib/insertHandler'
import { createBlog } from '@/actions/blog'
import { publishBlog, saveBlog } from '@/lib/blogSaveHandler'
import PopupNotification from '../layout/PopupNotification'
import { useRouter } from 'next/navigation'
import { PulseLoader } from 'react-spinners'

const InputArea = ({
    setHtml
}:{
    setHtml:Dispatch<SetStateAction<string>>
}) => {
    const [md, setMd] = useState<string>('')
    const [title, setTitle] = useState<string>("");
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const [success, setSuccess] = useState<boolean>(false)
    const [show, setShow] = useState<boolean>(false)
    const [message, setMessage] = useState<string>("")
    const [blogId, setBlogId] = useState<string>("")
    const router = useRouter()
    const [isPending, startTransaction] = useTransition()

    useEffect(()=>{
        const savedText = sessionStorage.getItem('blog')
        const savedTitle = sessionStorage.getItem('title')
        if(savedText){
          setMd(savedText)
        }
        if(savedTitle) setTitle(savedTitle)
      },[])

      useEffect(()=>{
        sessionStorage.setItem('blog',md)
        sessionStorage.setItem('title',title)
      },[md, title])

      const handleTextareaChange:ChangeEventHandler<HTMLTextAreaElement> = async (e) => {
        setMd(e.target.value);
        const newHtml = await mdToHtml(md)
        setHtml(newHtml || "<strong>Oops!! Something went wrong!<strong>")
      }

      const insert = (type:insertType) => {
        insertHandler(type, {
          ref:textareaRef,
          initial:md,
          set:setMd
        })
      }

      const saveHandler = async () => {
        setShow(false)
        setSuccess(false)
        setMessage("")
        const {id, success,error} = await saveBlog({title, content:md})
        if(success){
          setShow(true);
          setSuccess(true)
          setBlogId(id);
          setMessage(success)
        }else{
          setShow(true);
          setMessage(error || "")
        }
        setTimeout(()=>{
          setShow(false)
          setSuccess(false)
          setMessage("")
        },2000)
      }

      const publishHandler = async () => {
        // setShow(false)
        // setSuccess(false)
        // setMessage("")
        // const {id, success,error} = await publishBlog({id:blogId})
        // if(success){
        //   setShow(true);
        //   setSuccess(true)
        //   setBlogId(id);
        //   setMessage(success)
        // }else{
        //   setShow(true);
        //   setMessage(error || "")
        // }
        // setTimeout(()=>{
        //   setShow(false)
        //   setSuccess(false)
        //   setMessage("")
        //   if(success) router.push("/home")
        // },2000)
        router.push("/createblog/publish?id="+blogId)
      }

  return (
    <div className="space-y-3">
      {show && <PopupNotification message={message} success={success} />}
      <div>
        <Input value={title} type="text" placeholder="Title" className="text-3xl h-auto py-3 border-none w-11/12" onChange={(e)=> setTitle(e.target.value)}  />
      </div>
      {<InsertBar ref={textareaRef} initial={md} set={setMd} insert={insert} />}
      <div className="h-[60vh] ">
        <Textarea ref={textareaRef} value={md} placeholder="Write here" className="text-lg h-auto px-4 min-h-full w-11/12 " onChange={handleTextareaChange} />
      </div>
      <div className="space-x-3">
        <Button variant={"secondary"} onClick={()=>{
          startTransaction(saveHandler)
        }}>{isPending ? <PulseLoader />:"Save"}</Button>
        {blogId && <Button variant={"secondary"} onClick={()=>{
          startTransaction(publishHandler)
        }}>{isPending ? <PulseLoader />:"Publish"}</Button>}
      </div>
   </div>
  )
}

export default InputArea