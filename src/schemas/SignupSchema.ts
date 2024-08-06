import {z} from "zod"

export const SignupSchema = z.object({
    name: z.string().min(1,"Name is required"),
    email: z.string().email("Invalid Email").min(1,"Email is required"),
    password: z.string().min(6,"Password must be of 6 characters").max(32, "Password must have less than 32 characters")
})