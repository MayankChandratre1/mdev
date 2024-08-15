"use client"
import React, { Dispatch, RefObject, SetStateAction, useEffect } from 'react'
import { Button } from '../ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '@radix-ui/react-popover'
import insertHandler, { insertType } from '@/lib/insertHandler'
import { CodeIcon, ImageIcon, Link2Icon } from '@radix-ui/react-icons'

const InsertBar = ({ref,initial, set, insert}:{
    ref:RefObject<HTMLTextAreaElement>,
    initial:string,
    set:Dispatch<SetStateAction<string>>,
    insert: (type:insertType) => void
}) => {
    
  return (
    <div>
        <div className="flex items-center space-x-2 w-1/4">
          <Button variant={"secondary"} className="w-14" onClick={()=>insert("bold")}>B</Button>
          <Button variant={"secondary"} className="w-14" onClick={()=>insert("italic")}>I</Button>
          <Button variant={"secondary"} className="w-14" onClick={()=>insert("quote")}>q</Button>
          <Button variant={"secondary"} className="w-14" onClick={()=>insert("link")}><Link2Icon/></Button>
          <Button variant={"secondary"} className="w-14" onClick={()=>insert("code")}><CodeIcon/></Button>
          <Button variant={"secondary"} className="w-14" onClick={()=>insert("image")}><ImageIcon /></Button>
          <div>
          <Popover>
            <PopoverTrigger>
               <div  className="w-20">Heading</div>
            </PopoverTrigger>
            <PopoverContent>
                <div className="border">
                <Button variant={"secondary"} className="w-10 rounded-none text-xs" onClick={()=>insert("H1")}>H1</Button>
                <Button variant={"secondary"} className="w-10 rounded-none text-xs" onClick={()=>insert("H2")}>H2</Button>
                <Button variant={"secondary"} className="w-10 rounded-none text-xs" onClick={()=>insert("H3")}>H3</Button>
                <Button variant={"secondary"} className="w-10 rounded-none text-xs" onClick={()=>insert("H4")}>H4</Button>
                <Button variant={"secondary"} className="w-10 rounded-none text-xs" onClick={()=>insert("H5")}>H5</Button>
                <Button variant={"secondary"} className="w-10 rounded-none text-xs" onClick={()=>insert("H6")}>H6</Button>
                </div>
            </PopoverContent>
          </Popover>
          </div>
        </div>
      </div>
  )
}

export default InsertBar