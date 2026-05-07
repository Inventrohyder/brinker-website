import Link from "next/link";
import Image from "next/image";
import { Mail, MapPinned, Phone } from "lucide-react";
import { mainNav, site } from "@/content/site";
import { Container } from "@/components/layout/container";
import { Separator } from "@/components/ui/separator";
import { publicAsset } from "@/lib/public-asset";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card/82 text-foreground dark:bg-[#07141f] dark:text-white">
      <Container className="py-14 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_1fr]">
          <div className="max-w-md">
            <div className="brand-lockup flex items-center gap-3">
              <span className="brand-mark-shell relative grid size-12 place-items-center rounded-2xl">
                <Image
                  src={publicAsset("/images/brand/brinker-mark.png")}
                  alt=""
                  fill
                  className="object-contain p-2"
                  sizes="48px"
                />
              </span>
              <div>
                <p className="font-display text-xl font-extrabold tracking-[-0.03em] text-foreground dark:text-white">{site.name}</p>
                <p className="brand-tagline text-xs font-bold uppercase tracking-[0.18em]">Let&apos;s make things better</p>
              </div>
            </div>
            <p className="mt-6 text-sm leading-7 text-muted-foreground dark:text-white/66">{site.legalName} delivers cutting-edge IT and security solutions tailored for businesses across East Africa.</p>
          </div>

          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Pages</h2>
            <div className="mt-5 grid grid-cols-2 gap-3 text-sm text-muted-foreground dark:text-white/70">
              {mainNav.map((item) => <Link className="hover:text-foreground dark:hover:text-white" href={item.href} key={item.href}>{item.title}</Link>)}
            </div>
          </div>

          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Contact</h2>
            <div className="mt-5 flex flex-col gap-4 text-sm text-muted-foreground dark:text-white/70">
              {site.offices.map((office) => (
                <a key={office.name} href={office.mapUrl} className="group flex gap-3 hover:text-foreground dark:hover:text-white" target="_blank" rel="noreferrer">
                  <MapPinned className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden={true} />
                  <span><strong className="text-foreground/90 dark:text-white/90">{office.name}:</strong> {office.address}</span>
                </a>
              ))}
              <a href={`tel:${site.phones.nairobi.replace(/\s+/g, "")}`} className="flex gap-3 hover:text-foreground dark:hover:text-white"><Phone className="size-4 text-primary" aria-hidden={true} /> Nairobi: {site.phones.nairobi}</a>
              <a href={`tel:${site.phones.mombasa.replace(/\s+/g, "")}`} className="flex gap-3 hover:text-foreground dark:hover:text-white"><Phone className="size-4 text-primary" aria-hidden={true} /> Mombasa: {site.phones.mombasa}</a>
              <a href={`mailto:${site.email}`} className="flex gap-3 hover:text-foreground dark:hover:text-white"><Mail className="size-4 text-primary" aria-hidden={true} /> {site.email}</a>
            </div>
          </div>
        </div>
        <Separator className="my-8 bg-border dark:bg-white/10" />
        <div className="flex flex-col justify-between gap-4 text-xs text-muted-foreground dark:text-white/48 sm:flex-row">
          <p>Copyright © 2026 Brinker Solutions. All rights reserved.</p>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="hover:text-foreground dark:hover:text-white">LinkedIn</a>
        </div>
      </Container>
    </footer>
  );
}
