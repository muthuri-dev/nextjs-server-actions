"use client";
import { GET_JOBS } from "@/graphql/queries";
import { useQuery } from "@apollo/client";
import { Job } from "@prisma/client";
import JobListItem from "@/components/joblistItem";

export default function Home() {
  const { data } = useQuery(GET_JOBS);
  const jobs: Job[] = data?.getJobs;
  console.log(jobs);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {data?.getJobs.map((job: Job) => <JobListItem job={job} key={job.id} />)}
    </main>
  );
}
