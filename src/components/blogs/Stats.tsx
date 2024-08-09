import React from 'react'
import { LikeIcon } from '../icons'
import { ChatBubbleIcon } from '@radix-ui/react-icons'

const Stats = ({
    likes, comments
}:{
    likes:number,
    comments:number
}) => {
  return (
    <div>
        <div className='flex items-center gap-2 md:gap-3 text-gray-500/80 hover:text-gray-600 text-xs md:text-md'>
            <span><LikeIcon size='sm' /> {likes}</span>
            <span><ChatBubbleIcon className='inline-block' /> {comments}</span>
        </div>
    </div>
  )
}

export default Stats