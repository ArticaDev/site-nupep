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
      flexBasis: {
        85: "21.25rem",
      },
      height: {
        25: "6.25rem",
      },
      maxHeight: {
        85: "21.25rem",
      },
      width: {
        25: "6.25rem",
        150: "500px",
      },
      maxWidth: {
        85: "21.25rem",
      },
      gridTemplateColumns:{
        auto: "repeat(auto-fill, minmax(0, 1fr))",
        members: "repeat(auto-fill, minmax(295px, 1fr))"
      }
    },
  },
  plugins: [],
};
module.exports = config;
