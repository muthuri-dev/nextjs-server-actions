import { Job } from "@prisma/client";
import React from "react";
interface IJobListitemProps {
  job: Job;
}

export default function JobListItem({
  job: { title, campanyName, type, locationType, location, createdAt, salary },
}: IJobListitemProps) {
  return (
    <article className="flex gap-3 border rounded-lg hover:bg-muted p-5">
      {title}
    </article>
  );
}
