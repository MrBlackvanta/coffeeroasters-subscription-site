"use client";

import { navLinks } from "@/data";
import Link from "next/link";
import { usePathname } from "next/navigation";

export type NavVariant = "header" | "footer" | "drawer";

const withoutTrailingSlash = (path: string) => path.replace(/\/+$/, "") || "/";

const lists: Record<NavVariant, string> = {
  header: "flex items-center gap-8",
  footer: "flex flex-col items-center gap-6 md:flex-row md:gap-8",
  drawer: "flex flex-col items-center gap-8",
};

const items: Record<NavVariant, string> = {
  header:
    "text-nav text-grey-on-light block uppercase transition-[color] hover:text-ink",
  footer:
    "text-nav text-grey-on-dark block uppercase transition-[color] hover:text-cream focus-visible:outline-cyan-light",
  drawer:
    "font-display text-h4 block capitalize transition-[color] hover:text-cyan",
};

type NavLinksProps = {
  variant: NavVariant;
  className?: string;
  onNavigate?: () => void;
};

export default function NavLinks({
  variant,
  className = "",
  onNavigate,
}: NavLinksProps) {
  const current = withoutTrailingSlash(usePathname());

  return (
    <ul className={`${lists[variant]} ${className}`}>
      {navLinks.map(({ href, label }) => (
        <li key={href}>
          <Link
            href={href}
            className={items[variant]}
            aria-current={href === current ? "page" : undefined}
            onClick={onNavigate}
          >
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
