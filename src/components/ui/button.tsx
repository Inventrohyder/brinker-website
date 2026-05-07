import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const variants = {
  default: "bg-primary text-primary-foreground shadow-[0_18px_40px_rgba(0,169,120,0.22)] hover:bg-[#0fc28d]",
  secondary: "bg-secondary text-secondary-foreground hover:bg-[#18324a]",
  outline: "border border-border bg-card/70 text-foreground hover:bg-muted",
  ghost: "text-foreground hover:bg-muted",
  link: "h-auto p-0 text-primary underline-offset-4 hover:underline",
} as const;

const sizes = {
  default: "h-12 px-6 text-sm",
  sm: "h-10 px-4 text-sm",
  lg: "h-14 px-7 text-base",
  icon: "size-11 p-0",
} as const;

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
};

export function buttonVariants({ variant = "default", size = "default", className }: { variant?: keyof typeof variants; size?: keyof typeof sizes; className?: string } = {}) {
  return cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-[-0.01em] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    variants[variant],
    sizes[size],
    className,
  );
}

export function Button({ className, variant, size, ...props }: ButtonProps) {
  return <button className={buttonVariants({ variant, size, className })} {...props} />;
}
