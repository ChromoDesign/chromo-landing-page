import { SECTIONS } from "@/constants/sections";
import { useEffect, useState } from "react";
import { HamburgerButton } from "../buttons/hamburger-button";
import { AlamoLogo } from "../common/alamo-logo";
import { Link } from "../common/link";
import { LinearNav } from "../nav/linear-nav";

const scrollThreshold = 100;
const notScrolledClasses: string =
  "border-brand-gray/35 bg-white dark:bg-background-dark";
const scrolledClasses: string =
  "backdrop-blur-xl bg-white/50 dark:bg-brand-gray/10 border-transparent";

export const Header: React.FC = () => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isMobileNavActive, setIsMobileNavActive] = useState(false);

  const toggleMobileNav = (hardValue?: boolean) => {
    const newValue = hardValue ?? !isMobileNavActive;
    setIsMobileNavActive(newValue);
    document.body.classList.toggle("overflow-hidden", newValue);
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    const onChange = () => {
      if (mediaQuery.matches) toggleMobileNav(false);
    };

    mediaQuery.addEventListener("change", onChange);
    return () => {
      mediaQuery.removeEventListener("change", onChange);
    };
  }, []);

  useEffect(() => {
    const changeHasScrolled = () => {
      const hasScrolled = window.scrollY > scrollThreshold;
      setHasScrolled(hasScrolled);
    };

    const onScroll = () => {
      if (window.scrollY > scrollThreshold * 15) return; // optimization
      changeHasScrolled();
    };

    changeHasScrolled();
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div
      className={`sticky left-0 top-0 z-50 mb-10 border-b-2 border-dashed transition duration-200 ${hasScrolled && !isMobileNavActive ? scrolledClasses : notScrolledClasses}`}
    >
      <header className="relative p-5">
        <div className="container mx-auto flex items-center justify-between gap-5">
          <AlamoLogo />

          <div className="hidden grow lg:block">
            <LinearNav />
          </div>

          <span className="hidden lg:block">
            <Link href={SECTIONS.CONTACT.href}>Let's chat</Link>
          </span>

          <span className="block lg:hidden">
            <HamburgerButton
              isActive={isMobileNavActive}
              toggleSidebar={toggleMobileNav}
            />
          </span>

          <div
            className={`absolute left-0 top-full -z-10 flex w-full flex-col gap-5 border-b-2 border-dashed border-brand-gray/35 bg-white transition duration-500 lg:hidden dark:bg-background-dark ${isMobileNavActive ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}`}
          >
            <LinearNav
              orientation="vertical"
              onClick={() => toggleMobileNav()}
            />
            <Link
              className="mx-4 mb-5"
              href={SECTIONS.CONTACT.href}
              onClick={() => toggleMobileNav()}
            >
              Let's chat
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
};
