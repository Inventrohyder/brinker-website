import type { AnchorHTMLAttributes, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Tabs({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("grid gap-5", className)} {...props} />;
}

export function TabsList({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("flex flex-wrap gap-2 rounded-[1.35rem] border border-border bg-card p-2", className)} role="tablist" {...props} />;
}

export function TabsTrigger({ className, ...props }: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return <a className={cn("rounded-full px-4 py-2 text-sm font-bold text-muted-foreground transition hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring", className)} role="tab" {...props} />;
}

export function TabsContent({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("rounded-[1.35rem]", className)} role="tabpanel" {...props} />;
}
