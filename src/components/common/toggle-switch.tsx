import MoonIcon from "@/assets/icons/dark-mode.svg?raw";
import SunIcon from "@/assets/icons/light-mode.svg?raw";
import React from "react";
import { Icon } from "./icon";

type ToggleSwitchProps = {
  isChecked: boolean;
  onChange: () => void;
};

export const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  isChecked,
  onChange,
}) => {
  return (
    <label className="relative inline-block cursor-pointer">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={onChange}
        className="sr-only"
      />

      <span className="relative block h-10 w-20 rounded-full border-[1px] border-[#474747] bg-transparent shadow-md transition-all">
        <span
          className={`absolute left-2 top-1/2 -translate-y-1/2 transform transition-opacity duration-300 ${
            isChecked ? "opacity-20" : "opacity-100"
          }`}
        >
          <Icon icon={SunIcon} className="h-6 w-6" />
        </span>

        <span
          className={`absolute right-1.5 top-1/2 -translate-y-1/2 transform transition-opacity duration-300 ${
            isChecked ? "opacity-100" : "opacity-20"
          }`}
        >
          <Icon icon={MoonIcon} className="h-6 w-6" />
        </span>

        <span
          className={`absolute top-1/2 block h-10 w-10 -translate-y-1/2 transform rounded-full border-[1px] border-[#474747] shadow-sm transition-transform duration-300 ${
            isChecked ? "translate-x-10" : "translate-x-0"
          }`}
        />
      </span>
    </label>
  );
};
