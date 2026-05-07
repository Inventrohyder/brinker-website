import { ContactSection } from "@/components/blocks/contact-section";
import { PageHero } from "@/components/blocks/page-hero";
import { SiteShell } from "@/components/layout/site-shell";
import { pageIntros } from "@/content/site";
import { JsonLd } from "@/components/structured-data";
import { contactSchema, schemaIds, webPageSchema } from "@/lib/schema";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: pageIntros.contact.title,
  description: pageIntros.contact.summary,
  path: "/contact-us",
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={webPageSchema({
          path: "/contact-us",
          name: pageIntros.contact.title,
          description: pageIntros.contact.summary,
          type: "ContactPage",
          mainEntityId: schemaIds.organization,
        })}
      />
      <JsonLd data={contactSchema()} />
      <SiteShell>
      <PageHero {...pageIntros.contact} />
      <ContactSection />
    </SiteShell>
    </>
  );
}
