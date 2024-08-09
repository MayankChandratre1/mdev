import React from 'react'
import InteractionMenu from './InteractionMenu'
import Blog from './Blog'
import AuthorInfo from './AuthorInfo'
import { getBlogById } from '@/actions/blog'

const BlogPost = async ({id}:{
    id:string
}) => {
  const blog = await getBlogById(id);
  return (
    <div className='grid grid-cols-12 gap-5'>
        <div className='col-span-1'>
            <InteractionMenu />
        </div>
        <div className='col-span-11 sm:col-span-8 '>
            <Blog blog={blog} />
        </div>
        <div className='col-span-11 col-start-2 sm:col-span-3 sm:col-start-10 '>
            <AuthorInfo author={blog?.author} />
        </div>
    </div>
  )
}

export default BlogPost