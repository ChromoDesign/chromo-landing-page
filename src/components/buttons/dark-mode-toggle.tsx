import { useEffect, useState } from "react";
import { ToggleSwitch } from "../common/toggle-switch";

type Theme = "light" | "dark";

export const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState<Theme | null>(null);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedTheme = localStorage.getItem("theme") as Theme;
      setIsDarkMode(storedTheme ? storedTheme : "light");
      setIsHydrated(true);
    }
  }, []);

  useEffect(() => {
    if (isHydrated && isDarkMode) {
      const htmlElement = document.documentElement;
      if (isDarkMode === "dark") {
        htmlElement.classList.add("dark");
      } else {
        htmlElement.classList.remove("dark");
      }
    }
  }, [isDarkMode, isHydrated]);

  const toggleTheme = () => {
    setIsDarkMode((prevTheme) => (prevTheme === "light" ? "dark" : "light"));

    if (typeof window !== "undefined") {
      localStorage.setItem("theme", isDarkMode === "light" ? "dark" : "light");
    }
  };

  if (!isHydrated) return null;

  return (
    <ToggleSwitch isChecked={isDarkMode === "dark"} onChange={toggleTheme} />
  );
};
