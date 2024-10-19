import mightyShieldLogo from "@/assets/images/work-logos/mighty-shield.webp";
import rockUltraSoundLogo from "@/assets/images/work-logos/rock-ultrasound.webp";
import toroLogo from "@/assets/images/work-logos/toro.webp";
import torqLogo from "@/assets/images/work-logos/torq.webp";
import villalobosTileLogo from "@/assets/images/work-logos/villalobos-tile.webp";

import mightyShieldColorfulLogo from "@/assets/images/work-logos/mighty-shield-colorful-logo.webp";
import rockUltraSoundColorfulLogo from "@/assets/images/work-logos/rock-ultrasound-colorful-logo.webp";
import toroColorfulLogo from "@/assets/images/work-logos/toro-colorful-logo.webp";
import torqColorfulLogo from "@/assets/images/work-logos/torq-colorful-logo.webp";
import villalobosTileColorfulLogo from "@/assets/images/work-logos/villalobos-tile-colorful-logo.webp";

import mightyShieldDemo from "@/assets/images/demo/mighty-shield-demo-2.webp";
import rockUltrasoundDemo from "@/assets/images/demo/rock-ultrasound-demo-2.webp";
import toroDemo from "@/assets/images/demo/toro-demo-2.webp";
import torqDemo from "@/assets/images/demo/torqmobile-demo-2.webp";
import villalobosTileDemo from "@/assets/images/demo/villalobos-tile-demo-2.webp";

type ShowcaseProject = {
  title: string;
  href: string;
  logoSrc: string;
  colorfulLogoSrc: string;
  demoSrc: string;
};

export const SHOWCASE_PROJECTS = [
  {
    title: "Torq App",
    href: "#",
    logoSrc: torqLogo.src,
    colorfulLogoSrc: torqColorfulLogo.src,
    demoSrc: torqDemo.src,
  },
  {
    title: "Mighty Shield",
    href: "#",
    logoSrc: mightyShieldLogo.src,
    colorfulLogoSrc: mightyShieldColorfulLogo.src,
    demoSrc: mightyShieldDemo.src,
  },
  {
    title: "Rock UltraSound",
    href: "#",
    logoSrc: rockUltraSoundLogo.src,
    colorfulLogoSrc: rockUltraSoundColorfulLogo.src,
    demoSrc: rockUltrasoundDemo.src,
  },
  {
    title: "Villalobos Tile",
    href: "#",
    logoSrc: villalobosTileLogo.src,
    colorfulLogoSrc: villalobosTileColorfulLogo.src,
    demoSrc: villalobosTileDemo.src,
  },
  {
    title: "Toro",
    href: "#",
    logoSrc: toroLogo.src,
    colorfulLogoSrc: toroColorfulLogo.src,
    demoSrc: toroDemo.src,
  },
] as const satisfies ShowcaseProject[];
