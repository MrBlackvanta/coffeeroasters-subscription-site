import { pageMetadata } from "@/lib/metadata";
import { Hero, HowItWorks, PlanBuilder } from "@/views/plan";

export const metadata = pageMetadata({
  title: "Create your plan",
  shareTitle: "Create your plan | coffeeroasters",
  description:
    "Choose your coffee, bean type, quantity, grind and delivery frequency, then see exactly what your subscription costs each month before you check out.",
  path: "/plan",
});

export default function Plan() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <PlanBuilder />
    </>
  );
}
