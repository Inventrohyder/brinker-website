import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Container, Section } from "@/components/layout/container";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { services } from "@/content/site";
import { SectionHeader } from "@/components/blocks/section-header";

export function ServiceCardGrid({ compact = false }: { compact?: boolean }) {
  return (
    <Section id="services" className={compact ? "py-0" : undefined}>
      <Container>
        {!compact ? (
          <SectionHeader
            eyebrow="Services"
            title="A complete technology stack for secure operations."
            summary="Each service area is built as a reusable shadcn-style card block so Brinker can extend the content without changing page structure."
          />
        ) : null}
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card key={service.title} className="group overflow-hidden transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_30px_90px_rgba(0,169,120,0.14)]">
                <CardHeader>
                  <div className="mb-3 flex items-center justify-between gap-4">
                    <span className="grid size-12 place-items-center rounded-2xl bg-primary/10 text-primary"><Icon aria-hidden={true} /></span>
                    <ArrowRight className="size-5 text-muted-foreground transition group-hover:translate-x-1 group-hover:text-primary" aria-hidden={true} />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.summary}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="grid gap-2 text-sm text-muted-foreground">
                    {service.items.map((item) => <li key={item} className="flex gap-2"><Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden={true} />{item}</li>)}
                  </ul>
                  <Link href={service.href} className="mt-6 inline-flex text-sm font-bold text-primary hover:underline">View capability</Link>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
