import { z } from "zod"

export const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(4, {
        message: "Password harus terdiri dari 4 huruf"
    })
})

export const registerSchema = z.object({
    username: z.string().min(3, {
        message: "Username harus terdiri dari 3 huruf"
    }),
    email: z.string().email({
        message: "Masukan Email yang valid"
    }),
    password: z.string().min(4, {
        message: "Password harus terdiri dari 4 huruf"
    })
})

export const messageSchema = z.object({
    from: z.string().optional(),
    to: z.string().optional(),
    message: z.string().min(4, {
        message: "Message harus terdiri dari 4 huruf"
    }),
    music: z.string().optional(),
})