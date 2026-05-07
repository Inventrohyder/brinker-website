import type { ComponentType } from "react";
import { Container, Section } from "@/components/layout/container";
import { Card } from "@/components/ui/card";
import { capabilities, solutionCards, values, whyChooseUs } from "@/content/site";
import { SectionHeader } from "@/components/blocks/section-header";

function FeatureCard({ item, tone = "light" }: { item: { title: string; summary: string; icon: ComponentType<{ className?: string; "aria-hidden"?: boolean }> }; tone?: "light" | "dark" }) {
  const Icon = item.icon;
  return (
    <Card className={tone === "dark" ? "border-white/10 bg-white/[0.06] p-6 text-white" : "p-6"}>
      <span className="grid size-12 place-items-center rounded-2xl bg-primary/10 text-primary"><Icon aria-hidden={true} /></span>
      <h3 className={tone === "dark" ? "mt-5 font-display text-xl font-black tracking-[-0.05em] text-white" : "mt-5 font-display text-xl font-black tracking-[-0.05em] text-foreground"}>{item.title}</h3>
      <p className={tone === "dark" ? "mt-3 text-sm leading-6 text-white/62" : "mt-3 text-sm leading-6 text-muted-foreground"}>{item.summary}</p>
    </Card>
  );
}

export function SolutionFeatureGrid() {
  return (
    <Section className="bg-[#07141f] text-white pattern-grid">
      <Container>
        <SectionHeader tone="inverse" eyebrow="Solution architecture" title="Infrastructure, security, and software planned as one operating system." summary="Brinker’s rebuild should emphasize connected systems rather than isolated products." />
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {solutionCards.map((item) => <FeatureCard item={item} tone="dark" key={item.title} />)}
        </div>
      </Container>
    </Section>
  );
}

export function ValuesSection() {
  return (
    <Section>
      <Container>
        <SectionHeader align="center" eyebrow="Principles" title="Guiding principles that define Brinker Solutions." />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {values.map((item) => <FeatureCard item={item} key={item.title} />)}
        </div>
      </Container>
    </Section>
  );
}

export function WhyChooseUs() {
  return (
    <Section>
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <SectionHeader eyebrow="Why choose us" title="Built for long-term client partnerships, not one-off installations." summary="Critical systems need a team that understands architecture, support, integration, and continuity." />
          <div className="grid gap-5 sm:grid-cols-2">
            {whyChooseUs.map((item) => <FeatureCard item={item} key={item.title} />)}
          </div>
        </div>
      </Container>
    </Section>
  );
}

export function CapabilityGrid() {
  return (
    <Section className="bg-muted/45">
      <Container>
        <SectionHeader eyebrow="Capabilities" title="Practical delivery capabilities across the full technology lifecycle." />
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {capabilities.map((item) => <FeatureCard item={item} key={item.title} />)}
        </div>
      </Container>
    </Section>
  );
}
