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
import TagList from '@/components/blogs/TagList';
import Stats from '@/components/blogs/Stats';
import { ClockIcon, Pencil1Icon } from '@radix-ui/react-icons';

const BlogHeader = ({blog}:{
    blog:PublicBlog
}) => {
  return (
    <Card className='border-0 border-b-[1px] rounded-none border-b-black shadow-none '>
        <CardHeader>
            {!blog.thumbnail ? <div className='w-full h-[200px] lg:h-[300px] bg-red-500'></div>:null}
            <CardTitle className='text-2xl lg:text-3xl font-bold cursor-pointer'>{blog.title}</CardTitle>
            <CardDescription className='text-[0.6rem] lg:text-sm text-blue-600 flex gap-1 items-center'>
            {blog.author.name} <Pencil1Icon /> {formatDate(blog.createdAt)} <ClockIcon />
 {readTime(blog.content)} min read
            </CardDescription>
        </CardHeader>
        <CardContent>
          <Stats likes={blog.likeCount} comments={blog.commentCount} />
        </CardContent>
        <CardFooter className='space-x-1'>
          <TagList tags={blog.tags} />
        </CardFooter>
    </Card>
  )
}

export default BlogHeader