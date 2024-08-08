import BlogPost from '@/components/blogs/blogPage/BlogPost'
import React from 'react'

const BlogPage = ({params}:{params:any}) => {
  
  return (
    <BlogPost id={params.id} />
  )
}

export default BlogPage