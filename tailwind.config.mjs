/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    fontSize: {
      xs: [
        ".8125rem",
        {
          fontSize: 13,
        },
      ],
      sm: [
        "1rem",
        {
          fontSize: 16,
        },
      ],
      base: [
        "1.125rem",
        {
          fontSize: 18,
        },
      ],
      lg: [
        "2.125rem",
        {
          fontWeight: 500,
        },
      ],
      xl: [
        "3.75rem",
        {
          fontWeight: 500,
          lineHeight: "1.2",
        },
      ],
      "2xl": [
        "4.375rem",
        {
          fontWeight: 500,
          lineHeight: "1.2",
        },
      ],
    },
    extend: {
      colors: {
        brand: {
          background: "#010100",
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
      boxShadow: {
        "solution-card": "12px 0px 65px -2px rgba(0, 0, 0, 0.1)",
        "inner-solution-card": "10px 0px 20px rgba(0, 0, 0, 0.1)",
      },
      animation: {
        "spin-slow": "spin 120s linear infinite",
      },
    },
  },
  plugins: [],
};
