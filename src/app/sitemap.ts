import { routes, SITE_URL } from "@/app/site";
import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => {
    const home = route === "/";
    return {
      url: home ? SITE_URL : new URL(route, SITE_URL).href,
      changeFrequency: "monthly",
      priority: home ? 1 : 0.8,
    };
  });
}
