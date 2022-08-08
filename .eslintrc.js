module.exports = {
  parser: "@typescript-eslint/parser",
  // Include "mobx" in plugins array:
  plugins: ["mobx"],
  // Either extend our recommended configuration:
  extends: "plugin:mobx/recommended",
  // ...or specify and customize individual rules:
  rules: {
    // these values are the same as recommended
    "mobx/exhaustive-make-observable": "warn",
    "mobx/unconditional-make-observable": "error",
    "mobx/missing-make-observable": "error",
    "mobx/missing-observer": "warn",
    "mobx/no-anonymous-observer": "warn",
  },
};
