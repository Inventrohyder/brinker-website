import Link from "next/link";
import { ArrowRight, Building2 } from "lucide-react";
import { Container, Section } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";

export function AboutPreview() {
  return (
    <Section>
      <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <Badge>Who we are</Badge>
          <h2 className="mt-5 font-display text-4xl font-black tracking-[-0.06em] text-foreground sm:text-5xl">Innovating technology, transforming businesses.</h2>
          <p className="mt-5 text-base leading-8 text-muted-foreground">
            Brinker Solutions LTD is a leading IT and technical solutions provider established in 2015. With offices in Nairobi and Mombasa, we deliver enterprise technology, security systems, and communication infrastructure across East Africa.
          </p>
          <Link href="/about-us" className={buttonVariants({ className: "mt-7" })}>Discover More <ArrowRight data-icon="inline-end" /></Link>
        </div>
        <Card className="hero-pattern overflow-hidden border-border bg-card/80 p-4 text-foreground shadow-sm dark:border-white/10 dark:bg-[#07141f] dark:text-white dark:shadow-none">
          <div className="rounded-[1.2rem] border border-border bg-white/68 p-6 sm:p-8 dark:border-white/10 dark:bg-white/[0.06]">
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="rounded-3xl bg-primary p-6 text-primary-foreground">
                <p className="font-display text-6xl font-black tracking-[-0.08em]">10+</p>
                <p className="mt-2 text-sm font-bold">Years of experience</p>
              </div>
              <div className="rounded-3xl border border-border bg-white/70 p-6 dark:border-white/10 dark:bg-white/[0.06]">
                <Building2 className="text-primary" aria-hidden={true} />
                <p className="mt-7 font-display text-2xl font-black tracking-[-0.05em]">Nairobi and Mombasa presence</p>
              </div>
            </div>
            <p className="mt-6 text-sm leading-7 text-muted-foreground dark:text-white/68">Quality, innovation, and customer satisfaction are positioned as operational disciplines, not slogans.</p>
          </div>
        </Card>
      </Container>
    </Section>
  );
}
