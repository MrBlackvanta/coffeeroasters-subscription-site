import { type Route } from "@/data";
import type { PropsWithChildren } from "react";

import SiteFooter from "./site-footer";
import SiteHeader from "./site-header";

type SiteShellProps = PropsWithChildren<{ current: Route }>;

export default function SiteShell({ current, children }: SiteShellProps) {
  return (
    <>
      <a
        href="#main"
        className="bg-cyan text-cream sr-only rounded-md px-6 py-3 text-base font-bold focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-60"
      >
        Skip to content
      </a>

      <SiteHeader current={current} />
      <main id="main" className="grow">
        {children}
      </main>
      <SiteFooter current={current} />
    </>
  );
}
