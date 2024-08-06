"use server"
import { DEFAULT_AUTH_REDIRECT } from "@/route"
import { AuthError } from "next-auth"
import { signIn } from "@/auth"

export const signin = async ({email, password}:{
    email:string,
    password:string
}) => {
    try{
        const res = await signIn("credentials",{
            email,
            password,
            redirectTo:DEFAULT_AUTH_REDIRECT
        })
        return {
            success:"Successfully Signed In"
        }
    }catch(e){
        console.log("__AUTH_ERR__: "+e);
        if(e instanceof AuthError)
        return {
            error: "Invalid Credentials!"
        }
        throw e
    }

}