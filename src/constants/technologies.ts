import figmaLogo from "@/assets/images/tech-logos/figma-logo.webp";
import flutterLogo from "@/assets/images/tech-logos/flutter-logo.webp";
import jsLogo from "@/assets/images/tech-logos/js-logo.webp";
import laravelLogo from "@/assets/images/tech-logos/laravel-logo.webp";
import nestLogo from "@/assets/images/tech-logos/nest-logo.webp";
import nodeJsLogo from "@/assets/images/tech-logos/nodejs-logo.webp";
import phpLogo from "@/assets/images/tech-logos/php-logo.webp";
import reactLogo from "@/assets/images/tech-logos/react-logo.webp";

export type Technology = {
  icon: {
    src: string;
    alt: string;
  };
};

export const TECHNOLOGIES = [
  {
    icon: {
      src: jsLogo.src,
      alt: "JavaScript Logo",
    },
  },
  {
    icon: {
      src: nestLogo.src,
      alt: "Nest Logo",
    },
  },
  {
    icon: {
      src: reactLogo.src,
      alt: "React Logo",
    },
  },
  {
    icon: {
      src: figmaLogo.src,
      alt: "Figma Logo",
    },
  },
  {
    icon: {
      src: nodeJsLogo.src,
      alt: "Node.js Logo",
    },
  },
  {
    icon: {
      src: flutterLogo.src,
      alt: "Flutter Logo",
    },
  },
  {
    icon: {
      src: laravelLogo.src,
      alt: "Laravel Logo",
    },
  },
  {
    icon: {
      src: phpLogo.src,
      alt: "PHP Logo",
    },
  },
] as const satisfies Technology[];
