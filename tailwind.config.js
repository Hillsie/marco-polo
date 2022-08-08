/** @type {import('tailwindcss').Config} */
const path = require("path");
// const defaultTheme = require("tailwindcss/defaultTheme");
const fromRoot = (p) => path.join(__dirname, p);

module.exports = {
  mode: process.env.NODE_ENV ? "jit" : undefined,
  content: [fromRoot("./src/**/*.{js,jsx,ts,tsx,md,mdx}")],
  darkMode: "class",
  corePlugins: {
    aspectRatio: false,
  },
  theme: {
    extend: {},
  },
  variantOrder: [
    "first",
    "last",
    "odd",
    "even",
    "visited",
    "checked",
    "empty",
    "read-only",
    "group-hover",
    "group-focus",
    "focus-within",
    "hover",
    "focus",
    "focus-visible",
    "active",
    "disabled",
  ],
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
