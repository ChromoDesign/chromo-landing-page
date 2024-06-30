import brushSvg from "@/assets/icons/brush.svg";
import computerSvg from "@/assets/icons/computer.svg";
import phoneIphoneSvg from "@/assets/icons/phone_iphone.svg";
import psychologySvg from "@/assets/icons/psychology_alt.svg";

export type Solution = {
  title: string;
  description: string;
  color: "red" | "blue" | "green" | "yellow";
  icon: {
    src: string;
    alt: string;
  };
};

export const SOLUTIONS = [
  {
    title: "Website Development",
    description:
      "Create a captivating online presence with our expertly crafted websites. We design and develop responsive, user-friendly sites tailored to your needs.",
    color: "red",
    icon: {
      src: computerSvg.src,
      alt: "Website Development",
    },
  },
  {
    title: "Mobile App Development",
    description:
      "Turn your app ideas into reality. our skilled developers create innovative and intuitive mobile applications for both IOS and Android platforms.",
    color: "yellow",
    icon: {
      src: brushSvg.src,
      alt: "Mobile App Development",
    },
  },
  {
    title: "UI/UX Design",
    description:
      "Enhance user satisfaction with our top UI/UX design services. We focus on creating seamless and visually appealing interfaces for your digital products.",
    color: "blue",
    icon: {
      src: phoneIphoneSvg.src,
      alt: "UI/UX Design",
    },
  },
  {
    title: "Ongoing Support",
    description:
      "We're with you every step of the way. Our team offers continuous maintenance and support, ensuring your digital assets are always up-to-date, and secure.",
    color: "green",
    icon: {
      src: psychologySvg.src,
      alt: "Ongoing Support",
    },
  },
] as const satisfies Solution[];
