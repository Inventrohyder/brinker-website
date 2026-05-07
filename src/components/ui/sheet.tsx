import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Sheet({ className, ...props }: HTMLAttributes<HTMLDetailsElement>) {
  return <details className={cn("group relative", className)} {...props} />;
}

export function SheetTrigger({ className, ...props }: HTMLAttributes<HTMLElement>) {
  return <summary className={cn("list-none marker:hidden", className)} {...props} />;
}

export function SheetContent({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("absolute right-0 top-14 z-50 w-[min(22rem,calc(100vw-2rem))] rounded-[1.4rem] border border-border bg-card p-3 shadow-[0_28px_90px_rgba(10,23,32,0.18)]", className)} {...props} />;
}

export function SheetTitle({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) {
  return <h2 className={cn("px-4 py-3 font-display text-lg font-black tracking-[-0.04em]", className)} {...props} />;
}
