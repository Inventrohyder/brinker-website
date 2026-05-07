import type { NextConfig } from "next";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const isStaticExport = process.env.NEXT_OUTPUT === "export";

const nextConfig: NextConfig = {
  ...(isStaticExport
    ? {
        output: "export",
        trailingSlash: true,
        basePath: basePath || undefined,
        assetPrefix: basePath ? `${basePath}/` : undefined,
        images: {
          unoptimized: true,
        },
      }
    : {
        async redirects() {
          return [
            { source: "/about", destination: "/about-us", permanent: true },
            { source: "/contact", destination: "/contact-us", permanent: true },
            { source: "/solutions", destination: "/what-we-offer", permanent: true },
          ];
        },
      }),
};

export default nextConfig;
