import { LikeIcon } from '@/components/icons'
import { Button } from '@/components/ui/button'
import { ArrowTopRightIcon, ChatBubbleIcon } from '@radix-ui/react-icons'
import React from 'react'

const InteractionMenu = () => {
  return (
    <div className='fixed'>
        <Button variant={"ghost"} className='flex gap-1' ><LikeIcon size='sm' /> <span className='hidden lg:block'>Like</span></Button>
        <Button variant={"ghost"} className='flex gap-1' ><ChatBubbleIcon /> <span className='hidden lg:block'>Comment</span></Button>
        <Button variant={"ghost"} className='flex gap-1' ><ArrowTopRightIcon /> <span className='hidden lg:block'>Share</span></Button>
    </div>
  )
}

export default InteractionMenu