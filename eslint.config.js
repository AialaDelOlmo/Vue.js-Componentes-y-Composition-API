import { FlatCompat } from '@eslint/eslintrc';
import vue from 'eslint-plugin-vue';

// Use FlatCompat to handle eslintrc style configs
const compat = new FlatCompat({
  baseDirectory: import.meta.url, // or __dirname if using CommonJS
});

export default [
  ...compat.config({
    files:  ['src/**/*.js', 'src/**/*.vue'],
    languageOptions: {
      globals: {
        node: true,
      },
      ecmaVersion: 2020,
    },
    extends: [
      'eslint:recommended',
      'plugin:vue/vue3-essential',
    ],
    rules: {
      'vue/no-multiple-template-root': 'off',
    },
  }),
];
