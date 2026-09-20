import { Logo } from "@/components/icons";
import Link from "next/link";

import MobileMenu from "./mobile-menu";
import NavLinks from "./nav-links";

export default function SiteHeader() {
  return (
    <header className="v-container flex items-center justify-between pt-8 pb-10 md:pt-10 md:pb-13 lg:pt-11 lg:pb-10.5">
      <Link href="/" aria-label="coffeeroasters home" className="block">
        <Logo className="h-auto w-40.75 md:w-59" />
      </Link>

      <nav aria-label="Main" className="hidden md:block">
        <NavLinks variant="header" />
      </nav>

      <MobileMenu className="md:hidden" />
    </header>
  );
}
