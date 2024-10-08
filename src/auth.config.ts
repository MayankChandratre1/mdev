import { NextAuthConfig } from "next-auth";
import { SigninSchema } from "./schemas/SigninSchema";
import Credentials from "next-auth/providers/credentials";
import { prisma } from "./lib/db";
import bcrypt from "bcryptjs"
import { getUserByEmail } from "./actions/user";


export default {
    providers: [Credentials({
        async authorize(credentials) {         
            const validatedData = SigninSchema.safeParse(credentials)
            if(validatedData.success){
                const {email, password} = validatedData.data
                const  user  = await getUserByEmail(email)
                if(!user || !user.password) return null;
                const isPasswordCorrect = await bcrypt.compare(password, user.password);
                if(isPasswordCorrect){
                    return user
                }
                else{
                    return null
                }
            }
            return null
        },
    })],
    callbacks:{
        session: async ({session, token})=>{
            if(token.sub && session.user){
                session.user.id = token.sub
            }
            return session
        },
        jwt: async ({token}) => {
            return token
        }
    }

} satisfies NextAuthConfig