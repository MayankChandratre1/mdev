import React from 'react'
import BlogContent from '../blogs/blogPage/BlogContent'

const Preview = ({html}:{
    html:string
}) => {
  return (
    <div>
        <BlogContent content={html} />
    </div>
  )
}

export default Preview