import { AlertTriangle, ArrowRight } from "lucide-react";
import { Container, Section } from "@/components/layout/container";
import { Card } from "@/components/ui/card";
import { projects } from "@/content/site";
import { SectionHeader } from "@/components/blocks/section-header";

export function ProjectsSection() {
  return (
    <Section>
      <Container>
        <SectionHeader eyebrow="Projects" title="A case-study structure ready for validated Brinker delivery stories." summary="The existing projects page needs stakeholder validation, so this rebuild preserves the route while avoiding unverifiable claims." />
        <Card className="hero-pattern mt-10 overflow-hidden border-border bg-card/80 p-6 text-foreground shadow-sm sm:p-8 dark:border-white/10 dark:bg-[#07141f] dark:text-white dark:shadow-none">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Featured project framework</p>
              <h2 className="mt-3 font-display text-3xl font-black tracking-[-0.06em]">Sector-based delivery stories for infrastructure, security, and operations.</h2>
              <p className="mt-4 text-sm leading-7 text-muted-foreground dark:text-white/66">When final case studies are approved, this section can show outcomes, technologies deployed, locations, and support model without changing the page architecture.</p>
            </div>
            <AlertTriangle className="size-12 text-secondary dark:text-accent" aria-hidden={true} />
          </div>
        </Card>
        <div className="mt-6 grid gap-5 lg:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.title} className="p-6">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">{project.sector}</p>
              <h3 className="mt-4 font-display text-2xl font-black tracking-[-0.05em]">{project.title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">{project.summary}</p>
              <p className="mt-6 inline-flex items-center gap-2 rounded-full bg-muted px-3 py-2 text-xs font-bold text-muted-foreground">{project.status} <ArrowRight className="size-3" aria-hidden={true} /></p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
