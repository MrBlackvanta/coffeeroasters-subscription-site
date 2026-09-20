export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About us" },
  { href: "/plan", label: "Create your plan" },
] as const;

export type Route = (typeof navLinks)[number]["href"];
