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
  logoSrc: string;
  colorfulLogoSrc: string;
  demoSrc: string;
  href?: string;
  figmaHref?: string;
};

export const SHOWCASE_PROJECTS: ShowcaseProject[] = [
  {
    title: "Torq App",
    href: "https://torqapp.io",
    figmaHref:
      "https://www.figma.com/proto/UvugXZsqpdArzWS2R5m3tI/Portfolio-showcase?page-id=&node-id=1-1952&node-type=canvas&viewport=525%2C200%2C0.11&t=cUiTv1Lt5GeL84ke-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A1952&show-proto-sidebar=1",
    logoSrc: torqLogo.src,
    colorfulLogoSrc: torqColorfulLogo.src,
    demoSrc: torqDemo.src,
  },
  {
    title: "Mighty Shield",
    href: "https://mightyshieldinsurance.com",
    figmaHref:
      "https://www.figma.com/proto/UvugXZsqpdArzWS2R5m3tI/Portfolio-showcase?page-id=&node-id=1-3179&node-type=canvas&viewport=525%2C200%2C0.11&t=cUiTv1Lt5GeL84ke-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A3179&show-proto-sidebar=1",
    logoSrc: mightyShieldLogo.src,
    colorfulLogoSrc: mightyShieldColorfulLogo.src,
    demoSrc: mightyShieldDemo.src,
  },
  {
    title: "Rock UltraSound",
    href: "https://rockultrasound.com",
    figmaHref:
      "https://www.figma.com/proto/UvugXZsqpdArzWS2R5m3tI/Portfolio-showcase?page-id=&node-id=3-146&node-type=canvas&viewport=525%2C200%2C0.11&t=cUiTv1Lt5GeL84ke-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=3%3A146&show-proto-sidebar=1",
    logoSrc: rockUltraSoundLogo.src,
    colorfulLogoSrc: rockUltraSoundColorfulLogo.src,
    demoSrc: rockUltrasoundDemo.src,
  },
  {
    title: "Villalobos Tile",
    href: "https://villalobostile.com",
    figmaHref:
      "https://www.figma.com/proto/UvugXZsqpdArzWS2R5m3tI/Portfolio-showcase?page-id=&node-id=3-1753&node-type=canvas&viewport=525%2C200%2C0.11&t=cUiTv1Lt5GeL84ke-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=3%3A1753&show-proto-sidebar=1",
    logoSrc: villalobosTileLogo.src,
    colorfulLogoSrc: villalobosTileColorfulLogo.src,
    demoSrc: villalobosTileDemo.src,
  },
  {
    title: "Toro",
    figmaHref: "#",
    logoSrc: toroLogo.src,
    colorfulLogoSrc: toroColorfulLogo.src,
    demoSrc: toroDemo.src,
  },
];
