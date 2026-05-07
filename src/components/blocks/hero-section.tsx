import Link from "next/link";
import { ArrowRight, CheckCircle2, Radar, ShieldCheck, SignalHigh } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { heroCallouts, stats } from "@/content/site";

export function HeroSection() {
  return (
    <section className="hero-pattern overflow-hidden bg-[#f3eee1] text-foreground dark:bg-[#07141f] dark:text-white">
      <Container className="grid min-h-[calc(100vh-5rem)] items-center gap-10 py-14 lg:grid-cols-[1.02fr_0.98fr] lg:py-20">
        <div className="max-w-3xl">
          <Badge className="motion-reveal border-primary/25 bg-primary/10 text-primary">Enterprise IT & security systems</Badge>
          <h1 className="motion-reveal motion-delay-1 mt-7 font-display text-[2.55rem] font-extrabold leading-[1.08] tracking-[-0.025em] sm:text-6xl lg:text-7xl xl:text-7xl">
            Future-ready technology infrastructure for secure, connected operations.
          </h1>
          <p className="motion-reveal motion-delay-2 mt-7 max-w-2xl text-lg leading-8 text-muted-foreground dark:text-white/72">
            Brinker Solutions delivers scalable communication infrastructure, integrated security, data center systems, safety technologies, and software integrations for organizations across Africa and beyond.
          </p>
          <div className="motion-reveal motion-delay-3 mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href="/what-we-offer" className={buttonVariants({ size: "lg" })}>Explore Solutions <ArrowRight data-icon="inline-end" /></Link>
            <Link href="/contact-us" className={buttonVariants({ variant: "outline", size: "lg", className: "border-border bg-card/80 text-foreground hover:bg-muted/70 dark:border-white/15 dark:bg-white/8 dark:text-white dark:hover:bg-white/14" })}>Talk to an Expert</Link>
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {stats.slice(0, 3).map((stat) => (
              <div key={stat.label} className="motion-reveal motion-delay-4 rounded-3xl border border-border bg-card/70 p-4 shadow-sm dark:border-white/10 dark:bg-white/[0.06] dark:shadow-none">
                <p className="font-display text-3xl font-black tracking-[-0.06em] text-secondary dark:text-accent">{stat.value}</p>
                <p className="mt-1 text-xs leading-5 text-muted-foreground dark:text-white/58">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <Card className="motion-float signal-sweep border-border bg-card/80 p-4 text-foreground shadow-[0_30px_90px_rgba(55,44,20,0.14)] backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.07] dark:text-white dark:shadow-[0_30px_100px_rgba(0,0,0,0.3)]">
            <div className="rounded-[1.15rem] border border-border bg-[#fffaf0] p-5 dark:border-white/10 dark:bg-[#0a1f2e]">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary">Operations fabric</p>
                  <p className="mt-2 font-display text-2xl font-black tracking-[-0.05em]">Infrastructure command layer</p>
                </div>
                <div className="radar-node grid size-13 place-items-center rounded-2xl bg-primary/15 text-primary"><Radar aria-hidden={true} /></div>
              </div>
              <OperationsStatusAnimation />
              <div className="mt-8 grid gap-3">
                {heroCallouts.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className={`command-row grid grid-cols-[auto_1fr_auto] items-center gap-4 rounded-2xl border border-border bg-white/70 p-4 shadow-sm motion-delay-${index + 1} dark:border-white/10 dark:bg-white/[0.06] dark:shadow-none`}>
                      <span className="grid size-11 place-items-center rounded-2xl bg-primary/12 text-primary"><Icon aria-hidden={true} /></span>
                      <span>
                        <span className="block text-sm font-bold text-foreground dark:text-white">{item.title}</span>
                        <span className="mt-1 block text-xs leading-5 text-muted-foreground dark:text-white/56">{item.summary}</span>
                      </span>
                      <span className="text-xs font-black text-secondary dark:text-accent">0{index + 1}</span>
                    </div>
                  );
                })}
              </div>
              <div className="mt-6 grid gap-3 rounded-2xl bg-muted/60 p-4 sm:grid-cols-3 dark:bg-[#06131d]">
                <div className="flex items-center gap-2 text-sm text-muted-foreground dark:text-white/70"><SignalHigh className="text-primary" aria-hidden={true} /> Connected</div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground dark:text-white/70"><ShieldCheck className="text-primary" aria-hidden={true} /> Protected</div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground dark:text-white/70"><CheckCircle2 className="text-primary" aria-hidden={true} /> Supported</div>
              </div>
            </div>
          </Card>
        </div>
      </Container>
    </section>
  );
}

function OperationsStatusAnimation() {
  return (
    <div className="ops-status mt-6 rounded-[1.1rem] border border-border p-4 dark:border-white/10">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-[0.66rem] font-bold uppercase tracking-[0.2em] text-secondary dark:text-accent">Systems overview</p>
          <p className="mt-1 text-sm text-muted-foreground dark:text-white/58">Infrastructure, security, and support readiness</p>
        </div>
        <div className="ops-live-pill">
          <span className="ops-live-dot" />
          Live
        </div>
      </div>
      <div className="mt-5 grid gap-3">
        {[
          ["Network backbone", "Stable routes across core sites", "98%"],
          ["Security layer", "Access, video, and intrusion online", "24/7"],
          ["Support queue", "Monitoring and escalation active", "<15m"],
        ].map(([title, detail, value], index) => (
          <div className="ops-status-row" key={title}>
            <div>
              <p className="text-sm font-bold text-foreground dark:text-white">{title}</p>
              <p className="mt-1 text-xs text-muted-foreground dark:text-white/52">{detail}</p>
            </div>
            <span>{value}</span>
            <i style={{ animationDelay: `${index * 0.8}s` }} />
          </div>
        ))}
      </div>
    </div>
  );
}
