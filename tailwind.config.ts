import type { Config } from "tailwindcss";

const colors = require("tailwindcss/colors");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "2rem",
        "2xl": "2rem",
      },
    },
    extend: {
      fontFamily: {
        display: ["termina", "sans-serif"],
        body: ['"neue-haas-grotesk-text"', "sans-serif"],
      },
      backgroundImage: (theme) => ({
        "header-img": "url('/bg.svg')",
      }),
      colors: {
        'main': 'tomato',
        'second': '#47019d',
        'three': '#e00256',
        'black': '#212121',
        'white': '#ffffff',
        'gray': '#808080e2',
        soft: "#f0f0f0",
        brandAlt: "#e4bc3b",
        brand: "#DFB537",
        darker: "#0C0C0D",
        dark: "#2F2E33",
        mid: "#827F8B",
        light: "#D4CFDE",
        lightest: "#FFFFFF",
      }
    },
  },
  plugins: [],
};
export default config;
