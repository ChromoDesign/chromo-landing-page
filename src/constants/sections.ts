type Section = {
  title: string;
  href: string;
};

export const SECTIONS = {
  HOME: {
    title: "Home",
    href: "#",
  },
  OUR_SERVICES: {
    title: "Our Services",
    href: "#",
  },
  PROJECTS: {
    title: "Projects",
    href: "#",
  },
  TESTIMONIALS: {
    title: "Testimonials",
    href: "#",
  },
  OUR_TEAM: {
    title: "Our Team",
    href: "#",
  },
  CONTACT: {
    title: "Contact",
    href: "#",
  },
} as const satisfies Record<string, Section>;

export const SECTIONS_LIST = [
  {
    title: "Home",
    href: "#",
  },
  {
    title: "Our Services",
    href: "#",
  },
  {
    title: "Projects",
    href: "#",
  },
  {
    title: "Testimonials",
    href: "#",
  },
  {
    title: "Our Team",
    href: "#",
  },
  {
    title: "Contact",
    href: "#",
  },
] as const satisfies Section[];
