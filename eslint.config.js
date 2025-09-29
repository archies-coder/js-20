// @ts-check
import js from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  js.configs.recommended,
  {
    rules: {
      // Keep linting focused on correctness, not style; Prettier handles style
      "no-console": "off",
      "no-constant-condition": ["error", { checkLoops: false }],
      "no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
    },
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
    languageOptions: {
      sourceType: "module",
      ecmaVersion: "latest",
      parserOptions: { ecmaVersion: "latest" },
      globals: {
        console: "readonly",
        setTimeout: "readonly",
        queueMicrotask: "readonly",
      },
    },
  },
];
