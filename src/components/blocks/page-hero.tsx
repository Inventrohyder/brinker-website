import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";

export function PageHero({ title, subtitle, summary }: { title: string; subtitle: string; summary: string }) {
  return (
    <section className="hero-pattern relative overflow-hidden border-b border-border bg-[#f3eee1] text-foreground dark:bg-[#07141f] dark:text-white">
      <Container className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-4xl">
          <Badge className="border-primary/25 bg-primary/10 text-primary">Brinker Solutions</Badge>
          <h1 className="mt-6 font-display text-5xl font-black tracking-[-0.07em] sm:text-6xl lg:text-7xl">{title}</h1>
          <p className="mt-5 max-w-2xl text-xl leading-8 text-foreground/82 dark:text-white/82">{subtitle}</p>
          <p className="mt-4 max-w-3xl text-base leading-8 text-muted-foreground dark:text-white/62">{summary}</p>
        </div>
      </Container>
    </section>
  );
}
