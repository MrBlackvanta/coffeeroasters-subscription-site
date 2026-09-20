import { SITE_URL } from "@/app/site";
import { SiteFooter, SiteHeader } from "@/components/layout";
import { pageMetadata, siteName } from "@/lib/metadata";
import type { Metadata, Viewport } from "next";
import { Barlow } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const barlow = Barlow({
  variable: "--font-barlow",
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

const fraunces = localFont({
  src: "../assets/fonts/fraunces-9pt-black-latin.woff2",
  variable: "--font-fraunces",
  weight: "900",
  style: "normal",
  display: "swap",
  adjustFontFallback: "Times New Roman",
});

const homeTitle = `${siteName} | Fresh coffee, delivered`;

export const metadata: Metadata = {
  ...pageMetadata({
    title: homeTitle,
    shareTitle: homeTitle,
    description:
      "Build a coffee subscription around how you drink it. Pick your beans, grind and quantity, and have artisan coffee delivered fresh on your own schedule.",
    path: "/",
  }),
  metadataBase: new URL(SITE_URL),
  title: { default: homeTitle, template: `%s | ${siteName}` },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#fefcf7",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${barlow.variable} ${fraunces.variable} antialiased`}
    >
      <body className="flex min-h-dvh flex-col">
        <a href="#main" className="v-skip-link">
          Skip to content
        </a>

        <SiteHeader />
        <main id="main" className="grow">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
