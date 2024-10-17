const background = {
  white: "#FAFAFA",
  dark: "#010100",
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    fontSize: {
      xs: [".8125rem", { fontSize: 13 }],
      sm: ["1rem", { fontSize: 16 }],
      base: ["1.125rem", { fontSize: 18 }],
      lg: ["2.125rem", { fontWeight: 600, lineHeight: "1.2" }],
      xl: ["3.75rem", { fontWeight: 600, lineHeight: "1.2" }],
      "2xl": ["4.375rem", { fontWeight: 600, lineHeight: "1.2" }],
    },
    extend: {
      colors: {
        background: {
          white: background.white,
          dark: background.dark,
        },
        brand: {
          white: "#ECEDEE",
          gray: "#7C7C7C",
          yellow: "#EBB700",
          "light-yellow": "#EBB700",
          red: "#E3342D",
          "light-red": "#E3342D",
          blue: "#2A4BC0",
          "light-blue": "#0072E3",
          green: "#03A100",
          "light-green": "#00F80A",
          "light-orange": "#FF6B00",
          "light-purple": "#8F00FF",
          "light-cyan": "#90F7FE",
        },
      },
      backgroundOpacity: {
        3: "3%",
      },
      gridTemplateColumns: {
        "list-xs": "repeat(auto-fill, minmax(6.25rem, 1fr))",
        "list-sm": "repeat(auto-fill, minmax(14.75rem, 1fr))",
        "list-md": "repeat(auto-fill, minmax(17.75rem, 1fr))",
        "list-lg": "repeat(auto-fill, minmax(22.75rem, 1fr))",
      },
      boxShadow: {
        "solution-card": "12px 0px 65px -2px rgba(0, 0, 0, 0.1)",
        "inner-solution-card": "10px 0px 30px 2px rgba(0, 0, 0, 0.1)",
      },
      transitionDelay: {
        400: "400ms",
      },
      transitionDuration: {
        1500: "1.5s",
        2000: "2s",
      },
      keyframes: {
        carousel: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        carousel: "carousel 25s linear infinite",
      },
      fontFamily: {
        "plus-jakarta-sans": ["Plus Jakarta Sans", "Geneva", "sans-serif"],
        "jetbrains-mono": ["JetBrains Mono", "monospace"],
        inter: ["Inter", "Arial", "Helvetica", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      backgroundImage: {
        "dot-pattern": `url(/src/assets/images/backgrounds/dot-pattern.svg)`,
        "square-pattern": `url(/src/assets/images/backgrounds/square-pattern.svg)`,
        "tile-pattern": `url(/src/assets/images/backgrounds/tile-pattern.avif), url(/src/assets/images/backgrounds/tile-pattern.png)`,
        "matrix-pattern": `url(/src/assets/images/backgrounds/matrix-pattern.webp)`,
        "radial-light": `radial-gradient(circle at center, rgba(255, 255, 255, 0) 60%, ${background.white} 100%)`,
        "radial-dark": `radial-gradient(circle at center, rgba(0, 0, 0, 0) 60%, ${background.dark} 100%)`,
        "linear-light": `linear-gradient(to bottom, ${background.white} 0%, rgba(255,255,255,0) 20%, rgba(255,255,255,0) 60%, ${background.white} 100%)`,
        "linear-light-full": `linear-gradient(to bottom, ${background.white} 0%, rgba(255,255,255,0) 10%, rgba(255,255,255,0) 90%, ${background.white} 100%)`,
        "linear-dark-full": `linear-gradient(to bottom, ${background.dark} 0%, rgba(255,255,255,0) 10%, rgba(255,255,255,0) 90%, ${background.dark} 100%)`,
        "linear-dark": `linear-gradient(to bottom, ${background.dark} 0%, rgba(0,0,0,0) 20%, rgba(0,0,0,0) 60%, ${background.dark} 100%)`,
        "noise-effect":
          "url(data:image/png;base64,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);",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
