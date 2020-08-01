module.exports = {
  parser: "babel-eslint", // define babel as the parser
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "prettier",
    "plugin:jsx-a11y/recommended",
  ],
  plugins: ["react"],
  rules: {
    "jsx-a11y/rule-name": "warn",
    "jsx-a11y/no-onchange": 0,
  },
  parserOptions: {
    ecmaVersion: 2018, // understands let, const and other features
    sourceType: "module", // understands the use of import and export
    ecmaFeatures: {
      jsx: true, // understands the use of tags inside js files
    },
  },
  env: {
    browser: true, // add browser globals variables like document and window
    es6: true, // add globals like Set
  },
}
