import { Button } from "../ui/button";

type HamburgerButtonProps = {
  toggleSidebar: () => void;
  isActive: boolean;
};

export const HamburgerButton = ({
  isActive,
  toggleSidebar,
}: HamburgerButtonProps) => {
  const rotateStyles = isActive ? "rotate-45 translate-y-1.5" : "";
  const invertedRotateStyles = isActive
    ? "rotate-[-45deg] -translate-y-1.5"
    : "";
  const opacityStyles = isActive ? "opacity-0" : "opacity-100";

  return (
    <Button
      size="icon"
      variant="borderless"
      title="Toggle Menu"
      className="z-20 flex cursor-pointer flex-col items-center justify-center gap-1"
      onClick={toggleSidebar}
    >
      <span
        className={`h-0.5 w-5 rounded-full bg-black transition-transform duration-300 ease-in-out dark:bg-white ${rotateStyles}`}
      ></span>
      <span
        className={`h-0.5 w-5 rounded-full bg-black transition-opacity duration-100 ease-in-out dark:bg-white ${opacityStyles}`}
      ></span>
      <span
        className={`h-0.5 w-5 rounded-full bg-black transition-transform duration-300 ease-in-out dark:bg-white ${invertedRotateStyles}`}
      ></span>
    </Button>
  );
};
