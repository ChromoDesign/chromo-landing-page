import appRegistrationSvg from "@material-symbols/svg-400/rounded/app_registration.svg";
import emojiObjectsSvg from "@material-symbols/svg-400/rounded/emoji_objects.svg";
import languageSvg from "@material-symbols/svg-400/rounded/language.svg";
import paletteSvg from "@material-symbols/svg-400/rounded/palette.svg";
import speedSvg from "@material-symbols/svg-400/rounded/speed.svg";
import supportAgentSvg from "@material-symbols/svg-400/rounded/support_agent.svg";

type Img = {
  src: string;
  alt: string;
};

export type Result = {
  title: string;
  description: string;
  icon: Img;
};

export const RESULTS = [
  {
    title: "Tailored web solutions that make an impact.",
    description:
      "We design and build fast, SEO-friendly, and responsive websites to elevate your brand.",
    icon: {
      src: appRegistrationSvg.src,
      alt: "Website Development",
    },
  },
  {
    title: "Your brand on every device",
    description:
      "Custom apps for iOS and Android, built to engage users and drive growth.",
    icon: {
      src: languageSvg.src,
      alt: "Mobile App Development",
    },
  },
  {
    title: "Designs that users love.",
    description:
      "We create intuitive, beautiful interfaces that turn visitors into loyal customers.",
    icon: {
      src: paletteSvg.src,
      alt: "UI/UX Design",
    },
  },
  {
    title: "Always there when you need us",
    description:
      "Continuous updates, bug fixes, and maintenance to keep everything running smoothly.",
    icon: {
      src: supportAgentSvg.src,
      alt: "Ongoing Support",
    },
  },
  {
    title: "Optimized for speed and efficiency",
    description:
      "We fine-tune your site or app for faster loading, better performance, and improved user experience.",
    icon: {
      src: speedSvg.src,
      alt: "Ongoing Support",
    },
  },
  {
    title: "Expert guidance, every step of the way",
    description:
      "From project planning to growth strategies, we help you stay ahead of the competition.",
    icon: {
      src: emojiObjectsSvg.src,
      alt: "Ongoing Support",
    },
  },
] as const satisfies Result[];
