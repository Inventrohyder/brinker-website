import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { mainNav } from "@/content/site";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { publicAsset } from "@/lib/public-asset";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/88 backdrop-blur-xl">
      <Container className="flex h-[4.75rem] items-center justify-between gap-3 xl:h-20">
        <Link href="/" className="brand-lockup group flex shrink-0 items-center gap-3" aria-label="Brinker Solutions home">
          <span className="brand-mark-shell relative grid size-11 place-items-center rounded-2xl xl:size-12">
            <Image
              src={publicAsset("/images/brand/brinker-mark.png")}
              alt=""
              fill
              className="object-contain p-2"
              priority
              sizes="48px"
            />
          </span>
          <span className="hidden min-[460px]:flex flex-col leading-none">
            <span className="brand-wordmark font-display text-base font-extrabold tracking-[-0.03em] xl:text-lg">Brinker Solutions</span>
            <span className="brand-tagline mt-1 text-[0.62rem] font-bold uppercase tracking-[0.2em]">Let&apos;s make things better</span>
          </span>
        </Link>

        <nav className="hidden min-w-0 items-center gap-0 rounded-full border border-border bg-card/80 p-1 shadow-sm lg:flex" aria-label="Primary navigation">
          {mainNav.map((item) => (
            <Link key={item.href} href={item.href} className="whitespace-nowrap rounded-full px-3 py-2 text-sm font-semibold text-muted-foreground transition hover:bg-muted hover:text-foreground xl:px-4">
              {item.title}
            </Link>
          ))}
        </nav>

        <div className="hidden shrink-0 items-center gap-2 lg:flex">
          <ThemeToggle />
          <Link href="/contact-us" className={buttonVariants({ size: "sm", className: "min-w-max whitespace-nowrap px-4 xl:px-5" })}>Get In Touch</Link>
        </div>

        <Sheet className="lg:hidden">
          <SheetTrigger className="flex size-11 items-center justify-center rounded-full border border-border bg-card text-foreground">
            <Menu aria-hidden={true} />
            <span className="sr-only">Open menu</span>
          </SheetTrigger>
          <SheetContent>
            <SheetTitle>Navigation</SheetTitle>
            <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
              {mainNav.map((item) => (
                <Link key={item.href} href={item.href} className="rounded-2xl px-4 py-3 text-sm font-semibold text-foreground hover:bg-muted">
                  {item.title}
                </Link>
              ))}
              <div className="mt-2 flex gap-2 px-1">
                <ThemeToggle />
                <Link href="/contact-us" className={buttonVariants({ className: "flex-1" })}>Get In Touch</Link>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </Container>
    </header>
  );
}
