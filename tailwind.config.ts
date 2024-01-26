const { fontFamily } = require("tailwindcss/defaultTheme");

import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      letterSpacing: {
        tighter: "-0.07em",
      },
      fontFamily: {
        inter: ["var(--font-inter)", ...fontFamily.sans],
        epilogue: ["var(--font-epilogue)", ...fontFamily.sans],
      },
      colors: {
        white: "var(--white)",
        black: "var(--black)",
        divider: "var(--divider)",
        blue: {
          "200": "var(--blue-200)",
          "600": "var(--blue-600)",
          "800": "var(--blue-800)",
        },
        orange: {
          "400": "var(--orange-400)",
          "500": "var(--orange-500)",
        },
        gray: {
          "100": "var(--gray-100)",
          "500": "var(--gray-500)",
          background: "var(--gray-background)",
        },
      },
      fontSize: {
        "xl": "36px",
        "md": "18px",
        "sm": "16px",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        DEFAULT: "28px",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
