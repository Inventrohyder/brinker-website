import type { Metadata } from "next";
import { site } from "@/content/site";
import { absoluteUrl, siteUrl } from "@/lib/site-url";

const socialImageVersion = "20260507";
const socialImagePath = `/og/brinker-social-card.png?v=${socialImageVersion}`;

export const socialImage = {
  url: absoluteUrl(socialImagePath),
  width: 1200,
  height: 630,
  alt: "Brinker Solutions enterprise IT, security, and infrastructure preview card.",
  type: "image/png",
} as const;

export const defaultDescription =
  "Brinker Solutions delivers enterprise IT, security systems, communication infrastructure, data centers, safety systems, and software integration across Africa and beyond.";

const keywords = [
  "Brinker Solutions",
  "enterprise IT Kenya",
  "security systems Kenya",
  "communication infrastructure",
  "data center infrastructure",
  "life safety systems",
  "software integration",
  "Nairobi IT solutions",
  "Mombasa IT solutions",
  "East Africa technology solutions",
];

export function createMetadata({
  title,
  description = defaultDescription,
  path = "/",
}: {
  title?: string;
  description?: string;
  path?: string;
} = {}): Metadata {
  const pageTitle = title ? `${title} | ${site.name}` : `${site.name} | Enterprise IT, Security & Infrastructure`;
  const canonical = absoluteUrl(path);

  return {
    metadataBase: new URL(`${siteUrl}/`),
    applicationName: site.name,
    title: title
      ? pageTitle
      : {
          default: pageTitle,
          template: `%s | ${site.name}`,
        },
    description,
    keywords,
    authors: [{ name: site.name, url: siteUrl }],
    creator: site.name,
    publisher: site.name,
    category: "Technology services",
    alternates: {
      canonical,
    },
    icons: {
      icon: [
        { url: absoluteUrl("/favicon.ico"), sizes: "any" },
        { url: absoluteUrl("/icon-192.png"), type: "image/png", sizes: "192x192" },
        { url: absoluteUrl("/icon-512.png"), type: "image/png", sizes: "512x512" },
      ],
      apple: [{ url: absoluteUrl("/apple-touch-icon.png"), sizes: "180x180", type: "image/png" }],
    },
    manifest: absoluteUrl("/site.webmanifest"),
    openGraph: {
      title: pageTitle,
      description,
      url: canonical,
      siteName: site.name,
      locale: "en_KE",
      type: "website",
      images: [socialImage],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
      images: [socialImage.url],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    appleWebApp: {
      capable: true,
      title: site.name,
      statusBarStyle: "default",
    },
    formatDetection: {
      telephone: true,
      email: true,
      address: true,
    },
  };
}
