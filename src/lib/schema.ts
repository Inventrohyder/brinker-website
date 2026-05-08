import { pageIntros, projects, services, site, solutionGroups } from "@/content/site";
import { absoluteUrl, siteUrl } from "@/lib/site-url";
import { socialImage } from "@/lib/seo";

const language = "en-KE";
const organizationId = `${siteUrl}/#organization`;
const websiteId = `${siteUrl}/#website`;
const offerCatalogId = absoluteUrl("/what-we-offer#offer-catalog");
const solutionListId = absoluteUrl("/what-we-offer#solution-list");
const projectListId = absoluteUrl("/projects#project-list");

export const schemaIds = {
  organization: organizationId,
  website: websiteId,
  offerCatalog: offerCatalogId,
  solutionList: solutionListId,
  projectList: projectListId,
} as const;

function slug(value: string) {
  return value.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function postalAddress(office: (typeof site.offices)[number]) {
  const isNairobi = office.name.toLowerCase().includes("nairobi");

  return {
    "@type": "PostalAddress",
    streetAddress: isNairobi
      ? "10th Floor Pinetree Plaza, Kamburu Drive, Ngong Road"
      : "TSS Tower, 1st Floor, Nkrumah Road",
    addressLocality: isNairobi ? "Nairobi" : "Mombasa",
    addressCountry: "KE",
  };
}

export function siteSchemaGraph() {
  const offices = site.offices.map((office) => ({
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": `${siteUrl}/#${office.name.toLowerCase().replace(/\s+/g, "-")}`,
    name: `Brinker Solutions ${office.name}`,
    url: absoluteUrl("/contact-us"),
    parentOrganization: { "@id": organizationId },
    address: postalAddress(office),
    telephone: office.phone,
    email: site.email,
    hasMap: office.mapUrl,
    areaServed: ["Kenya", "East Africa"],
  }));

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "ProfessionalService"],
        "@id": organizationId,
        name: site.name,
        legalName: site.legalName,
        url: siteUrl,
        slogan: site.tagline,
        description: site.description,
        logo: absoluteUrl("/icon-512.png?v=20260508"),
        image: socialImage.url,
        foundingDate: "2015",
        email: site.email,
        telephone: [site.phones.nairobi, site.phones.mombasa],
        address: site.offices.map(postalAddress),
        contactPoint: [
          {
            "@type": "ContactPoint",
            contactType: "sales and customer support",
            telephone: site.phones.nairobi,
            email: site.email,
            areaServed: ["KE", "East Africa", "Africa"],
            availableLanguage: ["en"],
          },
          {
            "@type": "ContactPoint",
            contactType: "Mombasa office",
            telephone: site.phones.mombasa,
            email: site.email,
            areaServed: ["KE", "East Africa"],
            availableLanguage: ["en"],
          },
        ],
        location: offices.map((office) => ({ "@id": office["@id"] })),
        areaServed: ["Kenya", "East Africa", "Africa"],
        knowsAbout: services.map((service) => service.title),
        makesOffer: services.map((service) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: service.title,
            description: service.summary,
            serviceType: service.title,
            areaServed: ["Kenya", "East Africa", "Africa"],
          },
        })),
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: siteUrl,
        name: site.name,
        description: site.description,
        inLanguage: language,
        publisher: { "@id": organizationId },
        image: socialImage.url,
      },
      ...offices,
    ],
  };
}

export function serviceOfferCatalogSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    "@id": offerCatalogId,
    name: "Brinker Solutions service catalog",
    url: absoluteUrl("/what-we-offer"),
    provider: { "@id": organizationId },
    itemListElement: services.map((service, index) => ({
      "@type": "Offer",
      position: index + 1,
      itemOffered: {
        "@type": "Service",
        "@id": `${siteUrl}/what-we-offer#${slug(service.title)}-service`,
        name: service.title,
        description: service.summary,
        serviceType: service.title,
        provider: { "@id": organizationId },
        areaServed: ["Kenya", "East Africa", "Africa"],
        url: absoluteUrl(service.href),
      },
    })),
  };
}

export function solutionItemListSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": solutionListId,
    name: "Brinker Solutions detailed solution taxonomy",
    itemListElement: solutionGroups.map((group, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        "@id": absoluteUrl(`/what-we-offer#${group.id}`),
        name: group.title,
        description: group.summary,
        serviceType: group.title,
        provider: { "@id": organizationId },
        areaServed: ["Kenya", "East Africa", "Africa"],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: `${group.title} capabilities`,
          itemListElement: group.items.map((item, itemIndex) => ({
            "@type": "Offer",
            position: itemIndex + 1,
            itemOffered: {
              "@type": "Service",
              name: item,
              serviceType: item,
              provider: { "@id": organizationId },
            },
          })),
        },
      },
    })),
  };
}

export function projectItemListSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": projectListId,
    name: "Brinker Solutions project examples",
    itemListElement: projects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "CreativeWork",
        name: project.title,
        description: project.summary,
        about: project.sector,
        publisher: { "@id": organizationId },
        mainEntityOfPage: absoluteUrl("/projects"),
      },
    })),
  };
}

export function contactSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": absoluteUrl("/contact-us#contactpage"),
    url: absoluteUrl("/contact-us"),
    name: pageIntros.contact.title,
    description: pageIntros.contact.summary,
    inLanguage: language,
    about: { "@id": organizationId },
    mainEntity: {
      "@id": organizationId,
    },
  };
}

export function webPageSchema({
  path,
  name,
  description,
  type = "WebPage",
  mainEntityId,
}: {
  path: string;
  name: string;
  description: string;
  type?: string | string[];
  mainEntityId?: string;
}) {
  const url = absoluteUrl(path);
  const isHome = path === "/";

  return {
    "@context": "https://schema.org",
    "@type": type,
    "@id": `${url}#webpage`,
    url,
    name,
    description,
    inLanguage: language,
    isPartOf: { "@id": websiteId },
    about: { "@id": organizationId },
    publisher: { "@id": organizationId },
    ...(mainEntityId ? { mainEntity: { "@id": mainEntityId } } : {}),
    ...(!isHome
      ? {
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: absoluteUrl("/"),
              },
              {
                "@type": "ListItem",
                position: 2,
                name,
                item: url,
              },
            ],
          },
        }
      : {}),
  };
}
