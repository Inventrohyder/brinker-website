import { CTASection } from "@/components/blocks/cta-section";
import { DetailedSolutions } from "@/components/blocks/detailed-solutions";
import { PageHero } from "@/components/blocks/page-hero";
import { SiteShell } from "@/components/layout/site-shell";
import { pageIntros } from "@/content/site";
import { JsonLd } from "@/components/structured-data";
import { schemaIds, serviceOfferCatalogSchema, solutionItemListSchema, webPageSchema } from "@/lib/schema";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: pageIntros.solutions.title,
  description: pageIntros.solutions.summary,
  path: "/what-we-offer",
});

export default function SolutionsPage() {
  return (
    <>
      <JsonLd
        data={webPageSchema({
          path: "/what-we-offer",
          name: pageIntros.solutions.title,
          description: pageIntros.solutions.summary,
          type: "CollectionPage",
          mainEntityId: schemaIds.solutionList,
        })}
      />
      <JsonLd data={serviceOfferCatalogSchema()} />
      <JsonLd data={solutionItemListSchema()} />
      <SiteShell>
      <PageHero {...pageIntros.solutions} />
      <DetailedSolutions />
      <CTASection title="Turn complex requirements into integrated, supportable systems." cta="Plan a Solution" />
    </SiteShell>
    </>
  );
}
