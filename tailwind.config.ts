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
    screens: {
      sm: "810px",
      md: "1280px", 
      lg: "1440px",
      xl: "1920px",
      "2xl": "2560px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "3rem",
        md: "3rem",
        lg: "6rem",
        xl: "16rem",
      },
    },
    extend: {
      leading: {
        md: "22px",
      },
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
          "500": "var(--blue-500)",
          "600": "var(--blue-600)",
          "800": "var(--blue-800)",
        },
        orange: {
          "400": "var(--orange-400)",
          "500": "var(--orange-500)",
        },
        gray: {
          "50": "var(--gray-50)",
          "100": "var(--gray-100)",
          "400": "var(--gray-400)",
          "500": "var(--gray-500)",
          background: "var(--gray-background)",
        },
      },
      fontSize: {
        xl: "36px",
        md: "24px",
        sm: "16px",
        xs: "14px",
      },
      borderRadius: {
        sm: "10px",
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
