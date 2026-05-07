import Image from "next/image";
import { Quote } from "lucide-react";
import { Container, Section } from "@/components/layout/container";
import { Card } from "@/components/ui/card";
import { clients, testimonials } from "@/content/site";
import { SectionHeader } from "@/components/blocks/section-header";
import { publicAsset } from "@/lib/public-asset";

export function LogoCloud() {
  return (
    <Section className="py-12">
      <Container>
        <div className="trust-cloud overflow-hidden rounded-[1.6rem] border border-border bg-card/70 p-5 shadow-sm backdrop-blur">
          <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">Trusted across critical sectors and enterprise environments</p>
          <div className="logo-wall mt-5 grid grid-cols-2 overflow-hidden rounded-[1.25rem] border border-border sm:grid-cols-3 lg:grid-cols-7">
            {clients.map((client) => (
              <div key={client.name} className="logo-tile group grid min-h-20 place-items-center border-border p-3">
                <Image
                  src={publicAsset(client.logo)}
                  alt={`${client.name} logo`}
                  width={220}
                  height={72}
                  className="client-logo h-12 w-full object-contain"
                  loading="eager"
                  sizes="(min-width: 1280px) 12vw, (min-width: 1024px) 18vw, (min-width: 640px) 28vw, 44vw"
                  unoptimized
                />
                <span className="sr-only">{client.name}</span>
              </div>
            ))}
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
