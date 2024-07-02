/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "almost-menu-bg-blue": "rgba(12, 89, 219, 1)",
        "almost-menu-gradient-grey":
          "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%)",
        "almost-home-bg-grey": "rgba(239, 244, 250, 1)",
        "almost-menu-text-blue": "rgba(33, 55, 130, 0.6)",
      },
    },
  },
  plugins: [],
};
