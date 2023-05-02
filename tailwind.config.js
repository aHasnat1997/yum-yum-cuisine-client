/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [{
      mytheme: {

        "primary": "#FEFF86",

        "secondary": "#19A7CE",

        "accent": "#9C0F48",

        "neutral": "#146C94",

        "base-100": "#B0DAFF",

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

