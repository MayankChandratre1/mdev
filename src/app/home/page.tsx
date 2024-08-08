import { auth } from '@/auth'
import { Blogs } from '@/components/blogs/Blogs'
import React from 'react'

const HomePage = async () => {
  return (
    <div >
        <Blogs />
    </div>
  )
}

export default HomePage