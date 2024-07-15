import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
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
      fontFamily: {
        'cat-comic': 'var(--font-cat-comic)',
        'mulish': 'var(--font-mulish)',
        'open-sans': 'var(--font-open-sans)',
        'poppins': 'var(--font-poppins)',
      },
      backgroundImage: {
        'header': "url('/assets/images/asset-landing-bg.svg')",
        'header-mb': "url('/assets/images/landing-bg-mobile.svg')",
        'kite': "url('/assets/images/asset-cat-kite-paper.svg')",
        'clouds': "url('/assets/images/asset-clouds.svg')",
        'wall': "url('/assets/images/wall.svg')",
        'road': "url('/assets/images/road.svg')",
        'lake': "url('/assets/images/lake.svg')",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
