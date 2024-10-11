import codeBlockSvg from "@material-symbols/svg-400/rounded/code_blocks-fill.svg?raw";
import designServicesSvg from "@material-symbols/svg-400/rounded/design_services-fill.svg?raw";
import homeSvg from "@material-symbols/svg-400/rounded/home-fill.svg?raw";
import photoAuthMerge from "@material-symbols/svg-400/rounded/photo_auto_merge-fill.svg?raw";
import playingCardsSvg from "@material-symbols/svg-400/rounded/playing_cards-fill.svg?raw";

type Section = {
  id: string;
  title: string;
  href: string;
  svg: string;
};

export const SECTIONS = {
  HOME: {
    id: "home",
    title: "Home",
    href: "#home",
    svg: homeSvg,
  },
  OUR_SERVICES: {
    id: "our-services",
    title: "Our Services",
    href: "#our-services",
    svg: designServicesSvg,
  },
  PROJECTS: {
    id: "projects",
    title: "Projects",
    href: "#projects",
    svg: codeBlockSvg,
  },
  TESTIMONIALS: {
    id: "testimonials",
    title: "Testimonials",
    href: "#testimonials",
    svg: playingCardsSvg,
  },
  OUR_TEAM: {
    id: "our-team",
    title: "Our Team",
    href: "#our-team",
    svg: photoAuthMerge,
  },
  CONTACT: {
    id: "contact",
    title: "Contact",
    href: "#contact",
    svg: "",
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
