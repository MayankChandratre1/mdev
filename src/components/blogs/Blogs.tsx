import React from 'react'
import BlogList from './BlogList'
import { getAllBlogs } from '@/actions/blog'

const Blogs = async () => {
    const blogs = await getAllBlogs()
  return (
    <div className='flex justify-center'>
        <BlogList blogs={blogs} />
    </div>
  )
}

export { Blogs }