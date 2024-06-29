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
        "1.44rem",
        {
          fontWeight: 500,
        },
      ],
      xl: [
        "1.7281rem",
        {
          fontWeight: 500,
        },
      ],
      "2xl": [
        "2.0737rem",
        {
          fontWeight: 500,
        },
      ],
      "3xl": [
        "2.4881rem",
        {
          fontWeight: 500,
        },
      ],
      "4xl": [
        "2.9863rem",
        {
          fontWeight: 500,
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
          red: "#E3342D",
          blue: "#2A4BC0",
          green: "#03A100",
        },
      },
      animation: {
        "spin-slow": "spin 60s linear infinite",
      },
    },
  },
  plugins: [],
};
