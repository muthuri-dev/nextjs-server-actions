import React from "react";
interface IBadge {
  children: React.ReactNode;
}
export default function Badge({ children }: IBadge) {
  return (
    <span className="border  rounded-lg px-2 py-0.5 bg-muted text-muted-foreground text-sm font-mono">
      {children}
    </span>
  );
}
