type Section = {
  id: string;
  title: string;
  href: string;
};

export const SECTIONS = {
  HOME: {
    id: "home",
    title: "Home",
    href: "#home",
  },
  OUR_SERVICES: {
    id: "our-services",
    title: "Our Services",
    href: "#our-services",
  },
  PROJECTS: {
    id: "projects",
    title: "Projects",
    href: "#projects",
  },
  TESTIMONIALS: {
    id: "testimonials",
    title: "Testimonials",
    href: "#testimonials",
  },
  OUR_TEAM: {
    id: "our-team",
    title: "Our Team",
    href: "#our-team",
  },
  CONTACT: {
    id: "contact",
    title: "Contact",
    href: "#contact",
  },
} as const satisfies Record<string, Section>;

export const SECTIONS_LIST = [
  SECTIONS.HOME,
  SECTIONS.OUR_SERVICES,
  SECTIONS.PROJECTS,
  SECTIONS.TESTIMONIALS,
  SECTIONS.OUR_TEAM,
  SECTIONS.CONTACT,
] as const satisfies Section[];
