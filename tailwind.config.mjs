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
        "radial-light": `radial-gradient(circle at center, rgba(255, 255, 255, 0) 60%, ${background.white} 100%)`,
        "radial-dark": `radial-gradient(circle at center, rgba(0, 0, 0, 0) 60%, ${background.dark} 100%)`,
        "linear-light": `linear-gradient(to bottom, ${background.white} 0%, rgba(255,255,255,0) 20%, rgba(255,255,255,0) 60%, ${background.white} 100%)`,
        "linear-dark": `linear-gradient(to bottom, ${background.dark} 0%, rgba(0,0,0,0) 20%, rgba(0,0,0,0) 60%, ${background.dark} 100%)`,
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
