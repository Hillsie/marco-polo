module.exports = {
  plugins: {
    "postcss-import": {},
    "tailwindcss/nesting": "postcss-nesting",
    "postcss-focus-visible": {},
    "postcss-preset-env": {
      features: { "nesting-rules": true },
    },
    autoprefixer: {},
    tailwindcss: {},
    ...(process.env.NODE_ENV === "production" ? { cssnano: {} } : {}),
  },
};
