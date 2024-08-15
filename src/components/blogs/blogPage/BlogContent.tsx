
import Markdown from '@/components/markdown/Markdown'
import React from 'react'

const BlogContent = ({content}:{
    content:string
}) => {
  
  return (
    <div className='mt-5 '>
      <article className='prose prose-sm lg:prose-lg xl:prose-xl dark:prose-invert prose-a:italic prose-a:text-blue-500' dangerouslySetInnerHTML={{__html:content+""}}>
    </article>
    </div>
  )
}

export default BlogContent