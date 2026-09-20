import { SITE_URL } from "@/app/site";
import { pageMetadata, siteName } from "@/lib/metadata";
import type { Metadata, Viewport } from "next";
import { Barlow, Fraunces } from "next/font/google";
import "./globals.css";

const barlow = Barlow({
  variable: "--font-barlow",
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  weight: "900",
  subsets: ["latin"],
  display: "swap",
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
      <body className="flex min-h-dvh flex-col">{children}</body>
    </html>
  );
}
