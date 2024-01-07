"use server";

import { JobFilterSchema } from "./jobFilter";

export async function filterJobs(formData: FormData) {
 const values= Object.fromEntries(formData.entries())
 const {q} = JobFilterSchema.parse(values)
}
const 