/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],

  daisyui: {
    themes: [
      {
        loamy: {
          "primary": "#1D8A99", // Munsell Blue
          "secondary": "#DECDF5", // Thistle (lavender)
          "accent": "#edf4f3", //Mint cream
          "neutral": "#534D56", //Davy's Gray
          "base-100": "#F8F1FF", //Magnolia (pale purple)
          "neutral-content": "#F5F5F5", //White Smoke
          // "accent-2": "#F8F1FF",
          // "loamy-home": "#edf4f3",
          // "loamy-green": "#6c9189",
          // "loamy-red": "#cec0b5",
          // "loamy-grey": "#e8e6e6",
        },
      },
      "light",
      "dark",
      "cupcake",
    ],
    darkTheme: "dark", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
};
