import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback } from '@radix-ui/react-avatar';
import UserAvatar from '@/components/UserAvatar';
import AuthorAvatar from '@/components/AuthorAvatar';

const AuthorInfo = ({author}:{
  author?:{
    name:string | null,
    image:string | null,
    about:string
  }
}) => {
  return (
    <Card>
      <CardHeader>
        <div className='flex gap-3 mb-2'>
        <AuthorAvatar img={author?.image} name={author?.name} />
        <p>{author?.name}</p>
        </div>
        <p className='text-sm italic text-gray-400'>"{author?.about}"</p>
      </CardHeader>
    </Card>
  )
}

export default AuthorInfo