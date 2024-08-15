import {z} from "zod"

export const PublishSchema = z.object({
    thumbnail: z.string(),
    tags: z.string().min(1,"Password is required").max(32, "Password must be less than 32 characters")
})