import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        peach: {
          DEFAULT: "#E7816B",
          rgb: "rgb(231, 129, 107)",
          hsl: "hsl(11, 73%, 66%)",
        },
        black: {
          DEFAULT: "#1D1C1E",
          rgb: "rgb(29, 28, 30)",
          hsl: "hsl(270, 3%, 11%)",
        },
        white: {
          DEFAULT: "#FFFFFF",
          rgb: "rgb(255, 255, 255)",
          hsl: "hsl(0, 0%, 100%)",
        },
        "light-peach": {
          DEFAULT: "#FFAD9B",
          rgb: "rgb(255, 173, 155)",
          hsl: "hsl(11, 100%, 80%)",
        },
        "dark-grey": {
          DEFAULT: "#333136",
          rgb: "rgb(51, 49, 54)",
          hsl: "hsl(264, 5%, 20%)",
        },
        "light-grey": {
          DEFAULT: "#F1F3F5",
          rgb: "rgb(241, 243, 245)",
          hsl: "hsl(210, 17%, 95%)",
        },
      },
      fontFamily: {
        jost: ["var(--font-jost)", "sans-serif"],
      },
      fontSize: {
        h1: ["48px", { lineHeight: "48px", fontWeight: "500" }],
        h2: [
          "40px",
          { lineHeight: "48px", fontWeight: "500", letterSpacing: "0.05em" },
        ],
        h3: [
          "20px",
          { lineHeight: "26px", fontWeight: "500", letterSpacing: "0.3125em" },
        ],
        h4: [
          "14px",
          { lineHeight: "14px", fontWeight: "400", letterSpacing: "0.143em" },
        ],
        h5: [
          "15px",
          { lineHeight: "15px", fontWeight: "500", letterSpacing: "0.067em" },
        ],
        h6: [
          "15px",
          { lineHeight: "15px", fontWeight: "500", letterSpacing: "0.333em" },
        ],
        body: ["16px", { lineHeight: "26px", fontWeight: "400" }],
      },
    },
  },
  plugins: [typography],
} satisfies Config;
