import { Job } from "@prisma/client";
import React from "react";
import Logo from "@/public/logo.png";
import Image from "next/image";
import {
  BanknoteIcon,
  Briefcase,
  Clock,
  Globe2,
  MapPinned,
} from "lucide-react";
import { formatMoney, relativeDate } from "@/lib/utils";
import Badge from "./Badge";
interface IJobListitemProps {
  job: Job;
}

export default function JobListItem({
  job: {
    title,
    campanyName,
    type,
    locationType,
    location,
    createdAt,
    salary,
    companyLogoUrl,
  },
}: IJobListitemProps) {
  return (
    <article className="flex gap-3 border rounded-lg hover:bg-muted p-5">
      <Image
        src={Logo || companyLogoUrl}
        alt={`${campanyName}logo`}
        width={100}
        height={100}
        className="rounded-xl self-center"
      />
      <div className="flex-grow space-y-3">
        <div>
          <h2 className="text-xl font-meno ">{title}</h2>
          <p className="text-muted-foreground">{campanyName}</p>
        </div>
        <div className="text-muted-foreground">
          <p className="flex items-center gap-1.5 sm:hidden">
            <Briefcase size={16} className="shrink-0" />
            {type}
          </p>
          <p className="flex items-center gap-1.5">
            <MapPinned size={16} className="shrink-0" />
            {locationType}
          </p>
          <p className="flex items-center gap-1.5 ">
            <Globe2 size={16} className="shrink-0" />
            {location || "worldwind"}
          </p>
          <p className="flex items-center gap-1.5 ">
            <BanknoteIcon size={16} className="shrink-0" />
            {formatMoney(salary)}
          </p>
          <p className="flex items-center gap-1.5 sm:hidden">
            <Clock size={16} className="shrink-0" />
            {createdAt.toLocaleString()}
          </p>
        </div>
      </div>
      <div className="hidden sm:flex flex-col shrink-0 items-end justify-between">
        <Badge>{type}</Badge>
        <span>
          <Clock size={16} />
        </span>
      </div>
    </article>
  );
}
