module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      raleway: ["Raleway", "sans-serif"],
    },
    colors: {
      background: "#ffd1dc",
      primary: "#ff85a2", 
      secondary: "#ff527b",
      active: "#ff527b"
    },
  },

  variants: {
    extend: {},
  },
  plugins: [],
};
