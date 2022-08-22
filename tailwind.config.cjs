const config = {
  content: ["./src/**/*.{html,js,jsx}"],
  safelist: [
    {
      pattern: /bg-(red|green|yellow)-(300)/,
    },
  ],
  theme: {
    extend: {
      colors: {
        blue: "#05ADF2",
      },
      height: {
        85: "21.25rem",
      },
      flexBasis: {
        85: "21.25rem",
      },
    },
  },
  plugins: [],
};
module.exports = config;
