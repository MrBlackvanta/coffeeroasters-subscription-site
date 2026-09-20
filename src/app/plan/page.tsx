import { SiteShell } from "@/components/layout";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Create your plan",
  shareTitle: "Create your plan | coffeeroasters",
  description:
    "Choose your coffee, bean type, quantity, grind and delivery frequency, then see exactly what your subscription costs each month before you check out.",
  path: "/plan",
});

export default function Plan() {
  return <SiteShell current="/plan" />;
}
