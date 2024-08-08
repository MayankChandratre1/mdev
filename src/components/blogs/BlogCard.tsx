import { PublicBlog } from '@/actions/blog'
import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
import Image from 'next/image';
import { formatDate } from '@/lib/dateFormatter';

import { Button } from '../ui/button';
import { readTime } from '@/lib/readTime';
import TagList from './TagList';


const BlogCard = ({blog}:{
    blog:PublicBlog
}) => {
  return (
    <Card className='shadow-b-lg'>
        <BlogCardHeader 
          thumbnail={blog.thumbnail}
          title={blog.title}
          content={blog.content}
          authorname={blog.author.name}
          createdAt={blog.createdAt}
        />
        <CardFooter className='space-x-1'>
          <TagList tags={blog.tags} />
        </CardFooter>
    </Card>
  )
}

export const BlogCardHeader = ({thumbnail, title, authorname, content, createdAt}:{
  thumbnail:string | null,
  title:string,
  authorname:string | null,
  content:string,
  createdAt:Date
}) => {
    return (
      <>
        {thumbnail ? <div className='w-full h-[200px] lg:h-[300px] bg-red-500'></div>:null}
        <CardHeader >
            <CardTitle className='text-2xl lg:text-3xl font-bold'>{title}</CardTitle>
            <CardDescription className='text-[0.6rem] lg:text-sm text-blue-600 flex gap-1 items-center'>
            {authorname} <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
  <path fillRule="evenodd" d="M11.013 2.513a1.75 1.75 0 0 1 2.475 2.474L6.226 12.25a2.751 2.751 0 0 1-.892.596l-2.047.848a.75.75 0 0 1-.98-.98l.848-2.047a2.75 2.75 0 0 1 .596-.892l7.262-7.261Z" clipRule="evenodd" />
</svg> {formatDate(createdAt)} <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-4">
  <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm.75-13a.75.75 0 0 0-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 0 0 0-1.5h-3.25V5Z" clipRule="evenodd" />
</svg>
 {readTime(content)} min read
            </CardDescription>
        </CardHeader>
      </>
    )
}




export default BlogCard