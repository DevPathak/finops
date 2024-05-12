import z from "zod"

export const inputSigninObject = z.object({
    email: z.string().email(),
    password: z.string().min(6)
})

export type InputSigninObject = z.infer<typeof inputSigninObject>