import type { Metadata } from "next";
import { ContactSection } from "@/components/blocks/contact-section";
import { PageHero } from "@/components/blocks/page-hero";
import { SiteShell } from "@/components/layout/site-shell";
import { pageIntros } from "@/content/site";
import { JsonLd } from "@/components/structured-data";
import { webPageSchema } from "@/lib/schema";

export const metadata: Metadata = { title: "Contact Us" };

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={webPageSchema({
          path: "/contact-us",
          name: pageIntros.contact.title,
          description: pageIntros.contact.summary,
          type: "ContactPage",
          mainEntityId: "https://brinker.co.ke/#organization",
        })}
      />
      <SiteShell>
      <PageHero {...pageIntros.contact} />
      <ContactSection />
    </SiteShell>
    </>
  );
}
