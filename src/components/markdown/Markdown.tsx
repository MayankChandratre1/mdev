import { mdToHtml } from '@/lib/mdToHtml'
import React from 'react'

const Markdown = async ({content}:{
    content:string
}) => {
  const html = await mdToHtml(content);
  console.log(html);
  return (
    <div className='mt-5'>
      <article className='prose prose-sm lg:prose-lg xl:prose-xl prose-a:italic prose-a:text-blue-500 dark:prose-invert' dangerouslySetInnerHTML={{__html:html+""}}>
      </article>
    </div>
  )
}

export default Markdown