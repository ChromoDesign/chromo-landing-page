import logo from "@/assets/images/brand/alamo-algorithmicslogo-black.svg?raw";
import { pxToRem } from "@/utils/px-to-rem";
import { Icon } from "../common/icon";

type AlamoLogoProps = {
  height?: number;
};

export const AlamoLogo: React.FC<AlamoLogoProps> = ({ height = 32 }) => {
  return (
    <Icon
      icon={logo}
      className="h-full invert-0 dark:invert"
      style={{ height: pxToRem(height) }}
    />
  );
};
