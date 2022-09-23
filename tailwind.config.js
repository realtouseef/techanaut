module.exports = {
  content: [
    "/src/pages/**/*.{js,ts,jsx,tsx}",
    "/src/components/**/*.{js,ts,jsx,tsx}",
    "/src/utils/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary_bg: "#054ada",
        primary_text: "#333333",
        primary_heading: "#054ada",
        text_hover: "#ff6900",
        btn_bg: "#e5ecfb",
        btn_bg_hover: "#054ada",
        btn_text: "#054ada",
        btn_text_hover: "#ffffff",
        nav_btns: "#b4c9f4",
        nav_btns_hover: "#ffffff",
      },
      fontFamily: {
        ibm_reg: "IBM Plex Sans Regular",
        ibm_med: "IBM Plex Sans Medium",
        ahrefs_regular: "Ahrefs Regular",
        ahrefs_bold: "Ahrefs Bold",
        ahrefs_display: "Ahrefs Display",
        ahrefs_con: "Ahrefs Condensed Bold",
      },
    },
  },
  plugins: [],
};
