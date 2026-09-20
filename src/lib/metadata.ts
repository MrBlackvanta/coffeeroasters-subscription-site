import type { Metadata } from "next";

export const siteName = "coffeeroasters";

const shareImage = {
  url: "/opengraph-image.jpg",
  width: 1200,
  height: 630,
  alt: "The coffeeroasters wordmark over a freshly poured cup, headlined “Fresh coffee, delivered”.",
};

const openGraphBase = {
  siteName,
  locale: "en_US",
  type: "website",
} satisfies NonNullable<Metadata["openGraph"]>;

type PageMetadata = {
  title: string;
  shareTitle: string;
  description: string;
  path: string;
};

export function pageMetadata({
  title,
  shareTitle,
  description,
  path,
}: PageMetadata): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      ...openGraphBase,
      title: shareTitle,
      description,
      url: path,
      images: [shareImage],
    },
    twitter: {
      card: "summary_large_image",
      title: shareTitle,
      description,
      images: [shareImage],
    },
  };
}
