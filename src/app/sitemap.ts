import { SITE_URL } from "@/app/site";
import { navLinks } from "@/data";
import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return navLinks.map(({ href }) => {
    const home = href === "/";
    return {
      url: home ? SITE_URL : new URL(href, SITE_URL).href,
      changeFrequency: "monthly",
      priority: home ? 1 : 0.8,
    };
  });
}
