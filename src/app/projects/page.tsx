import { CTASection } from "@/components/blocks/cta-section";
import { PageHero } from "@/components/blocks/page-hero";
import { ProjectsSection } from "@/components/blocks/projects-section";
import { Testimonials } from "@/components/blocks/trust-and-testimonials";
import { SiteShell } from "@/components/layout/site-shell";
import { pageIntros } from "@/content/site";
import { JsonLd } from "@/components/structured-data";
import { projectItemListSchema, schemaIds, webPageSchema } from "@/lib/schema";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: pageIntros.projects.title,
  description: pageIntros.projects.summary,
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <>
      <JsonLd
        data={webPageSchema({
          path: "/projects",
          name: pageIntros.projects.title,
          description: pageIntros.projects.summary,
          type: "CollectionPage",
          mainEntityId: schemaIds.projectList,
        })}
      />
      <JsonLd data={projectItemListSchema()} />
      <SiteShell>
      <PageHero {...pageIntros.projects} />
      <ProjectsSection />
      <Testimonials />
      <CTASection title="Have an enterprise IT or security project in planning?" cta="Discuss the Project" />
    </SiteShell>
    </>
  );
}
