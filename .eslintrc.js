module.exports = {
  plugins: [
    "@typescript-eslint",
    "jest",
  ],
  extends: [
    "airbnb-typescript",
    "plugin:@typescript-eslint/recommended",
    "plugin:jest/recommended",
  ],
  env: {
    node: true,
    browser: true,
    jest: true,
  },
  ignorePatterns: [
    "node_modules/",
    "dist/**/*",
  ],
}