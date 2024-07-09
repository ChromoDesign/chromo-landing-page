import jsLogo from "@/assets/images/js-logo.webp";
import figmaLogo from "@/assets/images/figma-logo.webp";
import flutterLogo from "@/assets/images/flutter-logo.webp";
import laravelLogo from "@/assets/images/laravel-logo.webp";
import nestLogo from "@/assets/images/nest-logo.webp";
import nodeJsLogo from "@/assets/images/nodejs-logo.webp";
import phpLogo from "@/assets/images/php-logo.webp";
import reactLogo from "@/assets/images/react-logo.webp";

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
