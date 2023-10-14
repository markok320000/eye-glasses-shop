import type { Config } from "tailwindcss";
const withMT = require("@material-tailwind/react/utils/withMT");

const config: Config = (module.exports = withMT({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        zinc: {
          50: "#F6F6F6",
          100: "#E8E8E8",
          200: "#D9D9D9",
          300: "#CACACA",
          400: "#ACACAC",
          500: "#8D8D8D",
          600: "#6F6F6F",
          700: "#505050",
          800: "#313131",
          900: "#131313",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontSize: {
        "vw-xs": "calc(0.75rem + 1vw)", // Extra small text based on viewport width
        "vw-sm": "calc(1rem + 1vw)", // Small text based on viewport width
        "vw-md": "calc(1.25rem + 1vw)", // Medium text based on viewport width
        "vw-lg": "calc(1.5rem + 1vw)", // Large text based on viewport width
        "vw-xl": "calc(1.75rem + 1vw)", // Extra large text based on viewport width
      },
    },
  },
  plugins: [],
  important: true,
}));
export default config;
