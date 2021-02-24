module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: ["plugin:react/recommended", "airbnb", "prettier", "plugin:cypress/recommended"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: "module",
  },
  plugins: ["react", "cypress"],
  rules: {
    "no-shadow": 0,
    "jsx-a11y/label-has-associated-control": [
      "error",
      {
        required: {
          some: ["nesting", "id"],
        },
      },
    ],
    "jsx-a11y/label-has-for": [
      "error",
      {
        required: {
          some: ["nesting", "id"],
        },
      },
    ],
  },
}
