import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const routes = ["", "/about-us", "/services", "/what-we-offer", "/projects", "/contact-us"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `https://brinker.co.ke${route}`,
    lastModified: new Date("2026-05-06"),
    changeFrequency: route === "" ? "monthly" : "yearly",
    priority: route === "" ? 1 : 0.8,
  }));
}
