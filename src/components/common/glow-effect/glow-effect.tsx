import { useEffect, useRef, useState, type ReactNode } from "react";
import "./glow-effect.css";

type GlowColor =
  | "white"
  | "red"
  | "blue"
  | "green"
  | "yellow"
  | "orange"
  | "purple"
  | "cyan";

type GlowBorderRadius =
  | "none"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "xll"
  | "xlll"
  | "full";

interface GlowEffectProps {
  color?: GlowColor;
  radius?: GlowBorderRadius;
  children?: ReactNode;
}

export const GlowEffect: React.FC<GlowEffectProps> = ({
  color = "white",
  radius = "xl",
  children,
}) => {
  const [active, setActive] = useState<number>(0);
  const glowContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const CONFIG = {
      proximity: 40,
      spread: 80,
      blur: 20,
      gap: 32,
      vertical: false,
      opacity: 0,
    };

    const handleMouseMove = (event: MouseEvent) => {
      if (!glowContainerRef.current) return;

      const containerBounds = glowContainerRef.current.getBoundingClientRect();
      if (
        event?.x > containerBounds.left - CONFIG.proximity &&
        event?.x <
          containerBounds.left + containerBounds.width + CONFIG.proximity &&
        event?.y > containerBounds.top - CONFIG.proximity &&
        event?.y <
          containerBounds.top + containerBounds.height + CONFIG.proximity
      ) {
        setActive(1);
      } else {
        setActive(CONFIG.opacity);
      }

      const CARD_CENTER = [
        containerBounds.left + containerBounds.width * 0.5,
        containerBounds.top + containerBounds.height * 0.5,
      ];

      let ANGLE =
        (Math.atan2(event.y - CARD_CENTER[1], event.x - CARD_CENTER[0]) * 180) /
        Math.PI;
      ANGLE = ANGLE < 0 ? ANGLE + 360 : ANGLE;
      if (glowContainerRef.current) {
        glowContainerRef.current.style.setProperty("--start", `${ANGLE + 90}`);
      }
    };

    document.body.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.body.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const htmlElement = document.documentElement;
    const isDarkMode = htmlElement.classList.contains("dark");

    if (glowContainerRef.current) {
      glowContainerRef.current.classList.toggle("glow-container", isDarkMode);
      glowContainerRef.current.classList.toggle("white-border", !isDarkMode);
    }
  }, []);

  return (
    <div
      ref={glowContainerRef}
      className={`glow-container ${color} ${radius}`}
      style={{ "--active": active } as React.CSSProperties}
    >
      <div className="glows"></div>
      <div className="h-full">{children}</div>
    </div>
  );
};
