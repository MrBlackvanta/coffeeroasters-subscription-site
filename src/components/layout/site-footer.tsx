import {
  FacebookIcon,
  InstagramIcon,
  Logo,
  TwitterIcon,
} from "@/components/icons";
import { type Route } from "@/data";

import NavLinks from "./nav-links";
import Signature from "./signature";

const socials = [
  { label: "Facebook", href: "https://www.facebook.com/", Icon: FacebookIcon },
  { label: "Twitter", href: "https://twitter.com/", Icon: TwitterIcon },
  {
    label: "Instagram",
    href: "https://www.instagram.com/",
    Icon: InstagramIcon,
  },
];

export default function SiteFooter({ current }: { current: Route }) {
  return (
    <footer className="v-container bg-slate relative mb-18 flex flex-col items-center px-6 py-13.5 md:px-14.5 lg:mb-22 lg:flex-row lg:px-21.25 lg:py-11.75">
      <Logo className="h-auto w-54.5 text-white md:w-59" />

      <NavLinks
        variant="footer"
        current={current}
        className="mt-12 md:mt-8 lg:mt-0 lg:ml-25.75"
      />

      <ul className="mt-12 flex gap-6 md:mt-16.25 lg:mt-0 lg:ml-auto">
        {socials.map(({ label, href, Icon }) => (
          <li key={label}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="hover:text-cyan-light focus-visible:outline-cyan-light text-cream block transition-[color]"
            >
              <Icon className="size-6" />
            </a>
          </li>
        ))}
      </ul>

      <Signature />
    </footer>
  );
}
