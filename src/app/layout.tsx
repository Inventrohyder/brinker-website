import type { Metadata, Viewport } from "next";
import "./globals.css";
import { JsonLd } from "@/components/structured-data";
import { siteSchemaGraph } from "@/lib/schema";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata();

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6f3ea" },
    { media: "(prefers-color-scheme: dark)", color: "#07141f" },
  ],
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
