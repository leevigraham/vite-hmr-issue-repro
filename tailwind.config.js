const colors = require("tailwindcss/colors");

module.exports = {
  mode: 'jit',
  purge: [
      './public/index.html',
      './templates/**/*.twig',
  ],
  darkMode: false,
  theme: {
    fontSize: {
      "heading-1": ["40px", "1.25"],
      "heading-2": ["24px", "1.25"],
      "heading-3": ["20px", "1.25"],
      "body-lg": ["20px", "28px"],
      "body-md": ["16px", "24px"],
      "body-sm": ["14px", "20px"],
      "body-xs": ["12px", "16px"],
      "body-xxs": ["10px", "12px"],
    },
    extend: {
      colors: {
        gray: colors.trueGray,
        teal: colors.teal,
      },
      fontFamily: {
        inika: ["Inika", "ui-serif", "serif"],
      },
      outline: {
        "inner-border": ["1px solid rgba(0,0,0,.1)", "-1px"],
      },
      gridTemplateColumns: {
        attributes: "max-content 1fr",
      },
      gridTemplateRows: {
        subgrid: "subgrid",
      },
      aspectRatio: {
        32: "32",
      },
      maxHeight: {
        none: "none",
      },
    },
  },
  // variants: {
  //   extend: {},
  // },
  // plugins: [require("@tailwindcss/aspect-ratio")],
};
