import Faq from "@/assets/icons/faq-white.svg?raw";
import { pxToRem } from "@/utils/px-to-rem";
import { Icon } from "./icon";

type FaqLogoProps = {
  height?: number;
};

export const FaqLogo: React.FC<FaqLogoProps> = ({ height = 32 }) => {
  return (
    <Icon
      icon={Faq}
      className="h-full invert-0 dark:invert"
      style={{ height: pxToRem(height) }}
    />
  );
};
