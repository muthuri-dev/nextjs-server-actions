"use client";
import { GET_JOBS } from "@/graphql/queries";
import { useQuery } from "@apollo/client";
import { Job } from "@prisma/client";
import JobListItem from "@/components/joblistItem";
import JobFilter from "@/components/jobFilter";

export default function Home() {
  const { data } = useQuery(GET_JOBS);
  return (
    <main className="flex max-w-5xl m-auto px-3 my-10 space-y-10 flex-col">
      <div className="space-y-5 text-center">
        <h1 className="text-xl font-extrabold tracking-tighter lg:text-5xl">
          Developer Jobs
        </h1>
        <p className="text-muted-foreground">Find your dream job</p>
      </div>
      <section className="flex flex-col  md:flex-row gap-4">
        <JobFilter />
        <div className="space-y-4 grow">
          {data?.getJobs.map((job: Job) => (
            <JobListItem job={job} key={job.id} />
          ))}
        </div>
      </section>
    </main>
  );
}
