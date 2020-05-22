module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 11,
  },
  extends: ['plugin:prettier/recommended', 'eslint:recommended', 'prettier'],
  plugins: ['prettier', 'sort-requires'],
  env: {
    node: true,
    es6: true,
    browser: true,
  },
  rules: {
    'prettier/prettier': 'error',
    'sort-requires/sort-requires': 'error',
  },
  overrides: [
    {
      files: [
        '**/*.spec.js',
        '**/*.spec.ts',
        '**/*.spec.mjs',
        '**/*.spec.cjs',
        '**/__mocks__/**/*.js',
        '**/__mocks__/**/*.ts',
        '**/__mocks__/**/*.cjs',
        '**/__mocks__/**/*.mjs',
      ],
      env: {
        jest: true,
      },
      plugins: ['jest'],
      ...require('eslint-plugin-jest').configs.recommended,
    },
  ],
};
