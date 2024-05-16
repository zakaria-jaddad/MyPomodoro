/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        virgil: ["virgil", "robot"],
      },
      boxShadow: {
        "button-shadow": "rgb(215, 215, 215) 0px 6px 0px",
      },
      screens: {
        "2xsm": "350px",
        xsm: "450px",
      },
      container: {
        center: true,
        padding: "0px 20px",
        screens: {
          sm: "600px",
          md: "620px",
          lg: "620px",
          xl: "620px",
          "2xl": "620px",
        },
      },
      colors: {
        transparent: "rgba(255, 255, 255, 0.2)",
        lowTransparent: "rgba(0, 0, 0, 0.4)",

        "main-bg-color": "var(--main-bg-color)",
        "main-text-color": "var(--main-text-color)",
        "second-text-color": "var(--second-text-color)",
        "third-text-color": "var(--third-text-color)",
        "active-button": "var(--active-button)",

        eGray: "#EEEEEE",
        efGray: "#EFEFEF",
        "gray-ccc": "#CCCCCC",
      },
    },
  },
  plugins: [],
};
