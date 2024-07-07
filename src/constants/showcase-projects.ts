import torqLogo from "@/assets/images/torq-logo.avif";
import toroLogo from "@/assets/images/toro-logo.avif";
import rockUltraSoundLogo from "@/assets/images/rock-ultra-sound-logo.avif";
import villalobosTileLogo from "@/assets/images/villalobos-tile-logo.avif";
import mightyShieldLogo from "@/assets/images/mighty-shield-logo.avif";

type ShowcaseProject = {
  title: string;
  image: {
    src: string;
    alt: string;
  };
};

export const SHOWCASE_PROJECTS = [
  {
    title: "TORQ | Put your project on the map",
    image: {
      src: torqLogo.src,
      alt: "TORQ Logo",
    },
  },
  {
    title: "TORO | Metal words & steel",
    image: {
      src: toroLogo.src,
      alt: "TORO Logo",
    },
  },
  {
    title: "Rock Ultra Sound Medical Diagnosis",
    image: {
      src: rockUltraSoundLogo.src,
      alt: "Rock Ultra Sound Medical Diagnosis Logo",
    },
  },
  {
    title: "Villalobos Tile",
    image: {
      src: villalobosTileLogo.src,
      alt: "Villalobos Tile Logo",
    },
  },
  {
    title: "Mighty Shield Insurance",
    image: {
      src: mightyShieldLogo.src,
      alt: "Mighty Shield Insurance Logo",
    },
  },
] as const satisfies ShowcaseProject[];
