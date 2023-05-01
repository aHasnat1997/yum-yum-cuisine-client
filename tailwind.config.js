/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [{
      mytheme: {

        "primary": "#9C0F48",

        "secondary": "#470D21",

        "accent": "#D67D3E",

        "neutral": "#1D1627",

        "base-100": "#F9E4D4",

        "info": "#7DB1ED",

        "success": "#27B95F",

        "warning": "#976007",

        "error": "#E44D3F",
      },
    },],
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
}

