import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(5, "Must be Min 5 characters long"),
});

export type loginSchemaDTO = z.infer<typeof loginSchema>;

export const registerSchema = z.object({
  fullName: z.string().min(5, "Must be Min 5 characters long"),
  userName: z.string().min(5, "Must be Min 5 characters long"),
  email: z.string().email(),
  password: z.string().min(5, "Must be Min 5 characters long"),
});

export type registerSchemaDTO = z.infer<typeof registerSchema>;

export const forgotPasswordSchema = z.object({
  email: z.string().email(),
});

export type forgotPasswordDTO = z.infer<typeof forgotPasswordSchema>;

export const resetPasswordSchema = z
  .object({
    newPassword: z.string().min(4, "Must be Min 4 characters long"),
    confirmPassword: z
      .string()
      .min(4, "Must be Min 4 characters long")
      .optional(),
  })
  .superRefine((data, ctx) => {
    if (data.newPassword !== data.confirmPassword) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Passwords do not match",
        path: ["confirmPassword"],
      });
    }
  });

export type resetPasswordDTO = z.infer<typeof resetPasswordSchema>;
