/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    //Se aplicara unicamente en cualquier archivo del directorio (carpeta)de app || components || presentation
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./presentation/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#27285d",
        secondary: {
          DEFAULT: "#f82250",
          100: "#c74a4a",
          200: "#831266",
        },
        tertiary: "#67e09e",
        tertiary: "#ffc800",
      },

      fontFamily: {
        "work-black": ["WorkSans-Black", "sans-serif"],
        "work-light": ["WorkSans-Light", "sans-serif"],
        "work-medium": ["WorkSans-Medium", "sans-serif"],
      },
    },
  },
  plugins: [],
};
