module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "rgb(1, 104, 1)",
        secondary: "#ecc94b",
        tabs: "#F8F9FB",
        // ...
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
