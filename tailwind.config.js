/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx", "./App.tsx"],
  theme: {
    extend: {
      fontFamily: {
        title: "Roboto_700Bold",
        subtitle: "Baloo2_700Bold",
        alt: "Roboto_400Regular",
      },
    },
  },
  plugins: [],
};
