/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        "gray-100": "#F2F4F7",
        "gray-300": "#D0D5DD",
        "gray-500": "#667085",
        "gray-700": "#344054",
        "gray-900": "#101828",
        "primary-200": "#939DD4",
        "primary-500": "#3345AC",
        "primary-600": "#2E3EA1",
        "primary-900": "#151D72",
        warning: "#FEC84B",
        grey: "#101828",
      },
    },
  },
  plugins: [],
};
