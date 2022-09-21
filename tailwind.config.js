module.exports = {
  content: [
    "/src/pages/**/*.{js,ts,jsx,tsx}",
    "/src/components/**/*.{js,ts,jsx,tsx}",
    "/src/utils/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "base-primary": "#262626",
        "base-secondary": "#3d74ed",
        "base-dark": "#1f2633",
        "base-light": "#ffffff",
      },
      fontFamily: {
        montserrat: "Montserrat",
      },
    },
  },
  plugins: [],
};
