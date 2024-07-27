import js from "@eslint/js";
import eslintPluginAstro from "eslint-plugin-astro";
// @ts-expect-error Does not have a type definition yet
import jsxA11y from "eslint-plugin-jsx-a11y";
import tseslint from "typescript-eslint";

export default [
  {
    files: ["**/*.js"],
    rules: js.configs.recommended.rules,
  },

  ...tseslint.configs.recommended,

  ...eslintPluginAstro.configs.recommended,

  {
    files: ["**/*.{js,mjs,cjs,jsx,ts,tsx}"],
    plugins: {
      "jsx-a11y": jsxA11y,
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      "jsx-a11y/alt-text": "error",
    },
  },
];
