module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cool: ["PlusJakartaSans", "sans-serif"],
      },
    },
  },
  variants: {
    scrollbar: ["dark", "rounded"],
  },
  plugins: [
    require('@tailwindcss/forms'),
    require("tailwind-scrollbar"),
  ],
};
