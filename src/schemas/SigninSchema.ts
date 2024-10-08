import {z} from "zod"

export const SigninSchema = z.object({
    email: z.string().email("Invalid Email").min(1,"Email is required"),
    password: z.string().min(1,"Password is required").max(32, "Password must be less than 32 characters")
})