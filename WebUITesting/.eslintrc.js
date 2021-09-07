module.exports = {
  env: {
    mocha: true,
    es2021: true,
    node: true,
    browser: true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    browser: false,
    expect: false,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    'linebreak-style': 0,
    'max-len': 140,
  },
};
