import { AboutPreview } from "@/components/blocks/about-preview";
import { CTASection } from "@/components/blocks/cta-section";
import { CapabilityGrid, SolutionFeatureGrid, ValuesSection, WhyChooseUs } from "@/components/blocks/feature-grid";
import { HeroSection } from "@/components/blocks/hero-section";
import { ServiceCardGrid } from "@/components/blocks/service-card-grid";
import { LogoCloud, Testimonials } from "@/components/blocks/trust-and-testimonials";
import { SiteShell } from "@/components/layout/site-shell";
import { JsonLd } from "@/components/structured-data";
import { schemaIds, serviceOfferCatalogSchema, webPageSchema } from "@/lib/schema";

export default function Home() {
  return (
    <>
      <JsonLd
        data={webPageSchema({
          path: "/",
          name: "Home",
          description: "Brinker Solutions delivers enterprise IT, security, communication infrastructure, data centers, safety systems, and software integration across Africa and beyond.",
          mainEntityId: schemaIds.organization,
        })}
      />
      <JsonLd data={serviceOfferCatalogSchema()} />
      <SiteShell>
      <HeroSection />
      <AboutPreview />
      <ServiceCardGrid />
      <CapabilityGrid />
      <SolutionFeatureGrid />
      <ValuesSection />
      <WhyChooseUs />
      <LogoCloud />
      <Testimonials />
      <CTASection />
    </SiteShell>
    </>
  );
}
