import React from 'react'
import {CheckCircledIcon, CrossCircledIcon} from "@radix-ui/react-icons"

const FeedBackMessage = ({message, isError}:{
    message?:string,
    isError?: boolean
}) => {
  return (
    <div className={`${isError ? "text-destructive bg-destructive/10":"text-emerald-500 bg-emerald-500/10"} flex gap-2 items-center p-3 rounded-md text-sm `}>
      {isError ? 
        <CrossCircledIcon />:
        <CheckCircledIcon />
      }
      {message}
    </div>
  )
}

export default FeedBackMessage