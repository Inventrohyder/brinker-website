import type { Metadata, Viewport } from "next";
import "./globals.css";
import { JsonLd } from "@/components/structured-data";
import { siteSchemaGraph } from "@/lib/schema";

export const metadata: Metadata = {
  metadataBase: new URL("https://brinker.co.ke"),
  title: {
    default: "Brinker Solutions | Enterprise IT, Security & Infrastructure",
    template: "%s | Brinker Solutions",
  },
  description:
    "Brinker Solutions delivers enterprise IT, security systems, communication infrastructure, data centers, safety systems, and software integration across Africa and beyond.",
  openGraph: {
    title: "Brinker Solutions",
    description:
      "Enterprise IT, security, communication infrastructure, data center, and software integration solutions.",
    url: "https://brinker.co.ke",
    siteName: "Brinker Solutions",
    locale: "en_KE",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#07141f",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: `(() => {
              try {
                const theme = localStorage.getItem("brinker-theme") || "system";
                const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
                const dark = theme === "dark" || (theme === "system" && systemDark);
                document.documentElement.classList.toggle("dark", dark);
                document.documentElement.style.colorScheme = dark ? "dark" : "light";
              } catch (_) {}
            })();`,
          }}
        />
        <JsonLd data={siteSchemaGraph()} />
        {children}
      </body>
    </html>
  );
}
