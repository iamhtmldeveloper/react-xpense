/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      primary: "Hind Siliguri, sans-serif",
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        lg: "0",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1110px",
    },
    colors: {
      logBg: "#ff7235",
      bgIcon: "rgba(226, 89, 139, 0.05)",
      footerBorder: "rgba(189, 189, 189, 0.2)",
    },

    extend: {
      boxShadow: {
        cloud: "0px 0px 50px rgba(0, 0, 0, 0.04)",
      },
      // border: {
      //   footerBorder: "rgba(189, 189, 189, 0.2)",
      // },
    },
  },
  plugins: [],
};
