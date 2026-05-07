import type { Metadata } from "next";
import { AboutPreview } from "@/components/blocks/about-preview";
import { CTASection } from "@/components/blocks/cta-section";
import { CapabilityGrid, ValuesSection } from "@/components/blocks/feature-grid";
import { PageHero } from "@/components/blocks/page-hero";
import { LogoCloud } from "@/components/blocks/trust-and-testimonials";
import { Container, Section } from "@/components/layout/container";
import { SiteShell } from "@/components/layout/site-shell";
import { Card } from "@/components/ui/card";
import { pageIntros } from "@/content/site";
import { JsonLd } from "@/components/structured-data";
import { webPageSchema } from "@/lib/schema";

export const metadata: Metadata = { title: "About Us" };

const team = [
  "Industry experts who understand enterprise, public-sector, and operational technology needs.",
  "Innovative thinkers who connect security, infrastructure, and software into practical systems.",
  "Customer-centric delivery teams focused on support, reliability, and long-term partnerships.",
];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={webPageSchema({
          path: "/about-us",
          name: pageIntros.about.title,
          description: pageIntros.about.summary,
          type: "AboutPage",
          mainEntityId: "https://brinker.co.ke/#organization",
        })}
      />
      <SiteShell>
      <PageHero {...pageIntros.about} />
      <AboutPreview />
      <CapabilityGrid />
      <LogoCloud />
      <ValuesSection />
      <Section>
        <Container>
          <div className="grid gap-5 md:grid-cols-3">
            {team.map((item, index) => (
              <Card key={item} className="p-6">
                <p className="font-display text-5xl font-black tracking-[-0.08em] text-primary">0{index + 1}</p>
                <p className="mt-5 text-base leading-8 text-foreground">{item}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
      <CTASection title="Innovative solutions, seamless integration, lasting impact." />
    </SiteShell>
    </>
  );
}
