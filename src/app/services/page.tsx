import type { Metadata } from "next";
import { CTASection } from "@/components/blocks/cta-section";
import { CapabilityGrid, SolutionFeatureGrid, WhyChooseUs } from "@/components/blocks/feature-grid";
import { PageHero } from "@/components/blocks/page-hero";
import { ServiceCardGrid } from "@/components/blocks/service-card-grid";
import { Testimonials } from "@/components/blocks/trust-and-testimonials";
import { SiteShell } from "@/components/layout/site-shell";
import { pageIntros } from "@/content/site";
import { JsonLd } from "@/components/structured-data";
import { serviceOfferCatalogSchema, webPageSchema } from "@/lib/schema";

export const metadata: Metadata = { title: "Services" };

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={webPageSchema({
          path: "/services",
          name: pageIntros.services.title,
          description: pageIntros.services.summary,
          type: "CollectionPage",
          mainEntityId: "https://brinker.co.ke/what-we-offer#offer-catalog",
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
