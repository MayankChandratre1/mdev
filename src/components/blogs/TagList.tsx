import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const TagList = ({tags}:{
    tags:{
        label:string
    }[]
}) => {
  return (
    <>
        {tags.map(tag => (
        <Button key={tag.label} variant={"tag"} className='text-[0.6rem] max-md:h-5 lg:text-sm max-lg:p-2'><Link href={`/blogs/tag/${tag.label}`} >#{tag.label}</Link></Button>
      ))}
    </>
  )
}

export default TagList