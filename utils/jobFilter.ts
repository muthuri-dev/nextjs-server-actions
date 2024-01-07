import { z } from "zod";

export const JobFilterSchema = z.object({
  q: z.string().optional(),
});

export type JobFilterValues = z.infer<typeof JobFilterSchema>;
