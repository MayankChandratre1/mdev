import { mdToHtml } from '@/lib/mdToHtml'
import React from 'react'

const Markdown = async ({content}:{
    content:string
}) => {
  const html = await mdToHtml(content);
  console.log(html);
  return (
    <article className='prose prose-sm lg:prose-lg xl:prose-xl ' dangerouslySetInnerHTML={{__html:html+""}}>
    </article>
  )
}

export default Markdown