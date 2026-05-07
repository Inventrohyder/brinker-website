import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function SectionHeader({
  eyebrow,
  title,
  summary,
  align = "left",
  tone = "default",
  className,
}: {
  eyebrow?: string;
  title: string;
  summary?: string;
  align?: "left" | "center";
  tone?: "default" | "inverse";
  className?: string;
}) {
  return (
    <div className={cn("flex max-w-3xl flex-col items-start gap-4", align === "center" && "mx-auto items-center text-center", className)}>
      {eyebrow ? <Badge className={tone === "inverse" ? "border-primary/30 bg-primary/15 text-primary" : undefined}>{eyebrow}</Badge> : null}
      <h2 className={cn("font-display text-3xl font-black tracking-[-0.06em] sm:text-4xl lg:text-5xl", tone === "inverse" ? "text-white" : "text-foreground")}>{title}</h2>
      {summary ? <p className={cn("text-base leading-8 sm:text-lg", tone === "inverse" ? "text-white/68" : "text-muted-foreground")}>{summary}</p> : null}
    </div>
  );
}
