import { Quote } from "lucide-react";
import { Container, Section } from "@/components/layout/container";
import { Card } from "@/components/ui/card";
import { testimonials } from "@/content/site";
import { SectionHeader } from "@/components/blocks/section-header";
import { PartnerLogoCarousel } from "@/components/blocks/partner-logo-carousel";

export function LogoCloud() {
  return (
    <Section className="py-10">
      <Container>
        <div className="rounded-[1.6rem] border border-border bg-card/70 px-5 py-6 shadow-sm backdrop-blur sm:px-7">
          <div className="flex flex-col gap-2 text-center sm:text-left">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary">
              Trusted across critical sectors and enterprise environments
            </p>
            <h2 className="max-w-4xl font-display text-xl font-extrabold tracking-[-0.04em] text-foreground sm:text-2xl">
              Organizations that depend on reliable infrastructure, security, and long-term support.
            </h2>
          </div>
          <div className="mt-5">
            <PartnerLogoCarousel />
          </div>
        </div>
      </Container>
    </Section>
  );
}

export function Testimonials() {
  return (
    <Section className="bg-muted/45">
      <Container>
        <SectionHeader align="center" eyebrow="Testimonials" title="Testimonials from clients who value dependable delivery and ongoing support." />
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {testimonials.map((item) => (
            <Card key={item.name} className="p-6">
              <Quote className="text-primary" aria-hidden={true} />
              <p className="mt-5 text-base leading-8 text-foreground">“{item.quote}”</p>
              <div className="mt-7 flex items-center gap-3">
                <div className="grid size-12 place-items-center rounded-full bg-secondary text-sm font-black text-white">{item.name.split(" ").map((part) => part[0]).slice(0, 2).join("")}</div>
                <div>
                  <p className="font-bold text-foreground">{item.name}</p>
                  <p className="text-sm text-muted-foreground">{item.role}, {item.company}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
