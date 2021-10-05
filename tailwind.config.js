module.exports = {
  // mode: "jit",
  purge: ["./public/**/*.html", "./src/**/*.{js,jsx}"],
  theme: {
    fontFamily: {
      body: ["Lato"],
    },
    extend: {
      colors: {
        hero: "#564787",
        main: "#9ad4d6",
        button: "#7180ac",
        graybg: "#f2f2f2",
      },
    },
  },
  variants: {},
  plugins: [],
}
