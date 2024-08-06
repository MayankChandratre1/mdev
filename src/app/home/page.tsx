import { auth } from '@/auth'
import React from 'react'

const HomePage = async () => {
    const user = await auth()
  return (
    <div>
        {JSON.stringify(user)}
    </div>
  )
}

export default HomePage