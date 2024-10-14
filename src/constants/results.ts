import appRegistrationSvg from "@material-symbols/svg-500/rounded/app_registration.svg?raw";
import emojiObjectsSvg from "@material-symbols/svg-500/rounded/emoji_objects.svg?raw";
import languageSvg from "@material-symbols/svg-500/rounded/language.svg?raw";
import paletteSvg from "@material-symbols/svg-500/rounded/palette.svg?raw";
import speedSvg from "@material-symbols/svg-500/rounded/speed.svg?raw";
import supportAgentSvg from "@material-symbols/svg-500/rounded/support_agent.svg?raw";

export type Result = {
  title: string;
  description: string;
  icon: string;
};

export const RESULTS = [
  {
    title: "Tailored web solutions that make an impact.",
    description:
      "We design and build fast, SEO-friendly, and responsive websites to elevate your brand.",
    icon: appRegistrationSvg,
  },
  {
    title: "Your brand on every device",
    description:
      "Custom apps for iOS and Android, built to engage users and drive growth.",
    icon: languageSvg,
  },
  {
    title: "Designs that users love.",
    description:
      "We create intuitive, beautiful interfaces that turn visitors into loyal customers.",
    icon: paletteSvg,
  },
  {
    title: "Always there when you need us",
    description:
      "Continuous updates, bug fixes, and maintenance to keep everything running smoothly.",
    icon: supportAgentSvg,
  },
  {
    title: "Optimized for speed and efficiency",
    description:
      "We fine-tune your site or app for faster loading, better performance, and improved user experience.",
    icon: speedSvg,
  },
  {
    title: "Expert guidance, every step of the way",
    description:
      "From project planning to growth strategies, we help you stay ahead of the competition.",
    icon: emojiObjectsSvg,
  },
] as const satisfies Result[];
