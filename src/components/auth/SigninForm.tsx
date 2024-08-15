"use client"
import { useState, useTransition } from 'react'
import AuthCard from '@/components/auth/AuthCard'
import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { SigninSchema } from '@/schemas/SigninSchema'
import { PulseLoader } from "react-spinners"

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button'
import FeedBackMessage from './FeedbackMessage'
import { signin } from '@/actions/signin'

const SigninForm = () => {
    const [error, setError] = useState<string | undefined>("")
    const [success, setSuccess] = useState<string | undefined>("")
    const [isPending, startTransaction] = useTransition()

    const form = useForm<z.infer<typeof SigninSchema>>({
        resolver: zodResolver(SigninSchema),
        defaultValues: {
          email:"",
          password:""
        },
      })

      const onSubmit = async (values: z.infer<typeof SigninSchema>) => {
        setError("")
        setSuccess("")
        try{
            startTransaction(async ()=>{
                const {error, success} = await signin(values)
                if(error){
                  setError(error)
                }else{
                  setSuccess(success)
                }
            })
        }catch(e){
            setError("Something went wrong!")
        }
      }


  return (
    <AuthCard 
    label='Sign In'
    desc='Hello👋!'
    backLinkMessage={`Don\'t  have an account?`}
    backLinkUrl='/auth/signup'
    >
        <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                 placeholder="johndoe@mail.com" 
                 type='email' 
                 disabled={isPending}
                 {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input 
                placeholder="******" 
                type='password' 
                disabled={isPending}
                {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {error && <FeedBackMessage isError message={error} />}
        {success && <FeedBackMessage message={success} /> }
        <Button type="submit" className='w-full' disabled={isPending}>
            {isPending ? 
            <PulseLoader size={"10px"} color='#fff' />:"Sign In"    
            }
        </Button>
      </form>
    </Form>
    </AuthCard>
  )
}

export default SigninForm