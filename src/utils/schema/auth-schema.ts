import {z} from 'zod';

export const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(4, "Must be Min 4 characters long")
})

export type loginSchemaDTO = z.infer<typeof loginSchema>

export const registerSchema = z.object({
    fullName: z.string().min(4, "Must be Min 4 characters long"),
    username: z.string().min(4, "Must be Min 4 characters long"),
    email: z.string().email(),
    password: z.string().min(4, "Must be Min 4 characters long")
})

export type registerSchemaDTO = z.infer<typeof registerSchema>

export const forgotPasswordSchema = z.object({
    email: z.string().email(),
})

export type forgotPasswordDTO = z.infer<typeof forgotPasswordSchema>

export const resetPasswordSchema = z.object({
    password: z.string().min(4, "Must be Min 4 characters long"),
    confirmPassword: z.string().min(4, "Must be Min 4 characters long")
}).superRefine((data, ctx) => {
    if (data.password !== data.confirmPassword) {
        ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "Passwords do not match",
            path: ['confirmPassword']
        })
    }
})

export type resetPasswordDTO = z.infer<typeof resetPasswordSchema>