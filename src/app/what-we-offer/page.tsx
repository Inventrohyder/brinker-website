import type { Metadata } from "next";
import { CTASection } from "@/components/blocks/cta-section";
import { DetailedSolutions } from "@/components/blocks/detailed-solutions";
import { PageHero } from "@/components/blocks/page-hero";
import { SiteShell } from "@/components/layout/site-shell";
import { pageIntros } from "@/content/site";
import { JsonLd } from "@/components/structured-data";
import { serviceOfferCatalogSchema, solutionItemListSchema, webPageSchema } from "@/lib/schema";

export const metadata: Metadata = { title: "Solutions" };

export default function SolutionsPage() {
  return (
    <>
      <JsonLd
        data={webPageSchema({
          path: "/what-we-offer",
          name: pageIntros.solutions.title,
          description: pageIntros.solutions.summary,
          type: "CollectionPage",
          mainEntityId: "https://brinker.co.ke/what-we-offer#solution-list",
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
