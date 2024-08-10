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
import { formatDate } from '@/lib/dateFormatter';


import { readTime } from '@/lib/readTime';
import TagList from './TagList';
import Stats from './Stats';
import { ClockIcon, Pencil1Icon } from '@radix-ui/react-icons';
import { PencilIcon } from '../icons';
import Link from 'next/link';
import Image from 'next/image';


const BlogCard = ({blog}:{
    blog:PublicBlog
}) => {
  return (
    <Card className='shadow-b-lg '>
        <BlogCardHeader 
          thumbnail={blog.thumbnail}
          title={blog.title}
          content={blog.content}
          authorname={blog.author.name}
          createdAt={blog.createdAt}
          id={blog.id}
        />
        <CardContent>
          <Stats likes={blog.likeCount} comments={blog.commentCount} />
        </CardContent>
        <CardFooter className='space-x-1'>
          <TagList tags={blog.tags} />
        </CardFooter>
    </Card>
  )
}

export const BlogCardHeader = ({thumbnail, title, authorname, content, createdAt, id}:{
  thumbnail:string | null,
  title:string,
  authorname:string | null,
  content:string,
  createdAt:Date,
  id:string
}) => {
    return (
      <>
        <Link href={`/blog/${id}`}>{thumbnail ? <div className='w-full h-[200px] lg:h-[300px] bg-red-500'>
          <Image src={thumbnail} alt='thumbnail' width={600} height={400} className='w-full h-full object-cover'/>
        </div>:null}</Link>
        <CardHeader>
            <Link href={`/blog/${id}`}>
            <CardTitle className='text-2xl lg:text-3xl font-bold cursor-pointer'>{title}</CardTitle>
            <CardDescription className='text-[0.6rem] lg:text-sm text-blue-600 flex gap-1 items-center'>
            {authorname} <Pencil1Icon /> {formatDate(createdAt)} <ClockIcon />
 {readTime(content)} min read
            </CardDescription>
            </Link>
        </CardHeader>
      </>
    )
}




export default BlogCard