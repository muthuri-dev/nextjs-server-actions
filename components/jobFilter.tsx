import React from "react";
import { Label } from "./ui/label";
import { filterJobs } from "@/utils/form";
import { Input } from "./ui/input";
import Select from "./ui/select";
import { useQuery } from "@apollo/client";
import { GET_lOCATIONS } from "@/graphql/queries";
import { Job } from "@prisma/client";
import { Button } from "./ui/button";

export default function JobFilter() {
  const { data } = useQuery(GET_lOCATIONS);
  console.log(data?.getJobs);
  return (
    <aside className="md:w-[260px] p-4 sticky top-0 h-fit bg-background border rounded-lg">
      <form action={filterJobs}>
        <div className="space-y-4">
          <div className="flex-col gap-2">
            <Label htmlFor="q">Seach</Label>
            <Input id="q" name="q" placeholder="Title,company,etc." />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="location">Location</Label>
            <Select id="location" name="location" defaultValue="">
              {data?.getJobs.map((locations: Job) => (
                <option value={locations.location!} key={locations.location}>
                  {locations.location}
                </option>
              ))}
            </Select>
          </div>
          <Button type="submit" className="w-full">
            Filter jobs
          </Button>
        </div>
      </form>
    </aside>
  );
}
