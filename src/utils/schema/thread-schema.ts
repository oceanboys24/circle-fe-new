import { z } from "zod";

export const createThreadSchema = z.object({
  content: z.string().max(280).optional(),
  imageContent: z.string().optional(),
});

export type CreateThreadSchemaDTO = z.infer<typeof createThreadSchema>;
