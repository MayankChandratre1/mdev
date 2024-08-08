import { PublicBlog } from '@/actions/blog'
import React from 'react'
import BlogCard from './BlogCard'

const BlogList = ({blogs}:{
    blogs: PublicBlog[]
}) => {
  return (
    <div className='w-3/4 lg:w-1/2 space-y-10 py-3'>
        {blogs.map(blog => (
            <BlogCard key={blog.id} blog={blog} />
        ))}
        <div className='py-20 text-center text-sm lg:text-lg italic text-gray-500/50'>
            You are all caught up for today 🎯
        </div>
    </div>
  )
}

export default BlogList