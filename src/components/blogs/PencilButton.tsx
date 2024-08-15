"use client"
import React from 'react'
import { Button } from '@/components/ui/button'
import { Pencil1Icon } from '@radix-ui/react-icons'
import { useRouter } from 'next/navigation'


const PencilButton = () => {
  const router = useRouter()
  return (
    <Button
          variant={"outline"}
          className="border-blue-500 text-blue-500 hover:bg-blue-600/20 hover:text-blue-900/70 px-3 shadow-hover"
          onClick={() => router.push("/createblog")}
        >
          <Pencil1Icon />
        </Button>
  )
}

export default PencilButton