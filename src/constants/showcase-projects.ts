import mightyShieldLogo from "@/assets/images/works/mighty-shield.webp";
import rockUltraSoundLogo from "@/assets/images/works/rock-ultrasound.webp";
import toroLogo from "@/assets/images/works/toro.webp";
import torqLogo from "@/assets/images/works/torq.webp";
import villalobosTileLogo from "@/assets/images/works/villalobos-tile.webp";

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
