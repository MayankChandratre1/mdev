import { PublicBlog } from '@/actions/blog'
import React from 'react'
import BlogHeader from './BlogHeader'
import Markdown from '@/components/markdown/Markdown'

const Blog = ({blog}:{
  blog:PublicBlog | null
}) => {

  if(!blog){
    return (
      <div className='min-h-full  grid place-items-center text-xl text-gray-500/80 italic'>
          No Blog to see!😞
      </div>
    )
  }

  return (
    <div className='min-h-[200px] p-2'>
      <BlogHeader blog={blog} />
      <Markdown content={blog.content}/>
    </div>
  )
}

export default Blog