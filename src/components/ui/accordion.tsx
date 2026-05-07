import type { DetailsHTMLAttributes, HTMLAttributes } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export function Accordion({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("divide-y divide-border rounded-[1.35rem] border border-border bg-card", className)} {...props} />;
}

export function AccordionItem({ className, ...props }: DetailsHTMLAttributes<HTMLDetailsElement>) {
  return <details className={cn("group", className)} {...props} />;
}

export function AccordionTrigger({ className, children, ...props }: HTMLAttributes<HTMLElement>) {
  return (
    <summary className={cn("flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-left font-display text-lg font-black tracking-[-0.04em] marker:hidden", className)} {...props}>
      {children}
      <ChevronDown className="size-5 shrink-0 text-muted-foreground transition group-open:rotate-180" aria-hidden={true} />
    </summary>
  );
}

export function AccordionContent({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("px-5 pb-5 text-sm leading-7 text-muted-foreground", className)} {...props} />;
}
