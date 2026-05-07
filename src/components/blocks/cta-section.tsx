import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container, Section } from "@/components/layout/container";
import { buttonVariants } from "@/components/ui/button";

export function CTASection({ title = "Pioneering the future of technology in East Africa.", summary = "Start with a practical conversation about the systems, risks, locations, and workflows your organization needs to connect and secure.", cta = "Get In Touch" }: { title?: string; summary?: string; cta?: string }) {
  return (
    <Section>
      <Container>
        <div className="hero-pattern overflow-hidden rounded-[2rem] border border-border bg-card/78 p-6 text-foreground shadow-sm sm:p-10 lg:p-14 dark:border-white/10 dark:bg-[#07141f] dark:text-white dark:shadow-none">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="max-w-3xl">
              <h2 className="font-display text-4xl font-black tracking-[-0.06em] sm:text-5xl">{title}</h2>
              <p className="mt-4 text-base leading-8 text-muted-foreground dark:text-white/66">{summary}</p>
            </div>
            <Link href="/contact-us" className={buttonVariants({ size: "lg" })}>{cta} <ArrowRight data-icon="inline-end" /></Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}
