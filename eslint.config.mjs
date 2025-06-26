import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  {
    files: ["**/*.{ts,tsx}"],
    rules: {
      "@typescript-eslint/no-empty-function": "off",
      "@typescript-eslint/no-non-null-assertion": "off",
      "@typescript-eslint/no-unsafe-argument": "off",
      "@typescript-eslint/no-unnecessary-condition": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unsafe-assignment": "off",
      "@typescript-eslint/no-unsafe-return": "off",
      "@typescript-eslint/no-unsafe-call": "off",
      "@typescript-eslint/no-unsafe-member-access": "off",
      "@typescript-eslint/no-floating-promises": "off",
      "@typescript-eslint/no-misused-promises": "off",
      "@typescript-eslint/unbound-method": "off",
      "@typescript-eslint/consistent-type-imports": ["error"],
      "@typescript-eslint/naming-convention": [
        "error",
        {
          selector: "enumMember",
          format: ["PascalCase", "UPPER_CASE"],
          leadingUnderscore: "forbid",
          trailingUnderscore: "forbid"
        },
        {
          selector: "function",
          format: ["camelCase", "PascalCase"],
          leadingUnderscore: "forbid",
          trailingUnderscore: "forbid"
        }
      ],

      "react/no-unstable-nested-components": "off",
      "react/jsx-sort-props": "off",
      "react/jsx-no-leaked-render": "off",

      "import/no-default-export": "off",
      "import/order": "off",
      "import/no-extraneous-dependencies": "off",
      "import/no-named-as-default": "off",

      "unicorn/filename-case": ["off", { cases: { kebabCase: true } }],

      "no-console": "warn",
      "no-unused-vars": "warn",
      "no-param-reassign": "off",
      "dot-notation": "off",
      "require-await": "off"
    }
  }
];

export default eslintConfig;
