import { CTASection } from "@/components/blocks/cta-section";
import { CapabilityGrid, SolutionFeatureGrid, WhyChooseUs } from "@/components/blocks/feature-grid";
import { PageHero } from "@/components/blocks/page-hero";
import { ServiceCardGrid } from "@/components/blocks/service-card-grid";
import { Testimonials } from "@/components/blocks/trust-and-testimonials";
import { SiteShell } from "@/components/layout/site-shell";
import { pageIntros } from "@/content/site";
import { JsonLd } from "@/components/structured-data";
import { schemaIds, serviceOfferCatalogSchema, webPageSchema } from "@/lib/schema";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: pageIntros.services.title,
  description: pageIntros.services.summary,
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={webPageSchema({
          path: "/services",
          name: pageIntros.services.title,
          description: pageIntros.services.summary,
          type: "CollectionPage",
          mainEntityId: schemaIds.offerCatalog,
        })}
      />
      <JsonLd data={serviceOfferCatalogSchema()} />
      <SiteShell>
      <PageHero {...pageIntros.services} />
      <ServiceCardGrid />
      <CapabilityGrid />
      <SolutionFeatureGrid />
      <WhyChooseUs />
      <Testimonials />
      <CTASection title="Need a clearer path from requirements to deployed systems?" cta="Request a Consultation" />
    </SiteShell>
    </>
  );
}
