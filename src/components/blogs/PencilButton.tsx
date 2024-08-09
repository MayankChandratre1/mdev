"use client"
import React from 'react'
import { Button } from '@/components/ui/button'
import { Pencil1Icon } from '@radix-ui/react-icons'
import { createBlog } from '@/actions/blog'

const PencilButton = () => {
  return (
    <Button
          variant={"outline"}
          className="border-blue-500 text-blue-500 hover:bg-blue-600/20 hover:text-blue-900/70 px-3 shadow-hover"
          onClick={async () => {
            await createBlog({
              name:"Test3",
              content:`
              # The Journey of Learning JavaScript

![JavaScript Logo](https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png)

JavaScript is one of the most popular programming languages in the world. Whether you're building a website, a mobile app, or a server-side application, JavaScript is everywhere. In this blog post, we'll explore the journey of learning JavaScript and some tips to make the process smoother.

## Introduction

JavaScript was initially created to add interactivity to web pages. Over time, it has evolved into a powerful language that can be used for:

- **Web Development**
- **Mobile App Development**
- **Server-Side Development**
- **Game Development**

              `
            })
          }}
        >
          <Pencil1Icon />
        </Button>
  )
}

export default PencilButton