"use server"
import { SignupSchema } from "@/schemas/SignupSchema";
import { getUserByEmail } from "@/actions/user";
import { prisma } from "@/lib/db";
import { generateHashedPassword } from "@/lib/password";

export const signUp = async ({name, email, password}:{
    name:string,
    email:string,
    password:string
    }) => {
    try{
      const validatedData = SignupSchema.safeParse({name, email, password})
      if(validatedData.error){
        return { error : "Credentials are invalid!"}
      }
      const existingUser = await getUserByEmail(email);
      if(existingUser) return {error: "Email already exists!"}
      await prisma.user.create({
        data:{
            name, 
            email,
            password: await generateHashedPassword(password)
        }
      })
      return { success: "User successfully created" }
    }catch(e){
        console.log("__USER_ERROR:__"+e);
        return {error: "Something went wrong!"}
    }
}