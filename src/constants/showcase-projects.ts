import dependsOnTheWeatherLogo from "@/assets/images/work-logos/white/dotw-imagotype-white.webp";
import mightyShieldLogo from "@/assets/images/work-logos/white/mighty-shield-imagotype-white.webp";
import rockUltraSoundLogo from "@/assets/images/work-logos/white/rockultrasound-imagotype-white.webp";
import toroLogo from "@/assets/images/work-logos/white/toro-imagotype-white.webp";
import torqLogo from "@/assets/images/work-logos/white/torq-imagotype-white.webp";
import villalobosTileLogo from "@/assets/images/work-logos/white/villalobos-tile-imagotype-white.webp";

import dependsOnTheWeatherColorfulLogo from "@/assets/images/work-logos/color/dotw-imagotype-colorful.webp";
import mightyShieldColorfulLogo from "@/assets/images/work-logos/color/mighty-shield-imagotype-colorful.webp";
import rockUltraSoundColorfulLogo from "@/assets/images/work-logos/color/rockultrasound-imagotype-colorful.webp";
import toroColorfulLogo from "@/assets/images/work-logos/color/toro-imagotype-colorful.webp";
import torqColorfulLogo from "@/assets/images/work-logos/color/torq-imagotype-colorful.webp";
import villalobosTileColorfulLogo from "@/assets/images/work-logos/color/villalobos-tile-imagotype-colorful.webp";

import dependsOnWeatherDemo from "@/assets/images/demo/depends-on-the-weather-demo.webp";
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
    title: "App for home contractors",
    href: "https://torqapp.io",
    figmaHref:
      "https://www.figma.com/proto/UvugXZsqpdArzWS2R5m3tI/Portfolio-showcase?page-id=&node-id=1-1952&node-type=canvas&viewport=525%2C200%2C0.11&t=cUiTv1Lt5GeL84ke-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A1952&show-proto-sidebar=1",
    logoSrc: torqLogo.src,
    colorfulLogoSrc: torqColorfulLogo.src,
    demoSrc: torqDemo.src,
  },
  {
    title: "Web for insurance company",
    href: "https://mightyshieldinsurance.com",
    figmaHref:
      "https://www.figma.com/proto/UvugXZsqpdArzWS2R5m3tI/Portfolio-showcase?page-id=&node-id=1-3179&node-type=canvas&viewport=525%2C200%2C0.11&t=cUiTv1Lt5GeL84ke-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A3179&show-proto-sidebar=1",
    logoSrc: mightyShieldLogo.src,
    colorfulLogoSrc: mightyShieldColorfulLogo.src,
    demoSrc: mightyShieldDemo.src,
  },
  {
    title: "Web for ultrasound clinic",
    href: "https://rockultrasound.com",
    figmaHref:
      "https://www.figma.com/proto/UvugXZsqpdArzWS2R5m3tI/Portfolio-showcase?page-id=&node-id=3-146&node-type=canvas&viewport=525%2C200%2C0.11&t=cUiTv1Lt5GeL84ke-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=3%3A146&show-proto-sidebar=1",
    logoSrc: rockUltraSoundLogo.src,
    colorfulLogoSrc: rockUltraSoundColorfulLogo.src,
    demoSrc: rockUltrasoundDemo.src,
  },
  {
    title: "Web for flooring company",
    href: "https://villalobostile.com",
    figmaHref:
      "https://www.figma.com/proto/UvugXZsqpdArzWS2R5m3tI/Portfolio-showcase?page-id=&node-id=3-1753&node-type=canvas&viewport=525%2C200%2C0.11&t=cUiTv1Lt5GeL84ke-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=3%3A1753&show-proto-sidebar=1",
    logoSrc: villalobosTileLogo.src,
    colorfulLogoSrc: villalobosTileColorfulLogo.src,
    demoSrc: villalobosTileDemo.src,
  },
  {
    title: "Depends on the Weather",
    href: "https://www.dependsontheweather.org/action",
    logoSrc: dependsOnTheWeatherLogo.src,
    colorfulLogoSrc: dependsOnTheWeatherColorfulLogo.src,
    demoSrc: dependsOnWeatherDemo.src,
  },
  {
    title: "Web for metal work company",
    figmaHref:
      "https://www.figma.com/design/phcCG9Z4PTD1f34iaTjIYS/Website?node-id=0-1&node-type=canvas&t=DXajLMq4yiWMlfbO-0",
    logoSrc: toroLogo.src,
    colorfulLogoSrc: toroColorfulLogo.src,
    demoSrc: toroDemo.src,
  },
];
