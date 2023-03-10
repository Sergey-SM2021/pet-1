module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "standard-with-typescript"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json"],
  },
  plugins: ["react"],
  rules: {
    "react/react-in-jsx-scope": 0,
    "@typescript-eslint/no-floating-promises": 1,
    "@typescript-eslint/strict-boolean-expressions":0
  },
};
