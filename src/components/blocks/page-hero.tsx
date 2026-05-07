import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";

export function PageHero({ title, subtitle, summary }: { title: string; subtitle: string; summary: string }) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-[#07141f] text-white pattern-grid">
      <Container className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-4xl">
          <Badge className="border-white/15 bg-white/8 text-primary">Brinker Solutions</Badge>
          <h1 className="mt-6 font-display text-5xl font-black tracking-[-0.07em] sm:text-6xl lg:text-7xl">{title}</h1>
          <p className="mt-5 max-w-2xl text-xl leading-8 text-white/82">{subtitle}</p>
          <p className="mt-4 max-w-3xl text-base leading-8 text-white/62">{summary}</p>
        </div>
      </Container>
    </section>
  );
}
